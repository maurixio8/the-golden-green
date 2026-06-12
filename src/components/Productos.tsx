"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Papelillo / Lorena",
    label: "Producto estrella",
    image: "/images/selected/mano-aguacate.jpg",
    alt: "Aguacate Papelillo seleccionado en mano",
    text: "El protagonista de la bodega: aguacate fresco, seleccionado por estado de maduración y pedido por kilos.",
  },
  {
    name: "Hass",
    label: "Según disponibilidad",
    image: "/images/selected/canastillas-aguacate.jpg",
    alt: "Canastillas con aguacate fresco en bodega",
    text: "Se confirma por WhatsApp según entrada real de bodega. Atención clara antes de separar el pedido.",
  },
  {
    name: "Plátano",
    label: "Pedido por kilos",
    image: "/images/selected/bodega-canastillas.jpg",
    alt: "Bodega con producto fresco organizado por canastillas",
    text: "Disponible para negocios y clientes de bodega. La confirmación se hace directamente por WhatsApp.",
  },
];

const freshness = [
  "Producto seleccionado a diario",
  "Diferentes estados de maduración",
  "Atención para negocios y clientes de bodega",
];

export default function Productos() {
  return (
    <section id="productos" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="green-badge">Productos</span>
          <h2 className="mt-4 font-serif text-4xl font-bold italic tracking-tight text-white sm:text-5xl">
            Papelillo primero. Frescura real de bodega.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Cada pedido se confirma por disponibilidad, kilos requeridos y hora
            de recogida.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card group overflow-hidden rounded-[2rem] transition-all duration-300 hover:-translate-y-1 hover:border-golden/50"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-golden backdrop-blur">
                  {product.label}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-3xl font-bold italic text-white">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{product.text}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[420px] overflow-hidden rounded-[2rem] border border-line"
          >
            <Image
              src="/images/selected/bodega-horizontal.jpg"
              alt="Estantería de bodega con aguacates organizados"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-sm font-semibold text-mist">
              Selección visual de producto para separar pedidos según maduración.
            </p>
          </motion.div>

          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <span className="gold-badge">Frescura y selección</span>
            <h2 className="mt-4 font-serif text-4xl font-bold italic tracking-tight text-white">
              Producto seleccionado a diario
            </h2>
            <div className="mt-7 space-y-4">
              {freshness.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="flex gap-4 rounded-2xl border border-line/80 bg-black/20 p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-mist">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
