import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    const pet = await prisma.pet.findUnique({
      where: { userId }
    });
    
    // Also fetch unlockedPets from User model
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { unlockedPets: true }
    });

    return NextResponse.json({ 
      pet, 
      unlockedPets: user?.unlockedPets ? JSON.parse(user.unlockedPets) : ['teddy'] 
    });
  } catch (error) {
    console.error('Fetch pet error:', error);
    return NextResponse.json({ error: 'Failed to fetch pet' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    if (!data.userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    const newPet = await prisma.pet.create({
      data: {
        name: data.name,
        typeId: data.typeId,
        level: data.level || 1,
        intimacy: data.intimacy || 0,
        fullness: data.fullness || 80,
        cleanliness: data.cleanliness || 90,
        mood: data.mood || 85,
        userId: data.userId
      }
    });

    // Update user's unlockedPets if provided
    if (data.unlockedPets) {
      await prisma.user.update({
        where: { id: data.userId },
        data: { unlockedPets: JSON.stringify(data.unlockedPets) }
      });
    }

    return NextResponse.json(newPet);
  } catch (error) {
    console.error('Create pet error:', error);
    return NextResponse.json({ error: 'Failed to create pet' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const data = await request.json();

    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    const updatedPet = await prisma.pet.update({
      where: { userId },
      data: {
        name: data.name,
        typeId: data.typeId,
        level: data.level,
        intimacy: data.intimacy,
        fullness: data.fullness,
        cleanliness: data.cleanliness,
        mood: data.mood,
        lastInteraction: new Date()
      }
    });

    if (data.unlockedPets) {
      await prisma.user.update({
        where: { id: userId },
        data: { unlockedPets: JSON.stringify(data.unlockedPets) }
      });
    }

    return NextResponse.json(updatedPet);
  } catch (error) {
    console.error('Update pet error:', error);
    return NextResponse.json({ error: 'Failed to update pet' }, { status: 500 });
  }
}
