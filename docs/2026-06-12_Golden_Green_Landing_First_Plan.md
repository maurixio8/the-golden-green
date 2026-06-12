---
type: plan
fecha: 2026-06-12
tags: [golden-green, landing, parallax, web, obsidian, vercel]
---

# The Golden Green — Plan Landing First

## Decisión actual

Primero se construye una **página web pública bonita, profesional y sin funcionalidades de pedidos**.

El sistema de pedidos, inventario, WhatsApp IA, panel administrativo y backend operativo queda para una fase posterior.

## Objetivo de esta fase

Crear una landing page premium para `thegoldengreen.co` que:

- Presente la marca **The Golden Green**.
- Use fotos reales de aguacate/producto/local enviadas por Mao y su primo.
- Muestre productos.
- Explique que se vende aguacate/plátano fresco.
- Genere confianza.
- Lleve al cliente a WhatsApp.
- Se vea espectacular en celular.
- Puede usar video hero y efectos parallax/motion de manera elegante.

## Alcance fase 1 — Landing pública

### Incluye

- Home/landing responsive.
- Hero con video o foto principal.
- Galería profesional de producto.
- Sección de productos:
  - Papelillo / Lorena.
  - Hass.
  - Plátano.
- Sección de calidad/frescura.
- Sección de cómo comprar/contactar.
- CTA a WhatsApp.
- Información básica de bodega/Cajicá si Mao/primo la confirman.
- SEO básico.
- Open Graph para compartir por WhatsApp.
- Dominio `thegoldengreen.co` apuntando a Vercel.

### No incluye todavía

- Pedido web.
- Carrito.
- Checkout.
- Login.
- Panel administrativo.
- Inventario en tiempo real.
- Precios públicos.
- Automatización WhatsApp IA.
- Reportes.

## Dirección visual

- Premium agrícola.
- Verde oscuro / oliva / dorado.
- Fotos reales como protagonista.
- Nada genérico tipo SaaS.
- Nada de ilustraciones fake.
- Nada de claims inventados.
- Motion sutil, no mareador.
- Diseño mobile-first.

## Parallax / Motion research

Paquetes revisados vía npm actual:

- `gsap` v3.15.0 — animación profesional, muy potente. Con ScrollTrigger es ideal para landing premium, pero requiere disciplina para no sobrecargar.
- `framer-motion` v12.40.0 — ideal para React/Next, animaciones suaves de componentes, scroll progress y reveal effects.
- `lenis` v1.3.23 — smooth scrolling moderno. Útil si queremos sensación premium, pero debe probarse bien en móvil.
- `react-scroll-parallax` v3.5.0 — componentes/hook específicos para parallax simple en React.
- `@react-spring/parallax` v10.1.1 — útil para experiencias parallax más completas, pero puede ser más pesado/conceptual.

### Recomendación para Golden Green

Para una landing elegante y productiva:

```text
Next.js + Tailwind + Framer Motion
```

Opcional:

```text
Lenis para smooth scroll
```

Usar GSAP solo si queremos una sección hero/galería realmente cinematográfica y hay tiempo para afinar rendimiento.

Evitar una página llena de parallax pesado. Mejor:

- Hero con video/foto y overlay.
- Imágenes de aguacate con movimiento leve al scroll.
- Texto que aparece suavemente.
- Capas sutiles: hojas/fondo/producto.
- Galería con cards grandes.
- Respeto a `prefers-reduced-motion`.

## Arquitectura recomendada fase landing

```text
Next.js App Router
Tailwind CSS
TypeScript
Framer Motion
Vercel
```

Carpetas sugeridas:

```text
the-golden-green/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── ProductShowcase.tsx
│   ├── PhotoGallery.tsx
│   ├── HowToBuy.tsx
│   ├── WhatsAppCTA.tsx
│   └── Footer.tsx
├── public/
│   ├── images/
│   │   ├── raw/
│   │   ├── optimized/
│   │   └── selected/
│   └── video/
├── docs/
│   ├── landing-plan.md
│   ├── image-inventory.md
│   ├── copy.md
│   └── design-notes.md
└── README.md
```

## Flujo de trabajo fotos

Mao guardará fotos en el portátil dentro del proyecto.

Antes de diseñar final:

1. Crear inventario de imágenes.
2. Separar fotos por categoría:
   - hero candidates
   - producto close-up
   - bodega/local
   - canastillas/carga
   - detalle/maduración
   - descartadas
3. Optimizar imágenes para web:
   - WebP/AVIF si aplica.
   - tamaños responsive.
   - nombres limpios.
4. Seleccionar 5–10 fotos principales.
5. Diseñar landing alrededor de fotos reales, no placeholders.

## Secciones sugeridas landing v1

### 1. Hero

- Video/foto principal.
- Título:

```text
The Golden Green
```

- Subtítulo:

```text
Aguacate y plátano fresco para tu negocio
```

- Texto corto:

```text
Producto fresco por kilos, atención directa y recogida en bodega en Cajicá.
```

- CTA:

```text
Escribir por WhatsApp
```

### 2. Productos

Cards grandes con fotos:

- Papelillo / Lorena.
- Hass.
- Plátano.

Sin precios.

### 3. Frescura y selección

Mensaje simple:

- Producto seleccionado.
- Diferentes estados de maduración.
- Atención para negocios y clientes de bodega.

### 4. Galería

Fotos reales en composición editorial/parallax suave.

### 5. Cómo comprar

```text
1. Escríbenos por WhatsApp.
2. Cuéntanos qué producto necesitas y cuántos kilos.
3. Confirmamos disponibilidad.
4. Recoges en la bodega.
```

### 6. CTA final

```text
¿Necesitas aguacate o plátano fresco?
Habla con The Golden Green.
```

## Copy pendiente de confirmar

- Número WhatsApp.
- Dirección exacta o zona de bodega.
- Horarios.
- Si se menciona Cajicá públicamente.
- Si se quiere mostrar el perfil de Google Business.
- Logo final.
- Fotos aprobadas.

## Sincronización Obsidian servidor ↔ portátil

Mao está intentando conectar Obsidian del portátil con el conocimiento del servidor.

Recomendación para este proyecto:

- Mantener el vault del servidor como fuente de verdad de documentación de Hermes.
- Copiar/sincronizar solo carpeta del proyecto Golden Green si se quiere trabajar localmente:

```text
/opt/data/vault/04_Golden_Green/
```

- Evitar duplicar todo el vault sin estrategia.
- Para código, usar GitHub privado como fuente de verdad.
- Para fotos, mantenerlas en el repo si son públicas o en carpeta local/Drive si son pesadas/privadas.

## Próximo paso

1. Mao crea/organiza carpeta del proyecto en portátil.
2. Dentro, crear:

```text
public/images/raw/
public/video/raw/
docs/
```

3. Guardar fotos y video ahí.
4. Crear `docs/image-inventory.md` con descripción de cada foto.
5. Crear landing Next.js estática.
6. Deploy preview en Vercel.
7. Ajustar con Mao/primo.
8. Apuntar dominio.

## Regla de esta fase

No contaminar la landing con el sistema futuro.

La web debe vender confianza y marca:

```text
bonita → profesional → rápida → WhatsApp
```

El backend operativo vendrá después.
