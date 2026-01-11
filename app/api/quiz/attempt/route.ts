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
    const { quizId, selectedAnswer, isCorrect, pointsEarned } = body;

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

    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        materi: true,
      },
    });

    const attempt = await prisma.quizAttempt.create({
      data: {
        userId: dbUser.clerkUserId,
        quizId: quizId,
        correct: isCorrect,
        points: pointsEarned,
      },
    });

    if (isCorrect) {
      await prisma.user.update({
        where: { clerkUserId: user.id },
        data: {
          points: {
            increment: pointsEarned,
          },
        },
      });
    }

    return NextResponse.json({
      success: true,
      attempt: {
        id: attempt.id,
        correct: attempt.correct,
        points: attempt.points,
        createdAt: attempt.createdAt,
        quizType: quiz?.materi?.type,
      },
      message: "Quiz attempt saved successfully",
    });
  } catch (error) {
    console.error("Error saving quiz attempt:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save quiz attempt" },
      { status: 500 }
    );
  }
}
