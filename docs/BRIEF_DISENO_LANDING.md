# Brief de Diseño — The Golden Green Landing Page

> **Referencia principal:** Brand Board / Sistema de Identidad Visual (imagen adjunta)
> **Proyecto:** thegoldengreen.co — Distribuidora de aguacate y plátano en Cajicá, Colombia
> **Stack técnico:** Next.js App Router + Tailwind CSS + TypeScript + Framer Motion
> **Basado en:** Estructura existente (no cambiar secciones ni orden)

---

## 1. Referencia Visual

Adjunto el **Brand Board** de la marca. Todos los elementos visuales deben extraerse de ahí:

- Logos (principal, horizontal, isotipo, monocromático, sello)
- Paleta de colores exacta
- Tipografía (Script para logo + Montserrat para textos)
- Iconografía (PREMIUM, NATURAL, FRESCO, CONFIABLE)
- Estilo general: premium, oscuro, dorado, natural, orgánico

---

## 2. Paleta de Colores (EXACTA — del Brand Board)

| Color | Hex | Uso |
|-------|-----|-----|
| Negro profundo | `#0E0E0E` | Fondo principal |
| Verde oliva | `#5A6B2F` | Acentos, badges, hover states |
| Verde bosque | `#1F3D1F` | Superficies secundarias, gradientes |
| Dorado mostaza | `#C8A33A` | CTA principal, acentos premium, iconos |
| Blanco | `#FFFFFF` | Texto principal, logo monocromático |

**NO usar:** `#060906`, `#7ab52d`, `#ffc107`, `#0a0e0a` (colores anteriores)
**Usar:** los colores exactos del Brand Board.

---

## 3. Tipografía

| Estilo | Fuente | Uso |
|--------|--------|-----|
| Logo / Títulos hero | **Script brush** (del Brand Board) | Marca principal, "Aguacate" |
| Títulos de sección | **Montserrat Bold** | "Productos", "Cómo comprar", "Galería" |
| Cuerpo / Textos | **Montserrat Regular/Light** | Descripciones, párrafos |
| Badges / Etiquetas | **Montserrat Bold, uppercase, tracking-widest** | Categorías, etiquetas |

**Anterior (NO usar):** Playfair Display, Inter.

---

## 4. Estructura de Páginas (NO CAMBIAR)

### Página Principal (Landing) — mantener estas secciones en orden:

```
1. HERO
   - Imagen principal de aguacate (bulto-abierto.jpg o similar)
   - Logo "Aguacate" en script brush
   - Badge "THE GOLDEN GREEN" sobre pincelada dorada
   - Eslogan del Brand Board: "CALIDAD QUE SE SIENTE, CONFIANZA QUE SE CULTIVA."
   - CTA WhatsApp dorado
   - Chips de producto: Papelillo / Hass / Plátano

2. PRODUCTOS
   - Cards con fotos reales
   - Papelillo (principal), Hass, Plátano
   - Sin precios

3. FRESCURA Y SELECCIÓN
   - "Producto seleccionado a diario" con iconos del Brand Board
   - Iconos: corona (PREMIUM), hoja (NATURAL), gota (FRESCO), escudo (CONFIABLE)

4. CÓMO COMPRAR
   - 4 pasos con iconografía dorada
   - WhatsApp como único canal

5. GALERÍA
   - Fotos reales de la bodega y producto
   - Composición editorial / grid

6. CONFIABILIDAD
   - Viajes diarios, inventario real, pedidos organizados

7. CTA FINAL WHATSAPP
   - Botón dorado grande
   - Sin formularios

8. FOOTER
   - Logo "Aguacate" + THE GOLDEN GREEN
   - Cajicá, Colombia
   - Slogan: "CALIDAD QUE SE SIENTE, CONFIANZA QUE SE CULTIVA."
   - © 2026 The Golden Green
```

### Páginas adicionales (si aplica):

- **Catálogo de productos** — mostrar Papelillo, Hass, Plátano con descripciones, fotos, sin precios
- **Sobre nosotros / Nosotros** — historia de la distribuidora, valores, equipo
- **Contacto** — solo WhatsApp + ubicación en Cajicá

---

## 5. Elementos Visuales Obligatorios

### Background
- Fondo `#0E0E0E` sólido en toda la página
- Gradiente sutil verde bosque `#1F3D1F` en algunas secciones
- **NO** fondo WebGL / shader (a menos que sea extremadamente sutil)

