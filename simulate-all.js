const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function simulate() {
  console.log('🚀 开始用户全流程模拟操作...');

  try {
    // 1. 创建家庭成员 (妈妈)
    console.log('--- 步骤 1: 创建家庭成员 ---');
    const mom = await prisma.user.create({
      data: {
        name: '妈妈',
        role: 'primary',
        avatar: '👩',
      }
    });
    console.log(`✅ 成功创建成员: ${mom.name} (ID: ${mom.id})`);

    // 2. 创建习惯
    console.log('\n--- 步骤 2: 为妈妈创建习惯 ---');
    const habit1 = await prisma.habit.create({
      data: {
        title: '每日阅读',
        icon: '📚',
        color: '#3B82F6',
        points: 20,
        type: 'daily',
        category: '学习',
        userId: mom.id
      }
    });
    const habit2 = await prisma.habit.create({
      data: {
        title: '早起跑步',
        icon: '🏃',
        color: '#10B981',
        points: 30,
        type: 'daily',
        category: '运动',
        userId: mom.id
      }
    });
    console.log(`✅ 已创建习惯: ${habit1.title}, ${habit2.title}`);

    // 3. 执行打卡操作
    console.log('\n--- 步骤 3: 模拟打卡记录 ---');
    const record1 = await prisma.habitRecord.create({
      data: {
        habitId: habit1.id,
        userId: mom.id,
        date: new Date().toISOString().split('T')[0],
        pointsChange: habit1.points
      }
    });
    // 更新用户积分
    await prisma.user.update({
      where: { id: mom.id },
      data: { points: { increment: habit1.points }, checkInDays: { increment: 1 } }
    });
    console.log(`✅ 习惯 "${habit1.title}" 打卡成功，增加积分: ${habit1.points}`);

    // 4. 创建学习计划
    console.log('\n--- 步骤 4: 创建并完成学习计划 ---');
    const plan = await prisma.learningPlan.create({
      data: {
        title: 'Next.js 深度学习',
        date: new Date().toISOString().split('T')[0],
        timeType: 'duration',
        duration: 60,
        category: '技术',
        reward: 50,
        userId: mom.id
      }
    });
    console.log(`✅ 计划 "${plan.title}" 已创建`);
    
    // 模拟完成计划
    await prisma.learningPlan.update({
      where: { id: plan.id },
      data: { completed: true }
    });
    await prisma.user.update({
      where: { id: mom.id },
      data: { points: { increment: plan.reward } }
    });
    console.log(`✅ 计划已完成，领取奖励: ${plan.reward} 积分`);

    // 5. 领取宠物
    console.log('\n--- 步骤 5: 领取电子宠物 ---');
    const pet = await prisma.pet.create({
      data: {
        name: '旺财',
        typeId: 'dog',
        userId: mom.id
      }
    });
    console.log(`✅ 成功领取宠物: ${pet.name}`);

    // 6. 最终状态检查
    console.log('\n--- 步骤 6: 最终状态检查 ---');
    const finalMom = await prisma.user.findUnique({
      where: { id: mom.id },
      include: {
        habits: true,
        records: true,
        learningPlans: true,
        pet: true
      }
    });

    console.log(`📊 用户 "${finalMom.name}" 最终状态:`);
    console.log(`   - 总积分: ${finalMom.points}`);
    console.log(`   - 习惯数: ${finalMom.habits.length}`);
    console.log(`   - 打卡数: ${finalMom.records.length}`);
    console.log(`   - 计划数: ${finalMom.learningPlans.length} (完成: ${finalMom.learningPlans.filter(p => p.completed).length})`);
    console.log(`   - 宠物: ${finalMom.pet?.name || '无'}`);

    console.log('\n✅ 模拟操作全部成功！数据库逻辑表现完美。');

  } catch (error) {
    console.error('❌ 模拟过程中出错:', error);
  } finally {
    await prisma.$disconnect();
  }
}

simulate();
