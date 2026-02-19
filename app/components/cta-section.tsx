"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView>
          <div className="from-primary via-primary-dark relative overflow-hidden rounded-3xl bg-gradient-to-br to-[#10221c] p-12 text-center md:p-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                Pronto para começar?
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-lg text-white/80">
                Junte-se a mais de 12.000 motoristas que superaram o medo e
                conquistaram a liberdade.
              </p>
              <ShimmerButton
                shimmerColor="rgba(19, 236, 160, 0.5)"
                background="white"
                className="mx-auto gap-2 px-8 py-4 text-base font-bold !text-[#10221c]"
              >
                Encontrar Meu Instrutor
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </ShimmerButton>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
