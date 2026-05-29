import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Transforming Landscapes: Research on First Nations-led real estate development in British Columbia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#f5f1ea",
          color: "#1f1d1a",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6b6357",
          }}
        >
          REIBC · Greater Vancouver REALTORS®
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Transforming
            <br />
            Landscapes
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              color: "#3d362d",
              maxWidth: 920,
            }}
          >
            Research on the future of First Nations-led real estate development in British Columbia.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#6b6357",
          }}
        >
          <span>transforminglandscapes.ca</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
