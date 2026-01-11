"use client";

import Link from "next/link";
import { useState } from "react";
import { MateriDetail } from "@/lib/db";

export default function BelajarKataClient({
  kataList,
}: {
  kataList: MateriDetail[];
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
      }}
    >
      {kataList.map((k) => (
        <Link
          key={k.id}
          href={`/learn/belajar_kata/detail_kata?kata=${k.value}`}
          style={{ textDecoration: "none" }}
        >
          <div
            onMouseEnter={() => setHovered(k.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              backgroundColor: "#FFB74D",
              height: 120,
              borderRadius: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-baloo)",
              fontSize: 32,
              fontWeight: 800,
              color: "#5D4037",
              cursor: "pointer",
              transform: hovered === k.id ? "scale(1.12)" : "scale(1)",
              boxShadow:
                hovered === k.id
                  ? "0 14px 28px rgba(0,0,0,0.25)"
                  : "0 6px 12px rgba(0,0,0,0.15)",
              transition: "all 0.25s ease",
            }}
          >
            {k.value}
          </div>
        </Link>
      ))}
    </div>
  );
}
