# The Golden Green — Master Plan v1

Fecha: 2026-06-12

## Decisión operativa central

The Golden Green no es primero una tienda online. Es un **sistema operativo de bodega**:

```text
viajes/cargas → separación para bodega/detalle → inventario disponible → pedidos WhatsApp/web → preparación → recogida → reporte diario
```

## Datos operativos confirmados

- Negocio separado de TusAguacates y BioNeural.
- Dominio: `thegoldengreen.co`.
- Canal principal inicial: WhatsApp Business / YCloud.
- Web pública: sin precios; CTA a WhatsApp.
- Clientes piden por kilos y recogen en bodega en Cajicá.
- Productos MVP:
  - Papelillo / Lorena.
  - Hass.
  - Plátano.
- Inventario se registra por **viaje/carga**, no por lote.
- Puede llegar entre 1 y 6+ toneladas por viaje/día.
- Unidad estándar adicional: **canastilla**.
  - 1 canastilla ≈ 20 kg.
  - El peso puede variar; usar 20 kg como estándar configurable.
- El primo separa parte de la carga para venta de bodega/detalle.
  - Ejemplo: si llegan 7 toneladas, puede dejar 2.000–3.000 kg para consumo/venta de bodega.
  - Esa venta incluye personas que compran 10, 20 kg o una canastilla de aguacate maduro.
  - También tiene un punto/esquina en el local para venta por unidad al detal.
- La separación para bodega depende del movimiento real de ventas.

## Concepto funcional MVP

### 1. Registrar viaje/carga

Formulario mobile-first:

- Fecha/hora automática.
- Producto.
- Calidad.
- Maduración.
- Cantidad en kg.
- Cantidad en canastillas opcional.
- Conversión automática: canastillas × 20 kg.
- Notas.

Ejemplo:

```text
Viaje 2026-06-12-01
Total: 7.000 kg
Papelillo primera verde: 4.000 kg
Papelillo segunda verde: 1.500 kg
Papelillo maduro: 1.500 kg
```

### 2. Separar inventario por destino

Después de registrar un viaje, el panel debe permitir separar:

```text
Disponible para pedidos mayoristas
Reservado para bodega/detalle
Reservado para canastillas maduras
Merma/ajuste futuro, no MVP completo
```

Ejemplo:

```text
Llegaron 7.000 kg
- 4.500 kg disponibles para pedidos
- 2.000 kg para bodega/detalle
- 500 kg ajuste/reserva
```

### 3. Venta de bodega/detalle

MVP simple, no POS completo:

- Registrar salida rápida.
- Motivos:
  - venta bodega kilos
  - venta bodega canastilla
  - venta unidad/detal
  - ajuste manual
- Para venta por unidad, manejar inicialmente como ajuste en kg aproximado o venta detallada si el primo lo necesita.

### 4. Pedidos

Estados:

- recibido
- preconfirmado
- confirmado
- preparado
- recogido
- cancelado

Campos:

- cliente
- teléfono
- producto
- calidad
- maduración
- kg
- canastillas opcional
- fecha de recogida
- hora aproximada
- precio aplicado si corresponde
- estado pago simple: pagado / pendiente / fiado
- notas

### 5. IA WhatsApp

La IA debe:

- Saludar.
- Entender producto, kilos/canastillas, maduración.
- Convertir canastillas a kg cuando aplique.
- Preguntar hora aproximada de recogida.
- Consultar disponibilidad.
- Registrar pedido como recibido/preconfirmado.
- Escalar si:
  - no hay inventario suficiente
  - cliente pide precio especial no claro
  - pide crédito/fiado delicado
  - hay ambigüedad de producto/calidad

### 6. Reporte diario

Antes de apertura:

- pedidos para preparar
- kg por producto/calidad/maduración
- canastillas equivalentes cuando aplique
- pedidos pendientes por confirmar
- primeras recogidas
- inventario restante
- inventario reservado para bodega/detalle

Formato:

