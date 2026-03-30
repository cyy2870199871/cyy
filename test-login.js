const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

async function test() {
  try {
    console.log('Testing login logic...');
    const username = 'admin';
    const password = 'any'; // Doesn't matter for serialization test
    
    const family = await prisma.family.findUnique({
      where: { username },
      include: { members: true }
    });

    if (!family) {
      console.log('Family not found');
      return;
    }

    console.log('Family found:', family.id);
    
    const token = 'mock-token';
    const responseData = {
      family: {
        id: family.id,
        username: family.username,
        isVip: family.isVip,
        vipExpiry: family.vipExpiry.toString()
      },
      members: family.members,
      token
    };

    console.log('Attempting to serialize response data...');
    const json = JSON.stringify(responseData);
    console.log('Serialization successful!');
    // console.log(json);
  } catch (err) {
    console.error('ERROR during test:', err);
  } finally {
    await prisma.$disconnect();
  }
}

test();
