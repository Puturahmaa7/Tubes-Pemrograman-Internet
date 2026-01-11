"use client";

import { useRouter } from "next/navigation";

type QuizLayoutProps = {
  children: React.ReactNode;
  title: string;
  backTo?: string;
};

export default function QuizLayout({
  children,
  title,
  backTo = "/quiz",
}: QuizLayoutProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push(backTo);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFDE7",
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
          background: "linear-gradient(135deg, #FFB300, #FF7043)",
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
            fontSize: "26px",
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
            fontSize: "36px",
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

      <div
        style={{
          flex: 1,
          padding: "24px",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
