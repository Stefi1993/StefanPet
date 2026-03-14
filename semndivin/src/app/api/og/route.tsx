import { ImageResponse } from "next/og";
import { getAngelNumber } from "@/lib/angel-numbers";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const numStr = searchParams.get("n");
  const title = searchParams.get("title");
  const subtitle = searchParams.get("subtitle");

  const n = numStr ? parseInt(numStr) : null;
  const an = n && n >= 1 && n <= 999 ? getAngelNumber(n) : null;

  const displayTitle = title || (an ? `Numărul Angelic ${n}` : "SemnDivin.ro");
  const displaySub =
    subtitle ||
    (an ? an.shortDescription.slice(0, 80) + "..." : "Spiritualitate și Numere Angelice");

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #1e1b4b 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Brand */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            left: "50px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "32px" }}>✨</span>
          <span style={{ color: "#e9d5ff", fontSize: "24px", fontWeight: "700" }}>
            SemnDivin.ro
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {n && (
            <div
              style={{
                fontSize: "120px",
                fontWeight: "900",
                background: "linear-gradient(135deg, #c4b5fd, #f9a8d4, #c4b5fd)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: "1",
                marginBottom: "20px",
              }}
            >
              {n}
            </div>
          )}

          <div
            style={{
              fontSize: n ? "36px" : "52px",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: "1.2",
              maxWidth: "900px",
            }}
          >
            {displayTitle}
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "#ddd6fe",
              lineHeight: "1.5",
              maxWidth: "800px",
            }}
          >
            {displaySub}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #7c3aed, #ec4899, #7c3aed)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
