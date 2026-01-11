"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type MateriDetail = {
  id: string;
  value: string;
  imageUrl: string;
  audioUrl: string;
};

export default function DetailSukuKataClient({
  sukuKata,
  listSukuKata,
}: {
  sukuKata: MateriDetail;
  listSukuKata: MateriDetail[];
}) {
  const router = useRouter();
  const [hover, setHover] = useState<string | null>(null);

  const index = listSukuKata.findIndex((s) => s.id === sukuKata.id);
  const prev = listSukuKata[index - 1];
  const next = listSukuKata[index + 1];

  const playAudio = () => {
    const audio = new Audio(sukuKata.audioUrl);
    audio.play();
  };

  const pindahSukuKata = (value: string) => {
    router.push(`/learn/belajar_suku_kata/detail_suku_kata?sukuKata=${value}`);
  };

  return (
    <div
      style={{
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 28,
      }}
    >
      {/* PANAH + GAMBAR */}
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {/* PANAH KIRI */}
        {prev ? (
          <button
            onClick={() => pindahSukuKata(prev.value)}
            onMouseEnter={() => setHover("left")}
            onMouseLeave={() => setHover(null)}
            style={{
              ...panahStyle,
              transform: hover === "left" ? "scale(1.15)" : "scale(1)",
            }}
          >
            ◀
          </button>
        ) : (
          <div style={{ width: 64 }} />
        )}

        {/* GAMBAR */}
        <div
          style={{
            width: 300,
            height: 220,
            borderRadius: 36,
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          }}
        >
          <Image
            src={sukuKata.imageUrl}
            alt={`Suku kata ${sukuKata.value}`}
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* PANAH KANAN */}
        {next ? (
          <button
            onClick={() => pindahSukuKata(next.value)}
            onMouseEnter={() => setHover("right")}
            onMouseLeave={() => setHover(null)}
            style={{
              ...panahStyle,
              transform: hover === "right" ? "scale(1.15)" : "scale(1)",
            }}
          >
            ▶
          </button>
        ) : (
          <div style={{ width: 64 }} />
        )}
      </div>

      {/* TEKS */}
      <div
        style={{
          fontFamily: "var(--font-baloo)",
          fontSize: 48,
          fontWeight: 800,
          color: "#1976D2",
        }}
      >
        Suku kata {sukuKata.value}
      </div>

      {/* TOMBOL SUARA */}
      <button
        onClick={playAudio}
        onMouseEnter={() => setHover("sound")}
        onMouseLeave={() => setHover(null)}
        style={{
          fontSize: 52,
          backgroundColor: hover === "sound" ? "#FFEB3B" : "#FFD54F",
          border: "none",
          borderRadius: "50%",
          width: 80,
          height: 80,
          cursor: "pointer",
          boxShadow:
            hover === "sound"
              ? "0 0 25px rgba(255, 235, 59, 0.9)"
              : "0 6px 14px rgba(0,0,0,0.2)",
          transform:
            hover === "sound" ? "scale(1.25) rotate(-5deg)" : "scale(1)",
          transition: "all 0.2s ease",
        }}
        aria-label="Putar suara"
      >
        🔊
      </button>
    </div>
  );
}

const panahStyle: React.CSSProperties = {
  width: 64,
  height: 64,
  borderRadius: "50%",
  backgroundColor: "#FFB74D",
  color: "#fff",
  fontSize: 26,
  border: "none",
  cursor: "pointer",
  boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
  transition: "0.2s",
};
