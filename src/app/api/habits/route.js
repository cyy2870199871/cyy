import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    const habits = await prisma.habit.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(habits);
  } catch (error) {
    console.error('Fetch habits error:', error);
    return NextResponse.json({ error: 'Failed to fetch habits' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    if (!data.userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    const newHabit = await prisma.habit.create({
      data: {
        title: data.title,
        icon: data.icon,
        color: data.color,
        points: data.points,
        type: data.type,
        maxTimes: data.maxTimes || 1,
        category: data.category,
        duration: data.duration || 0,
        desc: data.desc,
        userId: data.userId
      }
    });
    return NextResponse.json(newHabit);
  } catch (error) {
    console.error('Create habit error:', error);
    return NextResponse.json({ error: 'Failed to create habit' }, { status: 500 });
  }
}
