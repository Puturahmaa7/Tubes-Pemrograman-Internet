"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

type LeaderboardUser = {
  clerkUserId: string;
  name: string | null;
  imageUrl: string | null;
  points: number;
  lives: number;
  rank: number;
  createdAt: string;
};

type LeaderboardData = {
  leaderboard: LeaderboardUser[];
  currentUserRank: number | null;
  competitors: LeaderboardUser[];
  totalUsers: number;
};

export default function LeaderboardPage() {
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/leaderboard");
      if (!response.ok) throw new Error("Failed to fetch leaderboard");

      const result = await response.json();
      if (result.success) {
        setData(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatPoints = (points: number) => {
    if (points >= 1000) {
      return `${(points / 1000).toFixed(1)}k`;
    }
    return points.toString();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-3 text-blue-600 font-medium">Memuat peringkat...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl mb-3">⚠️</div>
          <p className="text-red-600 font-medium">Gagal memuat peringkat</p>
          <button
            onClick={fetchLeaderboard}
            className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const currentUserInLeaderboard = data.leaderboard.find(
    (u) => u.clerkUserId === user?.id
  );

  return (
    <main className="font-normal bg-white min-h-screen">
      <section className="pt-16 lg:pt-20 pb-8 lg:pb-12 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:gap-10 xl:gap-12 items-center">
            <div className="lg:order-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight lg:leading-snug normal-case">
                Peringkat Global
                <br className="hidden sm:block" />
                <span className="text-blue-600"> Siapa yang Terbaik?</span>
              </h1>

              <p className="mt-3 sm:mt-4 text-sm text-gray-600 leading-relaxed">
                Lihat peringkat berdasarkan poin terbanyak. Semakin banyak
                bermain kuis, semakin tinggi peringkatmu!
              </p>

              <div className="mt-4 sm:mt-5">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => (window.location.href = "/quiz")}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-4 sm:px-5 py-2 w-full sm:w-auto rounded-full text-center"
                  >
                    Main Kuis Agar Naik Peringkat
                  </button>

                  <button
                    onClick={() => (window.location.href = "/learn")}
                    className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-xs sm:text-sm px-4 sm:px-5 py-2 w-full sm:w-auto rounded-full text-center"
                  >
                    Belajar Dulu
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:order-2 mt-6 sm:mt-8 lg:mt-0">
              <div className="relative w-full">
                <div className="aspect-[4/3]">
                  <div className="relative w-full h-[210px] sm:h-[290px]">
                    <Image
                      src="/images/Leaderboard.png"
                      alt="Peringkat"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 lg:p-5 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg text-blue-600">👥</span>
                </div>
                <h3 className="text-sm lg:text-base font-medium text-gray-800">
                  Total Pemain
                </h3>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-xl lg:text-2xl font-bold text-blue-600">
                  {data.totalUsers}
                </div>
              </div>
            </div>
            {data.currentUserRank && (
              <div className="bg-white p-4 lg:p-5 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg text-green-600">📈</span>
                  </div>
                  <h3 className="text-sm lg:text-base font-medium text-gray-800">
                    Peringkat Anda
                  </h3>
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-xl lg:text-2xl font-bold text-green-600">
                    #{data.currentUserRank}
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white p-4 lg:p-5 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg text-amber-600">⭐</span>
                </div>
                <h3 className="text-sm lg:text-base font-medium text-gray-800">
                  Rata-rata Poin
                </h3>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-xl lg:text-2xl font-bold text-amber-600">
                  {data.leaderboard.length > 0
                    ? formatPoints(
                        Math.round(
                          data.leaderboard.reduce(
                            (sum, user) => sum + user.points,
                            0
                          ) / data.leaderboard.length
                        )
                      )
                    : "0"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-8 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-200">
                <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-yellow-500">🏆</span>
                  Top 10 Pemain
                </h2>

                <div className="space-y-2">
                  {data.leaderboard.slice(0, 10).map((player) => {
                    const isCurrentUser = player.clerkUserId === user?.id;

                    return (
                      <div
                        key={player.clerkUserId}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          isCurrentUser
                            ? "bg-blue-50 border border-blue-200"
                            : "bg-white border border-gray-100"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                            {player.rank <= 3 ? (
                              <span className="font-bold text-sm">
                                {player.rank === 1
                                  ? "🥇"
                                  : player.rank === 2
                                  ? "🥈"
                                  : "🥉"}
                              </span>
                            ) : (
                              <span className="font-bold text-xs text-gray-700">
                                {player.rank}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            {player.imageUrl ? (
                              <img
                                src={player.imageUrl}
                                alt={player.name || "User"}
                                className="w-8 h-8 rounded-full border border-white"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-600">👤</span>
                              </div>
                            )}

                            <div>
                              <div className="font-medium text-sm text-gray-800">
                                {player.name || "Anonymous"}
                                {isCurrentUser && (
                                  <span className="ml-1 text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded-full">
                                    Anda
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-xs text-gray-600">Poin</div>
                            <div className="flex items-center gap-1 font-bold">
                              <span className="text-amber-600 text-sm">⭐</span>
                              <span className="text-sm">
                                {formatPoints(player.points)}
                              </span>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-xs text-gray-600">Nyawa</div>
                            <div className="font-bold text-red-600 text-sm">
                              {player.lives}❤️
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {data.currentUserRank && data.currentUserRank > 10 && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white">
                          <span className="font-bold text-sm">
                            {data.currentUserRank}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-sm text-gray-800">
                            {user?.fullName || "Anda"}
                          </div>
                          <div className="text-xs text-gray-600">
                            Peringkat #{data.currentUserRank}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-600">Poin Anda</div>
                        <div className="flex items-center gap-1 font-bold">
                          <span className="text-amber-600 text-sm">⭐</span>
                          <span className="text-sm">
                            {currentUserInLeaderboard?.points || "0"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-200 h-full">
                <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-purple-500">⚔️</span>
                  Pesaing Terdekat
                </h2>

                {data.competitors.length > 0 ? (
                  <div className="space-y-3">
                    {data.competitors.map((competitor) => {
                      const isCurrentUser = competitor.clerkUserId === user?.id;
                      const isAbove =
                        competitor.rank < (data.currentUserRank || 0);
                      const pointDiff = isCurrentUser
                        ? 0
                        : isAbove
                        ? competitor.points -
                          (currentUserInLeaderboard?.points || 0)
                        : (currentUserInLeaderboard?.points || 0) -
                          competitor.points;

                      return (
                        <div
                          key={competitor.clerkUserId}
                          className={`p-3 rounded-lg border ${
                            isCurrentUser
                              ? "bg-blue-50 border-blue-200"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="relative">
                                {competitor.imageUrl ? (
                                  <img
                                    src={competitor.imageUrl}
                                    alt={competitor.name || "User"}
                                    className="w-8 h-8 rounded-full border border-white"
                                  />
                                ) : (
                                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-600">👤</span>
                                  </div>
                                )}

                                {!isCurrentUser && (
                                  <div
                                    className={`absolute -top-1 -right-1 p-0.5 rounded-full ${
                                      isAbove ? "bg-green-500" : "bg-red-500"
                                    }`}
                                  >
                                    <span className="text-white text-xs">
                                      {isAbove ? "↑" : "↓"}
                                    </span>
                                  </div>
                                )}
                              </div>

                              <div>
                                <div className="font-medium text-sm text-gray-800">
                                  {competitor.name || "Anonymous"}
                                  {isCurrentUser && (
                                    <span className="ml-1 text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded-full">
                                      Anda
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs text-gray-600">
                                  #{competitor.rank}
                                </div>
                              </div>
                            </div>

                            <div className="text-right">
                              <div className="flex items-center gap-1 justify-end mb-1">
                                <span className="text-amber-600 text-sm">
                                  ⭐
                                </span>
                                <span className="font-bold text-sm">
                                  {formatPoints(competitor.points)}
                                </span>
                              </div>
                              <div className="text-xs text-gray-500">
                                {isCurrentUser
                                  ? "Poin Anda"
                                  : `${pointDiff} poin ${
                                      isAbove ? "di atas" : "di bawah"
                                    }`}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <div className="text-3xl mb-3">🏆</div>
                    <p className="text-gray-600 text-sm">
                      {user
                        ? "Main kuis untuk masuk peringkat!"
                        : "Login untuk lihat peringkat"}
                    </p>
                  </div>
                )}

                <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <h3 className="font-medium text-amber-800 mb-1 flex items-center gap-1 text-sm">
                    <span>💡</span>
                    Tips Naik Peringkat
                  </h3>
                  <ul className="text-xs text-amber-700 space-y-0.5">
                    <li>• Jawab kuis dengan benar</li>
                    <li>• Main setiap hari</li>
                    <li>• Belajar sebelum main</li>
                    <li>• Jaga nyawa tetap ada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Poin Tertinggi</div>
                  <div className="text-lg font-bold text-green-600">
                    {data.leaderboard.length > 0
                      ? formatPoints(data.leaderboard[0].points)
                      : "0"}
                  </div>
                </div>
                <span className="text-yellow-400 text-xl">👑</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">
                    Poin Terendah Top 10
                  </div>
                  <div className="text-lg font-bold text-gray-600">
                    {data.leaderboard.length > 0
                      ? formatPoints(data.leaderboard[9]?.points || 0)
                      : "0"}
                  </div>
                </div>
                <span className="text-gray-400 text-xl">📊</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Poin Anda</div>
                  <div className="text-lg font-bold text-blue-600">
                    {currentUserInLeaderboard?.points || "0"}
                  </div>
                </div>
                <span className="text-blue-400 text-xl">🎯</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
