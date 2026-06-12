"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/bulto-paradito.jpg", alt: "Bulto de aguacate organizado" },
  { src: "/images/pared-aguacates.jpg", alt: "Aguacates en bodega" },
  { src: "/images/bodega2.jpg", alt: "Interior de bodega" },
  { src: "/images/bodega3.jpg", alt: "Canastillas con aguacate" },
  { src: "/images/aguacate-camion.jpg", alt: "Aguacate sobre camión" },
  { src: "/images/bodega4.jpg", alt: "Bodega de almacenamiento" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Galeria() {
  return (
    <section className="relative z-10 py-20">
      <div className="section-shell">
        <h2 className="section-title">Galería</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-3 md:grid-cols-3"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`group relative overflow-hidden rounded-xl border border-[#2A2A2A] ${
                i === 0 ? "col-span-2 row-span-2" : ""
              } ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
