"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-8 pt-40 pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left: Text Content */}
        <div className="relative z-10 space-y-8">
          {/* Badge */}
          <BlurFade inView>
            <div className="border-glass-border bg-glass-bg text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
              <span className="animate-pulse-dot bg-primary h-1.5 w-1.5 rounded-full" />
              <AnimatedShinyText shimmerWidth={120}>
                <span>Um jeito mais gentil de aprender</span>
              </AnimatedShinyText>
            </div>
          </BlurFade>

          {/* Heading */}
          <BlurFade delay={0.1} offset={20} inView>
            <h1 className="font-display text-foreground text-5xl leading-[1.1] font-light md:text-7xl">
              O caminho guiado <br />
              <span className="font-serif italic opacity-80">
                para a sua
              </span>{" "}
              <br />
              <span className="text-primary font-medium">confiança.</span>
            </h1>
          </BlurFade>

          {/* Subheading */}
          <BlurFade delay={0.2} inView>
            <p className="text-text-muted max-w-lg text-lg leading-relaxed font-light md:text-xl">
              Deixe a ansiedade para trás. Conectamos você com mentores gentis
              que cultivam paz de espírito tão eficazmente quanto habilidade
              técnica.
            </p>
          </BlurFade>

          {/* Search Bar */}
          <BlurFade delay={0.3} className="group relative max-w-md" inView>
            <div className="bg-primary-soft absolute -inset-4 rounded-[3rem] opacity-0 blur-2xl transition-opacity duration-700 group-focus-within:opacity-100" />
            <div className="shadow-magic border-glass-border bg-glass-bg relative flex items-center rounded-full border p-2 ring-1 ring-black/5 backdrop-blur-md dark:ring-white/5">
              <div className="text-primary/60 pl-5">
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <input
                className="text-foreground placeholder:text-text-muted/50 w-full border-none bg-transparent px-4 text-base focus:ring-0 focus:outline-none"
                placeholder="Digite seu CEP..."
                type="text"
              />
              <button className="bg-primary rounded-full px-8 py-4 font-medium text-white transition-all hover:shadow-lg hover:brightness-105 active:scale-95">
                Encontrar Mentor
              </button>
            </div>
          </BlurFade>

          {/* Trust Badges */}
          <BlurFade delay={0.4} inView>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-text-muted flex items-center gap-2.5 text-sm font-light">
                <svg
                  className="text-primary/70 h-[18px] w-[18px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Testados em Paciência
              </div>
              <div className="text-text-muted flex items-center gap-2.5 text-sm font-light">
                <svg
                  className="text-primary/70 h-[18px] w-[18px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                Segurança Emocional
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Right: Hero Image */}
        <BlurFade
          delay={0.2}
          className="relative flex items-center justify-center lg:h-[600px]"
          inView
        >
          {/* Background Shape */}
          <div className="asymmetric-shape floating-element from-primary/10 to-accent/20 absolute inset-0 bg-gradient-to-br opacity-60 blur-2xl" />

          {/* Main Image */}
          <div className="relative aspect-square w-full max-w-[500px]">
            <div className="border-glass-border absolute inset-0 rotate-3 transform overflow-hidden rounded-[3rem] border-8 shadow-2xl transition-transform duration-1000 hover:rotate-0">
              <Image
                src="/hero-driving.jpg"
                alt="Uma jornada de condução serena"
                fill
                className="object-cover brightness-110 grayscale-[0.2]"
                priority
              />
              <div className="from-accent/30 to-primary/20 absolute inset-0 bg-gradient-to-tr via-transparent mix-blend-soft-light" />
            </div>

            {/* Floating Card: Top-Right */}
            <div
              className="glass-panel floating-element absolute -top-10 -right-10 rounded-3xl p-6"
              style={{ animationDelay: "-2s" }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 text-primary flex h-12 w-12 items-center justify-center rounded-full">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-text-muted text-xs tracking-widest uppercase">
                    Nível de Ansiedade
                  </p>
                  <p className="text-foreground font-medium">0% Estresse</p>
                </div>
              </div>
            </div>

            {/* Floating Card: Bottom-Left */}
            <div
              className="glass-panel floating-element absolute -bottom-10 -left-10 rounded-3xl p-6"
              style={{ animationDelay: "-4s" }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-accent/20 text-accent flex h-12 w-12 items-center justify-center rounded-full">
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
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-text-muted text-xs tracking-widest uppercase">
                    Compatibilidade
                  </p>
                  <p className="text-foreground font-medium">Vibe Aprovada</p>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
