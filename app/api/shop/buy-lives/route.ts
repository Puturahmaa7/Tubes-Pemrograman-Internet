export const runtime = "nodejs";
import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const MAX_LIVES = 5;
const LIFE_PRICE = 100;

export async function POST(request: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { quantity = 1 } = body;

    if (quantity < 1 || quantity > 10) {
      return NextResponse.json(
        { success: false, error: "Quantity harus antara 1-10" },
        { status: 400 }
      );
    }
    const dbUser = await prisma.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (!dbUser) {
      return NextResponse.json(
        { success: false, error: "User tidak ditemukan" },
        { status: 404 }
      );
    }

    const totalToBuy = quantity;
    const totalCost = totalToBuy * LIFE_PRICE;

    const currentLives = dbUser.lives || 0;

    if (currentLives >= MAX_LIVES) {
      return NextResponse.json(
        {
          success: false,
          error: "Nyawa sudah penuh!",
          currentLives,
          maxLives: MAX_LIVES,
        },
        { status: 400 }
      );
    }

    const availableSpace = MAX_LIVES - currentLives;
    if (totalToBuy > availableSpace) {
      return NextResponse.json(
        {
          success: false,
          error: `Hanya bisa menambah ${availableSpace} nyawa lagi (maksimal ${MAX_LIVES})`,
          availableSpace,
          maxLives: MAX_LIVES,
        },
        { status: 400 }
      );
    }

    if (dbUser.points < totalCost) {
      return NextResponse.json(
        {
          success: false,
          error: "Poin tidak cukup",
          requiredPoints: totalCost,
          currentPoints: dbUser.points,
          shortBy: totalCost - dbUser.points,
        },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { clerkUserId: user.id },
      data: {
        points: {
          decrement: totalCost,
        },
        lives: {
          increment: totalToBuy,
        },
      },
    });

    await prisma.jsonData.create({
      data: {
        name: `shop_purchase_lives_${Date.now()}`,
        content: JSON.stringify({
          type: "LIVES_PURCHASE",
          userId: dbUser.clerkUserId,
          quantity: totalToBuy,
          unitPrice: LIFE_PRICE,
          totalCost,
          oldPoints: dbUser.points,
          newPoints: updatedUser.points,
          oldLives: currentLives,
          newLives: updatedUser.lives,
          timestamp: new Date().toISOString(),
        }),
        userId: dbUser.clerkUserId,
      },
    });

    return NextResponse.json({
      success: true,
      message: `Berhasil membeli ${totalToBuy} nyawa!`,
      data: {
        quantity: totalToBuy,
        unitPrice: LIFE_PRICE,
        totalCost,
        oldPoints: dbUser.points,
        newPoints: updatedUser.points,
        oldLives: currentLives,
        newLives: updatedUser.lives,
        availableSpace: MAX_LIVES - updatedUser.lives,
        maxLives: MAX_LIVES,
      },
    });
  } catch (error) {
    console.error("Error buying lives:", error);
    return NextResponse.json(
      { success: false, error: "Gagal membeli nyawa" },
      { status: 500 }
    );
  }
}
