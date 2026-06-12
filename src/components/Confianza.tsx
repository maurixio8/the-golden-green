"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trustItems = [
  "Viajes diarios de finca",
  "Inventario por disponibilidad real",
  "Pedidos organizados antes de apertura",
];

export default function Confianza() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <span className="green-badge">Confianza</span>
            <h2 className="mt-4 font-serif text-4xl font-bold italic tracking-tight text-white sm:text-5xl">
              Movimiento temprano, producto fresco y pedidos claros.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              The Golden Green trabaja con disponibilidad real de bodega. Por
              eso cada pedido se separa después de confirmar producto y kilos.
            </p>

            <div className="mt-7 grid gap-3">
              {trustItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="flex items-center gap-3 rounded-2xl border border-line/80 bg-black/20 p-4"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-golden shadow-glow" />
                  <p className="text-sm font-semibold text-mist">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative h-80 overflow-hidden rounded-[2rem] border border-line sm:h-96"
            >
              <Image
                src="/images/selected/camion-bultos.jpg"
                alt="Camión cargado con bultos de aguacate"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm font-bold uppercase tracking-[0.2em] text-golden">
                Entrada de producto
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="relative h-56 overflow-hidden rounded-[2rem] border border-line"
            >
              <Image
                src="/images/selected/camion-aguacates.jpg"
                alt="Aguacates frescos sobre camión"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
