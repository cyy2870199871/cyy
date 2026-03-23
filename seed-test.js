const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function seed() {
  try {
    const hashedPassword = await bcrypt.hash('123456', 10);
    
    // 1. Create Test Family
    const family = await prisma.family.upsert({
      where: { username: 'test_family' },
      update: {},
      create: {
        username: 'test_family',
        password: hashedPassword,
        members: {
          create: [
            { name: '爸爸', role: 'primary', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=papa' },
            { name: '孩子', role: 'secondary', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kid' }
          ]
        }
      }
    });
    console.log('Account Created: username: test_family, password: 123456');

    // 2. Create Coupons (7 Days & Encrypted-style)
    const generateSecureCode = () => {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      let c = '';
      for (let i = 0; i < 16; i++) {
        if (i > 0 && i % 4 === 0) c += '-';
        c += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return c;
    };

    const newCodes = [
      { code: generateSecureCode(), days: 7 },
      { code: generateSecureCode(), days: 7 },
      { code: generateSecureCode(), days: 7 }
    ];

    for (const item of newCodes) {
      await prisma.coupon.upsert({
        where: { code: item.code },
        update: {},
        create: item
      });
    }
    console.log('7-Day Coupons Created:', newCodes.map(c => c.code).join(', '));

  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
