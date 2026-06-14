"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Escríbenos",
    desc: "Contáctanos fácilmente por WhatsApp y cuéntanos qué necesitas.",
  },
  {
    step: "2",
    title: "Cuéntanos",
    desc: "Indica el producto, los kilos y la hora en que quieres recoger.",
  },
  {
    step: "3",
    title: "Confirmamos",
    desc: "Te confirmamos disponibilidad y los detalles de tu pedido.",
  },
  {
    step: "4",
    title: "Recoge",
    desc: "Pasa por tu pedido a la bodega en Cajicá. ¡Y a disfrutar!",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const whatsappHref =
  "https://wa.me/573242095914?text=Hola%20The%20Golden%20Green%2C%20quiero%20separar%20un%20pedido%20para%20recoger%20en%20bodega.";

const mapsDirHref =
  "https://www.google.com/maps/dir/?api=1&destination=4.918446,-74.025004&travelmode=driving";

export default function ComoComprar() {
  return (
    <section id="como-comprar" className="relative z-10 py-20 md:py-28">
      <div className="section-shell">
        <h2 className="section-title">Cómo Comprar</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-4"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              variants={item}
              className="glass-card relative p-6 md:p-8"
            >
              <span className="absolute -right-2 -top-2 text-6xl font-black text-[#C8A33A]/20 select-none">
                {s.step}
              </span>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#5A6B2F] text-lg font-bold text-white shadow-lg md:h-14 md:w-14 md:text-xl">
                {s.step}
              </div>
              <h3 className="mb-3 text-lg font-bold uppercase tracking-[0.1em] text-white md:text-xl">
                {s.title}
              </h3>
              <p className="text-base leading-relaxed text-[#B0B0B0] md:text-lg">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 border-t-2 border-dashed border-[#C8A33A]/40 md:block" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsappHref}
            className="btn-green inline-flex items-center gap-3 px-10 py-5 text-base md:text-lg animate-pulse-scale"
          >
            <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            324 209 5914
          </a>
          <a
            href={mapsDirHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-3 px-10 py-5 text-base md:text-lg"
          >
            <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Navegar
          </a>
        </div>
      </div>
    </section>
  );
}
