"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const galleryImages = [
  {
    src: "/images/selected/galeria-pared-derecha.jpg",
    alt: "Aguacates junto a la pared derecha de la bodega",
    className: "h-80 sm:h-[28rem]",
  },
  {
    src: "/images/selected/bulto-parado.jpg",
    alt: "Bulto organizado con aguacates frescos",
    className: "h-96 sm:h-[34rem]",
  },
  {
    src: "/images/selected/galeria-pared-izquierda.jpg",
    alt: "Aguacates organizados al lado izquierdo de la bodega",
    className: "h-80 sm:h-[28rem]",
  },
  {
    src: "/images/selected/bodega-lateral.jpg",
    alt: "Interior de bodega con producto fresco",
    className: "h-72 sm:h-[24rem]",
  },
];

export default function Galeria() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const ySoft = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <section id="galeria" ref={ref} className="relative py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="gold-badge">Galería real</span>
            <h2 className="mt-4 font-serif text-4xl font-bold italic tracking-tight text-white sm:text-5xl">
              Fotos de bodega, no imágenes genéricas.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted">
            La composición muestra el volumen, la organización y el producto que
            llega a la bodega para separar pedidos por kilos.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {galleryImages.map((image, index) => {
            const y = index % 2 === 0 ? ySoft : yReverse;

            return (
              <motion.figure
                key={image.src}
                style={shouldReduceMotion ? undefined : { y }}
                className={`glass-card group relative overflow-hidden rounded-[2rem] ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-80" />
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
