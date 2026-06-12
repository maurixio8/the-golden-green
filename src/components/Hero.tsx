"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type HeroProps = {
  whatsappHref: string;
};

const productChips = ["Papelillo / Lorena", "Hass", "Plátano"];

export default function Hero({ whatsappHref }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-9 pt-8 md:items-center md:py-16">
      <Image
        src="/images/selected/bulto-abierto.jpg"
        alt="Bulto abierto con aguacates frescos de The Golden Green"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-[#060906]/70 to-[#060906]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#060906] to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="section-shell relative z-10"
      >
        <div className="max-w-3xl">
          <span className="gold-badge animate-glow-pulse">The Golden Green</span>
          <h1 className="mt-5 font-serif text-5xl font-bold italic leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Aguacate y plátano fresco para tu negocio
          </h1>
          <p className="mt-5 max-w-full text-base font-light leading-7 text-mist/90 sm:max-w-xl sm:text-lg">
            Pedidos por kilos para recoger en bodega en Cajicá. Producto fresco,
            disponibilidad clara y atención directa por WhatsApp.
          </p>

          <div className="mt-7 grid max-w-full gap-3 sm:flex sm:flex-row">
            <a
              href={whatsappHref}
              className="gold-button animate-pulse-scale w-full max-w-full whitespace-normal sm:w-auto"
            >
              Hacer pedido por WhatsApp
            </a>
            <a
              href="#productos"
              className="outline-button w-full max-w-full whitespace-normal sm:w-auto"
            >
              Ver productos
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {productChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-mist backdrop-blur"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:max-w-3xl">
          {[
            ["Cajicá", "Recogida en bodega"],
            ["3 AM - 3 PM", "Atención temprana"],
            ["Por kilos", "Pedidos organizados"],
          ].map(([title, text]) => (
            <div key={title} className="glass-card rounded-2xl p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-golden">
                {title}
              </p>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
