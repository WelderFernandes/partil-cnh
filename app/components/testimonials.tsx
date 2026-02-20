"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const testimonials = [
  {
    quote:
      "Eu nunca pensei que pudesse dirigir sem meu coração disparar. Sara criou um espaço onde estava tudo bem respirar. Não apenas aprendi a dirigir; aprendi a confiar em mim mesma.",
    name: "Emily R.",
    location: "São Paulo, SP",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMrpQG3UMLQzg5brRqszCgd0WSJd3gCGO8dy6JMn7CzAxNYuU57LkOMFATRKFBB95dQJkhul7SdsqZ-eJvE-U14B5L_vxeui47xiaUW55uIyXmEn4_Ha9VjD2ZNLS5_-QAc8MhG4rO7KGw9GBcuT0XFrVyHC4BzNqA26l1Ynawi1_uZ4tXX20fzCntZD6Bn0yJa05c-vKecO5rwX7qdMxItPQblbuBVKa5Ury4pc0bQSoFP8UsqffxkVU6wD1dBY3bC-70Inrlhsg",
    rating: 5,
  },
  {
    quote:
      "A compatibilidade do 'Vibe Check' é incrível. Meu instrutor Marcus entendeu exatamente como lidar com a ansiedade de estacionamento usando metáforas calmantes. Uma mudança total.",
    name: "James T.",
    location: "Curitiba, PR",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDce_K08efXIYxmgFXj7ZW8gUsky86jRdtqYzC4CsdvFJ-DqBkL6Oea4UcGYZaDkgZplvCfxDH4NsyOrCGv-zwSDsu6ottAJVhar3dxSaOJoN-s_XkcPjpcSBfLc3yR0l7U5J97KvDGnXxmxyj8HV_I6lk5lUzny-naiI0bwltdRSI9CnkkEE44bySgTUOA3ggKyK6bwlW7PHRtyEszhy6NCUTUWeITM82bZ_gwPbTQGK9m1puWIzSRMeSeftQKQBhlRT4lbRfUGuE",
    rating: 5,
  },
  {
    quote:
      "Encontrar um tipo 'Silencioso e Solidário' foi exatamente o que eu precisava. Sem conversa desnecessária, apenas encorajamento tranquilo e uma presença firme ao meu lado.",
    name: "Sofia L.",
    location: "Belo Horizonte, MG",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtaYRcUVYOjwtwk55hOPMOFSK6iR4yGlpk2xOgkmRZNAmGl9S4whP-3E4El8GWDppRWz83JsuQtZFtU1cEyxY84eGlG_AINCdT2b2mrPefdecBNAjzjM4HyaJvUR3-mC406mjEaeCIq2czm8b7wuAZdZgzBKVbCd7zok9vxFnY25trmSsUHzTg9igRz9Ou-GsylIgbZM1XHINmIOtUmNCTZhs33YPyA4lCdLim8ymUfjOldgzmYQxF_u5iejjN_07W-TNYoEw4R2E",
    rating: 4.5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="text-accent flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < Math.floor(rating) ? "fill-current" : "fill-current opacity-30"}`}
          viewBox="0 0 24 24"
        >
          <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative px-8 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <BlurFade className="mb-20 space-y-4 text-center" inView>
          <h2 className="font-display text-foreground text-4xl font-light md:text-5xl">
            Vozes da nossa{" "}
            <span className="text-accent italic">comunidade.</span>
          </h2>
          <p className="text-text-muted mx-auto max-w-xl font-light">
            Histórias reais de alunos que reconquistaram sua liberdade na
            estrada através de orientação gentil e especializada.
          </p>
        </BlurFade>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <BlurFade key={t.name} delay={i * 0.15} inView>
              <div
                className={`glass-panel flex flex-col gap-8 rounded-[3rem] p-10 transition-transform duration-500 ${
                  i === 1
                    ? "translate-y-8 hover:translate-y-6"
                    : "hover:-translate-y-2"
                }`}
              >
                <StarRating rating={t.rating} />
                <p className="text-foreground text-lg leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="border-glass-border h-12 w-12 rounded-full border-2 object-cover"
                  />
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      {t.name}
                    </p>
                    <p className="text-text-muted text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
