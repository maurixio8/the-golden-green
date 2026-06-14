"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Productos", href: "#productos" },
  { label: "Cómo comprar", href: "#como-comprar" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="relative block flex-shrink-0">
          <Image
            src="/images/logo-horizontal.png"
            alt="The Golden Green"
            width={180}
            height={60}
            priority
            className="h-auto w-[140px] object-contain sm:w-[180px]"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-white/80 transition-colors duration-300 hover:text-[#C8A33A]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/573242095914?text=Hola%20The%20Golden%20Green%2C%20quiero%20separar%20un%20pedido%20para%20recoger%20en%20bodega."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green px-5 py-2 text-xs"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#C8A33A] hover:text-[#C8A33A] md:hidden"
          aria-label="Menú"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <path d="M6 6L18 18" />
                <path d="M6 18L18 6" />
              </>
            ) : (
              <>
                <path d="M4 6H20" />
                <path d="M4 12H20" />
                <path d="M4 18H20" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#0E0E0E]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-widest text-white/80 transition-colors hover:bg-white/5 hover:text-[#C8A33A]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/573242095914?text=Hola%20The%20Golden%20Green%2C%20quiero%20separar%20un%20pedido%20para%20recoger%20en%20bodega."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-green mt-2 justify-center text-sm"
              >
                WhatsApp 324 209 5914
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
