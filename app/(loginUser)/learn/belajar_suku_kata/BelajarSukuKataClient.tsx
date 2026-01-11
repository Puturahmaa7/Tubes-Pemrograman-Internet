"use client";

import Link from "next/link";
import { useState } from "react";
import { MateriDetail } from "@/lib/db";

export default function BelajarSukuKataClient({
  sukuKataList,
}: {
  sukuKataList: MateriDetail[];
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 24,
      }}
    >
      {sukuKataList.map((s) => (
        <Link
          key={s.id}
          href={`/learn/belajar_suku_kata/detail_suku_kata?sukuKata=${s.value}`}
          style={{ textDecoration: "none" }}
        >
          <div
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              backgroundColor: "#FFB74D",
              height: 120,
              borderRadius: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-baloo)",
              fontSize: 36,
              fontWeight: 700,
              color: "#E65100",
              cursor: "pointer",
              transform: hovered === s.id ? "scale(1.12)" : "scale(1)",
              boxShadow:
                hovered === s.id
                  ? "0 14px 28px rgba(0,0,0,0.25)"
                  : "0 6px 12px rgba(0,0,0,0.15)",
              transition: "all 0.25s ease",
            }}
          >
            {s.value}
          </div>
        </Link>
      ))}
    </div>
  );
}
