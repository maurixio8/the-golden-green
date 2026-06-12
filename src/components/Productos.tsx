"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Papelillo",
    desc: "Textura cremosa, sabor suave y excelente rendimiento. Ideal para consumo familiar y gastronómico.",
    image: "/images/mano-aguacate.jpg",
    accent: "bg-[#C8A33A]",
  },
  {
    name: "Hass",
    desc: "Sabor único y mantecoso, con cáscara gruesa que garantiza mayor vida útil. La variedad preferida por los paladares más exigentes.",
    image: "/images/canastillas.jpg",
    accent: "bg-[#5A6B2F]",
  },
  {
    name: "Plátano",
    desc: "Tamaño ideal y pulpa suave. Perfecto para rebanar, cocinar o preparaciones tradicionales.",
    image: "/images/bodega-interior.jpg",
    accent: "bg-[#5A6B2F]",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Productos() {
  return (
    <section id="productos" className="relative z-10 py-20">
      <div className="section-shell">
        <h2 className="section-title">Nuestros Productos</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {products.map((p) => (
            <motion.article
              key={p.name}
              variants={item}
              className="glass-card overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 to-transparent" />
                <span className={`absolute bottom-3 left-3 ${p.accent} px-3 py-1 text-xs font-bold uppercase tracking-widest text-black`}>
                  {p.name}
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-[#B0B0B0]">
                  {p.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
