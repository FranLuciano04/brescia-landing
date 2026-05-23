"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./Motion";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/constants";

const reels = [
  { title: "Ilha Grande.", loc: "Brasil", img: "/ilha-grande.jpeg", href: "https://www.instagram.com/reel/DN6cVgiiWZs/", accent: "pink" as const },
  { title: "El campo florece.", loc: "Trevelin · Patagonia", img: "/tulipanes-campo.jpeg", href: "https://www.instagram.com/reel/DP9LPy4DoKA/" },
  { title: "Aruba.", loc: "Caribe", img: "/aruba.jpeg", href: "https://www.instagram.com/reel/DYdLQ_dRAD3/" },
  { title: "Iberostar Selection\nHacienda Dominicus.", loc: "Bayahibe · DOM", img: "/bayahibe-lighthouse.jpeg", href: "https://www.instagram.com/reel/DVRrW1cEZF7/", accent: "pink" as const },
  { title: "Apart El Coirón.", loc: "Esquel · ARG", img: "/esquel.jpeg", href: "https://www.instagram.com/reel/DRhmZ4qEfRB/" },
  { title: "Turkish Airlines.", loc: "Aerolínea", img: "/turkish.jpeg", href: "https://www.instagram.com/reel/DS1PKtNjI5N/" },
  { title: "Budapest.", loc: "Hungría", img: "/budapest.jpeg", href: "https://www.instagram.com/reel/DTVcuPcDECf/" },
  { title: "El sonido del agua.", loc: "Iguazú · ARG", img: "/iguazu.jpeg", href: "https://www.instagram.com/reel/C4T5D35vwfH/" },
];

export default function ReelsGrid() {
  return (
    <section
      className="reels-section"
      style={{
        padding: "90px 80px",
        background: "var(--b-cream-soft)",
        borderTop: "1px solid var(--b-line-soft)",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <FadeUp>
          <div
            className="reels-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 70,
            }}
          >
            <div>
              <div style={{
                fontFamily: "var(--f-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--b-ink-mute)",
                marginBottom: 24,
                display: "flex",
                gap: 14,
                alignItems: "center",
              }}>
                <span style={{ display: "block", width: 28, height: 1, background: "var(--b-ink-mute)", flexShrink: 0 }} />
                04 · Reels &amp; videos
              </div>
              <h2 style={{
                fontFamily: "var(--f-display)",
                fontWeight: 400,
                fontSize: "clamp(36px, 4.5vw, 64px)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                color: "var(--b-ink)",
                margin: "0 0 20px",
              }}>
                Material en{" "}
                <em style={{ fontStyle: "italic", color: "var(--b-terracotta)" }}>movimiento.</em>
              </h2>
              <p style={{ maxWidth: 520, fontSize: 16, lineHeight: 1.6, color: "var(--b-ink-soft)", margin: 0 }}>
                Una selección de piezas publicadas.
              </p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--f-sans)",
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--b-ink)",
                textDecoration: "none",
                borderBottom: "1px solid var(--b-line)",
                paddingBottom: 4,
                whiteSpace: "nowrap",
                alignSelf: "flex-end",
                marginBottom: 8,
              }}
            >
              Ver todos en {INSTAGRAM_HANDLE} →
            </a>
          </div>
        </FadeUp>

        <div
          className="reels-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}
        >
          {reels.map((r, i) => (
            <motion.a
              key={i}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reel-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.07,
                ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
              }}
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
                background: "var(--b-ink)",
                display: "block",
                textDecoration: "none",
                border: "1px solid var(--b-line-soft)",
              }}
              aria-label={`Ver reel: ${r.title.replace("\n", " ")} — ${r.loc}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.img}
                alt=""
                aria-hidden="true"
                className="reel-card-img"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.78)",
                }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(23,55,68,0.05) 0%, rgba(23,55,68,0.7) 100%)",
              }} />

              <div style={{
                position: "absolute",
                top: 14, left: 14,
                fontFamily: "var(--f-mono)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--b-cream)",
                background: "accent" in r && r.accent === "pink" ? "var(--b-terracotta)" : "rgba(239,234,227,0.18)",
                padding: "5px 10px",
                backdropFilter: "blur(6px)",
              }}>
                Instagram
              </div>

              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 56, height: 56,
                borderRadius: "50%",
                background: "rgba(239,234,227,0.92)",
                color: "var(--b-ink)",
                display: "grid",
                placeItems: "center",
                fontSize: 16,
              }} aria-hidden="true">▶</div>

              <div style={{ position: "absolute", left: 18, right: 18, bottom: 16, color: "var(--b-cream)" }}>
                <div style={{
                  fontFamily: "var(--f-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: 22,
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                  whiteSpace: "pre-line",
                  marginBottom: 8,
                }}>
                  {r.title}
                </div>
                <div style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: 9,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  opacity: 0.85,
                }}>
                  {r.loc}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
