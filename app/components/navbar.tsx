"use client";

import { ScrollProgress } from "@/components/ui/scroll-progress";

export function Navbar() {
  return (
    <>
      <ScrollProgress className="from-primary via-accent to-primary h-[2px] bg-gradient-to-r" />
      <header className="bg-background/90 fixed top-0 right-0 left-0 z-50 border-b border-gray-100/50 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-full">
              <svg
                className="h-5 w-5"
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
            <h1 className="text-foreground text-xl font-bold tracking-tight">
              Via Amiga
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="text-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              Para Instrutores
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              Entrar
            </a>
            <button className="bg-primary shadow-soft hover:bg-primary-dark transform rounded-full px-6 py-3 text-sm font-bold text-[#10221c] transition-all hover:-translate-y-0.5 hover:shadow-lg">
              Cadastre-se
            </button>
          </div>

          {/* Mobile Menu */}
          <button className="text-foreground p-2 md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
