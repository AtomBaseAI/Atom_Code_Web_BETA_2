import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt =
  "Atom Code — Reimagine Engineering with AI-Powered Tools. Certification trainings, Open IDE platform and one-day AI hackathons.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const VIOLET = "#7600FF";
const LILAC = "#c084fc";

export default async function OgImage() {
  // Embed the real Atom Code logo mark from the public assets folder
  let logoDataUri = "";
  try {
    const logo = readFileSync(
      join(process.cwd(), "public/assets/logo-mini.png")
    );
    logoDataUri = `data:image/png;base64,${logo.toString("base64")}`;
  } catch {
    // Logo fallback handled below (text mark rendered instead)
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0714",
          padding: 64,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative orbs */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 560,
            height: 560,
            borderRadius: 9999,
            backgroundImage: `linear-gradient(135deg, rgba(118,0,255,0.55), rgba(118,0,255,0))`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            left: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            backgroundImage: `linear-gradient(315deg, rgba(192,38,211,0.35), rgba(192,38,211,0))`,
          }}
        />
        {/* thin brand frame */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            borderRadius: 24,
            border: `2px solid rgba(118,0,255,0.35)`,
            display: "flex",
          }}
        />

        {/* header: logo + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {logoDataUri ? (
            // Satori renders this <img> into the generated PNG (not an HTML img)
            <img
              src={logoDataUri}
              width={84}
              height={84}
              style={{ borderRadius: 20 }}
              alt="Atom Code logo"
            />
          ) : (
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: 20,
                backgroundColor: VIOLET,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 48,
                fontWeight: 700,
              }}
            >
              A
            </div>
          )}
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: -1,
            }}
          >
            Atom Code
          </div>
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -2,
              color: "#ffffff",
            }}
          >
            <div style={{ display: "flex" }}>Reimagine Engineering</div>
            <div style={{ display: "flex", color: LILAC }}>
              with AI-Powered Tools
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Fueled by AI — powered by Atom Code Dev
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {[
              "Certification Trainings",
              "Open IDE Platform",
              "AI Hackathons",
            ].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: "2px solid rgba(118,0,255,0.55)",
                  backgroundColor: "rgba(118,0,255,0.16)",
                  color: "#e9d5ff",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(255,255,255,0.65)",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 9999,
                backgroundColor: VIOLET,
              }}
            />
            <div style={{ display: "flex", fontWeight: 600 }}>
              atomcode.dev
            </div>
          </div>
          <div style={{ display: "flex" }}>
            EdTech · AWS & GCP Partner · 6k+ students trained
          </div>
        </div>
      </div>
    ),
    size
  );
}
