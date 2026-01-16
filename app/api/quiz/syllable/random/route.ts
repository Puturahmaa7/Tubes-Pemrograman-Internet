import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

type Quiz = {
  id: string;
  question: string;
  answer: string;
  options: string[];
  point: number | null;
};

type MateriDetail = {
  value: string;
  imageUrl: string | null;
  audioUrl: string | null;
};

export async function GET() {
  try {
    const materiSukuKata = (await prisma.materi.findFirst({
      where: { type: "SUKU_KATA" },
      include: {
        details: {
          select: {
            value: true,
            imageUrl: true,
            audioUrl: true,
          },
        },
        quizzes: {
          select: {
            id: true,
            question: true,
            answer: true,
            options: true,
            point: true,
          },
        },
      },
    })) as {
      id: string;
      details: MateriDetail[];
      quizzes: Quiz[];
    } | null;

    if (!materiSukuKata) {
      return NextResponse.json(
        { success: false, error: "Materi SUKU_KATA tidak ditemukan" },
        { status: 404 }
      );
    }

    const allQuizzes: Quiz[] = materiSukuKata.quizzes as Quiz[];

    if (allQuizzes.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Tidak ada quiz suku kata tersedia",
          data: [],
        },
        { status: 404 }
      );
    }

    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const shuffledQuizzes = shuffleArray<Quiz>(allQuizzes);

    const selectedQuizzes: Quiz[] = [];
    const usedAnswers = new Set<string>();

    for (const quiz of shuffledQuizzes) {
      if (selectedQuizzes.length >= 7) break;

      if (!usedAnswers.has(quiz.answer)) {
        selectedQuizzes.push(quiz);
        usedAnswers.add(quiz.answer);
      }
    }

    if (selectedQuizzes.length < 7) {
      for (const quiz of shuffledQuizzes) {
        if (selectedQuizzes.length >= 7) break;

        if (!selectedQuizzes.some((q) => q.id === quiz.id)) {
          selectedQuizzes.push(quiz);
        }
      }
    }

    const detailMap = new Map<string, MateriDetail>();

    materiSukuKata.details.forEach((detail: MateriDetail) => {
      detailMap.set(detail.value, detail);
    });

    const formattedQuizzes = selectedQuizzes.map((quiz) => {
      const answerDetail = detailMap.get(quiz.answer);

      const optionDetails = quiz.options.map((option) => {
        const detail = detailMap.get(option);
        return {
          value: option,
          imageUrl: detail?.imageUrl ?? null,
          audioUrl: detail?.audioUrl ?? null,
        };
      });

      return {
        id: quiz.id,
        question: quiz.question,
        answer: quiz.answer,
        options: shuffleArray([...quiz.options]),
        point: quiz.point ?? 10,
        materiId: materiSukuKata.id,
        answerImage: answerDetail?.imageUrl ?? null,
        answerAudio: answerDetail?.audioUrl ?? null,
        optionDetails,
        hasAnswerImage: !!answerDetail?.imageUrl,
        hasAnswerAudio: !!answerDetail?.audioUrl,
        hasOptionsMedia: optionDetails.some((d) => d.imageUrl || d.audioUrl),
      };
    });

    return NextResponse.json({
      success: true,
      data: formattedQuizzes,
      count: formattedQuizzes.length,
      message: "Quiz suku kata berhasil diambil",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch suku kata quizzes",
        message: error instanceof Error ? error.message : "Unknown error",
        data: [],
      },
      { status: 500 }
    );
  }
}
