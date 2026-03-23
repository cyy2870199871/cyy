import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Missing username or password' }, { status: 400 });
    }

    const existingFamily = await prisma.family.findUnique({
      where: { username }
    });

    if (existingFamily) {
      return NextResponse.json({ error: 'Username already taken' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const family = await prisma.family.create({
      data: {
        username,
        password: hashedPassword,
        members: {
          create: [
            { name: '管理员', role: 'primary' }
          ]
        }
      },
      include: {
        members: true
      }
    });

    return NextResponse.json({ 
      id: family.id, 
      username: family.username,
      members: family.members
    });
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json({ error: 'Failed to register' }, { status: 500 });
  }
}
