"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: "viajes",
    title: "Viajes diarios",
    desc: "Abastecimiento constante para garantizar frescura.",
  },
  {
    icon: "inventario",
    title: "Inventario real",
    desc: "Disponibilidad verificada todos los días.",
  },
  {
    icon: "pedidos",
    title: "Pedidos organizados",
    desc: "Logística eficiente para entregas puntuales.",
  },
  {
    icon: "atencion",
    title: "Atención directa",
    desc: "Atención cercana por WhatsApp siempre.",
  },
];

const iconSvgs: Record<string, string> = {
  viajes: "M28 8L12 16V36L28 44L44 36V16L28 8ZM28 8V44M12 16L28 24M44 16L28 24M36 12L20 20",
  inventario: "M8 16L24 8L40 16L24 24L8 16ZM8 16V32L24 40M40 16V32L24 40M24 24V40",
  pedidos: "M12 8H36L40 12V40H8V12L12 8ZM12 16H36M16 24H32M16 32H28",
  atencion: "M24 8C16 8 8 14 8 22C8 28 12 34 20 36L24 40L28 36C36 34 40 28 40 22C40 14 32 8 24 8ZM24 18V24M24 28V28.01",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Confianza() {
  return (
    <section className="relative z-10 py-20">
      <div className="absolute inset-0 bg-[#1F3D1F]/10" />
      <div className="section-shell relative">
        <h2 className="section-title">Confiabilidad que nos respalda</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 md:grid-cols-4"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="glass-card flex items-start gap-4 p-5"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#C8A33A]/30 bg-[#C8A33A]/10">
                <svg
                  viewBox="0 0 48 48"
                  className="h-5 w-5 text-[#C8A33A]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={iconSvgs[p.icon]} />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold uppercase tracking-[0.1em] text-white md:text-lg">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#B0B0B0] md:text-base">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
