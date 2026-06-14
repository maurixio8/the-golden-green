"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/bulto-paradito.jpg", alt: "Bulto de aguacate organizado", span: "col-span-2 row-span-2" },
  { src: "/images/pared-aguacates.jpg", alt: "Aguacates en bodega" },
  { src: "/images/bodega2.jpg", alt: "Interior de bodega" },
  { src: "/images/bodega3.jpg", alt: "Canastillas con aguacate" },
  { src: "/images/aguacate-camion.jpg", alt: "Aguacate sobre camión", span: "col-span-2 md:col-span-1" },
  { src: "/images/bodega4.jpg", alt: "Bodega de almacenamiento" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="relative z-10 py-20 md:py-28">
      <div className="section-shell">
        <h2 className="mb-8 text-center font-sans text-sm font-bold uppercase tracking-[0.28em] text-[#C8A33A] md:text-base">
          Galería
        </h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className={`group relative overflow-hidden rounded-xl border border-[#2A2A2A] cursor-pointer ${img.span || ""}`}
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Overlay con gradiente y texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 px-4 pb-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white drop-shadow-lg">
                    {img.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
