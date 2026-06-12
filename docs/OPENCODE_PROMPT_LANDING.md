# 🎯 OpenCode Prompt v2 — Landing The Golden Green (Brand Board 2026)

> Pega este prompt completo en OpenCode.
> Usa: `opencode run "prompt" --model opencode-go/deepseek-v4-flash`
> Carpeta del proyecto: `C:\Users\Usuario\Documents\TheGoldenGreen`

---

## PROYECTO: The Golden Green — Landing Page

### Contexto del negocio

The Golden Green es una distribuidora de aguacate y plátano en Cajicá, Colombia. Dueño: el primo de Mao. Clientes piden por kilos, recogen en bodega. Sin domicilios. Sin precios públicos. Canal principal: WhatsApp Business.

- **Dominio:** `thegoldengreen.co`
- **Productos:** Papelillo/Lorena (estrella), Hass, Plátano
- **Horario:** ~3 AM apertura, ~3 PM cierre
- **Slogan:** "CALIDAD QUE SE SIENTE, CONFIANZA QUE SE CULTIVA."

### Stack técnico

```
Next.js App Router + Tailwind CSS + TypeScript + Framer Motion
```

NO GSAP. NO React Spring. Solo Framer Motion. Opcional: Lenis para smooth scroll.

---

## 🎨 SISTEMA DE IDENTIDAD VISUAL (del Brand Board)

> Hay un Brand Board de referencia en `docs/assets/brand-board.png` — REVISA ESA IMAGEN. Todo el diseño debe basarse en ella.

### Paleta de colores EXACTA

```css
/* Fondos */
Fondo principal:     #0E0E0E  /* Negro profundo */
Superficie oscura:   #1A1A1A  /* Tarjetas, contenedores */
Verde bosque:        #1F3D1F  /* Gradientes sutiles, fondos de sección */

/* Acentos */
Verde oliva:         #5A6B2F  /* Badges, hover states, detalles */
Dorado mostaza:      #C8A33A  /* CTA principal, iconos, acentos premium */
Dorado claro:        #D4B84C  /* Hover dorado */

/* Texto */
Texto principal:     #FFFFFF  /* Blanco puro */
Texto secundario:    #B0B0B0  /* Gris claro */
Texto terciario:     #707070  /* Gris medio */
Bordes:              #2A2A2A  /* Bordes sutiles */
```

⚠️ **NO USAR** los colores viejos: `#060906`, `#7ab52d`, `#ffc107`, `#0a0e0a`

### Tipografía

```css
/* Logo / Marca principal */
Marca:               Script brush cursiva (del Brand Board) — "Aguacate"
Marca secundaria:    THE GOLDEN GREEN sobre pincelada dorada

/* Títulos */
H1-H3:               'Montserrat', sans-serif — Bold 700, uppercase opcional
                      tracking-tight para headlines, tracking-widest para títulos
                      de sección

/* Cuerpo */
Cuerpo:              'Montserrat', sans-serif — Light 300 / Regular 400

/* Badges / Etiquetas */
Badges:              'Montserrat', sans-serif — Bold 700, uppercase,
                      tracking-[0.2em], text-[10px]-[12px]
```

⚠️ **NO USAR** Playfair Display ni Inter. Solo Montserrat + Script del logo.

### Iconografía oficial (ya creada en `public/icons/`)

| Icono | Archivo | Descripción |
|-------|---------|-------------|
| PREMIUM | `public/icons/premium.svg` | Corona real, trazo dorado |
| NATURAL | `public/icons/natural.svg` | Hoja, trazo dorado |
| FRESCO | `public/icons/fresco.svg` | Gota de agua, trazo dorado |
| CONFIABLE | `public/icons/confiable.svg` | Escudo con check, trazo dorado |

Todos son SVG inline con stroke `#C8A33A`. Úsalos como componentes.

---

## 📐 ESTRUCTURA DE LA LANDING (NO CAMBIAR EL ORDEN)

### 1. HERO

- **Fondo:** Imagen principal a pantalla completa con overlay oscuro (`bg-black/60`)
- **Logo:** Texto "Aguacate" en script cursiva blanca + "THE GOLDEN GREEN" sobre pincelada dorada `#C8A33A`
- **Eslogan:** "CALIDAD QUE SE SIENTE, CONFIANZA QUE SE CULTIVA." — Montserrat Bold, tracking-wide, color dorado `#C8A33A`
- **CTA principal:** Botón "Hacer pedido por WhatsApp" — fondo `#C8A33A`, texto negro, hover con glow dorado
- **CTA secundario:** "Ver productos" — botón outline con borde `#C8A33A`
- **Chips de producto:** Papelillo / Hass / Plátano — badges con borde `#5A6B2F`
- **Foto hero:** `public/images/bulto-abierto.jpg` (bulto de aguacate abierto)

