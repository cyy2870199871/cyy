import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'bj-family-secret';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const family = await prisma.family.findUnique({
      where: { username },
      include: { members: true }
    });

    if (!family) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, family.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign(
      { familyId: family.id, username: family.username },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    return NextResponse.json({
      family: {
        id: family.id,
        username: family.username,
        isVip: family.isVip,
        vipExpiry: family.vipExpiry.toString() // BigInt to string
      },
      members: family.members,
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
