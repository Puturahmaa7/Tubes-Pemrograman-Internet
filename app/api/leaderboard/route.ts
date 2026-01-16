export const runtime = "nodejs";

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
      orderBy: { points: "desc" },
      take: 100,
    });

    const usersWithRank = users.map((u, i) => ({
      ...u,
      rank: i + 1,
    }));

    let currentUserRank: number | null = null;
    let currentUserData = null;

    if (user) {
      currentUserData = usersWithRank.find((u) => u.clerkUserId === user.id);

      if (currentUserData) {
        currentUserRank = currentUserData.rank;
      } else {
        const usersAbove = await prisma.user.count({
          where: {
            points: {
              gt: users[users.length - 1]?.points ?? 0,
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

    const competitors =
      currentUserRank && currentUserData
        ? [
            ...usersWithRank.filter((u) => u.rank < currentUserRank).slice(-2),
            currentUserData,
            ...usersWithRank
              .filter((u) => u.rank > currentUserRank)
              .slice(0, 2),
          ].sort((a, b) => a.rank - b.rank)
        : [];

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
