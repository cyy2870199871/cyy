import prisma from '@/lib/prisma';

export class HabitService {
  /**
   * 获取用户的所有习惯
   */
  static async getHabitsByUserId(userId) {
    return await prisma.habit.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
  }

  /**
   * 创建习惯记录并同步更新积分（原子事务）
   */
  static async createRecord(userId, habitId, data) {
    return await prisma.$transaction(async (tx) => {
      // 1. 创建记录
      const record = await tx.habitRecord.create({
        data: {
          habitId,
          userId,
          date: data.date,
          pointsChange: data.pointsChange,
          timestamp: data.timestamp ? new Date(data.timestamp) : new Date()
        }
      });

      // 2. 更新用户总积分
      await tx.user.update({
        where: { id: userId },
        data: {
          points: {
            increment: data.pointsChange
          }
        }
      });

      // 3. 联动逻辑：如果当前有活跃宠物，增加少量亲密度（例如完成一个习惯 +2 亲密度）
      const activePet = await tx.pet.findFirst({
        where: { userId, isActive: true }
      });

      if (activePet) {
        // 这里可以根据业务需求调整数值
        const INTIMACY_REWARD = 2;
        await tx.pet.update({
          where: { id: activePet.id },
          data: {
            intimacy: {
              increment: INTIMACY_REWARD
            }
          }
        });
      }

      return record;
    });
  }

  /**
   * 获取记录（带习惯详情）
   */
  static async getRecords(userId, date = null) {
    const where = { userId };
    if (date) where.date = date;

    return await prisma.habitRecord.findMany({
      where,
      orderBy: { timestamp: 'desc' },
      include: {
        habit: true
      }
    });
  }
}
