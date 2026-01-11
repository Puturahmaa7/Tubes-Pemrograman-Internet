"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Quiz, ApiResponse, OptionDetail } from "@/app/types/quiz";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SKIP_ANSWER = "__SKIP__";

function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50 p-5">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
        </div>
      </div>
      <p className="mt-6 text-xl font-bold text-blue-700">
        Memuat soal quiz...
      </p>
      <p className="mt-2 text-gray-500 text-sm">
        Menyiapkan pertanyaan dan media
      </p>
    </div>
  );
}

function ErrorScreen({
  error,
  onRetry,
}: {
  error: string;
  onRetry: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-50 to-pink-50 p-5">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Terjadi Kesalahan
        </h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <button
          onClick={onRetry}
          className="w-full py-3 bg-blue-500 text-white font-bold rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}

function NoDataScreen({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-blue-50 p-5">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
        <div className="text-6xl mb-4">📝</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Tidak Ada Soal
        </h2>
        <p className="text-gray-600 mb-6">
          Belum ada soal quiz yang tersedia untuk materi ini.
        </p>
        <button
          onClick={onRetry}
          className="w-full py-3 bg-green-500 text-white font-bold rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

function NoLivesScreen({
  onGoToShop,
  onClose,
}: {
  onGoToShop: () => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center animate-fade-in">
        <div className="text-7xl mb-4 animate-pulse">💔</div>

        <h2 className="text-2xl font-bold text-gray-800 mb-3">Nyawa Habis!</h2>

        <div className="bg-red-50 rounded-2xl p-4 mb-6">
          <p className="text-gray-700 text-base">
            Kamu kehabisan nyawa untuk kuis.
            <span className="block font-semibold text-red-600 mt-1">
              Beli nyawa di toko untuk melanjutkan kuis!
            </span>
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onGoToShop}
            className="w-full py-4 bg-red-500 text-white font-bold rounded-2xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span className="text-xl">🛒</span>
            <span>Beli Nyawa di Toko</span>
          </button>

          <button
            onClick={onClose}
            className="w-full py-3 border-2 border-blue-500 bg-transparent text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-200"
          >
            Kembali ke Menu Kuis
          </button>
        </div>
      </div>
    </div>
  );
}

function QuizCompletedScreen({
  score,
  quizzes,
  onRestart,
  onFinish,
  percentage,
  livesUsed,
  userLives,
  userTotalPoints,
}: {
  score: number;
  quizzes: any[];
  onRestart: () => void;
  onFinish: () => void;
  percentage: number;
  livesUsed: number;
  userLives: number | null;
  userTotalPoints: number;
}) {
  const totalPossibleScore = quizzes.reduce(
    (acc, quiz) => acc + (quiz.point || 10),
    0
  );

  const jumlahBenar = Math.round(score / 10);
  const jumlahSalah = quizzes.length - jumlahBenar;
  const newTotalPoints = userTotalPoints;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">
            Hasil Quiz Suku Kata
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 text-center border border-blue-200">
          <div className="text-5xl font-bold text-blue-600 mb-2">
            {score} poin
          </div>
          <div className="text-gray-600 text-sm mb-3">
            dari {totalPossibleScore} poin ({percentage.toFixed(1)}%)
          </div>
          <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full">
            Total poin Anda: {newTotalPoints}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-1">
              ✅ {jumlahBenar}
            </div>
            <div className="text-sm text-gray-600">Benar</div>
          </div>
          <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-200">
            <div className="text-3xl font-bold text-red-600 mb-1">
              ❌ {jumlahSalah}
            </div>
            <div className="text-sm text-gray-600">Salah</div>
          </div>
        </div>
        <div
          className={`rounded-2xl p-5 mb-6 text-center border ${
            livesUsed > 0
              ? "bg-orange-50 border-orange-200"
              : "bg-green-50 border-green-200"
          }`}
        >
          <div
            className={`text-lg font-bold mb-2 ${
              livesUsed > 0 ? "text-orange-600" : "text-green-600"
            }`}
          >
            {livesUsed > 0 ? "⚠️ Nyawa Berkurang" : "✅ Nyawa Aman"}
          </div>
          <div className="text-gray-700 text-sm">
            {livesUsed > 0
              ? `Skor di bawah 70%. Nyawa berkurang ${livesUsed}`
              : `Skor di atas 70%. Nyawa tetap aman!`}
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="text-lg">❤️</span>
            <span className="font-bold text-gray-800">
              Nyawa tersisa: {userLives}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onRestart}
            className="py-3 bg-green-500 text-white font-bold rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Ulang Kuis
          </button>
          <button
            onClick={onFinish}
            className="py-3 bg-blue-500 text-white font-bold rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RandomSyllableQuizPage() {
  const router = useRouter();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);

  const [userTotalPoints, setUserTotalPoints] = useState<number>(0);
  const [userLives, setUserLives] = useState<number | null>(null);
  const [currentQuizPoints, setCurrentQuizPoints] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isUpdatingScore, setIsUpdatingScore] = useState(false);

  const [showNoLivesPopup, setShowNoLivesPopup] = useState<boolean>(false);
  const [hasCheckedLives, setHasCheckedLives] = useState<boolean>(false);

  const audioRefs = useRef<Record<string, HTMLAudioElement>>({});
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const correctAudioRef = useRef<HTMLAudioElement | null>(null);
  const wrongAudioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [playingOption, setPlayingOption] = useState<string | null>(null);
  const [isPlayingFeedback, setIsPlayingFeedback] = useState(false);

  const resetAudioState = () => {
    try {
      Object.values(audioRefs.current).forEach((audio) => {
        audio?.pause();
        audio && (audio.currentTime = 0);
      });

      currentAudioRef.current?.pause();
      correctAudioRef.current?.pause();
      wrongAudioRef.current?.pause();

      audioRefs.current = {};
      currentAudioRef.current = null;
      correctAudioRef.current = null;
      wrongAudioRef.current = null;

      setIsPlaying(false);
      setPlayingOption(null);
      setIsPlayingFeedback(false);
      setAudioError(null);
    } catch (error) {
      console.error("Error in resetAudioState:", error);
    }
  };

  const diSoalTerakhir = currentIndex === quizzes.length - 1;
  const jumlahTerjawab = answers.filter((a) => a !== null).length;

  // PERUBAHAN: Fetch untuk suku kata
  const fetchRandomQuizzes = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/quiz/suku-kata/random", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: ApiResponse = await response.json();

      if (result.success && result.data && result.data.length > 0) {
        setQuizzes(result.data);
        setAnswers(Array(result.data.length).fill(null));
        setCurrentQuizPoints(0);
      } else {
        setError(result.error || result.message || "Tidak ada soal tersedia");
      }
    } catch (error) {
      console.error("Error fetching quizzes:", error);
      setError(error instanceof Error ? error.message : "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/user/profile");
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setUserTotalPoints(result.user.points);
          setUserLives(result.user.lives);
          return result.user;
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const playLetterAudio = (
    syllable: string,
    audioUrl: string | null
  ): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!audioUrl) {
        reject(new Error(`Audio tidak tersedia untuk suku kata ${syllable}`));
        return;
      }

      try {
        Object.values(audioRefs.current).forEach((audio) => {
          if (audio) {
            audio.pause();
            audio.currentTime = 0;
          }
        });

        const audio = new Audio(audioUrl);

        audio.onplay = () => {
          setIsPlaying(true);
          setPlayingOption(syllable);
        };

        audio.onended = () => {
          setIsPlaying(false);
          setPlayingOption(null);
          resolve();
        };

        audio.onerror = () => {
          setIsPlaying(false);
          setPlayingOption(null);
          reject(new Error(`Gagal memutar audio untuk suku kata ${syllable}`));
        };

        audio.play().catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  };

  const playCorrectFeedbackAudio = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      try {
        setIsPlayingFeedback(true);

        if (correctAudioRef.current) {
          correctAudioRef.current.pause();
          correctAudioRef.current.currentTime = 0;
        }

        const audio = new Audio("/audio/correct.mp3");
        correctAudioRef.current = audio;

        audio.onended = () => {
          setIsPlayingFeedback(false);
          resolve();
        };

        audio.onerror = () => {
          setIsPlayingFeedback(false);
          reject(new Error("Gagal memutar audio feedback benar"));
        };

        audio.play().catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  };

  const playWrongFeedbackAudio = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      try {
        setIsPlayingFeedback(true);

        if (wrongAudioRef.current) {
          wrongAudioRef.current.pause();
          wrongAudioRef.current.currentTime = 0;
        }

        const audio = new Audio("/audio/wrong.mp3");
        wrongAudioRef.current = audio;

        audio.onended = () => {
          setIsPlayingFeedback(false);
          resolve();
        };

        audio.onerror = () => {
          setIsPlayingFeedback(false);
          reject(new Error("Gagal memutar audio feedback salah"));
        };

        audio.play().catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  };

  const playAnswerAudio = () => {
    const currentQuiz = quizzes[currentIndex];
    if (!currentQuiz.answerAudio) {
      setAudioError("Audio tidak tersedia untuk soal ini");
      return;
    }

    try {
      Object.values(audioRefs.current).forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });

      const audio = new Audio(currentQuiz.answerAudio);
      currentAudioRef.current = audio;

      audio.onplay = () => {
        setIsPlaying(true);
        setPlayingOption(null);
      };
      audio.onpause = () => setIsPlaying(false);
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => {
        setAudioError("Gagal memutar audio");
        setIsPlaying(false);
      };

      audio.play().catch((err) => {
        console.error("Audio play error:", err);
        setAudioError("Tidak dapat memutar audio");
      });
    } catch (error) {
      console.error("Audio error:", error);
      setAudioError("Terjadi kesalahan saat memutar audio");
    }
  };

  const pilihJawaban = async (option: string) => {
    const currentQuiz = quizzes[currentIndex];
    if (answers[currentIndex] || isPlayingFeedback) return;

    const newAnswers = [...answers];
    newAnswers[currentIndex] = option;
    setAnswers(newAnswers);

    const pointsEarned = currentQuiz.point || 10;
    const pointsPenalty = 10;

    const optionDetail = currentQuiz.optionDetails.find(
      (detail: OptionDetail) => detail.value === option
    );

    if (option === currentQuiz.answer) {
      if (optionDetail?.audioUrl) {
        try {
          await playLetterAudio(option, optionDetail.audioUrl);
        } catch (error) {
          console.error("Error playing syllable audio:", error);
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 300));

      try {
        await playCorrectFeedbackAudio();
      } catch (error) {
        console.error("Error playing correct feedback:", error);
      }

      setCurrentQuizPoints((prev) => prev + pointsEarned);
    } else {
      if (optionDetail?.audioUrl) {
        try {
          await playLetterAudio(option, optionDetail.audioUrl);
        } catch (error) {
          console.error("Error playing syllable audio:", error);
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 300));

      try {
        await playWrongFeedbackAudio();
      } catch (error) {
        console.error("Error playing wrong feedback:", error);
      }

      setCurrentQuizPoints((prev) => Math.max(0, prev - pointsPenalty));
    }
  };

  const nextSoal = () => {
    if (!answers[currentIndex]) {
      const copy = [...answers];
      copy[currentIndex] = SKIP_ANSWER;
      setAnswers(copy);
    }

    setCurrentIndex((i) => i + 1);
    resetAudioState();
  };

  const prevSoal = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      resetAudioState();
    }
  };

  const calculateTotalPoints = useCallback(() => {
    return Math.max(0, currentQuizPoints);
  }, [currentQuizPoints]);

  // PERUBAHAN: quizType menjadi "SYLLABLE"
  const updateUserScore = async () => {
    const totalPoints = calculateTotalPoints();
    const percentage = (totalPoints / (quizzes.length * 10)) * 100;
    const livesUsed = percentage < 70 ? 1 : 0;

    console.log("Updating score:", {
      totalPoints,
      percentage,
      livesUsed,
      quizType: "SYLLABLE",
    });

    setIsUpdatingScore(true);
    try {
      const response = await fetch("/api/user/update-score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalPoints,
          percentage,
          livesUsed,
          quizType: "SYLLABLE",
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal mengupdate skor");
      }

      const result = await response.json();

      if (result.success) {
        setUserTotalPoints(result.points);
        setUserLives(result.lives);

        window.dispatchEvent(
          new CustomEvent("userDataUpdated", {
            detail: {
              points: result.points,
              lives: result.lives,
              source: "quiz_completed",
            },
          })
        );

        console.log("Score updated and event dispatched");
        return result;
      } else {
        throw new Error(result.error || "Gagal mengupdate skor");
      }
    } catch (error) {
      console.error("Error updating user score:", error);
      alert("Gagal menyimpan skor. Silakan coba lagi.");
      return null;
    } finally {
      setIsUpdatingScore(false);
    }
  };

  const selesaiKuis = async () => {
    const result = await updateUserScore();
    if (result) {
      setQuizCompleted(true);

      if (result.lives === 0) {
        setTimeout(() => {
          setShowNoLivesPopup(true);
        }, 1000);
      }
    }
  };

  const ulangKuis = () => {
    setCurrentIndex(0);
    setAnswers(Array(quizzes.length).fill(null));
    setCurrentQuizPoints(0);
    setQuizCompleted(false);
    resetAudioState();
    fetchRandomQuizzes();
  };

  const goToShop = () => {
    router.push("/shop");
  };

  const goBackToMenu = () => {
    router.push("/quiz");
  };

  const closeNoLivesPopup = () => {
    setShowNoLivesPopup(false);
    goBackToMenu();
  };

  useEffect(() => {
    fetchRandomQuizzes();
    fetchUserData();

    return () => {
      resetAudioState();
    };
  }, []);

  useEffect(() => {
    if (userLives !== null && userLives <= 0 && !hasCheckedLives) {
      setShowNoLivesPopup(true);
    }
  }, [userLives, hasCheckedLives]);

  useEffect(() => {
    if (userLives === 0 && !hasCheckedLives) {
      setShowNoLivesPopup(true);
    }
  }, [userLives, hasCheckedLives]);

  useEffect(() => {
    return () => {
      resetAudioState();
    };
  }, [currentIndex]);

  if (showNoLivesPopup) {
    return <NoLivesScreen onGoToShop={goToShop} onClose={closeNoLivesPopup} />;
  }

  if (userLives !== null && userLives <= 0 && showNoLivesPopup) {
    return <NoLivesScreen onGoToShop={goToShop} onClose={closeNoLivesPopup} />;
  }

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} onRetry={ulangKuis} />;
  }

  if (quizzes.length === 0) {
    return <NoDataScreen onRetry={ulangKuis} />;
  }

  if (quizCompleted) {
    const totalPoints = calculateTotalPoints();
    const percentage = (totalPoints / (quizzes.length * 10)) * 100;
    const livesUsed = percentage < 70 ? 1 : 0;

    return (
      <>
        <QuizCompletedScreen
          score={totalPoints}
          quizzes={quizzes}
          onRestart={ulangKuis}
          onFinish={goBackToMenu}
          percentage={percentage}
          livesUsed={livesUsed}
          userLives={userLives ?? 0}
          userTotalPoints={userTotalPoints}
        />
        {userLives === 0 && (
          <NoLivesScreen onGoToShop={goToShop} onClose={closeNoLivesPopup} />
        )}
      </>
    );
  }

  if (userLives === 0) {
    setShowNoLivesPopup(true);
    return <LoadingScreen />;
  }

  const currentQuiz = quizzes[currentIndex];
  const jawaban = answers[currentIndex];
  const totalQuestions = quizzes.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg">
            <span className="font-bold">
              Soal {currentIndex + 1} dari {totalQuestions}
            </span>
          </div>

          <div className="flex gap-4">
            <div
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                (userLives ?? 0) <= 1
                  ? "bg-red-100 text-red-700"
                  : "bg-pink-100 text-pink-700"
              }`}
            >
              <span>❤️</span>
              <span className="font-bold">{userLives ?? "-"}</span>
              {(userLives ?? 0) <= 1 && (
                <span className="text-sm ml-1">Kritis!</span>
              )}
            </div>

            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg flex items-center gap-2">
              <span>⭐</span>
              <span className="font-bold">
                {currentQuizPoints >= 0 ? "+" : ""}
                {currentQuizPoints}
              </span>
              <span className="text-sm">(Total: {userTotalPoints})</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-8 border border-blue-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              {currentQuiz.question}
            </h2>

            {currentQuiz.hasAnswerAudio && (
              <button
                onClick={playAnswerAudio}
                disabled={isPlaying && playingOption === null}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl transition-all ${
                  isPlaying && playingOption === null
                    ? "bg-blue-300 text-white"
                    : "bg-orange-500 text-white hover:shadow-lg hover:scale-105"
                }`}
              >
                {isPlaying && playingOption === null ? "⏸️" : "🔊"}
              </button>
            )}
          </div>

          {audioError && (
            <div className="bg-red-50 text-red-700 p-3 rounded-xl mb-4 text-center">
              ⚠️ {audioError}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuiz.options.map((option, index) => {
              const optionDetail =
                currentQuiz.optionDetails.find(
                  (detail: OptionDetail) => detail.value === option
                ) || currentQuiz.optionDetails[index];

              const benar = option === currentQuiz.answer;
              const dipilih = option === jawaban;

              let bgClass = "bg-gradient-to-br from-white to-gray-50";
              let borderClass = "border-gray-200";
              let shadowClass = "shadow-md hover:shadow-xl";
              let textClass = "text-gray-800";

              if (jawaban) {
                if (benar) {
                  bgClass = "bg-gradient-to-br from-green-100 to-emerald-100";
                  borderClass = "border-green-300";
                  shadowClass = "shadow-lg ring-2 ring-green-400";
                  textClass = "text-green-800";
                } else if (dipilih) {
                  bgClass = "bg-gradient-to-br from-red-100 to-pink-100";
                  borderClass = "border-red-300";
                  shadowClass = "shadow-lg ring-2 ring-red-400";
                  textClass = "text-red-800";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => pilihJawaban(option)}
                  disabled={!!jawaban || isPlayingFeedback}
                  className={`${bgClass} ${borderClass} ${shadowClass} rounded-2xl p-4 transition-all duration-300 transform hover:-translate-y-1 border-2 relative group ${
                    jawaban || isPlayingFeedback
                      ? "cursor-not-allowed opacity-90"
                      : "cursor-pointer"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {optionDetail?.imageUrl && (
                      <div className="mb-4">
                        <div className="w-24 h-24 relative overflow-hidden rounded-xl">
                          <Image
                            src={optionDetail.imageUrl}
                            alt={`Gambar suku kata ${option}`}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>
                      </div>
                    )}

                    <div className={`text-4xl font-bold mb-2 ${textClass}`}>
                      {option}
                    </div>

                    {jawaban && (benar || dipilih) && (
                      <div
                        className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          benar
                            ? "bg-green-100 text-green-700 ring-2 ring-green-300"
                            : "bg-red-100 text-red-700 ring-2 ring-red-300"
                        }`}
                      >
                        {benar ? `+${currentQuiz.point || 10}` : "-10"}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between gap-4">
            <button
              disabled={currentIndex === 0 || isPlayingFeedback}
              onClick={prevSoal}
              className={`flex-1 py-3 rounded-2xl font-bold transition-all ${
                currentIndex === 0 || isPlayingFeedback
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:shadow-lg transform hover:-translate-y-1"
              }`}
            >
              ◀ Sebelumnya
            </button>

            <button
              disabled={
                currentIndex === totalQuestions - 1 || isPlayingFeedback
              }
              onClick={nextSoal}
              className={`flex-1 py-3 rounded-2xl font-bold transition-all ${
                currentIndex === totalQuestions - 1 || isPlayingFeedback
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-purple-500 text-white hover:shadow-lg transform hover:-translate-y-1"
              }`}
            >
              Selanjutnya ▶
            </button>
          </div>

          {diSoalTerakhir && (
            <button
              onClick={selesaiKuis}
              disabled={isPlayingFeedback || isUpdatingScore}
              className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                isPlayingFeedback || isUpdatingScore
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 text-white hover:shadow-xl transform hover:-translate-y-1"
              }`}
            >
              {isUpdatingScore ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Menyimpan...</span>
                </div>
              ) : (
                "Selesai Kuis"
              )}
            </button>
          )}

          {jawaban && (
            <div
              className={`rounded-2xl p-5 transition-all duration-300 ${
                jawaban === currentQuiz.answer
                  ? "bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200"
                  : "bg-gradient-to-r from-red-50 to-pink-50 border border-red-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`text-3xl ${
                    jawaban === currentQuiz.answer
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {jawaban === currentQuiz.answer ? "🎉" : "❌"}
                </div>
                <div>
                  <h3
                    className={`font-bold text-lg ${
                      jawaban === currentQuiz.answer
                        ? "text-green-800"
                        : "text-red-800"
                    }`}
                  >
                    {jawaban === currentQuiz.answer
                      ? "Jawaban Benar!"
                      : "Jawaban Salah!"}
                  </h3>
                  <p
                    className={`${
                      jawaban === currentQuiz.answer
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {jawaban === currentQuiz.answer
                      ? `+${currentQuiz.point || 10} poin!`
                      : `-10 poin! Jawaban benar: ${currentQuiz.answer}`}
                  </p>
                </div>
              </div>
              <div className="mt-3 text-gray-600 text-sm">
                Total poin kuis ini:{" "}
                <span className="font-bold">{currentQuizPoints}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
