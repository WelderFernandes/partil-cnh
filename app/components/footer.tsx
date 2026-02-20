export function Footer() {
  return (
    <footer className="border-glass-border relative border-t px-8 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        {/* Brand - Spans 2 cols */}
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-lg">
              <svg
                className="h-[18px] w-[18px]"
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
            <span className="text-foreground text-lg font-medium tracking-wide">
              Via Amiga
            </span>
          </div>
          <p className="text-text-muted max-w-sm font-light">
            Reinventando a educação de motoristas através das lentes do
            bem-estar emocional e empatia.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="border-card-border text-text-muted hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center rounded-full border transition-all"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="border-card-border text-text-muted hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center rounded-full border transition-all"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.944 2.013 9.284 2 11.714 2h.601zm-.391 1.442h-.479c-2.379 0-2.709.009-3.667.052-.885.04-1.365.187-1.685.311a2.8 2.8 0 00-1.04.677 2.8 2.8 0 00-.677 1.04c-.124.32-.27.8-.311 1.685-.043.958-.052 1.288-.052 3.667v.479c0 2.379.009 2.709.052 3.667.04.885.187 1.365.311 1.685.183.432.418.789.677 1.04.261.259.618.494 1.04.677.32.124.8.27 1.685.311.958.043 1.288.052 3.667.052h.479c2.379 0 2.709-.009 3.667-.052.885-.04 1.365-.187 1.685-.311a2.8 2.8 0 001.04-.677c.259-.261.494-.618.677-1.04.124-.32.27-.8.311-1.685.043-.958.052-1.288.052-3.667v-.479c0-2.379-.009-2.709-.052-3.667-.04-.885-.187-1.365-.311-1.685a2.8 2.8 0 00-.677-1.04 2.8 2.8 0 00-1.04-.677c-.32-.124-.8-.27-1.685-.311-.958-.043-1.288-.052-3.667-.052zM12 7.378a4.622 4.622 0 110 9.244 4.622 4.622 0 010-9.244zM12 9a3 3 0 100 6 3 3 0 000-6zm4.804-2.884a1.08 1.08 0 110 2.16 1.08 1.08 0 010-2.16z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Exploration Links */}
        <div className="space-y-6">
          <h4 className="text-text-muted text-sm font-medium tracking-widest uppercase">
            Exploração
          </h4>
          <ul className="text-foreground space-y-4 text-sm font-light">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Instrutores
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Nossa Abordagem
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Padrão de Segurança
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Preços
              </a>
            </li>
          </ul>
        </div>

        {/* Guidance Links */}
        <div className="space-y-6">
          <h4 className="text-text-muted text-sm font-medium tracking-widest uppercase">
            Orientação
          </h4>
          <ul className="text-foreground space-y-4 text-sm font-light">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Central de Suporte
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Portal do Instrutor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Serviço
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-card-border text-text-muted/60 mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-4 border-t pt-8 text-xs tracking-widest uppercase md:flex-row">
        <p>© 2024 Via Amiga. Todos os direitos reservados.</p>
        <p>Feito com intenção calma.</p>
      </div>
    </footer>
  );
}
