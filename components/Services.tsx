import Image from "next/image";
import { FadeUp, StaggerGrid, StaggerItem } from "./Motion";

interface ServiceCardProps {
  num: string;
  title: React.ReactNode;
  description: string;
  items: string[];
  visual: "video-terra" | "video-teal" | "photo";
  videoTitle?: React.ReactNode;
  videoMeta?: { type: string; dur: string; code: string; cat: string; loc: string };
  photoSrc?: string;
  photoAlt?: string;
  videoBgSrc?: string;
}

function ServiceCard({ num, title, description, items, visual, videoTitle, videoMeta, photoSrc, photoAlt, videoBgSrc }: ServiceCardProps) {
  const videoBg = videoBgSrc ? "transparent" : visual === "video-terra" ? "var(--b-terracotta)" : "var(--b-ink)";
  const videoColor = visual === "video-terra" ? "var(--b-cream-soft)" : "var(--b-cream)";

  return (
    <div
      className="svc-card-wrap"
      style={{
        background: "var(--b-cream)",
        border: "1px solid var(--b-line-soft)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {visual !== "photo" ? (
        <div
          className="b-video-overlay"
          style={{
            position: "relative",
            aspectRatio: "4/5",
            background: videoBg,
            color: videoColor,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 28,
            overflow: "hidden",
          }}
        >
          {videoBgSrc ? (
            <Image src={videoBgSrc} alt="" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" aria-hidden="true" />
          ) : (
            <>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "var(--f-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                opacity: 0.75,
                position: "relative",
                zIndex: 1,
              }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <span className="dot-blink" style={{ width: 8, height: 8, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
                  {videoMeta?.type} · {videoMeta?.dur}
                </span>
                <span>{videoMeta?.code}</span>
              </div>

              <div style={{
                fontFamily: "var(--f-display)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(36px, 3.5vw, 56px)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                position: "relative",
                zIndex: 1,
              }}>
                {videoTitle}
              </div>

              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                fontFamily: "var(--f-mono)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.7,
                position: "relative",
                zIndex: 1,
              }}>
                <span>{videoMeta?.cat}</span>
                <span>{videoMeta?.loc}</span>
              </div>
            </>
          )}
        </div>
      ) : (
        <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}>
          <Image src={photoSrc!} alt={photoAlt!} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
      )}

      <div style={{ padding: "32px 32px 36px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{
          fontFamily: "var(--f-mono)",
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--b-terracotta)",
          marginBottom: 18,
        }}>
          {num}
        </div>
        <h3 style={{
          fontFamily: "var(--f-display)",
          fontWeight: 400,
          fontSize: 36,
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
          color: "var(--b-ink)",
          margin: "0 0 18px",
        }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--b-ink-soft)", margin: "0 0 20px", flex: 1 }}>
          {description}
        </p>
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          paddingTop: 18,
          borderTop: "1px solid var(--b-line)",
        }}>
          {items.map((item) => (
            <li key={item} style={{
              fontFamily: "var(--f-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--b-ink-soft)",
              display: "flex",
              justifyContent: "space-between",
            }}>
              <span>{item}</span>
              <span style={{ fontFamily: "var(--f-sans)", color: "var(--b-terracotta)" }}>↗</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="svc-section"
      style={{
        background: "var(--b-cream-soft)",
        borderTop: "1px solid var(--b-line-soft)",
        padding: "90px 80px",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Header */}
        <FadeUp>
          <div
            className="svc-head-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              marginBottom: 90,
              alignItems: "end",
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
                02 · Servicios
              </div>
              <h2 style={{
                fontFamily: "var(--f-display)",
                fontWeight: 300,
                fontSize: "clamp(36px, 4.5vw, 64px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--b-ink)",
                margin: 0,
              }}>
                Tres formas de contar un{" "}
                <em style={{ fontStyle: "italic", color: "var(--b-terracotta)" }}>lugar.</em>
              </h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--b-ink-soft)", maxWidth: 460, margin: 0 }}>
              No hacemos todo para todos. Trabajamos con tres formatos donde
              realmente podemos elevar tu marca — cada uno pensado, planificado y
              producido en colaboración con tu equipo.
            </p>
          </div>
        </FadeUp>

        {/* Cards — staggered */}
        <StaggerGrid
          className="svc-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}
        >
          <StaggerItem>
            <ServiceCard
              num="/ 01"
              title={<>Audiovisual<br /><em style={{ fontStyle: "italic", color: "var(--b-terracotta)" }}>para hoteles</em></>}
              description="Reels y brand films que muestran la atmósfera, los rituales y los detalles que un huésped recordará. Producción liviana, mirada cuidada."
              items={["Brand film", "Reels mensuales", "Campañas de temporada"]}
              visual="video-terra"
              videoBgSrc="/audiovisual-hotel.jpeg"
              videoTitle={<>Aledaño,<br />antes del<br />amanecer.</>}
              videoMeta={{ type: "Brand film", dur: "02:14", code: "BRES · 014", cat: "Hotel", loc: "Villa La Angostura" }}
            />
          </StaggerItem>

          <StaggerItem>
            <ServiceCard
              num="/ 02"
              title={<>Audiovisual<br /><em style={{ fontStyle: "italic", color: "var(--b-terracotta)" }}>para destinos</em></>}
              description="Storytelling de territorio para entes de turismo, regiones y operadores. Documentamos lo que hace único a un lugar — y lo contamos como nadie."
              items={["Mini-documentales", "Series de cápsulas", "Cobertura de eventos"]}
              visual="video-teal"
              videoBgSrc="/audiovisual-destino.jpeg"
              videoTitle={<>Iguazú,<br />el sonido del<br /><em>agua.</em></>}
              videoMeta={{ type: "Mini-doc", dur: "04:38", code: "BRES · 009", cat: "Destino", loc: "Argentina" }}
            />
          </StaggerItem>

          <StaggerItem>
            <ServiceCard
              num="/ 03"
              title={<>Fotografía<br /><em style={{ fontStyle: "italic", color: "var(--b-terracotta)" }}>para redes</em></>}
              description="Bancos de imagen estética y consistente para sostener el feed durante meses sin perder calidad ni tono. Color, luz y composición editorial."
              items={["Feed mensual", "Lookbook estacional", "Editoriales de marca"]}
              visual="photo"
              photoSrc="/ilhagrande-cocktail.jpeg"
              photoAlt="Editorial Ilha Grande — cocktail junto al mar"
            />
          </StaggerItem>
        </StaggerGrid>
      </div>
    </section>
  );
}
