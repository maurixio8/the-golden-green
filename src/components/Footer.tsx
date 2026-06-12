type FooterProps = {
  whatsappHref: string;
};

export default function Footer({ whatsappHref }: FooterProps) {
  return (
    <footer className="relative z-10 border-t border-line/80 bg-[#060906]/86 px-5 py-8 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[430px] flex-col gap-5 md:max-w-6xl md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-golden/40 bg-golden/10 font-serif text-lg font-bold italic text-golden">
              GG
            </span>
            <div>
              <p className="font-serif text-2xl font-bold italic tracking-tight text-white">
                The Golden Green
              </p>
              <p className="text-xs text-muted">Cajicá, Colombia</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted">© 2026 The Golden Green</p>
        </div>

        <a href={whatsappHref} className="outline-button w-full md:w-auto">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
