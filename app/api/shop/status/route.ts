import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const MAX_LIVES = 5;
const LIFE_PRICE = 100;

export async function GET() {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (!dbUser) {
      return NextResponse.json(
        {
          success: false,
          error: "User tidak ditemukan",
        },
        { status: 404 }
      );
    }

    const currentLives = dbUser.lives || 0;
    const availableSpace = MAX_LIVES - currentLives;
    const canBuy = availableSpace > 0 && dbUser.points >= LIFE_PRICE;
    const maxBuyable = Math.min(
      availableSpace,
      Math.floor(dbUser.points / LIFE_PRICE)
    );

    return NextResponse.json({
      success: true,
      data: {
        user: {
          points: dbUser.points,
          lives: currentLives,
          maxLives: MAX_LIVES,
        },
        shop: {
          lifePrice: LIFE_PRICE,
          availableSpace,
          canBuy,
          maxBuyable,
        },
      },
    });
  } catch (error) {
    console.error("Error getting shop status:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mendapatkan status" },
      { status: 500 }
    );
  }
}
