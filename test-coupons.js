const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  try {
    const code = 'TEST-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    console.log('Trying to create coupon:', code);
    const result = await prisma.coupon.create({
      data: {
        code,
        days: 31
      }
    });
    console.log('Success:', result);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await prisma.$disconnect();
  }
}

test();
