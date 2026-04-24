import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const alt = "Nanasolar — Energía solar a tu medida";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0040c1",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#ff0080",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
              color: "#0040c1",
            }}
          >
            N
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Nana Solar
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 108,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              maxWidth: 980,
            }}
          >
            <span style={{ display: "flex" }}>Energía solar</span>
            <span style={{ display: "flex", color: "#ff0080" }}>a tu medida.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "rgba(255,255,255,0.9)",
              maxWidth: 900,
            }}
          >
            Reducimos tu factura de CFE hasta 95%. Sin inversión inicial.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          <span style={{ display: "flex" }}>
            Residencial · Comercial · Industrial
          </span>
          <span style={{ display: "flex" }}>nanasolar.mx</span>
        </div>
      </div>
    ),
    size,
  );
}
