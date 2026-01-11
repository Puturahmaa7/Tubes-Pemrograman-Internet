import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/clerk";

export async function getUserProgress() {
  const userId = await requireAuth();
  return prisma.userProgress.findUnique({
    where: { userId },
  });
}

export async function createProgressIfNotExist() {
  const userId = await requireAuth();
  return prisma.userProgress.upsert({
    where: { userId },
    update: {},
    create: {
      userId,
      hearts: 5,
      points: 0,
    },
  });
}
