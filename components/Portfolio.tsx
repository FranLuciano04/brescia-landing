"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./Motion";

const portfolioItems = [
  { img: "/villa-2-livingroom.jpeg",  alt: "Hotel Antuquelen Villa La Angostura", name: "Hotel Antuquelen",              loc: "Villa La Angostura · ARG", cls: "port-1" },
  { img: "/bayahibe-lighthouse.jpeg", alt: "Iberostar Bayahibe",                 name: "Iberostar",                     loc: "Bayahibe · DOM",           cls: "port-2" },
  { img: "/ilhagrande-rooms.jpeg",    alt: "Pousada Rubi Ilha Grande",           name: "Pousada Rubi",                  loc: "Ilha Grande · BR",         cls: "port-3" },
  { img: "/iguazu-restaurant.jpeg",   alt: "Raíces Esturión Iguazú",            name: "Raíces Esturión",               loc: "Iguazú · ARG",             cls: "port-4" },
  { img: "/tulipanes-campo.jpeg",     alt: "Campo de tulipanes en Patagonia",   name: "Campo de tulipanes",            loc: "Patagonia",                cls: "port-5" },
  { img: "/salta.jpeg",               alt: "Terrazas Boutique Tilcara",         name: "Terrazas Boutique",             loc: "Tilcara · ARG",            cls: "port-6" },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="port-section"
      style={{ background: "var(--b-cream)", padding: "100px 80px" }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Header */}
        <FadeUp>
          <div
            className="port-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 80,
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
                03 · Portfolio
              </div>
              <h2 style={{
                fontFamily: "var(--f-display)",
                fontWeight: 400,
                fontSize: "clamp(36px, 4.5vw, 64px)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                color: "var(--b-ink)",
                margin: 0,
              }}>
                Algunos de los lugares que{" "}
                <em style={{ fontStyle: "italic", color: "var(--b-terracotta)" }}>contamos.</em>
              </h2>
            </div>
          </div>
        </FadeUp>

        {/* Mosaic grid */}
        <div className="port-grid">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.cls}
              className={`portfolio-card ${item.cls}`}
              style={{ position: "relative", overflow: "hidden" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              role="img"
              aria-label={item.alt}
            >
              {/* Background photo — separate div so transform-scale on hover works */}
              <div
                className="portfolio-card-img"
                style={{ backgroundImage: `url(${item.img})` }}
              />

              {/* Dark gradient at bottom */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 45%, rgba(23,55,68,0.80) 100%)",
                zIndex: 1,
              }} />

              {/* Hotel name + location */}
              <div style={{
                position: "absolute",
                left: 18,
                bottom: 18,
                zIndex: 2,
                color: "var(--b-cream)",
              }}>
                <div style={{
                  fontFamily: "var(--f-display)",
                  fontStyle: "italic",
                  fontSize: 22,
                  lineHeight: 1.05,
                  marginBottom: 5,
                }}>
                  {item.name}
                </div>
                <div style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  opacity: 0.85,
                }}>
                  {item.loc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
