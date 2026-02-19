"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { SparklesText } from "@/components/ui/sparkles-text";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { WordRotate } from "@/components/ui/word-rotate";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 text-center">
      {/* Background Blobs */}
      <div className="blob-shape bg-accent/20 absolute top-20 left-10 -z-10 h-64 w-64 animate-pulse blur-3xl" />
      <div className="blob-shape bg-primary/10 absolute right-10 bottom-20 -z-10 h-80 w-80 blur-3xl" />

      <div className="z-10 mx-auto flex max-w-4xl flex-col items-center gap-8">
        {/* Badge */}
        <BlurFade inView>
          <div className="bg-surface inline-flex items-center gap-2 rounded-full border border-gray-100 px-4 py-2 shadow-sm">
            <span className="animate-pulse-dot bg-primary h-2 w-2 rounded-full" />
            <AnimatedShinyText shimmerWidth={120}>
              <span className="text-xs font-semibold tracking-wide uppercase">
                Novo: Garantia Anti-Ansiedade
              </span>
            </AnimatedShinyText>
          </div>
        </BlurFade>

        {/* Heading */}
        <BlurFade delay={0.1} offset={20} inView>
          <h1 className="text-foreground text-4xl leading-tight font-bold tracking-tight md:text-6xl lg:text-7xl">
            Aprenda a dirigir
            <br />
            <SparklesText
              className="text-primary inline text-4xl leading-tight font-bold tracking-tight md:text-6xl lg:text-7xl"
              colors={{ first: "#13eca0", second: "#c6b6d9" }}
              sparklesCount={6}
            >
              sem pânico.
            </SparklesText>
          </h1>
        </BlurFade>

        {/* Subheading with WordRotate */}
        <BlurFade delay={0.2} inView>
          <p className="text-text-muted max-w-2xl text-lg leading-relaxed md:text-xl">
            Conecte-se com instrutores empáticos que priorizam sua{" "}
            <WordRotate
              className="text-primary inline-block font-semibold"
              words={[
                "paz de espírito",
                "confiança",
                "tranquilidade",
                "segurança",
              ]}
              duration={3000}
            />
            . Sem gritos, apenas aprendizado.
          </p>
        </BlurFade>

        {/* Search Component */}
        <BlurFade
          delay={0.3}
          className="group relative mt-4 w-full max-w-2xl"
          inView
        >
          <div className="from-primary to-accent absolute -inset-1 rounded-full bg-gradient-to-r opacity-25 blur transition duration-500 group-hover:opacity-50" />
          <div className="shadow-soft bg-surface relative flex w-full items-center rounded-full p-2 transition-shadow duration-300 hover:shadow-xl">
            <div className="text-text-muted pl-6">
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
              className="text-foreground h-14 w-full border-none bg-transparent px-4 text-lg placeholder:text-gray-400 focus:ring-0 focus:outline-none"
              placeholder="Digite seu CEP..."
              type="text"
            />
            <button className="bg-primary hover:bg-primary-dark hidden h-12 items-center justify-center rounded-full px-8 font-bold whitespace-nowrap text-[#10221c] transition-colors sm:flex">
              Encontrar Mentor
            </button>
            <button className="bg-primary hover:bg-primary-dark ml-2 flex h-12 w-12 items-center justify-center rounded-full text-[#10221c] transition-colors sm:hidden">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </BlurFade>

        {/* Trust Badges */}
        <BlurFade delay={0.4} inView>
          <div className="text-text-muted mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium md:gap-8">
            {[
              {
                icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
                label: "Testados em Paciência",
              },
              {
                icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
                label: "Carros Duplo Comando",
              },
              {
                icon: "M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z",
                label: "Garantia de Satisfação",
              },
            ].map((badge) => (
              <div
                key={badge.label}
                className="bg-surface/50 flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm"
              >
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
                    d={badge.icon}
                  />
                </svg>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
