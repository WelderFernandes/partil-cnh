"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { DotPattern } from "@/components/ui/dot-pattern";

const testimonials = [
  {
    quote:
      "Eu estava apavorada com estradas, mas a Sara foi tão calma. Ela realmente pausou a aula quando viu que eu estava ficando sobrecarregada.",
    name: "Emily R.",
    location: "São Paulo, SP",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMrpQG3UMLQzg5brRqszCgd0WSJd3gCGO8dy6JMn7CzAxNYuU57LkOMFATRKFBB95dQJkhul7SdsqZ-eJvE-U14B5L_vxeui47xiaUW55uIyXmEn4_Ha9VjD2ZNLS5_-QAc8MhG4rO7KGw9GBcuT0XFrVyHC4BzNqA26l1Ynawi1_uZ4tXX20fzCntZD6Bn0yJa05c-vKecO5rwX7qdMxItPQblbuBVKa5Ury4pc0bQSoFP8UsqffxkVU6wD1dBY3bC-70Inrlhsg",
    rating: 5,
  },
  {
    quote:
      "Meu instrutor Marcus era especialista em 'pânico de estacionamento'. Ele usou carrinhos de brinquedo para explicar os ângulos. Mudou tudo!",
    name: "James T.",
    location: "Curitiba, PR",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDce_K08efXIYxmgFXj7ZW8gUsky86jRdtqYzC4CsdvFJ-DqBkL6Oea4UcGYZaDkgZplvCfxDH4NsyOrCGv-zwSDsu6ottAJVhar3dxSaOJoN-s_XkcPjpcSBfLc3yR0l7U5J97KvDGnXxmxyj8HV_I6lk5lUzny-naiI0bwltdRSI9CnkkEE44bySgTUOA3ggKyK6bwlW7PHRtyEszhy6NCUTUWeITM82bZ_gwPbTQGK9m1puWIzSRMeSeftQKQBhlRT4lbRfUGuE",
    rating: 5,
  },
  {
    quote:
      "O recurso de compatibilidade é real. Combinei com um instrutor 'Silencioso e Solidário' porque não consigo conversar enquanto me concentro.",
    name: "Sofia L.",
    location: "Belo Horizonte, MG",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtaYRcUVYOjwtwk55hOPMOFSK6iR4yGlpk2xOgkmRZNAmGl9S4whP-3E4El8GWDppRWz83JsuQtZFtU1cEyxY84eGlG_AINCdT2b2mrPefdecBNAjzjM4HyaJvUR3-mC406mjEaeCIq2czm8b7wuAZdZgzBKVbCd7zok9vxFnY25trmSsUHzTg9igRz9Ou-GsylIgbZM1XHINmIOtUmNCTZhs33YPyA4lCdLim8ymUfjOldgzmYQxF_u5iejjN_07W-TNYoEw4R2E",
    rating: 4.5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-star text-star" : "fill-gray-200 text-gray-200"}`}
          viewBox="0 0 24 24"
        >
          <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <MagicCard
      className="shadow-card w-[350px] min-w-[300px] overflow-hidden rounded-3xl md:w-auto md:min-w-0"
      gradientColor="rgba(19, 236, 160, 0.08)"
      gradientFrom="#13eca0"
      gradientTo="#c6b6d9"
      gradientOpacity={0.3}
    >
      <div className="flex h-full flex-col gap-6 p-8">
        <StarRating rating={testimonial.rating} />
        <p className="text-foreground leading-relaxed font-medium">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="mt-auto flex items-center gap-4">
          <Image
            src={testimonial.avatar}
            alt={`Foto de ${testimonial.name}`}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="text-foreground text-sm font-bold">
              {testimonial.name}
            </p>
            <p className="text-text-muted text-xs">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </MagicCard>
  );
}

export function Testimonials() {
  return (
    <section className="bg-surface relative overflow-hidden py-24">
      {/* Dot Pattern Background */}
      <DotPattern
        className="[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-20"
        cr={0.8}
        width={24}
        height={24}
      />

      {/* Background decoration */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-30">
        <div className="bg-accent/30 absolute top-1/4 right-0 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <BlurFade className="max-w-lg" inView>
            <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Não acredite só na gente.
            </h2>
            <p className="text-text-muted text-lg">
              Ouça de alunos que acharam que nunca iriam dirigir.
            </p>
          </BlurFade>
        </div>

        {/* Desktop: Grid, Mobile: Marquee */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          {testimonials.map((t, i) => (
            <BlurFade key={t.name} delay={i * 0.15} inView>
              <TestimonialCard testimonial={t} />
            </BlurFade>
          ))}
        </div>

        <div className="md:hidden">
          <Marquee pauseOnHover className="[--duration:25s]">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