### 2. PRODUCTOS

- Cards con fotos reales y badges de color
- **Papelillo/Lorena** (primero, protagonista) — badge `#C8A33A`
- **Hass** — badge `#5A6B2F`
- **Plátano** — badge `#5A6B2F`
- Sin precios. Descripción: origen, textura, uso recomendado
- Animación fadeInUp escalonada (stagger 0.1s)

### 3. FRESCURA Y SELECCIÓN

- Fondo: `#1F3D1F` sutil o gradient
- 3 columnas con iconos del Brand Board:
  - 🌿 "Producto seleccionado a diario" + icono NATURAL
  - 💧 "Diferentes estados de maduración" + icono FRESCO
  - 🏆 "Atención para negocios y clientes de bodega" + icono PREMIUM
- Iconos dorados `#C8A33A`, borde inferior dorado en cada columna

### 4. CÓMO COMPRAR

Layout horizontal en desktop, vertical en mobile. 4 pasos con numeración dorada:

```
1️⃣ Escríbenos por WhatsApp
2️⃣ Indica producto, kilos y hora de recogida
3️⃣ Confirmamos disponibilidad
4️⃣ Recoges en la bodega en Cajicá
```

- Números grandes en dorado `#C8A33A`
- Línea conectora entre pasos (dorada)
- Fondo: `#0E0E0E` con tarjetas `#1A1A1A`

### 5. GALERÍA

- Grid de fotos reales con estilo editorial
- Sin carrusel — masonry grid simple
- Bordes sutiles, hover con escala leve
- Fotos desde `public/images/`

### 6. CONFIABILIDAD

- Fondo: `#1F3D1F` con ligera transparencia
- 3 pilares con icono CONFIABLE (escudo):
  - 🛡️ "Viajes diarios de finca a bodega"
  - 🛡️ "Inventario por disponibilidad real"  
  - 🛡️ "Pedidos organizados antes de apertura"

### 7. CTA FINAL WHATSAPP

- Fondo: gradient de `#0E0E0E` a `#1F3D1F`
- Texto: "Separa tu pedido para recoger en bodega"
- Botón WhatsApp gigante, fondo `#C8A33A`, texto negro, glow pulsante
- Subtítulo: "Respondemos de 3 AM a 3 PM, todos los días"

### 8. FOOTER

```
Aguacate            (script cursiva, blanca)
THE GOLDEN GREEN    (badge dorado)
Cajicá, Colombia
WhatsApp: [botón]
"Calidad que se siente, confianza que se cultiva."  (dorado, cursiva)
© 2026 The Golden Green
```

---

## 🖼️ IMÁGENES (12 FOTOS REALES)

Copiá las fotos de `imagenes/` a `public/images/` con estos nombres:

| Archivo nuevo | Foto original | Sección |
|--------------|---------------|---------|
| `bulto-abierto.jpg` | WhatsApp Image 2026-06-11 at 1.24.02 PM.jpeg | HERO |
| `mano-aguacate.jpg` | WhatsApp Image 2026-06-11 at 1.24.35 PM.jpeg | PRODUCTOS |
| `canastillas.jpg` | WhatsApp Image 2026-06-11 at 1.24.34 PM (1).jpeg | PRODUCTOS |
| `bodega-interior.jpg` | WhatsApp Image 2026-06-11 at 1.24.02 PM (1).jpeg | FRESCURA |
| `estanteria.jpg` | WhatsApp Image 2026-06-11 at 1.24.34 PM (2).jpeg | FRESCURA |
| `bodega2.jpg` | WhatsApp Image 2026-06-11 at 1.24.34 PM.jpeg | FRESCURA |
| `bodega3.jpg` | WhatsApp Image 2026-06-11 at 1.24.34 PM (5).jpeg | FRESCURA |
| `bodega4.jpg` | WhatsApp Image 2026-06-11 at 1.24.34 PM (6).jpeg | FRESCURA |
| `camion-bultos.jpg` | WhatsApp Image 2026-06-11 at 1.24.33 PM.jpeg | CONFIABILIDAD |
| `aguacate-camion.jpg` | WhatsApp Image 2026-06-11 at 1.24.34 PM (3).jpeg | CONFIABILIDAD |
| `bulto-paradito.jpg` | WhatsApp Image 2026-06-11 at 1.24.34 PM (4).jpeg | GALERÍA |
| `pared-aguacates.jpg` | WhatsApp Image 2026-06-11 at 1.24.33 PM (1).jpeg | GALERÍA |
| `pared-aguacates2.jpg` | WhatsApp Image 2026-06-11 at 1.24.33 PM (2).jpeg | GALERÍA |

⚠️ ❌ **NO usar imágenes placeholder, stock photos ni ilustraciones**

---

