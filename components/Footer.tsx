"use client";

import Image from "next/image";
import { WHATSAPP_LINK, INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL } from "@/lib/constants";

export default function Footer() {
  const waLink = WHATSAPP_LINK;

  return (
    <footer
      className="footer-outer"
      style={{
        background: "var(--b-ink)",
        color: "rgba(239,234,227,0.85)",
        padding: "90px 80px 36px",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Top grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 56,
            paddingBottom: 60,
            borderBottom: "1px solid rgba(239,234,227,0.18)",
          }}
        >
          {/* Brand */}
          <div>
            <Image
              src="/logo-dark.png"
              alt="Brescia Group"
              width={280}
              height={80}
              style={{ maxWidth: 280, height: "auto", display: "block", marginBottom: 22 }}
            />
            <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 320, margin: 0 }}>
              Estudio de content &amp; marketing especializado en turismo. Hoteles,
              destinos y experiencias que merecen contarse bien.
            </p>
          </div>

          {/* Estudio */}
          <div>
            <h5 style={{
              fontFamily: "var(--f-mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--b-terracotta-soft)",
              margin: "0 0 18px",
            }}>Estudio</h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Quiénes somos", href: "#quienes-somos" },
                { label: "Servicios", href: "#servicios" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Manifiesto", href: "#manifiesto" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{ color: "var(--b-cream)", textDecoration: "none", fontSize: 14 }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--b-terracotta)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--b-cream)")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h5 style={{
              fontFamily: "var(--f-mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--b-terracotta-soft)",
              margin: "0 0 18px",
            }}>Contacto</h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li><a href={waLink} target="_blank" rel="noopener noreferrer" style={{ color: "var(--b-cream)", textDecoration: "none", fontSize: 14 }}>WhatsApp</a></li>
              <li><a href={`mailto:${EMAIL}`} style={{ color: "var(--b-cream)", textDecoration: "none", fontSize: 14 }}>{EMAIL}</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--b-cream)", textDecoration: "none", fontSize: 14 }}>{INSTAGRAM_HANDLE}</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h5 style={{
              fontFamily: "var(--f-mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--b-terracotta-soft)",
              margin: "0 0 18px",
            }}>Trabajamos en</h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
              <li>Argentina · Brasil</li>
              <li>República Dominicana</li>
              <li>Y donde nos lleves</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="footer-bottom"
          style={{
            marginTop: 28,
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--f-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(239,234,227,0.5)",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>© 2026 Brescia Group</span>
          <span>Buenos Aires · Roaming</span>
          <span>Hecho con cuidado, no con prisa</span>
        </div>
      </div>
    </footer>
  );
}
