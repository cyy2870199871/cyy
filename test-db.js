const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('--- 开始数据库测试 ---');

  try {
    // 1. 检查连接
    console.log('1. 正在尝试连接数据库...');
    await prisma.$connect();
    console.log('✅ 数据库连接成功');

    // 2. 测试 User 模型
    console.log('2. 测试 User 创建与查询...');
    const testUser = await prisma.user.create({
      data: {
        name: '测试用户',
        role: 'primary',
        points: 100,
      },
    });
    console.log('✅ 成功创建测试用户:', testUser.id);

    const users = await prisma.user.findMany();
    console.log(`✅ 当前共有 ${users.length} 个用户`);

    // 3. 测试 Habit 模型
    console.log('3. 测试 Habit 创建与查询...');
    const testHabit = await prisma.habit.create({
      data: {
        title: '测试习惯',
        icon: '🎯',
        color: '#FF5733',
        points: 10,
        type: 'daily',
        category: 'health',
        userId: testUser.id,
      },
    });
    console.log('✅ 成功创建测试习惯:', testHabit.id);

    const habits = await prisma.habit.findMany({
      where: { userId: testUser.id },
    });
    console.log(`✅ 用户 ${testUser.id} 共有 ${habits.length} 个习惯`);

    // 4. 测试更新
    console.log('4. 测试数据更新...');
    const updatedUser = await prisma.user.update({
      where: { id: testUser.id },
      data: { points: 200 },
    });
    console.log('✅ 用户积分更新成功:', updatedUser.points);

    // 5. 测试删除 (可选，为了保持测试数据，我们先不删除，或者只删除测试习惯)
    /*
    await prisma.habit.delete({ where: { id: testHabit.id } });
    await prisma.user.delete({ where: { id: testUser.id } });
    console.log('✅ 测试数据清理完毕');
    */

  } catch (e) {
    console.error('❌ 测试过程中发生错误:', e);
  } finally {
    await prisma.$disconnect();
    console.log('--- 数据库测试结束 ---');
  }
}

main();
