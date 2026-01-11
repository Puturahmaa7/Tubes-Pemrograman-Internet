"use client";

import Link from "next/link";
import { useState } from "react";
import { MateriDetail } from "@/lib/db";

export default function BelajarHurufClient({
  hurufList,
}: {
  hurufList: MateriDetail[];
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
      {hurufList.map((h) => (
        <Link
          key={h.id}
          href={`/learn/belajar_huruf/detail_huruf?huruf=${h.value}`}
          style={{ textDecoration: "none" }}
        >
          <div
            onMouseEnter={() => setHovered(h.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              backgroundColor: "#7ED957",
              height: 120,
              borderRadius: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-baloo)",
              fontSize: 56,
              fontWeight: 800,
              color: "#1B5E20",
              cursor: "pointer",
              transform: hovered === h.id ? "scale(1.12)" : "scale(1)",
              boxShadow:
                hovered === h.id
                  ? "0 14px 28px rgba(0,0,0,0.25)"
                  : "0 6px 12px rgba(0,0,0,0.15)",
              transition: "all 0.25s ease",
            }}
          >
            {h.value}
          </div>
        </Link>
      ))}
    </div>
  );
}
