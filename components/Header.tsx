"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(239,234,227,0.95)" : "var(--b-cream)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid var(--b-line-soft)",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 60px",
        }}
      >
        {/* Logo */}
        <a href="#" aria-label="Brescia Group — inicio">
          <Image
            src="/logo-light.png"
            alt="Brescia Group"
            width={160}
            height={36}
            style={{ height: 36, width: "auto" }}
            priority
          />
        </a>

        {/* Nav desktop */}
        <nav
          style={{
            display: "flex",
            gap: 38,
            fontFamily: "var(--f-sans)",
            fontSize: 13,
            letterSpacing: "0.02em",
            color: "var(--b-ink-soft)",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: "inherit", textDecoration: "none" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--b-terracotta)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--b-ink-soft)")
              }
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Status pill */}
        <div
          style={{
            fontFamily: "var(--f-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--b-ink-mute)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
          className="hidden md:flex"
        >
          <span
            className="pulse-dot"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--b-terracotta)",
              display: "inline-block",
            }}
          />
          Aceptando proyectos
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--b-ink)",
            padding: 8,
          }}
        >
          <span style={{ fontSize: 22 }}>{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--b-cream)",
            borderTop: "1px solid var(--b-line-soft)",
            padding: "24px 32px 32px",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              fontFamily: "var(--f-sans)",
              fontSize: 16,
              color: "var(--b-ink-soft)",
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ color: "inherit", textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