## ✨ ANIMACIONES (Framer Motion)

```tsx
// Fade in up al hacer scroll — usar en todas las secciones
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
}

// Stagger para hijos
const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
}

// Escala en hover para cards
hover: { scale: 1.02 }

// Glow dorado en CTA
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 5px rgba(200, 163, 58, 0.4); }
  50%      { box-shadow: 0 0 15px rgba(200, 163, 58, 0.8); }
}
```

**Siempre respetar:**
```css
@media (prefers-reduced-motion: reduce) {
  animation: none !important;
  transform: none !important;
}
```

---

## 🎯 ESTILO GENERAL

- **Premium agrícola** — elegante pero natural, no corporativo frío
- **Oscuro y dorado** — el negro `#0E0E0E` y dorado `#C8A33A` son los protagonistas
- **Fondo:** `#0E0E0E` sólido en toda la página, sin shaders WebGL
- **Tarjetas:** `#1A1A1A` con glassmorphism sutil (backdrop-blur)
- **Bordes:** finos `#2A2A2A`, hover con borde `#C8A33A`
- **Botones:** grandes, touch-friendly, con transiciones suaves 300ms
- **Mobile-first:** todo debe funcionar perfecto en 375px (iPhone SE)
- **Contenedor:** max-w-6xl centrado, padding 16px en mobile

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
src/
├── app/
│   ├── layout.tsx        ← fonts Montserrat + Google Fonts
│   ├── page.tsx          ← landing completa
│   └── globals.css       ← tailwind layers + animaciones
├── components/
│   ├── Hero.tsx
│   ├── Productos.tsx
│   ├── Frescura.tsx      ← antes se llamaba BackgroundShader?
│   ├── ComoComprar.tsx
│   ├── Galeria.tsx
│   ├── Confianza.tsx
│   ├── WhatsAppCTA.tsx
│   └── Footer.tsx
public/
├── images/               ← fotos copiadas
├── icons/                ← SVGs del Brand Board
│   ├── premium.svg
│   ├── natural.svg
│   ├── fresco.svg
│   └── confiable.svg
docs/
├── assets/
│   ├── brand-board.png   ← REFERENCIA VISUAL PRINCIPAL
│   └── panel_admin_reference_stitch_v1.html
```

---

## ✅ REGLAS ESTRICTAS (verificar antes de terminar)

| # | Regla |
|---|-------|
| ❌ | NO mostrar precios |
| ❌ | NO incluir carrito, checkout ni login |
| ❌ | NO incluir "Rutas", "Exportación" ni "Limón Tahití" |
| ❌ | NO usar los colores viejos (`#060906`, `#7ab52d`, `#ffc107`) |
| ❌ | NO usar Playfair Display ni Inter |
| ❌ | NO usar WebGL shader de fondo |
| ❌ | NO usar imágenes placeholder |
| ✅ | Usar SOLO paleta del Brand Board (`#0E0E0E`, `#5A6B2F`, `#1F3D1F`, `#C8A33A`, `#FFFFFF`) |
| ✅ | Tipografía Montserrat + Script del logo |
| ✅ | Fotos reales de `public/images/` |
| ✅ | Iconos del Brand Board desde `public/icons/` |
| ✅ | Solo WhatsApp como CTA |
| ✅ | Eslogan: "CALIDAD QUE SE SIENTE, CONFIANZA QUE SE CULTIVA." |
| ✅ | Mobile-first (375px) |
| ✅ | Respetar `prefers-reduced-motion` |
| ✅ | Código TypeScript estricto, componentes separados |
| ✅ | Comentarios en español |

---

## 🔍 VERIFICACIÓN FINAL

Antes de terminar, confirma ejecutando:

- [ ] `npm run dev` funciona sin errores
- [ ] La landing se ve bien en 375px y 1440px
- [ ] Los colores coinciden con la paleta del Brand Board
- [ ] Las animaciones no marean
- [ ] Los botones WhatsApp usan `https://wa.me/` (número placeholder OK)
- [ ] Los iconos SVGs se ven dorados y consistentes
- [ ] No hay precios visibles
- [ ] No hay referencias a "Rutas", "Exportación" ni "Limón"
- [ ] El diseño se ve PREMIUM 🏆

---

## 📚 REFERENCIAS EN EL PROYECTO

```
docs/assets/brand-board.png                  ← 🎯 BRAND BOARD (imprimir visualmente)
docs/BRIEF_DISENO_LANDING.md                 ← Brief para diseñador
docs/OPENCODE_PROMPT_LANDING.md              ← Este archivo v2
docs/assets/panel_admin_reference_stitch_v1.html  ← Referencia anterior (NO usar colores viejos)
imagenes/                                    ← 13 fotos reales
public/icons/                                ← 4 SVGs del Brand Board
```
