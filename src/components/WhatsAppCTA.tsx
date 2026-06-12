"use client";

import { motion } from "framer-motion";

type WhatsAppCTAProps = {
  whatsappHref: string;
};

export default function WhatsAppCTA({ whatsappHref }: WhatsAppCTAProps) {
  return (
    <section className="relative px-5 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[430px] overflow-hidden rounded-[2.25rem] border border-golden/30 bg-gradient-to-br from-golden/18 via-surface/90 to-brand/10 p-6 text-center shadow-glow backdrop-blur-xl md:max-w-3xl md:p-10"
      >
        <span className="gold-badge">Pedido por WhatsApp</span>
        <h2 className="mt-4 font-serif text-4xl font-bold italic tracking-tight text-white sm:text-5xl">
          Separa tu pedido para recoger en bodega
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-mist/85 sm:text-base">
          Dinos qué producto necesitas, cuántos kilos y a qué hora pasas por la
          bodega en Cajicá. Confirmamos disponibilidad antes de separar.
        </p>
        <a href={whatsappHref} className="gold-button mt-7 w-full sm:w-auto">
          Hacer pedido por WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
