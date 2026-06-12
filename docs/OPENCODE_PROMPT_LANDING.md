# OpenCode Prompt — Landing The Golden Green

> Pega este prompt completo en OpenCode (modo Build, modelo gratuito como DeepSeek o Gemini).
> La carpeta del proyecto es: `C:\Users\Usuario\Documents\TheGoldenGreen`

---

## PROYECTO: The Golden Green — Landing Page

### Contexto del negocio

The Golden Green es una distribuidora de aguacate y plátano en Cajicá, Colombia. El dueño es el primo de Mao. Los clientes piden por kilos y recogen en bodega. No hay domicilios en esta fase. No se muestran precios en la web. El canal principal es WhatsApp Business.

- Dominio: `thegoldengreen.co`
- Productos: Papelillo/Lorena, Hass, Plátano
- Apertura: ~3 AM, cierre ~3 PM
- Sin precios públicos, sin carrito, sin checkout

### Stack técnico

```
Next.js App Router + Tailwind CSS + TypeScript + Framer Motion
```

NO usar GSAP. NO usar React Spring. Solo Framer Motion para animaciones. Opcional: Lenis para smooth scroll.

### Estructura de archivos a crear

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── Productos.tsx
│   ├── Galeria.tsx
│   ├── ComoComprar.tsx
│   ├── Confianza.tsx
│   ├── WhatsAppCTA.tsx
│   ├── Footer.tsx
│   └── BackgroundShader.tsx
```

### 📸 Catálogo de imágenes (analizado — usar rutas exactas)

Todas están en `C:\Users\Usuario\Documents\TheGoldenGreen\imagenes\`. Para Next.js, cópialas a `public/images/` con nombres limpios.

#### ⭐ HERO (2 versiones)
| Archivo | Qué muestra | Tamaño |
|---|---|---|
| `WhatsApp Image 2026-06-11 at 1.24.02 PM.jpeg` | Bulto abierto, aguacate espectacular saliendo | 198KB |
| `WhatsApp Image 2026-06-11 at 1.24.34 PM (4).jpeg` | Bulto paradito, bien organizado, ESPECTACULAR | 136KB |

→ **v1 (foto fija):** Usa el bulto abierto (198KB) como hero.  
→ **v2 (video hero):** Usa `WhatsApp Video 2026-06-11 at 1.24.33 PM.mp4` (10.7MB) si muestra bodega/proceso. Si no, foto fija.

#### 🥑 Sección PRODUCTOS (Papelillo primero, arriba de todo)
| Archivo | Qué muestra |
|---|---|
| `WhatsApp Image 2026-06-11 at 1.24.35 PM.jpeg` | Mano del primo con aguacate — producto estrella |
| `WhatsApp Image 2026-06-11 at 1.24.34 PM (1).jpeg` | Canastillas con aguacate |
| `WhatsApp Image 2026-06-11 at 1.24.02 PM.jpeg` | Bulto abierto (recortada si ya va en hero) |

#### 🏭 Sección FRESCURA / BODEGA
| Archivo | Qué muestra |
|---|---|
| `WhatsApp Image 2026-06-11 at 1.24.02 PM (1).jpeg` | Bodega interior, canastillas y aguacate por todo lado |
| `WhatsApp Image 2026-06-11 at 1.24.34 PM (2).jpeg` | **Estantería, aguacates a la pared (HORIZONTAL 1600×900)** ⬅️ |
| `WhatsApp Image 2026-06-11 at 1.24.34 PM.jpeg` | Bodega interior |
| `WhatsApp Image 2026-06-11 at 1.24.34 PM (5).jpeg` | Bodega interior |
| `WhatsApp Image 2026-06-11 at 1.24.34 PM (6).jpeg` | Bodega interior |

#### 🚛 Sección CONFIANZA ("Viajes diarios de finca")
| Archivo | Qué muestra |
|---|---|
| `WhatsApp Image 2026-06-11 at 1.24.33 PM.jpeg` | Camión desde arriba, MUCHOS bultos de aguacate |
| `WhatsApp Image 2026-06-11 at 1.24.34 PM (3).jpeg` | Aguacates encima del camión |

#### 📱 GALERÍA
| Archivo | Qué muestra |
|---|---|
| `WhatsApp Image 2026-06-11 at 1.24.33 PM (1).jpeg` | Lado derecho, aguacates junto a la pared |
| `WhatsApp Image 2026-06-11 at 1.24.33 PM (2).jpeg` | Lado izquierdo, hartos aguacates |
| `WhatsApp Image 2026-06-11 at 1.24.34 PM (4).jpeg` | Bulto paradito ESPECTACULAR (si no va en hero) |

⚠️ **IMPORTANTE:** NO hay fotos de plátano ni Hass. Todo es papelillo/aguacate. El papelillo debe ser el protagonista absoluto. NO uses imágenes placeholder. Copia estas fotos a `public/images/` con nombres limpios (ej: `bulto-abierto.jpg`, `mano-aguacate.jpg`, `camion-bultos.jpg`).

---

## Diseño visual (obligatorio — extraído del panel de referencia)

### Colores exactos

```
Fondo principal:     #060906 (negro verdoso oscuro)
Superficie oscura:   #0a0e0a
Verde oliva/brand:   #7ab52d
Dorado/acento:       #ffc107
Texto:               #e5e7eb (gris claro)
Texto secundario:    #9ca3af (gris medio)
Bordes:              #1f2937 (gray-800)
```

### Tipografía

```css
Títulos (serif):     'Playfair Display', serif — italic, bold, tracking-tight
Cuerpo (sans):       'Inter', sans-serif — light/regular/semibold
Badges/labels:       uppercase, tracking-widest, font-bold, text-[10px]
```

### Animaciones (desde el HTML de referencia)

```css
@keyframes fadeInUp — opacity 0 → 1, translateY(20px) → 0, cubic-bezier(0.16, 1, 0.3, 1)
@keyframes pulseScale — scale(1) → scale(1.02) → scale(1)
@keyframes glowPulse — box-shadow dorado pulsante

