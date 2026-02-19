import {
  CarIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  UsersIcon,
} from "./components/icons";

const testimonials = [
  {
    quote:
      "Eu estava apavorada com estradas, mas a Sara foi tão calma. Ela realmente pausou a aula quando viu que eu estava ficando sobrecarregada.",
    name: "Emily R.",
    location: "São Paulo, SP",
    rating: 5,
  },
  {
    quote:
      "Meu instrutor Marcus era especialista em 'pânico de estacionamento'. Ele usou carrinhos de brinquedo para explicar os ângulos antes de entrarmos no carro. Mudou tudo!",
    name: "James T.",
    location: "Curitiba, PR",
    rating: 5,
  },
  {
    quote:
      "O recurso de compatibilidade é real. Combinei com um instrutor do tipo 'Silencioso e Solidário' porque não consigo conversar enquanto me concentro. Combinação perfeita.",
    name: "Sofia L.",
    location: "Belo Horizonte, MG",
    rating: 5,
  },
];

const features = [
  {
    icon: HeartIcon,
    title: "Segurança Emocional",
    description:
      "Priorizamos seu conforto emocional. Instrutores treinados para lidar com ansiedade no trânsito.",
  },
  {
    icon: UsersIcon,
    title: "Match Personalizado",
    description:
      "Combinamos você com instrutores com base na personalidade, não apenas na localização.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Sem Pressão",
    description:
      "Sem gritos, sem julgamentos. Apenas aprendizado no seu ritmo, com paciência e empatia.",
  },
  {
    icon: SparklesIcon,
    title: "Método Exclusivo",
    description:
      "Técnicas práticas e criativas que transformam medo em confiança ao volante.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* ═══════════════════════ NAVBAR ═══════════════════════ */}
      <nav className="border-card-border/50 bg-background/80 fixed top-0 z-50 w-full border-b backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-xl">
              <CarIcon className="text-accent h-5 w-5" />
            </div>
            <span className="text-foreground text-xl font-bold tracking-tight">
              Via Amiga
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-muted hover:text-foreground text-sm font-medium transition-colors"
            >
              Recursos
            </a>
            <a
              href="#testimonials"
              className="text-muted hover:text-foreground text-sm font-medium transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#instructors"
              className="text-muted hover:text-foreground text-sm font-medium transition-colors"
            >
              Instrutores
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-muted hover:text-foreground text-sm font-medium transition-colors"
            >
              Entrar
            </a>
            <a
              href="#"
              className="bg-primary text-accent hover:bg-primary-dark hover:shadow-primary/25 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:shadow-lg"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative flex min-h-screen items-center pt-20">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float bg-primary/10 absolute -top-40 right-0 h-[600px] w-[600px] rounded-full blur-3xl" />
          <div className="animate-float animation-delay-400 bg-primary/5 absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left content */}
            <div className="animate-fade-in-up max-w-2xl">
              <div className="border-primary/20 bg-primary-light/30 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
                <SparklesIcon className="text-primary h-4 w-4" />
                <span className="text-primary-dark dark:text-primary text-sm font-medium">
                  Prioridade #1: Sua Tranquilidade
                </span>
              </div>

              <h1 className="text-foreground mb-6 text-5xl leading-tight font-bold tracking-tight md:text-6xl lg:text-7xl">
                Aprenda a dirigir{" "}
                <span className="from-primary to-primary-dark bg-gradient-to-r bg-clip-text text-transparent">
                  sem pânico.
                </span>
              </h1>

              <p className="text-muted mb-8 max-w-lg text-lg leading-relaxed md:text-xl">
                Conecte-se com instrutores empáticos que priorizam sua paz de
                espírito. Sem gritos, apenas aprendizado.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="animate-pulse-glow bg-primary text-accent hover:bg-primary-dark inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:shadow-xl"
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
                </a>
                <a
                  href="#"
                  className="border-card-border bg-background text-foreground hover:border-primary/50 hover:bg-card-bg inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-base font-semibold transition-all"
                >
                  Para Instrutores
                </a>
              </div>

              {/* Social proof */}
              <div className="animate-fade-in-up animation-delay-400 mt-12 flex items-center gap-8">
                <div>
                  <p className="text-primary text-3xl font-bold">12k+</p>
                  <p className="text-muted text-sm">
                    motoristas ansiosos agora na estrada
                  </p>
                </div>
                <div className="bg-card-border h-10 w-px" />
                <div>
                  <p className="text-foreground text-3xl font-bold">4.9</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="fill-primary text-primary h-3.5 w-3.5"
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-card-border h-10 w-px" />
                <div>
                  <p className="text-foreground text-3xl font-bold">98%</p>
                  <p className="text-muted text-sm">taxa de aprovação</p>
                </div>
              </div>
            </div>

            {/* Right - Quote card */}
            <div className="animate-fade-in-up animation-delay-600 relative hidden lg:block">
              <div className="animate-float border-card-border bg-card-bg/80 shadow-primary/5 relative rounded-3xl border p-8 shadow-2xl backdrop-blur-sm">
                <div className="bg-primary absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-2xl">
                  <span className="text-accent text-xl font-bold">"</span>
                </div>
                <p className="text-foreground mb-6 text-lg leading-relaxed italic">
                  "Eu finalmente tirei minha CNH aos 28 anos! Achei que nunca
                  conseguiria, mas a Via Amiga mudou tudo."
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                    MR
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">
                      Maria R.
                    </p>
                    <p className="text-muted text-xs">Rio de Janeiro, RJ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FEATURES ═══════════════════════ */}
      <section id="features" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Por que somos <span className="text-primary">diferentes?</span>
            </h2>
            <p className="text-muted mx-auto max-w-2xl text-lg">
              Não somos apenas uma autoescola. Somos uma comunidade que entende
              o medo e transforma em confiança.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group border-card-border bg-card-bg/50 hover:border-primary/30 hover:shadow-primary/5 relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors">
                  <feature.icon className="text-primary h-7 w-7" />
                </div>
                <h3 className="text-foreground mb-3 text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
      <section id="testimonials" className="relative py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float bg-primary/5 absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Não acredite só na gente.
            </h2>
            <p className="text-muted mx-auto max-w-2xl text-lg">
              Ouça de alunos que acharam que nunca iriam dirigir.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="group border-card-border bg-card-bg/50 hover:border-primary/30 hover:shadow-primary/5 relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="fill-primary text-primary h-4 w-4"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-muted text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="from-primary via-primary-dark to-accent relative overflow-hidden rounded-[2rem] bg-gradient-to-br p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

            <div className="relative">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Pronto para começar?
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-lg text-white/80">
                Junte-se a mais de 12.000 motoristas que superaram o medo e
                conquistaram a liberdade.
              </p>
              <a
                href="#"
                className="text-accent inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold transition-all hover:scale-105 hover:shadow-2xl"
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
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="border-card-border border-t py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <a href="#" className="mb-4 flex items-center gap-2">
                <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-xl">
                  <CarIcon className="text-accent h-5 w-5" />
                </div>
                <span className="text-foreground text-xl font-bold">
                  Via Amiga
                </span>
              </a>
              <p className="text-muted text-sm leading-relaxed">
                Direção sem estresse. Aprendizado com empatia.
              </p>
            </div>

            <div>
              <h4 className="text-foreground mb-4 text-sm font-semibold">
                Plataforma
              </h4>
              <ul className="space-y-3">
                {["Instrutores", "Sobre Nós", "Preços", "Blog"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted hover:text-foreground text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground mb-4 text-sm font-semibold">
                Segurança
              </h4>
              <ul className="space-y-3">
                {["Privacidade", "Termos de Uso", "Suporte", "FAQ"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-muted hover:text-foreground text-sm transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground mb-4 text-sm font-semibold">
                Contato
              </h4>
              <ul className="space-y-3">
                {[
                  "contato@viaamiga.com.br",
                  "Suporte 24h",
                  "Instagram",
                  "LinkedIn",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted hover:text-foreground text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-card-border mt-12 border-t pt-8 text-center">
            <p className="text-muted text-sm">
              © 2026 Via Amiga. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
