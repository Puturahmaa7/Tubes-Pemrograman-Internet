import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

// Jumlah variasi soal per materi detail
const VARIASI_PER_DETAIL = 4;

async function main() {
  await prisma.quizAttempt.deleteMany();
  await prisma.quiz.deleteMany();

  const allMateri = await prisma.materi.findMany({
    include: { details: true },
  });

  for (const materi of allMateri) {
    const details = materi.details;
    if (!details.length) continue;

    await prisma.quiz.deleteMany({ where: { materiId: materi.id } });

    for (const detail of details) {
      const otherDetails = details.filter((d) => d.id !== detail.id);
      const wrongOptionsAll = otherDetails.map((d) => d.value);

      // Buat 4 variasi posisi jawaban benar
      for (
        let posisiBenar = 0;
        posisiBenar < VARIASI_PER_DETAIL;
        posisiBenar++
      ) {
        // Ambil 3 jawaban salah acak
        const wrongOptions = shuffleArray(wrongOptionsAll).slice(0, 3);

        // Buat array jawaban: kosong dulu
        const options = new Array(4);
        let wrongIndex = 0;

        // Masukkan jawaban benar di posisiBenar
        for (let i = 0; i < 4; i++) {
          if (i === posisiBenar) {
            options[i] = detail.value;
          } else {
            options[i] = wrongOptions[wrongIndex++];
          }
        }

        await prisma.quiz.create({
          data: {
            materiId: materi.id,
            question:
              materi.type === "HURUF"
                ? "Dengarkan suara huruf, pilih huruf yang sesuai"
                : materi.type === "SUKU_KATA"
                ? "Dengarkan suara suku kata, pilih suku kata yang sesuai"
                : "Dengarkan suara kata, pilih kata yang sesuai",
            answer: detail.value,
            options,
            point: 10,
          },
        });
      }
    }
  }

  console.log("✅ Seed quiz dengan posisi jawaban benar bervariasi berhasil");
}

// Fungsi shuffle
function shuffleArray<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
