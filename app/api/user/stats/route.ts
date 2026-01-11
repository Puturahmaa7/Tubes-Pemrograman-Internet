import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

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
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const totalAttempts = await prisma.quizAttempt.count({
      where: { userId: dbUser.clerkUserId },
    });

    const correctAttempts = await prisma.quizAttempt.count({
      where: {
        userId: dbUser.clerkUserId,
        correct: true,
      },
    });

    const totalPointsEarned = await prisma.quizAttempt.aggregate({
      where: { userId: dbUser.clerkUserId },
      _sum: { points: true },
    });

    const recentAttempts = await prisma.quizAttempt.findMany({
      where: { userId: dbUser.clerkUserId },
      take: 5,
      orderBy: { createdAt: "desc" },
      include: {
        quiz: {
          select: {
            question: true,
            materi: {
              select: {
                type: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      stats: {
        totalAttempts,
        correctAttempts,
        accuracy:
          totalAttempts > 0 ? (correctAttempts / totalAttempts) * 100 : 0,
        totalPointsEarned: totalPointsEarned._sum.points || 0,
        currentPoints: dbUser.points,
        currentLives: dbUser.lives,
        recentAttempts: recentAttempts.map((attempt) => ({
          id: attempt.id,
          correct: attempt.correct,
          points: attempt.points,
          createdAt: attempt.createdAt,
          question: attempt.quiz?.question,
          quizType: attempt.quiz?.materi?.type,
        })),
      },
    });
  } catch (error) {
    console.error("Error fetching user stats:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch user stats" },
      { status: 500 }
    );
  }
}
