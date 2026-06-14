"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const products = [
  {
    name: "Papelillo",
    desc: "Textura cremosa, sabor suave y excelente rendimiento. Ideal para consumo familiar y gastronómico.",
    image: "/images/mano-aguacate.jpg",
    accent: "bg-[#C8A33A]",
    subtitle: "El favorito de la casa",
  },
  {
    name: "Hass",
    desc: "Sabor único y mantecoso, con cáscara gruesa que garantiza mayor vida útil. La variedad preferida por los paladares más exigentes.",
    image: "/images/hass-foto.jpg",
    accent: "bg-[#5A6B2F]",
    subtitle: "Calidad de exportación",
  },
  {
    name: "Plátano",
    desc: "Tamaño ideal y pulpa suave. Perfecto para rebanar, cocinar o preparaciones tradicionales.",
    image: "/images/bodega-interior.jpg",
    accent: "bg-[#5A6B2F]",
    subtitle: "Fresco y versátil",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.article
      ref={ref}
      variants={item}
      className="glass-card overflow-hidden"
    >
      {/* Imagen con parallax */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 to-transparent" />
        <span className={`absolute bottom-3 left-3 ${product.accent} px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-black`}>
          {product.name}
        </span>
      </div>
      {/* Info */}
      <div className="p-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A33A]">
          {product.subtitle}
        </p>
        <p className="text-base leading-relaxed text-[#B0B0B0] md:text-lg">
          {product.desc}
        </p>
      </div>
    </motion.article>
  );
}

export default function Productos() {
  return (
    <section id="productos" className="relative z-10 py-20 md:py-28">
      <div className="section-shell">
        <h2 className="section-title">Nuestros Productos</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