- HTML descargable.
- Resumen WhatsApp/Telegram.
- Visible en panel.

## Pantallas necesarias

### Landing pública

- Hero con video/foto real.
- Marca The Golden Green.
- Productos.
- Cómo pedir.
- Recogida en bodega.
- CTA WhatsApp.
- Sin precios.

### Panel móvil

1. Inicio / resumen.
2. Registrar viaje/carga.
3. Separar para bodega/detalle vs pedidos.
4. Inventario.
5. Pedidos.
6. Confirmar pedidos.
7. Reporte diario.
8. Precios semanales.
9. Clientes / precios especiales fase 2.

## Stack recomendado

### Desarrollo / diseño

- Google Stitch: prototipos UI.
- Laptop de Mao: entorno de desarrollo local con Hermes/OpenCode/Codex.
- Servidor Hermes: planeación, documentación, n8n/YCloud, automatizaciones, revisión, coordinación.
- Git privado: sincronización entre laptop y servidor.

### Producción

- Frontend/panel/landing: Next.js en Vercel.
- DB: Postgres gestionado.
- API/backend: Next.js API routes o worker separado según complejidad.
- WhatsApp: YCloud.
- Automatización/reportes: servidor Hermes/n8n/cron.
- Backups: export diario DB + repo Git.

## Estrategia laptop vs servidor

Recomendación: **híbrido controlado**.

- Laptop: escribir UI, correr dev server, usar OpenCode/Codex para iterar pantallas rápido.
- Servidor: mantener documentación fuente, coordinar arquitectura, generar prompts, operar integraciones, crons, n8n, backups.
- GitHub privado: fuente de verdad del código.
- Obsidian/vault servidor: fuente de verdad de decisiones y plan.

No duplicar trabajo manual. Todo cambio importante debe entrar al repo.

## Fases

### Fase 0 — Preparación del proyecto

- Crear repo privado.
- Crear estructura Next.js.
- Crear carpeta docs/ con este plan.
- Configurar Vercel preview.
- Definir variables de entorno.

### Fase 1 — Diseño funcional cerrado

- Validar pantallas Stitch.
- Corregir contenido: quitar limón/rutas/exportación.
- Crear flujo de usuario real.
- Definir data model.

### Fase 2 — Backend/DB MVP

Tablas mínimas:

- products
- product_variants
- receiving_trips
- receiving_trip_items
- inventory_movements
- orders
- order_items
- customers
- weekly_prices
- daily_reports

### Fase 3 — Panel MVP

- Inicio/resumen.
- Registrar viaje.
- Separar bodega/detalle.
- Inventario.
- Pedidos.
- Reporte.

### Fase 4 — WhatsApp IA

- Webhook YCloud.
- Agente pedidos.
- DB tools.
- Escalamiento.
- Pruebas con mensajes reales simulados.

### Fase 5 — Landing pública

- Hero video.
- CTA WhatsApp.
- Productos.
- No precios.
- DNS thegoldengreen.co.

### Fase 6 — Web ordering

- Formulario pedido web.
- Conexión a misma DB.
- Misma lógica de inventario.

## Riesgos

- Inventario real puede moverse más rápido que el sistema si el primo no registra ventas de bodega/detalle.
- Canastilla de 20 kg es aproximada; debe ser configurable.
- IA no debe prometer disponibilidad sin consultar stock reservado/disponible.
- No mezclar pedidos mayoristas con venta unidad/detal sin distinguir destino.
- Evitar panel complejo; debe ser usable desde celular y en bodega.

## Próximo paso recomendado

1. Crear repo privado `the-golden-green`.
2. Copiar este plan como `docs/master-plan.md`.
3. Crear Next.js + Tailwind + estructura de pantallas.
4. Implementar primero prototipo navegable sin backend real.
5. Luego conectar DB y lógica.

## Regla de construcción

No construir “tienda online” primero. Construir:

```text
bodega OS → panel móvil → inventario por viaje → pedidos → reporte → landing
```
