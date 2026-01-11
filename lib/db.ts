import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
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
    where: { materi: { is: { type: "HURUF" } } },
    orderBy: { value: "asc" },
  });
}

export async function getSukuKataList(): Promise<MateriDetail[]> {
  return prisma.materiDetail.findMany({
    where: { materi: { is: { type: "SUKU_KATA" } } },
    orderBy: { value: "asc" },
  });
}

export async function getKataList(): Promise<MateriDetail[]> {
  return prisma.materiDetail.findMany({
    where: { materi: { is: { type: "KATA" } } },
    orderBy: { value: "asc" },
  });
}

export async function getAllHuruf() {
  return prisma.materiDetail.findMany({
    where: {
      materi: {
        type: "HURUF",
      },
    },
    orderBy: {
      value: "asc",
    },
  });
}
