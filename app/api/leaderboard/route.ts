import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await currentUser();
    const users = await prisma.user.findMany({
      select: {
        id: true,
        clerkUserId: true,
        name: true,
        imageUrl: true,
        points: true,
        lives: true,
        createdAt: true,
      },
      orderBy: {
        points: "desc",
      },
      take: 100,
    });

    const usersWithRank = users.map((user, index) => ({
      ...user,
      rank: index + 1,
    }));

    let currentUserRank = null;
    let currentUserData = null;
    if (user) {
      currentUserData = usersWithRank.find((u) => u.clerkUserId === user.id);
      if (currentUserData) {
        currentUserRank = currentUserData.rank;
      } else {
        const usersAbove = await prisma.user.count({
          where: {
            points: {
              gt: users[users.length - 1]?.points || 0,
            },
          },
        });
        currentUserRank = usersAbove + 1;

        const userFromDb = await prisma.user.findUnique({
          where: { clerkUserId: user.id },
          select: {
            clerkUserId: true,
            name: true,
            imageUrl: true,
            points: true,
            lives: true,
            createdAt: true,
          },
        });

        if (userFromDb) {
          currentUserData = {
            ...userFromDb,
            rank: currentUserRank,
          };
        }
      }
    }

    const competitors: any[] = [];

    if (currentUserRank && currentUserData) {
      const usersAbove = usersWithRank
        .filter((u) => u.rank < currentUserRank)
        .slice(-2);

      const usersBelow = usersWithRank
        .filter((u) => u.rank > currentUserRank)
        .slice(0, 2);

      const allCompetitors = [...usersAbove, currentUserData, ...usersBelow];

      allCompetitors.sort((a, b) => (a.rank || 0) - (b.rank || 0));

      competitors.push(...allCompetitors);
    }

    return NextResponse.json({
      success: true,
      data: {
        leaderboard: usersWithRank.slice(0, 10),
        currentUserRank,
        currentUserData,
        competitors,
        totalUsers: users.length,
      },
    });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch leaderboard" },
      { status: 500 }
    );
  }
}
