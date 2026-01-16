export const runtime = "nodejs";

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export type MateriDetail = {
  id: string;
  value: string;
  imageUrl: string;
  audioUrl: string;
};

export async function getHurufList(): Promise<MateriDetail[]> {
  return prisma.materiDetail.findMany({
    where: { materi: { type: "HURUF" } },
    orderBy: { value: "asc" },
  });
}

export async function getSukuKataList(): Promise<MateriDetail[]> {
  return prisma.materiDetail.findMany({
    where: { materi: { type: "SUKU_KATA" } },
    orderBy: { value: "asc" },
  });
}

export async function getKataList(): Promise<MateriDetail[]> {
  return prisma.materiDetail.findMany({
    where: { materi: { type: "KATA" } },
    orderBy: { value: "asc" },
  });
}

export async function getAllHuruf(): Promise<MateriDetail[]> {
  return prisma.materiDetail.findMany({
    where: { materi: { type: "HURUF" } },
    orderBy: { value: "asc" },
  });
}
