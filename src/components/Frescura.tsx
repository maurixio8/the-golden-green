"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "premium",
    label: "Premium",
    desc: "Seleccionamos lo mejor en cada recolección.",
  },
  {
    icon: "natural",
    label: "Natural",
    desc: "Cultivado de forma responsable y sostenible.",
  },
  {
    icon: "fresco",
    label: "Fresco",
    desc: "Cosecha precisa para máxima frescura.",
  },
  {
    icon: "confiable",
    label: "Confiable",
    desc: "Cumplimos lo que prometemos, siempre.",
  },
];

const iconPaths: Record<string, string> = {
  premium: "M8 48V40L18 28L32 36L46 28L56 40V48M8 48H56M32 36V42M24 42H40",
  natural: "M32 56V16M32 16C24 8 8 12 8 24C8 32 20 36 32 16ZM32 16C40 8 56 12 56 24C56 32 44 36 32 16ZM18 22C22 18 28 17 32 16",
  fresco: "M32 56C42 48 48 38 48 28C48 18 42 10 32 8C22 10 16 18 16 28C16 38 22 48 32 56ZM32 48C38 42 40 36 40 30",
  confiable: "M32 8L8 16V32C8 44 18 54 32 58C46 54 56 44 56 32V16L32 8ZM22 32L30 40L42 26",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Frescura() {
  return (
    <section className="relative z-10 py-20">
      {/* Fondo sutil verde bosque */}
      <div className="absolute inset-0 bg-[#1F3D1F]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1F3D1F]/5 to-transparent" />

      <div className="section-shell relative">
        <h2 className="section-title">Frescura y Selección</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.label}
              variants={item}
              className="glass-card flex flex-col items-center p-6 text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#C8A33A]/30 bg-[#C8A33A]/10">
                <svg
                  viewBox="0 0 64 64"
                  className="h-7 w-7 text-[#C8A33A]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={iconPaths[f.icon]} />
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#C8A33A]">
                {f.label}
              </h3>
              <p className="text-xs leading-relaxed text-[#B0B0B0]">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
