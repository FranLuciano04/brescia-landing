"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

const ease = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-40px" },
    transition: { duration: 0.75, delay, ease },
  };
}

export default function Hero() {
  const waLink = WHATSAPP_LINK;

  return (
    <section
      className="hero-section"
      style={{
        padding: "80px 80px 48px",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        {/* Left: text */}
        <div>
          <motion.div {...reveal(0.05)} style={{
            fontFamily: "var(--f-mono)",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--b-terracotta)",
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 22,
          }}>
            <span style={{ display: "block", width: 28, height: 1, background: "var(--b-terracotta)", flexShrink: 0 }} />
            Content &amp; Marketing · Turismo
          </motion.div>

          <motion.h1 {...reveal(0.18)} style={{
            fontFamily: "var(--f-display)",
            fontWeight: 400,
            fontSize: "clamp(44px, 5.8vw, 88px)",
            lineHeight: 0.94,
            letterSpacing: "-0.025em",
            color: "var(--b-ink)",
            margin: 0,
          }}>
            Contenido que
            <br />
            convierte miradas
            <br />
            en{" "}
            <em style={{ fontStyle: "italic", color: "var(--b-terracotta)" }}>
              reservas.
            </em>
          </motion.h1>

          <motion.p {...reveal(0.36)} style={{
            marginTop: 22,
            maxWidth: 480,
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--b-ink-soft)",
          }}>
            Somos Oriana y Valentina — licenciadas en turismo y especialistas en
            marketing digital. Creamos contenido estratégico y estético para
            hoteles y destinos que no solo quieren llenar redes; quieren
            posicionarse.
          </motion.p>

          <motion.div {...reveal(0.52)} style={{
            marginTop: 28,
            display: "flex",
            gap: 20,
            alignItems: "center",
            flexWrap: "wrap",
          }}>
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "var(--b-terracotta)",
                color: "var(--b-ink)",
                padding: "16px 26px",
                borderRadius: 999,
                fontFamily: "var(--f-sans)",
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Escribinos por WhatsApp
              <span style={{
                width: 28, height: 28, borderRadius: "50%",
                background: "var(--b-ink)", color: "var(--b-terracotta)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, flexShrink: 0,
              }}>→</span>
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ x: 4 }}
              style={{
                fontFamily: "var(--f-sans)",
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--b-ink)",
                textDecoration: "none",
                borderBottom: "1px solid var(--b-line)",
                paddingBottom: 4,
              }}
            >
              Ver portfolio
            </motion.a>
          </motion.div>
        </div>

        {/* Right: image */}
        <motion.div
          className="hero-img-wrap"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          style={{ position: "relative", aspectRatio: "4/4.4", width: "100%" }}
        >
          {/* Caption card */}
          <motion.div
            className="hero-cap"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            style={{
              position: "absolute",
              top: -28,
              left: -28,
              background: "var(--b-cream)",
              padding: "14px 18px",
              fontFamily: "var(--f-display)",
              fontStyle: "italic",
              fontSize: 20,
              color: "var(--b-ink)",
              maxWidth: 280,
              lineHeight: 1.25,
              zIndex: 3,
              border: "1px solid var(--b-line-soft)",
            }}
          >
            "Mostramos cada espacio como lo quiere ver el huésped."
          </motion.div>

          {/* Main image */}
          <Image
            src="/villa-1-fireplace.jpeg"
            alt="Hotel boutique, sala con chimenea"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Stamp */}
          <motion.div
            className="hero-stamp"
            initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            style={{
              position: "absolute",
              right: -36,
              bottom: 40,
              width: 110,
              height: 110,
              borderRadius: "50%",
              background: "var(--b-cream)",
              border: "1px solid var(--b-ink)",
              color: "var(--b-ink)",
              display: "grid",
              placeItems: "center",
              fontFamily: "var(--f-display)",
              fontStyle: "italic",
              fontSize: 13,
              lineHeight: 1.15,
              textAlign: "center",
              zIndex: 3,
              padding: 14,
            }}
          >
            Hoteles &amp;<br /><em>destinos</em><br />que enamoran
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
