import { FadeUp, AnimatedLink } from "./Motion";
import { WHATSAPP_LINK, EMAIL } from "@/lib/constants";

export default function Cta() {
  const waLink = WHATSAPP_LINK;

  return (
    <section
      id="contacto"
      className="cta-section"
      style={{
        background: "var(--b-cream)",
        color: "var(--b-ink)",
        padding: "100px 80px 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <div aria-hidden="true" style={{
        position: "absolute",
        left: -200, bottom: -200,
        width: 600, height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,168,184,0.55), transparent 70%)",
        zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1440, margin: "0 auto" }}>
        <FadeUp>
          <div style={{
            fontFamily: "var(--f-mono)",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--b-terracotta)",
            marginBottom: 36,
          }}>
            ¿Trabajamos juntos?
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 style={{
            fontFamily: "var(--f-display)",
            fontWeight: 300,
            fontSize: "clamp(56px, 12vw, 168px)",
            lineHeight: 0.92,
            letterSpacing: "-0.035em",
            color: "var(--b-ink)",
            margin: 0,
          }}>
            Nos encantaría
            <br />
            trabajar{" "}
            <em style={{ fontStyle: "italic", color: "var(--b-terracotta)" }}>con vos.</em>
          </h2>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div
            className="cta-bottom-row"
            style={{
              marginTop: 70,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 32,
            }}
          >
            <p style={{
              maxWidth: 480,
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--b-ink-soft)",
              margin: 0,
            }}>
              Contanos sobre tu hotel o destino. Te respondemos en menos de 24h
              con ideas, referencias y un presupuesto a medida.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <AnimatedLink
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                delay={0.35}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "22px 32px",
                  background: "var(--b-ink)",
                  color: "var(--b-cream)",
                  borderRadius: 999,
                  fontFamily: "var(--f-sans)",
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                WhatsApp directo
                <span style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "var(--b-terracotta)", color: "var(--b-ink)",
                  display: "inline-grid", placeItems: "center",
                  fontSize: 14, flexShrink: 0,
                }}>→</span>
              </AnimatedLink>

              <AnimatedLink
                href={`mailto:${EMAIL}`}
                delay={0.43}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "22px 28px",
                  borderRadius: 999,
                  border: "1px solid var(--b-ink)",
                  color: "var(--b-ink)",
                  fontFamily: "var(--f-sans)",
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                }}
              >
                bresciacreative@gmail.com
              </AnimatedLink>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
