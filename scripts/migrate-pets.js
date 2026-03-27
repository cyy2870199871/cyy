const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function migrate() {
  console.log('开始迁移宠物数据...');
  try {
    // 1. 更新所有用户已解锁的宠物字段 (JSON 字符串)
    const users = await prisma.user.findMany();
    for (const user of users) {
      // 无论旧数据是什么，重置为 ['fire_dragon']，因为这是全新的系统
      await prisma.user.update({
        where: { id: user.id },
        data: { unlockedPets: JSON.stringify(['fire_dragon']) }
      });
    }
    console.log(`已成功更新 ${users.length} 个用户的解锁列表。`);

    // 2. 删除所有旧宠物记录，为新系统腾出空间
    const deleteResult = await prisma.pet.deleteMany({});
    console.log(`已清理 ${deleteResult.count} 条旧宠物数据。`);

    // 3. 为每个用户重新创建一个初始化的炽焰兽
    for (const user of users) {
      await prisma.pet.create({
        data: {
          userId: user.id,
          typeId: 'fire_dragon',
          name: '炽焰兽',
          level: 1,
          intimacy: 0,
          fullness: 80,
          cleanliness: 90,
          mood: 85,
          isActive: true
        }
      });
    }
    console.log('已为每个用户初始化新的“炽焰兽”。');

  } catch (error) {
    console.error('迁移失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

migrate();
