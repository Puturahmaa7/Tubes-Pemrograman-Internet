"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [buying, setBuying] = useState(false);
  const [shopStatus, setShopStatus] = useState<any>(null);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "info";
    text: string;
  } | null>(null);
  const [quantity, setQuantity] = useState(1);

  const fetchShopStatus = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/shop/status");
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setShopStatus(result.data);
        }
      }
    } catch (error) {
      console.error("Error fetching shop status:", error);
      setMessage({
        type: "error",
        text: "Gagal memuat data toko",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = async () => {
    try {
      await fetch("/api/user/profile");
    } catch (error) {
      console.error("Error refreshing user data:", error);
    }
  };

  useEffect(() => {
    fetchShopStatus();
  }, []);

  const handleBuyLives = async () => {
    if (!shopStatus || buying) return;

    try {
      setBuying(true);
      setMessage(null);

      const response = await fetch("/api/shop/buy-lives", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({
          type: "success",
          text: result.message || "Berhasil membeli nyawa!",
        });

        await Promise.all([fetchShopStatus(), fetchUserData()]);

        if (shopStatus) {
          const newAvailable = shopStatus.shop.availableSpace - quantity;
          setQuantity(Math.min(quantity, Math.max(1, newAvailable)));
        }
      } else {
        setMessage({
          type: "error",
          text: result.error || "Gagal membeli nyawa",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Terjadi kesalahan",
      });
    } finally {
      setBuying(false);
    }
  };

  const handleQuantityChange = (value: number) => {
    if (!shopStatus) return;

    const newValue = Math.max(1, Math.min(value, shopStatus.shop.maxBuyable));
    setQuantity(newValue);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-blue-600 font-semibold">Memuat toko...</p>
        </div>
      </div>
    );
  }

  if (!shopStatus) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <p className="text-red-600 font-semibold">Gagal memuat data toko</p>
          <button
            onClick={fetchShopStatus}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  const { user, shop } = shopStatus;
  const totalCost = quantity * shop.lifePrice;
  const canAfford = user.points >= totalCost;
  const isAtMax = user.lives >= user.maxLives;

  return (
    <main className="font-normal bg-white min-h-screen">
      <section className="pt-20 lg:pt-28 pb-10 lg:pb-16 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <div className="lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl font-bold lg:font-extrabold leading-snug md:leading-tight lg:leading-snug normal-case">
                Toko Nyawa
                <br className="hidden sm:block" />
                <span className="text-blue-600"> Tukarkan Poin Anda!</span>
              </h1>

              <p className="mt-4 sm:mt-5 lg:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                Kumpulkan poin dari permainan kuis dan tukarkan dengan nyawa
                untuk melanjutkan petualangan belajar. Sistem ini dirancang agar
                anak tetap termotivasi belajar sambil bermain.
              </p>

              <div className="mt-6 sm:mt-7 lg:mt-8">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => router.push("/quiz")}
                    className="bg-blue-600 hover:bg-blue-700 text-white normal-case text-sm sm:text-base px-5 sm:px-6 py-3 w-full sm:w-auto rounded-full text-center"
                  >
                    Main Kuis untuk Dapat Poin
                  </button>

                  <button
                    onClick={() => router.push("/learn")}
                    className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 normal-case text-sm sm:text-base px-5 sm:px-6 py-3 w-full sm:w-auto rounded-full text-center"
                  >
                    Lanjut Belajar
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:order-2 mt-8 sm:mt-10 lg:mt-0">
              <div className="relative w-full">
                <div className="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] xl:aspect-[6/4]">
                  <div className="relative w-full h-[350px]">
                    <Image
                      src="/images/Tokoo.png"
                      alt="Toko Nyawa"
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

      <section className="py-8 lg:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-amber-600">⭐</span>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
                  Poin Anda
                </h3>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-3xl lg:text-4xl font-bold text-amber-600">
                  {user.points.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                  {canAfford ? (
                    <span className="text-green-600 flex items-center gap-1">
                      <span className="text-green-500">✓</span>
                      Cukup untuk beli
                    </span>
                  ) : (
                    <span className="text-red-600 flex items-center gap-1">
                      <span className="text-red-500">✗</span>
                      Tidak cukup
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-red-600">❤️</span>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
                  Nyawa Anda
                </h3>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-3xl lg:text-4xl font-bold text-red-600">
                  {user.lives}/{user.maxLives}
                </div>
                <div className="text-sm text-gray-500">
                  {isAtMax ? (
                    <span className="text-green-600 flex items-center gap-1">
                      <span className="text-green-500">✓</span>
                      Sudah penuh
                    </span>
                  ) : (
                    <span className="text-blue-600">
                      Dapat ditambah: {shop.availableSpace}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="flex items-start gap-6">
                <div className="bg-red-100 p-5 rounded-xl">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <span className="text-4xl text-red-600">❤️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
                    Tambah Nyawa
                  </h3>
                  <p className="text-gray-600 mb-4 max-w-md">
                    Tambah nyawa untuk melanjutkan permainan kuis. Setiap nyawa
                    memungkinkan Anda untuk bermain lebih banyak dan belajar
                    lebih banyak.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-600 text-xl">⭐</span>
                      <span className="font-bold text-amber-600 text-lg">
                        {shop.lifePrice} poin
                      </span>
                      <span className="text-gray-400">/ nyawa</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="text-sm font-semibold text-gray-700">
                    Jumlah:
                  </div>
                  <div className="flex items-center border border-gray-300 rounded-full">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1 || buying || isAtMax}
                      className="px-5 py-2 text-gray-600 hover:bg-gray-100 rounded-l-full disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    >
                      -
                    </button>
                    <div className="px-5 py-2 font-bold text-xl min-w-[70px] text-center">
                      {quantity}
                    </div>
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={
                        quantity >= shop.maxBuyable || buying || isAtMax
                      }
                      className="px-5 py-2 text-gray-600 hover:bg-gray-100 rounded-r-full disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-500">Total biaya:</div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-amber-600 text-2xl">⭐</span>
                    <span className="text-2xl lg:text-3xl font-bold text-amber-600">
                      {totalCost.toLocaleString()}
                    </span>
                    <span className="text-gray-500">poin</span>
                  </div>
                </div>

                <button
                  onClick={handleBuyLives}
                  disabled={
                    buying ||
                    isAtMax ||
                    !shop.canBuy ||
                    quantity > shop.maxBuyable ||
                    !canAfford
                  }
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-bold hover:from-red-600 hover:to-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                >
                  {buying ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Memproses...
                    </>
                  ) : (
                    <>
                      <span className="text-xl">🛒</span>
                      {isAtMax
                        ? "Nyawa Penuh"
                        : !shop.canBuy
                        ? "Poin Kurang"
                        : !canAfford
                        ? "Poin Tidak Cukup"
                        : `Beli ${quantity} Nyawa`}
                    </>
                  )}
                </button>

                {!isAtMax && shop.canBuy && canAfford && (
                  <div className="text-sm text-center text-gray-500">
                    Maksimal dapat membeli: {shop.maxBuyable} nyawa
                  </div>
                )}
              </div>
            </div>

            {isAtMax && (
              <div className="mt-8 p-5 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-3 text-green-700">
                  <span className="text-green-500 text-xl">✅</span>
                  <span className="font-semibold text-lg">
                    Nyawa Anda sudah maksimal ({user.maxLives})
                  </span>
                </div>
                <p className="text-green-600 text-sm mt-2 pl-9">
                  Anda dapat langsung bermain kuis tanpa perlu membeli nyawa.
                  Nikmati pembelajaran Anda!
                </p>
              </div>
            )}

            {!isAtMax && !canAfford && (
              <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-center gap-3 text-amber-700">
                  <span className="text-amber-500 text-xl">⚠️</span>
                  <span className="font-semibold text-lg">
                    Poin tidak cukup
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-3 pl-9">
                  <p className="text-amber-600 text-sm">
                    Anda memerlukan{" "}
                    <span className="font-bold">
                      {shop.lifePrice - user.points}
                    </span>{" "}
                    poin lagi untuk membeli 1 nyawa. Main kuis untuk mendapatkan
                    lebih banyak poin!
                  </p>
                  <button
                    onClick={() => router.push("/quiz")}
                    className="px-5 py-2 bg-amber-500 text-white text-sm rounded-full hover:bg-amber-600 transition font-semibold whitespace-nowrap"
                  >
                    Main Kuis Sekarang
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 lg:mb-12 normal-case">
            Cara Kerja Sistem Nyawa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-blue-50 p-6 lg:p-8 rounded-2xl shadow-md border-2 border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20 lg:w-24 lg:h-24">
                  <Image
                    src="/images/Quiz.png"
                    alt="Main Quiz"
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-center mb-4 normal-case">
                Main Kuis
              </h3>
              <p className="text-sm lg:text-base text-gray-600 text-center leading-relaxed">
                Dapatkan poin dengan menjawab soal kuis dengan benar. Semakin
                banyak jawaban benar, semakin banyak poin yang Anda dapatkan.
              </p>
            </div>

            <div className="bg-blue-50 p-6 lg:p-8 rounded-2xl shadow-md border-2 border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                  <span className="text-amber-600 text-6xl">⭐</span>
                </div>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-center mb-4 normal-case">
                Tukar Poin
              </h3>
              <p className="text-sm lg:text-base text-gray-600 text-center leading-relaxed">
                Tukar poin dengan nyawa di toko. Setiap nyawa berharga 100 poin.
                Kumpulkan poin untuk mendapatkan lebih banyak nyawa.
              </p>
            </div>

            <div className="bg-blue-50 p-6 lg:p-8 rounded-2xl shadow-md border-2 border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                  <span className="text-6xl text-red-600">❤️</span>
                </div>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-center mb-4 normal-case">
                Maksimal 5 Nyawa
              </h3>
              <p className="text-sm lg:text-base text-gray-600 text-center leading-relaxed">
                Setiap pemain maksimal memiliki 5 nyawa sekaligus. Gunakan nyawa
                dengan bijak untuk belajar lebih banyak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {message && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md">
          <div
            className={`p-5 rounded-xl border shadow-lg ${
              message.type === "success"
                ? "bg-green-50 border-green-200"
                : message.type === "error"
                ? "bg-red-50 border-red-200"
                : "bg-blue-50 border-blue-200"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                {message.type === "success" ? (
                  <span className="text-green-500 text-xl">✅</span>
                ) : message.type === "error" ? (
                  <span className="text-red-500 text-xl">❌</span>
                ) : (
                  <span className="text-blue-500 text-xl">ℹ️</span>
                )}
              </div>
              <div className="flex-1">
                <span
                  className={
                    message.type === "success"
                      ? "text-green-700 font-semibold"
                      : message.type === "error"
                      ? "text-red-700 font-semibold"
                      : "text-blue-700 font-semibold"
                  }
                >
                  {message.text}
                </span>
                <button
                  onClick={() => setMessage(null)}
                  className="mt-2 text-sm text-gray-500 hover:text-gray-700 float-right"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
