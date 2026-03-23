import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const familyId = searchParams.get('familyId');

    if (!familyId) {
      return NextResponse.json({ error: 'familyId is required' }, { status: 400 });
    }

    const members = await prisma.user.findMany({
      where: { familyId },
      orderBy: { createdAt: 'asc' }
    });
    return NextResponse.json(members);
  } catch (error) {
    console.error('Fetch members error:', error);
    return NextResponse.json({ error: 'Failed to fetch members' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    if (!data.familyId) {
      return NextResponse.json({ error: 'familyId is required' }, { status: 400 });
    }

    const newMember = await prisma.user.create({
      data: {
        name: data.name,
        avatar: data.avatar,
        role: data.role || 'secondary',
        points: data.points || 0,
        checkInDays: data.checkInDays || 0,
        familyId: data.familyId
      }
    });
    return NextResponse.json(newMember);
  } catch (error) {
    console.error('Create member error:', error);
    return NextResponse.json({ error: 'Failed to create member' }, { status: 500 });
  }
}
