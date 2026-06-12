# Prompt para Google Stitch — Landing The Golden Green

Fecha: 2026-06-12

## Contexto

Diseñar una landing page web responsive para **The Golden Green**, distribuidora de aguacate y plátano en Cajicá, Colombia. La marca actual será refrescada: mantener la idea de negocio agrícola/premium, pero crear un aire nuevo, moderno, confiable y fácil de usar.

La web inicial será principalmente informativa y de apoyo al WhatsApp. Más adelante debe permitir pedidos desde la página web, así que el diseño debe dejar preparado un flujo de pedido simple.

## Prompt principal para Stitch

Create a premium, mobile-first landing page and admin-ready product flow for **The Golden Green**, a Colombian avocado and plantain distributor based in Cajicá. The business sells fresh avocado and plantain by kilograms to customers who place orders ahead of time and pick up at the warehouse/bodega.

Visual direction: dark emerald green, deep olive, near-black backgrounds, warm gold accents, fresh produce photography, premium agricultural commerce, clean modern typography, natural morning bodega atmosphere. Avoid generic SaaS style, avoid cartoon illustrations, avoid fake statistics, avoid visible public prices. The brand should feel fresh, trustworthy, wholesale-friendly, and modern.

Hero section:
- Full-width video hero area or image placeholder for a bodega/avocado/plantain video.
- Dark overlay so text is readable.
- Main headline: “Aguacate y plátano fresco para tu negocio”
- Brand name: “The Golden Green”
- Subheadline: “Pedidos por kilos para recoger en bodega en Cajicá.”
- Primary CTA: “Hacer pedido por WhatsApp”
- Secondary CTA: “Ver productos”
- Product chips: “Papelillo / Lorena”, “Hass”, “Plátano”

Sections:
1. Products
   - Papelillo / Lorena
   - Hass
   - Plátano
   - Mention quality/ripeness options without showing prices.
2. How it works
   - Escribe por WhatsApp o, próximamente, pide desde la web.
   - Indica producto, kilos y hora aproximada de recogida.
   - La bodega confirma disponibilidad.
   - Recoge en Cajicá.
3. Bodega / location
   - Cajicá, Colombia.
   - Include a map/location placeholder.
4. Business trust section
   - Fresh daily receiving trips/cargas.
   - Inventory by availability.
   - Orders organized before opening.
5. CTA footer
   - “Separa tu pedido para recoger en bodega.”
   - WhatsApp button.

Future order flow design:
- Simple form concept: product, quality, ripeness, kilograms, customer name, phone, approximate pickup time, notes.
- No payment checkout yet.
- No delivery zone selector.
- No visible prices.

Admin/panel hint:
Also create a simple mobile-first admin panel concept for the owner with large buttons:
- Registrar viaje/carga
- Ver inventario
- Pedidos de hoy
- Confirmar pedidos
- Reporte diario

Inventory model language:
Use “viaje” or “carga”, not “lote”. The business receives one or more trips per day, sometimes 1 to 6 tons of avocado. Inventory should be organized by receiving trip/carga, product, quality and ripeness.

Tone:
Spanish Colombia. Clear, practical, not over-marketed.

Important constraints:
- Hide prices on the public web.
- Main channel is WhatsApp initially.
- Later the web can receive orders directly.
- Customers pick up at the bodega; no delivery in MVP.
- Design must work beautifully on mobile.

## Copy base en español

Título hero:
Aguacate y plátano fresco para tu negocio

Subtítulo:
Haz tu pedido por kilos y recógelo en nuestra bodega en Cajicá. Producto fresco, disponibilidad clara y atención rápida por WhatsApp.

Botones:
Hacer pedido por WhatsApp
Ver productos

Productos:
- Papelillo / Lorena
- Hass
- Plátano

Cómo funciona:
1. Nos escribes o haces tu pedido desde la web.
2. Indicas producto, kilos y hora aproximada de recogida.
3. Confirmamos disponibilidad en bodega.
4. Recoges tu pedido en Cajicá.

## Nota técnica

Stitch sirve para ideación/diseño UI rápido. No asumir que entrega backend productivo completo. Usarlo para generar pantallas, flujo visual y posiblemente frontend exportable. El backend real debe diseñarse aparte con DB, API, WhatsApp/YCloud, panel admin y reportes.
