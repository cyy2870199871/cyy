const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const usersToCreate = [
    { name: '爸爸', role: 'secondary', points: 500 },
    { name: '宝贝', role: 'secondary', points: 200 },
    { name: '老师', role: 'secondary', points: 0 }
  ];

  console.log('--- 正在生成测试账号 ---');
  const createdUsers = [];
  for (const userData of usersToCreate) {
    const user = await prisma.user.create({ data: userData });
    createdUsers.push({ id: user.id, name: user.name });
    console.log(`✅ 创建账号: ${user.name} (ID: ${user.id})`);
  }

  console.log('\n--- 正在生成模拟会员卡密 (卡密系统待前端集成) ---');
  const cardSecrets = [
    'VIP-RE-2026-X8B2',
    'VIP-RE-2026-M5P1',
    'VIP-RE-2026-Q9T4',
    'VIP-RE-2026-Z3K7',
    'VIP-RE-2026-V2W9'
  ];
  cardSecrets.forEach(code => console.log(`🎫 卡密: ${code}`));

  console.log('\n--- 数据生成完毕 ---');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
