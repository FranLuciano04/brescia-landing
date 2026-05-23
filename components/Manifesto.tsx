import { FadeUp, StaggerGrid, StaggerItem } from "./Motion";

const points = [
  { num: "/ 01", title: "Mirada\nde profesionales", body: "Sabemos qué busca un huésped antes de reservar. Diseñamos cada pieza desde ahí." },
  { num: "/ 02", title: "Estética\neditorial", body: "Color, luz y composición pensados como una revista, no como un feed más." },
  { num: "/ 03", title: "Estrategia\nmedible", body: "Cada serie de contenido responde a un objetivo: reservas, awareness o branding." },
  { num: "/ 04", title: "Producción\nliviana", body: "Equipos pequeños, presencia discreta. No interrumpimos la operación del hotel." },
];

export default function Manifesto() {
  return (
    <section
      className="manifesto-section"
      style={{
        background: "var(--b-ink)",
        padding: "90px 80px",
        color: "var(--b-cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 80% 30%, rgba(232,168,184,0.22), transparent 60%)",
        zIndex: 0,
      }} />

      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Eyebrow */}
        <FadeUp>
          <div style={{
            fontFamily: "var(--f-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--b-terracotta-soft)",
            marginBottom: 48,
            display: "flex",
            gap: 14,
            alignItems: "center",
          }}>
            <span style={{ display: "block", width: 28, height: 1, background: "var(--b-terracotta-soft)", flexShrink: 0 }} />
            05 · Manifiesto
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.1}>
          <h2 style={{
            fontFamily: "var(--f-display)",
            fontWeight: 300,
            fontSize: "clamp(40px, 6vw, 88px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "var(--b-cream)",
            margin: 0,
            maxWidth: 1100,
          }}>
            No creamos contenido
            <br />
            para llenar redes.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--b-terracotta)" }}>Creamos para posicionar.</em>
          </h2>
        </FadeUp>

        {/* Points */}
        <StaggerGrid
          className="manifesto-points"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
            marginTop: 100,
          }}
        >
          {points.map((p) => (
            <StaggerItem key={p.num}>
              <div style={{ paddingTop: 28, borderTop: "1px solid rgba(239,234,227,0.25)" }}>
                <span style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  color: "var(--b-terracotta-soft)",
                  marginBottom: 18,
                  display: "block",
                }}>
                  {p.num}
                </span>
                <h4 style={{
                  fontFamily: "var(--f-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: 32,
                  color: "var(--b-cream)",
                  margin: "0 0 14px",
                  lineHeight: 1.1,
                  whiteSpace: "pre-line",
                }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(239,234,227,0.7)", margin: 0 }}>
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
