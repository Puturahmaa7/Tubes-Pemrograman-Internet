import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { totalPoints, percentage, livesUsed, quizType } = body;

    console.log("Updating score with data:", {
      totalPoints,
      percentage,
      livesUsed,
      quizType,
    });

    let dbUser = await prisma.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          clerkUserId: user.id,
          name: [user.firstName, user.lastName].filter(Boolean).join(" "),
          imageUrl: user.imageUrl,
          email: user.emailAddresses[0]?.emailAddress ?? "",
          points: 0,
          lives: 3,
        },
      });
    }

    let newLives = dbUser.lives;
    if (livesUsed > 0) {
      newLives = Math.max(0, dbUser.lives - livesUsed);
    }

    const newPoints = dbUser.points + totalPoints;

    console.log("User update:", {
      originalPoints: dbUser.points,
      newPoints,
      originalLives: dbUser.lives,
      newLives,
      livesUsed,
    });

    const updatedUser = await prisma.user.update({
      where: { clerkUserId: user.id },
      data: {
        points: newPoints,
        lives: newLives,
      },
    });

    await prisma.jsonData.create({
      data: {
        name: `quiz_summary_${Date.now()}`,
        content: JSON.stringify({
          quizType,
          totalPoints,
          percentage,
          livesUsed,
          timestamp: new Date().toISOString(),
          originalLives: dbUser.lives,
          newLives: newLives,
          originalPoints: dbUser.points,
          newPoints: newPoints,
        }),
        userId: user.id,
      },
    });

    return NextResponse.json({
      success: true,
      points: newPoints,
      lives: newLives,
      message: "Score updated successfully",
    });
  } catch (error) {
    console.error("Error updating score:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update score",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
