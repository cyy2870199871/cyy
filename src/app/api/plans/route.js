import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const date = searchParams.get('date');
    
    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    const where = { userId };
    if (date) {
      where.date = date;
    }

    const plans = await prisma.learningPlan.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(plans);
  } catch (error) {
    console.error('Fetch plans error:', error);
    return NextResponse.json({ error: 'Failed to fetch plans' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Support both single plan and batch add
    if (Array.isArray(data)) {
      const newPlans = await prisma.learningPlan.createMany({
        data: data.map(plan => ({
          title: plan.title,
          date: plan.date,
          timeType: plan.timeType,
          startTime: plan.startTime,
          endTime: plan.endTime,
          duration: plan.duration,
          completed: plan.completed || false,
          category: plan.category,
          reward: plan.reward || 0,
          repeatType: plan.repeatType,
          ebbinghausMode: plan.ebbinghausMode,
          userId: plan.userId
        }))
      });
      return NextResponse.json({ count: newPlans.count });
    } else {
      const newPlan = await prisma.learningPlan.create({
        data: {
          title: data.title,
          date: data.date,
          timeType: data.timeType,
          startTime: data.startTime,
          endTime: data.endTime,
          duration: data.duration,
          completed: data.completed || false,
          category: data.category,
          reward: data.reward || 0,
          repeatType: data.repeatType,
          ebbinghausMode: data.ebbinghausMode,
          userId: data.userId
        }
      });
      return NextResponse.json(newPlan);
    }
  } catch (error) {
    console.error('Create plan(s) error:', error);
    return NextResponse.json({ error: 'Failed to create plan(s)' }, { status: 500 });
  }
}
