import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#05070d",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(59,130,246,0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(34,211,238,0.3), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
              color: "#04060b",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            AS
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              color: "rgba(245,247,250,0.6)",
              letterSpacing: -0.5,
            }}
          >
            atanusamadder.dev
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            fontSize: 68,
            fontWeight: 700,
            color: "#f5f7fa",
            letterSpacing: -1.5,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 34,
            fontWeight: 500,
            backgroundImage: "linear-gradient(90deg, #3b82f6, #22d3ee)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {siteConfig.role}
        </div>
      </div>
    ),
    { ...size },
  );
}
