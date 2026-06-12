"use client";

import { motion } from "framer-motion";

type ComoComprarProps = {
  whatsappHref: string;
};

const steps = [
  "Escríbenos por WhatsApp",
  "Indica producto, kilos y hora de recogida",
  "Confirmamos disponibilidad",
  "Recoges en la bodega en Cajicá",
];

export default function ComoComprar({ whatsappHref }: ComoComprarProps) {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <span className="green-badge">Cómo comprar</span>
            <h2 className="mt-4 font-serif text-4xl font-bold italic tracking-tight text-white sm:text-5xl">
              Simple: escribes, confirmamos y recoges.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Atención directa por WhatsApp para confirmar disponibilidad real y
              hora de recogida.
            </p>
            <a href={whatsappHref} className="gold-button mt-7 w-full sm:w-auto">
              Hacer pedido por WhatsApp
            </a>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.article
                key={step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-card rounded-[1.75rem] p-5 transition-all duration-300 hover:border-brand/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-golden/35 bg-golden/10 font-serif text-2xl font-bold italic text-golden">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-mist sm:text-lg">
                    {step}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
