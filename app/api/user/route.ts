import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
type QuizAttemptResult = {
  id: string;
  correct: boolean;
  points: number;
  createdAt: Date;
  quiz: {
    question: string;
    point: number;
    materi: {
      type: string;
    } | null;
  } | null;
};

export async function GET() {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

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

    const quizAttempts = (await prisma.quizAttempt.findMany({
      where: { userId: dbUser.clerkUserId },
      take: 10,
      orderBy: { createdAt: "desc" },
      include: {
        quiz: {
          select: {
            question: true,
            point: true,
            materi: {
              select: {
                type: true,
              },
            },
          },
        },
      },
    })) as QuizAttemptResult[];

    return NextResponse.json({
      ok: true,
      user: {
        id: dbUser.id,
        clerkUserId: dbUser.clerkUserId,
        name: dbUser.name,
        email: dbUser.email,
        points: dbUser.points,
        lives: dbUser.lives,
        imageUrl: dbUser.imageUrl,
        quizHistory: quizAttempts.map((attempt: QuizAttemptResult) => ({
          id: attempt.id,
          correct: attempt.correct,
          points: attempt.points,
          createdAt: attempt.createdAt,
          question: attempt.quiz?.question ?? null,
          quizType: attempt.quiz?.materi?.type ?? null,
        })),
      },
    });
  } catch (error) {
    console.error("Error in user API:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
