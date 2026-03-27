import prisma from '@/lib/prisma';
import { PET_LEVELS } from '@/constants/rules';

export class PetService {
  /**
   * 计算宠物的实时衰减状态
   */
  static calculateDecay(pet) {
    if (!pet) return null;
    
    // 如果没有上次交互时间，默认为当前时间
    const lastInt = pet.lastInteraction ? new Date(pet.lastInteraction) : new Date();
    const hoursElapsed = (new Date() - lastInt) / (1000 * 60 * 60);
    
    // 衰减系数可后续移入常量
    const FULLNESS_DECAY_RATE = 5;
    const CLEANLINESS_DECAY_RATE = 3;
    const MOOD_DECAY_RATE = 2;

    return {
      ...pet,
      // 数据库中 isActive 可能是 0/1 (Raw SQL 结果)
      isActive: pet.isActive === 1 || pet.isActive === true,
      fullness: Math.max(0, (Number(pet.fullness) || 80) - Math.floor(hoursElapsed * FULLNESS_DECAY_RATE)),
      cleanliness: Math.max(0, (Number(pet.cleanliness) || 90) - Math.floor(hoursElapsed * CLEANLINESS_DECAY_RATE)),
      mood: Math.max(0, (Number(pet.mood) || 85) - Math.floor(hoursElapsed * MOOD_DECAY_RATE)),
    };
  }

  /**
   * 根据亲密度计算等级
   */
  static calculateLevel(intimacy) {
    const levelInfo = [...PET_LEVELS].reverse().find(l => intimacy >= l.threshold);
    return levelInfo ? levelInfo.level : 1;
  }

  /**
   * 获取用户的所有宠物（带状态衰减）
   */
  static async getPetsByUserId(userId) {
    const pets = await prisma.pet.findMany({
      where: { userId }
    });

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { unlockedPets: true }
    });

    return {
      pets: pets.map(this.calculateDecay),
      unlockedPets: user?.unlockedPets ? JSON.parse(user.unlockedPets) : ['fire_dragon']
    };
  }

  /**
   * 切换活跃宠物（原子操作）
   */
  static async switchActivePet(userId, typeId, petData = {}) {
    return await prisma.$transaction(async (tx) => {
      // 1. 将该用户所有宠物设为非活跃
      await tx.pet.updateMany({
        where: { userId },
        data: { isActive: false }
      });

      // 2. 创建或更新目标宠物为活跃
      const now = new Date();
      const pet = await tx.pet.upsert({
        where: {
          userId_typeId: { userId, typeId }
        },
        update: {
          ...petData,
          isActive: true,
          lastInteraction: now
        },
        create: {
          name: petData.name || '我的小宠',
          typeId,
          userId,
          level: petData.level || 1,
          intimacy: petData.intimacy || 0,
          fullness: petData.fullness || 80,
          cleanliness: petData.cleanliness || 90,
          mood: petData.mood || 85,
          isActive: true,
          lastInteraction: now
        }
      });

      // 3. 如果提供了解锁列表，同步更新用户表
      if (petData.unlockedPets) {
        await tx.user.update({
          where: { id: userId },
          data: { unlockedPets: JSON.stringify(petData.unlockedPets) }
        });
      }

      return pet;
    });
  }

  /**
   * 更新宠物属性
   */
  static async updatePet(userId, typeId, data) {
    const now = new Date();
    const updated = await prisma.pet.update({
      where: {
        userId_typeId: { userId, typeId }
      },
      data: {
        ...data,
        lastInteraction: now
      }
    });

    // 如果更新了亲密度，顺便检查并更新等级
    if (data.intimacy !== undefined) {
      const newLevel = this.calculateLevel(data.intimacy);
      if (newLevel !== updated.level) {
        return await prisma.pet.update({
          where: { userId_typeId: { userId, typeId } },
          data: { level: newLevel }
        });
      }
    }

    return updated;
  }
}
