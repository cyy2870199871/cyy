import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import crypto from 'crypto';

const petSchema = z.object({
  userId: z.string().min(1, 'userId 不能为空'),
  name: z.string().min(1, '宠物名称不能为空'),
  typeId: z.string().min(1),
  level: z.number().int().default(1),
  intimacy: z.number().int().default(0),
  fullness: z.number().int().default(80),
  cleanliness: z.number().int().default(90),
  mood: z.number().int().default(85),
  isActive: z.boolean().default(false),
  unlockedPets: z.array(z.string()).optional(),
});

const updatePetSchema = petSchema.partial().omit({ userId: true, typeId: true });

// Helper to sanitize BigInt to Number for JSON responses
const sanitize = (val) => {
  if (val === null || val === undefined) return val;
  if (typeof val === 'bigint') return Number(val);
  if (Array.isArray(val)) return val.map(sanitize);
  if (typeof val === 'object') {
    const obj = {};
    for (const k in val) obj[k] = sanitize(val[k]);
    return obj;
  }
  return val;
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json({ error: '缺少 userId' }, { status: 400 });
    }

    // Single round-trip to fetch user and their pets
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        pets: true
      }
    });

    if (!user) {
      return NextResponse.json({ pets: [], unlockedPets: ['corgi'] });
    }

    const decayedPets = user.pets.map(pet => {
      const lastInt = pet.lastInteraction ? new Date(pet.lastInteraction) : new Date();
      const hoursElapsed = (new Date() - lastInt) / (1000 * 60 * 60);
      return {
        ...pet,
        isActive: !!pet.isActive,
        fullness: Math.max(0, (pet.fullness || 80) - Math.floor(hoursElapsed * 5)),
        cleanliness: Math.max(0, (pet.cleanliness || 90) - Math.floor(hoursElapsed * 3)),
        mood: Math.max(0, (pet.mood || 85) - Math.floor(hoursElapsed * 2)),
      };
    });
    
    return NextResponse.json({ 
      pets: sanitize(decayedPets), 
      unlockedPets: user.unlockedPets ? JSON.parse(user.unlockedPets) : ['corgi'] 
    });
  } catch (error) {
    console.error('Fetch pets error:', error);
    return NextResponse.json({ error: '获取失败', details: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const validation = petSchema.safeParse(body);
    if (!validation.success) return NextResponse.json({ error: validation.error.errors[0].message }, { status: 400 });

    const data = validation.data;
    const now = new Date();

    // Use a transaction to ensure atomic execution in one trip
    const result = await prisma.$transaction(async (tx) => {
      if (data.isActive) {
        await tx.pet.updateMany({
          where: { userId: data.userId },
          data: { isActive: false }
        });
      }

      const randomId = 'p-' + crypto.randomBytes(4).toString('hex');
      
      const pet = await tx.pet.upsert({
        where: { 
          userId_typeId: { userId: data.userId, typeId: data.typeId } 
        },
        update: {
          name: data.name,
          level: data.level,
          intimacy: data.intimacy,
          fullness: data.fullness,
          cleanliness: data.cleanliness,
          mood: data.mood,
          isActive: data.isActive,
          lastInteraction: now
        },
        create: {
          id: randomId,
          name: data.name,
          typeId: data.typeId,
          level: data.level,
          intimacy: data.intimacy,
          fullness: data.fullness,
          cleanliness: data.cleanliness,
          mood: data.mood,
          isActive: data.isActive,
          userId: data.userId,
          lastInteraction: now
        }
      });

      if (data.unlockedPets) {
        await tx.user.update({
          where: { id: data.userId },
          data: { unlockedPets: JSON.stringify(data.unlockedPets) }
        });
      }

      return pet;
    });

    return NextResponse.json(sanitize(result));

  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ error: '操作失败', details: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const typeId = searchParams.get('typeId');
    const body = await request.json();

    if (!userId || !typeId) return NextResponse.json({ error: '缺少参数' }, { status: 400 });
    const now = new Date();
    
    const result = await prisma.$transaction(async (tx) => {
      const pet = await tx.pet.update({
        where: { userId_typeId: { userId, typeId } },
        data: {
          name: body.name,
          level: body.level,
          intimacy: body.intimacy,
          fullness: body.fullness,
          cleanliness: body.cleanliness,
          mood: body.mood,
          lastInteraction: now
        }
      });

      if (body.unlockedPets) {
        await tx.user.update({
          where: { id: userId },
          data: { unlockedPets: JSON.stringify(body.unlockedPets) }
        });
      }
      return pet;
    });

    return NextResponse.json(sanitize(result));
  } catch (error) {
    console.error('PUT Error:', error);
    return NextResponse.json({ error: '更新失败', details: error.message }, { status: 500 });
  }
}
