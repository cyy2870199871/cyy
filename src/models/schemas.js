import { z } from 'zod';

// 宠物相关校验
export const petSchema = z.object({
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
  gender: z.string().default('male'),
});

export const updatePetSchema = petSchema.partial().omit({ userId: true, typeId: true });

// 习惯相关校验
export const habitSchema = z.object({
  userId: z.string().min(1, 'userId 不能为空'),
  title: z.string().min(1, '习惯名称不能为空'),
  icon: z.string().optional(),
  color: z.string().optional(),
  points: z.number().int().default(10),
  type: z.enum(['daily', 'daily_multiple']).default('daily'),
  maxTimes: z.number().int().min(1).default(1),
  category: z.string().optional(),
  duration: z.number().int().optional(),
  desc: z.string().optional(),
});

// 记录相关校验
export const habitRecordSchema = z.object({
  userId: z.string().min(1, 'userId 不能为空'),
  habitId: z.string().min(1, 'habitId 不能为空'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, '日期格式必须为 YYYY-MM-DD'),
  pointsChange: z.number().int(),
  timestamp: z.string().or(z.date()).optional(),
});