Todas las animaciones deben respetar:
@media (prefers-reduced-motion: reduce) { animation: none !important; }
```

### Fondo WebGL (obligatorio)

Copiar el shader del HTML de referencia: `docs/assets/panel_admin_reference_stitch_v1.html`

El shader genera un fondo verde oscuro fluido con "respiración" sutil. Debe ir como canvas fijo detrás de todo el contenido (z-10).

### Estilo general

- Dark theme premium agrícola
- Nada genérico SaaS
- Nada de ilustraciones fake
- Fotos reales como protagonistas
- Mobile-first (max-w-md en contenedores)
- Botones grandes, touch-friendly
- Bordes sutiles, glassmorphism (backdrop-blur)
- Hover effects dorados/verde oliva
- Transiciones suaves (transition-all duration-300)

---

## Secciones de la landing (en orden)

### 1. Hero

- Video o foto principal a pantalla completa
- Overlay oscuro para legibilidad
- Título: "Aguacate y plátano fresco para tu negocio"
- Marca: "The Golden Green" en badge dorado
- Subtítulo: "Pedidos por kilos para recoger en bodega en Cajicá"
- CTA principal: "Hacer pedido por WhatsApp" (botón dorado)
- CTA secundario: "Ver productos" (botón outline)
- Chips de producto: "Papelillo / Lorena", "Hass", "Plátano"

### 2. Productos

- Cards grandes con fotos reales
- Papelillo / Lorena
- Hass
- Plátano
- Sin precios
- Animación fadeInUp escalonada

### 3. Frescura y selección

- "Producto seleccionado a diario"
- "Diferentes estados de maduración"
- "Atención para negocios y clientes de bodega"
- Íconos o badges verde oliva

### 4. Cómo comprar

```
1. Escríbenos por WhatsApp
2. Indica producto, kilos y hora de recogida
3. Confirmamos disponibilidad
4. Recoges en la bodega en Cajicá
```

### 5. Galería

- Fotos reales en composición editorial
- Movimiento parallax suave al scroll (Framer Motion `useScroll` + `useTransform`)
- Sin carrusel complejo — mejor grid o masonery simple

### 6. Confianza

- "Viajes diarios de finca"
- "Inventario por disponibilidad real"
- "Pedidos organizados antes de apertura"

### 7. CTA final

- "Separa tu pedido para recoger en bodega"
- Botón WhatsApp grande y dorado
- Sin formulario de contacto (MVP)

### 8. Footer

- Logo The Golden Green
- Cajicá, Colombia
- WhatsApp button
- "© 2026 The Golden Green"

---

## Reglas estrictas

1. ❌ NO mostrar precios
2. ❌ NO incluir carrito, checkout, ni login
3. ❌ NO incluir "Rutas" ni "Exportación" — ese es el panel admin, no la landing
4. ❌ NO incluir "Limón Tahití" — no es un producto real de Golden Green
5. ❌ NO usar imágenes placeholder — usar las fotos reales de `../imagenes/`
6. ✅ Solo WhatsApp como CTA
7. ✅ Mobile-first — probar en 375px de ancho
8. ✅ Respetar `prefers-reduced-motion`
9. ✅ Código limpio, tipado (TypeScript), componentes separados
10. ✅ Comentar el código en español

---

## Verificación

Antes de terminar, confirma que:
- [ ] `npm run dev` funciona sin errores
- [ ] La landing se ve bien en 375px (iPhone SE)
- [ ] Las animaciones no marean
- [ ] El fondo WebGL carga sin errores
- [ ] Los botones de WhatsApp usan `https://wa.me/` (número pendiente, usa placeholder)
- [ ] El diseño es consistente con el panel admin de referencia
- [ ] No hay precios visibles
- [ ] No hay referencias a "Rutas", "Exportación" ni "Limón"

---

## Referencias en el proyecto

```
docs/2026-06-12_Golden_Green_Landing_First_Plan.md   ← plan detallado
docs/2026-06-12_Stitch_Prompt_Landing_The_Golden_Green.md ← prompt Stitch
docs/2026-06-12_Referencia_Visual_The_Golden_Green.md ← ref visual
docs/assets/panel_admin_reference_stitch_v1.html ← HTML de referencia (colores, animaciones, shader)
imagenes/ ← 13 fotos + 2 videos reales
README.md ← ADN operativo + stack
```
