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
      <div className="header-inner">
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
        <nav className="header-nav">
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
        <div className="header-status">
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
          className="header-hamburger"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
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
