"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { NumberTicker } from "@/components/ui/number-ticker";

export function ImageGrid() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto grid h-auto max-w-7xl grid-cols-1 gap-6 md:h-[500px] md:grid-cols-12">
        {/* Main Hero Image */}
        <BlurFade
          delay={0.1}
          className="group shadow-card relative h-[300px] overflow-hidden rounded-3xl md:col-span-8 md:h-full"
          inView
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzindv1ic36Nkg1aE2QeSO6lKqcWkSrFBmOQrinWF-7H9Z7FhlGSjdSlwZ6I-n4UcXjHrevmZXJ8jLco0KbRh8ow1mqeVJ0oabviPgRsgpKcS4kQJThnXBKUPER1UItuldU44IVAdifjbHb4jdBfUlC7TtROZukzJhk0K1hifPPUGw1inj1e0j0DtS7mh3BZclLnyb5V7T5VkWe3Vhv6iwmhJ-5bZHej-VTzGlItid_Eeb2bcGI_GX7kbINz3tHTA5XE_cVFIQrbQ"
            alt="Aluna relaxada sorrindo enquanto dirige"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute bottom-6 left-6 z-20 text-white">
            <div className="mb-2 inline-block rounded-lg bg-white/20 px-4 py-2 backdrop-blur-md">
              <span className="text-sm font-semibold">Destaque</span>
            </div>
            <p className="text-2xl font-bold">
              &ldquo;Eu finalmente tirei minha CNH aos 28!&rdquo;
            </p>
          </div>
        </BlurFade>

        {/* Right stack */}
        <div className="flex h-full flex-col gap-6 md:col-span-4">
          {/* Stat Card */}
          <BlurFade delay={0.2} inView className="flex-1">
            <MagicCard
              className="shadow-card flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl"
              gradientColor="rgba(19, 236, 160, 0.15)"
              gradientFrom="#13eca0"
              gradientTo="#c6b6d9"
              gradientOpacity={0.5}
            >
              <div className="relative flex flex-col items-center justify-center p-8 text-center">
                <div className="bg-accent/20 absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-bl-full" />
                <span className="text-primary mb-2 text-5xl font-bold">
                  <NumberTicker value={12000} className="text-primary" />+
                </span>
                <p className="text-text-muted font-medium">
                  Motoristas ansiosos agora na estrada
                </p>
              </div>
            </MagicCard>
          </BlurFade>

          {/* Mini Feature */}
          <BlurFade delay={0.3} inView className="flex-1">
            <MagicCard
              className="shadow-card flex h-full overflow-hidden rounded-3xl"
              gradientColor="rgba(19, 236, 160, 0.1)"
              gradientFrom="#13eca0"
              gradientTo="#c6b6d9"
              gradientOpacity={0.3}
            >
              <div className="bg-primary/5 flex flex-col justify-center p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="bg-surface text-primary flex h-12 w-12 items-center justify-center rounded-full shadow-sm">
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
                    <p className="text-foreground font-bold">
                      Segurança Emocional
                    </p>
                    <p className="text-text-muted text-sm">Prioridade #1</p>
                  </div>
                </div>
                <p className="text-foreground text-sm">
                  Combinamos você com instrutores baseado na personalidade, não
                  apenas na localização.
                </p>
              </div>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
