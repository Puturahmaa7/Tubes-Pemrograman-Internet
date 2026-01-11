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
    const { quizId, selectedAnswer, isCorrect, pointsEarned = 10 } = body;

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

    const updateData: any = {
      points: {
        increment: isCorrect ? pointsEarned : 0,
      },
    };

    if (!isCorrect) {
      updateData.lives = {
        decrement: 1,
      };
    }

    const updatedUser = await prisma.user.update({
      where: { clerkUserId: user.id },
      data: updateData,
    });

    const attempt = await prisma.quizAttempt.create({
      data: {
        userId: dbUser.clerkUserId,
        quizId,
        correct: isCorrect,
        points: isCorrect ? pointsEarned : 0,
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        user: {
          points: updatedUser.points,
          lives: Math.max(0, updatedUser.lives || 0),
          name: updatedUser.name,
        },
        attempt: {
          id: attempt.id,
          correct: attempt.correct,
          points: attempt.points,
        },
      },
    });
  } catch (error) {
    console.error("Error saving quiz attempt:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save quiz attempt" },
      { status: 500 }
    );
  }
}
