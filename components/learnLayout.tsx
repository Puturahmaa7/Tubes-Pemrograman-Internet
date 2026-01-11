"use client";

import { useRouter } from "next/navigation";

interface LearnLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function LearnLayout({ children, title }: LearnLayoutProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/learn");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#EAF6FF",
      }}
    >
      <div
        style={{
          margin: "16px",
          padding: "20px 24px",
          borderRadius: "36px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexShrink: 0,
          background: "linear-gradient(135deg, #4FC3F7, #81C784)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <button
          onClick={handleBack}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#FFD54F",
            color: "#333",
            fontSize: "28px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
          aria-label="Kembali"
        >
          ◀
        </button>

        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: "38px",
            fontWeight: "800",
            color: "#FFFFFF",
            letterSpacing: "1px",
            textShadow: "0 2px 4px rgba(0,0,0,0.25)",
          }}
        >
          {title}
        </div>

        <div style={{ width: "60px" }} />
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
        {children}
      </div>
    </div>
  );
}
