"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const productChips = [
  { name: "Papelillo", icon: "🥑" },
  { name: "Hass", icon: "🥑" },
  { name: "Plátano", icon: "🍌" },
];

export default function Hero({ whatsappHref }: { whatsappHref: string }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/bulto-abierto.jpg"
        alt="Bulto abierto con aguacates frescos"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0E0E0E] to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="section-shell relative z-10 w-full"
      >
        <div className="max-w-3xl">
          {/* Logo / Marca */}
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8A33A]">
              Distribuidora
            </p>
            <h1 className="font-[cursive] text-6xl font-bold leading-none text-white sm:text-7xl lg:text-8xl" style={{ fontFamily: "'Brush Script MT', 'Great Vibes', cursive, serif" }}>
              Aguacate
            </h1>
            <span className="mt-2 inline-block bg-[#C8A33A] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-black">
              The Golden Green
            </span>
          </div>

          {/* Slogan */}
          <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-[#C8A33A] sm:text-xl">
            &ldquo;Calidad que se siente,
            <br />
            confianza que se cultiva.&rdquo;
          </p>

          {/* Chips de producto */}
          <div className="mt-6 flex flex-wrap gap-3">
            {productChips.map((chip) => (
              <span
                key={chip.name}
                className="inline-flex items-center gap-2 rounded-full border border-[#5A6B2F]/50 bg-[#5A6B2F]/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
              >
                {chip.icon} {chip.name}
              </span>
            ))}
          </div>

          {/* CTA WhatsApp */}
          <div className="mt-8">
            <a
              href={whatsappHref}
              className="gold-button inline-flex items-center gap-3 px-10 py-5 text-base"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              320 488 0222
            </a>
            <p className="mt-2 text-sm text-[#B0B0B0]">
              Escríbenos por WhatsApp y recibe atención inmediata
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
