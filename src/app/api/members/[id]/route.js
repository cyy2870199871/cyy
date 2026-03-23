import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const data = await request.json();
    const updatedMember = await prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        avatar: data.avatar,
        points: data.points,
        checkInDays: data.checkInDays,
        role: data.role,
        isVip: data.isVip,
        vipExpiry: data.vipExpiry,
      }
    });
    return NextResponse.json(updatedMember);
  } catch (error) {
    console.error('Update member error:', error);
    return NextResponse.json({ error: 'Failed to update member' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await prisma.user.delete({
      where: { id }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete member error:', error);
    return NextResponse.json({ error: 'Failed to delete member' }, { status: 500 });
  }
}
