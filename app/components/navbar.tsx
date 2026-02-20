"use client";

import { useState, useEffect } from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <ScrollProgress className="from-primary via-accent to-primary h-[2px] bg-gradient-to-r" />
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "border-b border-white/60 bg-white/70 shadow-sm backdrop-blur-xl"
            : ""
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/50 bg-white/60 shadow-sm backdrop-blur-md">
              <svg
                className="text-primary h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>
            <span className="text-xl font-medium tracking-wide">Via Amiga</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 md:flex">
            <a
              href="#"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Nossa Filosofia
            </a>
            <a
              href="#"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Segurança
            </a>
            <div className="h-4 w-px bg-gray-200" />
            <a
              href="#"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Entrar
            </a>
            <button className="bg-primary/90 hover:bg-primary rounded-full px-8 py-3.5 text-sm font-medium text-white shadow-lg transition-all hover:scale-[1.02] active:scale-95">
              Comece Sua Jornada
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/50 transition-colors hover:bg-white/80 md:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
            mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 border-t border-white/40 bg-white/60 px-6 py-4 backdrop-blur-xl">
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="hover:bg-primary/10 hover:text-primary rounded-2xl px-4 py-3 text-base font-medium transition-colors"
            >
              Nossa Filosofia
            </a>
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="hover:bg-primary/10 hover:text-primary rounded-2xl px-4 py-3 text-base font-medium transition-colors"
            >
              Segurança
            </a>
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="hover:bg-primary/10 hover:text-primary rounded-2xl px-4 py-3 text-base font-medium transition-colors"
            >
              Entrar
            </a>
            <div className="mt-2 px-4 pb-2">
              <button
                onClick={() => setMobileOpen(false)}
                className="bg-primary w-full rounded-full px-8 py-4 text-base font-medium text-white shadow-lg transition-all active:scale-95"
              >
                Comece Sua Jornada
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
