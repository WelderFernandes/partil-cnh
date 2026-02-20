"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function CtaSection() {
  return (
    <section className="px-8 py-32">
      <div className="group relative mx-auto max-w-5xl">
        {/* Glow Behind */}
        <div className="bg-primary/20 absolute inset-0 rounded-[4rem] blur-3xl transition-transform duration-1000 group-hover:scale-110" />

        <BlurFade inView>
          <div className="glass-panel relative overflow-hidden rounded-[4rem] p-16 text-center">
            {/* Decorative Orb */}
            <div className="bg-accent/20 absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl" />

            <div className="relative space-y-10">
              <h2 className="font-display text-foreground mx-auto max-w-2xl text-4xl font-light md:text-5xl">
                Pronto para começar sua{" "}
                <span className="text-primary italic">jornada tranquila</span>?
              </h2>
              <p className="text-text-muted mx-auto max-w-md font-light">
                Junte-se a mais de 12.000 pessoas que transformaram seu medo de
                dirigir em confiança silenciosa. Estamos com você em cada curva.
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <ShimmerButton
                  shimmerColor="rgba(110, 198, 165, 0.5)"
                  background="#6ec6a5"
                  className="w-full gap-2 rounded-full px-10 py-5 text-lg font-medium !text-white sm:w-auto"
                >
                  Encontrar Seu Mentor Gentil
                </ShimmerButton>
                <button className="border-primary/20 text-foreground hover:bg-glass-bg w-full rounded-full border px-10 py-5 text-lg font-medium transition-all sm:w-auto">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