### Logo
- Logo principal del Brand Board en el header
- Isotipo fotográfico como favicon
- Versión horizontal para mobile si es necesario

### Fondo oscuro premium (del Brand Board)
- Tarjetas con glassmorphism sutil (backdrop-blur)
- Bordes finos dorados `#C8A33A` en elementos premium
- Esquinas redondeadas en cards y contenedores

### Animaciones (Framer Motion)
- Fade-in-up escalonado de secciones al scroll
- Hover con glow dorado en botones CTA
- Escala sutil en cards de productos al hover
- Transiciones suaves entre secciones
- Respetar `prefers-reduced-motion: reduce`

### Badges y etiquetas
- Estilo del Brand Board: dorado, texto pequeño, uppercase
- Usar los iconos lineales dorados: corona, hoja, gota, escudo

### Iconografía
- Los 4 iconos del Brand Board (PREMIUM, NATURAL, FRESCO, CONFIABLE)
- Estilo: trazo lineal dorado, simétrico, minimalista
- Usarlos como sellos de calidad a lo largo de la landing

---

## 6. Assets Disponibles

### Imágenes reales (en `/imagenes/`)
- 13 fotos de aguacate, bodega, camión, canastillas, bultos
- 2 videos cortos
- Usar estas — **NO imágenes placeholder ni stock photos**

### Brand Board (adjunto)
- Logos en todas sus variantes
- Iconografía
- Paleta de colores
- Referencia tipográfica

### Lo que falta por crear
- **Favicon** → usar el isotipo del Brand Board
- **App icon** → del Brand Board
- **Sello premium** → del Brand Board (sección 5)
- **Etiqueta de empaque** → del Brand Board (sección 6, ya está diseñada)

---

## 7. Tono y Estilo

- **Premium agrícola** — elegante pero natural, no corporativo frío
- **Oscuro y dorado** — el negro y dorado del Brand Board son los protagonistas
- **Orgánico** — las fotos reales de aguacate y bodega deben ser el centro visual
- **Confiable** — el escudo y los iconos refuerzan la seriedad del negocio
- **Colombiano** — el producto es de Cajicá, mantener identidad local
- **Mobile-first** — todo debe funcionar perfecto en 375px

---

## 8. Reglas Estrictas

| Regla | Detalle |
|-------|---------|
| ✅ | Usar SOLO la paleta del Brand Board (`#0E0E0E`, `#5A6B2F`, `#1F3D1F`, `#C8A33A`, `#FFFFFF`) |
| ✅ | Tipografía: Montserrat + Script del logo |
| ✅ | Fotos reales — NO placeholder, NO ilustraciones |
| ✅ | WhatsApp como único CTA — sin formularios, sin carrito, sin checkout |
| ❌ | Sin precios visibles |
| ❌ | Sin "Rutas", "Exportación" ni "Limón Tahití" |
| ❌ | Sin fondo WebGL a menos que sea ultra sutil |
| ❌ | Sin emojis ni iconos genéricos — usar los del Brand Board |
| ✅ | Mobile-first, responsive |
| ✅ | Respetar prefers-reduced-motion |

---

## 9. Formato de Entrega

El diseñador debe entregar:

1. **Mockups en Figma** (o herramienta similar) con:
   - Home page completa (mobile + desktop)
   - Páginas secundarias (si aplica)
   - Estados hover/active de botones y cards
   - Sistema de componentes (tipografía, colores, botones, inputs, cards)

2. **Assets exportados**:
   - Logos en SVG/PNG (todas las variantes)
   - Iconos en SVG
   - Favicon / App icon
   - Sello / emblema

3. **Especificaciones técnicas**:
   - Tamaños de fuente (mobile + desktop)
   - Espaciados y márgenes
   - Altura de secciones
   - Breakpoints

---

## 10. Notas para el Desarrollador

- El stack es Next.js App Router + Tailwind CSS + TypeScript + Framer Motion
- Los colores deben definirse como variables en `tailwind.config.ts`
- Los iconos deben ser componentes SVG inline (no imágenes externas)
- Las animaciones deben usar Framer Motion, no CSS animations puras
- El proyecto existe en `C:\Users\Usuario\Documents\TheGoldenGreen\`
- Hay un prompt de OpenCode ya listo en `docs/OPENCODE_PROMPT_LANDING.md` que puede servir como base técnica

---

*Documento creado: 12 de junio de 2026*
*Basado en: Brand Board / Sistema de Identidad Visual de The Golden Green*
