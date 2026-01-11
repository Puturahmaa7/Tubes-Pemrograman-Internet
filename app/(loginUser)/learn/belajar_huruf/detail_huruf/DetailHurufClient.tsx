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

export default function DetailHurufClient({
  huruf,
  listHuruf,
}: {
  huruf: MateriDetail;
  listHuruf: MateriDetail[];
}) {
  const router = useRouter();
  const [hover, setHover] = useState<string | null>(null);

  const index = listHuruf.findIndex((h) => h.id === huruf.id);
  const prev = listHuruf[index - 1];
  const next = listHuruf[index + 1];

  const playAudio = () => {
    const audio = new Audio(huruf.audioUrl);
    audio.play();
  };

  const pindahHuruf = (value: string) => {
    router.push(`/learn/belajar_huruf/detail_huruf?huruf=${value}`);
  };

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "28px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        {prev ? (
          <button
            onClick={() => pindahHuruf(prev.value)}
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
          <div style={{ width: "64px" }} />
        )}

        <div
          style={{
            width: "300px",
            height: "220px",
            borderRadius: "36px",
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          }}
        >
          <Image
            src={huruf.imageUrl}
            alt={`Huruf ${huruf.value}`}
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {next ? (
          <button
            onClick={() => pindahHuruf(next.value)}
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
          <div style={{ width: "64px" }} />
        )}
      </div>

      <div
        style={{
          fontFamily: "var(--font-baloo)",
          fontSize: "48px",
          fontWeight: "800",
          color: "#1976D2",
        }}
      >
        Huruf {huruf.value}
      </div>

      <button
        onClick={playAudio}
        onMouseEnter={() => setHover("sound")}
        onMouseLeave={() => setHover(null)}
        style={{
          fontSize: "52px",
          backgroundColor: hover === "sound" ? "#FFEB3B" : "#FFD54F",
          border: "none",
          borderRadius: "50%",
          width: "80px",
          height: "80px",
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
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  backgroundColor: "#4FC3F7",
  color: "#fff",
  fontSize: "26px",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
  transition: "0.2s",
};
