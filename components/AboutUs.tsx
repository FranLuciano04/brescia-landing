import Image from "next/image";
import { FadeUp, SlideLeft, SlideRight } from "./Motion";

export default function AboutUs() {
  return (
    <section
      id="quienes-somos"
      className="who-section"
      style={{
        padding: "90px 80px",
        display: "grid",
        gridTemplateColumns: "0.9fr 1.1fr",
        gap: 96,
        alignItems: "start",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >
      {/* Images */}
      <SlideLeft>
        <div
          className="who-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}
        >
          <div style={{ position: "relative", aspectRatio: "3/4", marginTop: 40, overflow: "hidden" }}>
            <Image
              src="/founders-1.jpeg"
              alt="Oriana y Valentina, fundadoras de Brescia Group"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
            <Image
              src="/founders-iguazu.jpeg"
              alt="Oriana y Valentina en Iguazú"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
        </div>
      </SlideLeft>

      {/* Text */}
      <SlideRight delay={0.1}>
        <div className="who-text" style={{ paddingTop: 24 }}>
          <FadeUp>
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
              01 · Quiénes somos
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 style={{
              fontFamily: "var(--f-display)",
              fontWeight: 400,
              fontSize: "clamp(36px, 4.5vw, 64px)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "var(--b-ink)",
              margin: "0 0 32px 0",
            }}>
              Dos miradas, una misma{" "}
              <em style={{ fontStyle: "italic", color: "var(--b-terracotta)" }}>obsesión</em>{" "}
              por el detalle.
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div style={{ fontSize: 17, lineHeight: 1.65, color: "var(--b-ink-soft)", maxWidth: 520 }}>
              <p>
                Nos formamos en turismo antes que en marketing. Eso cambia todo:
                entendemos cómo un huésped elige, qué busca cuando entra al feed de
                un hotel y por qué algunos destinos enamoran de inmediato.
              </p>
              <p style={{ marginTop: 18 }}>
                Vivimos la experiencia, la interpretamos y la transformamos en
                contenido que conecta — sin clichés, sin filtros que mientan. Lo
                justo para que alguien diga:{" "}
                <em style={{ fontStyle: "italic" }}>quiero estar ahí.</em>
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.32}>
            <div style={{ marginTop: 48, display: "flex", gap: 48 }}>
              {[
                { name: "Oriana", role: "Lic. en Turismo" },
                { name: "Valentina", role: "Lic. en Turismo" },
              ].map((s) => (
                <div key={s.name}>
                  <div style={{
                    fontFamily: "var(--f-display)",
                    fontStyle: "italic",
                    fontSize: 32,
                    color: "var(--b-ink)",
                    lineHeight: 1,
                  }}>
                    {s.name}
                  </div>
                  <div style={{
                    fontFamily: "var(--f-mono)",
                    fontSize: 9,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--b-ink-mute)",
                    marginTop: 10,
                  }}>
                    {s.role}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </SlideRight>
    </section>
  );
}
