"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "premium",
    label: "Premium",
    desc: "Seleccionamos lo mejor en cada recolección.",
    color: "#C8A33A",
    bgColor: "rgba(200, 163, 58, 0.12)",
  },
  {
    icon: "natural",
    label: "Natural",
    desc: "Cultivado de forma responsable y sostenible.",
    color: "#5A6B2F",
    bgColor: "rgba(90, 107, 47, 0.15)",
  },
  {
    icon: "fresco",
    label: "Fresco",
    desc: "Cosecha precisa para máxima frescura.",
    color: "#4A9EFF",
    bgColor: "rgba(74, 158, 255, 0.12)",
  },
  {
    icon: "confiable",
    label: "Confiable",
    desc: "Cumplimos lo que prometemos, siempre.",
    color: "#C8A33A",
    bgColor: "rgba(200, 163, 58, 0.12)",
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
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Frescura() {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="absolute inset-0 bg-[#1F3D1F]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1F3D1F]/5 to-transparent" />

      <div className="section-shell relative">
        <h2 className="section-title">Frescura y Selección</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.label}
              variants={item}
              className="glass-card flex flex-col items-center p-8 text-center"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Icono con animación flotante */}
              <motion.div
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-full md:h-20 md:w-20"
                style={{
                  border: `2px solid ${f.color}40`,
                  backgroundColor: f.bgColor,
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: features.indexOf(f) * 0.5 }}
              >
                <svg
                  viewBox="0 0 64 64"
                  className="h-8 w-8 md:h-9 md:w-9"
                  fill="none"
                  stroke={f.color}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={iconPaths[f.icon]} />
                </svg>
              </motion.div>

              <h3
                className="mb-2 text-base font-bold uppercase tracking-[0.2em] md:text-lg"
                style={{ color: f.color }}
              >
                {f.label}
              </h3>
              <p className="text-sm leading-relaxed text-[#B0B0B0] md:text-base">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
