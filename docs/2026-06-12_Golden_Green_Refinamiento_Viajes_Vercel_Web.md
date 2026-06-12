# Golden Green — refinamiento: inventario por viaje, Vercel, web y panel móvil

Fecha: 2026-06-12

## Nuevos datos de Mao

- Nombre del negocio: The Golden Green.
- Dominio comprado: http://thegoldengreen.co/
- Dominio destinado al negocio del primo.
- Link Google enviado: https://share.google/MCTzL16ckOb2QdzNa
- La marca/logo actual puede cambiar: se quiere dar nuevo aire al negocio.
- La web será de apoyo inicialmente: informativa, catálogo, CTA WhatsApp.
- Más adelante la landing debe permitir hacer pedido desde la misma web, no solo por WhatsApp.
- Mao tiene un diseño de referencia que enviará; se debe tomar como estilo, no como contenido literal.

## Cambio importante: inventario por viaje, no por lote

La unidad operativa real es el viaje/carga:

- En un día pueden llegar 1 o 2 viajes.
- Cada viaje puede traer aproximadamente 1, 2, 3, 5 o 6 toneladas de aguacate.
- Al llegar un viaje se registra fecha, hora y kilos recibidos.
- El viaje puede dividirse internamente por producto, calidad y maduración.

Nombre recomendado de tabla: `inventory_trips` o `receiving_trips`.

## Inventario inicial

Antes de operar se debe registrar lo que ya hay en bodega para partir con inventario real.

## Plátano

También se maneja por kilos.

## Proveedores

No son importantes para MVP.

## Pagos / crédito

- El primo a veces fía a algunos clientes.
- Para MVP no se había acordado llevar cartera/cuentas por cobrar.
- Se puede dejar un mini campo visual de forma de pago / pendiente, pero cartera avanzada queda como adicional/fase futura.

## Confirmación de pedidos

Por confirmar con el primo:

- Si la IA puede confirmar sola cuando hay inventario.
- Si algunos clientes tienen prioridad o condiciones especiales.

Recomendación temporal:

- Pedido entra como `recibido`.
- Si hay inventario suficiente, IA puede decir `separado sujeto a confirmación de bodega` o `pre-confirmado`.
- El panel permite al primo confirmar definitivamente.

## Recogida

- Cliente puede recoger casi a cualquier hora dentro del horario de bodega.
- IA debe preguntar hora aproximada de recogida para organizar preparación.

## Registro de entradas

- Normalmente registra el primo.
- También puede registrar un empleado.
- Mao podría registrar al inicio si el primo se lo comunica.
- Panel debe ser ultra simple, mobile-first, para usuario poco técnico.

## Precios

- Cambian semanalmente.
- Se debe preguntar si existen precios distintos por cliente/mayorista.
- Los precios deben ocultarse en web y manejarse por WhatsApp / cliente.
- Modelo recomendado: lista base semanal + posibles overrides por cliente en fase 2.

## WhatsApp API

- YCloud parece buen camino porque permite coexistencia: WhatsApp en teléfono + API.
- Uso simple, sin campañas masivas.
- Automatización principal: responder pedidos y registrar datos.

## Panel

- Usuario principal: primo.
- Debe ser extremadamente intuitivo.
- Principalmente usado desde celular.
- Mobile-first obligatorio.

## Observaciones técnicas verificadas

- `thegoldengreen.co` no resolvió DNS desde el servidor al momento de revisar: `Name or service not known`.
- El link `share.google` redirige a búsqueda Google por: `Distribuidora de aguacate The Golden Green`, kgmid `/g/11t2f8mggz`.
- Google Search no expuso horarios/detalles directamente por scraping simple; requiere navegador o fuente alternativa.

## Decisión técnica sobre Vercel

Vercel es buena opción para frontend/panel/landing.

Para base de datos:

- Usar Vercel + Postgres gestionado puede servir si se quiere velocidad de despliegue.
- Recomendación de arquitectura limpia: Next.js en Vercel + DB PostgreSQL gestionada (Neon/Supabase/Vercel marketplace) + backups + API serverless.
- Si necesitamos más control operativo/n8n/cron/reportes, mantener workers/reportes en servidor propio y usar DB gestionada.

## Plan actualizado

1. Auditar dominio y DNS.
2. Construir modelo DB con `viajes` como entidad principal de recepción.
3. Panel mobile-first.
4. Inventario por viaje + subdivisión por producto/calidad/maduración.
5. Pedidos para recoger + hora aproximada.
6. Reporte consolidado antes de apertura.
7. WhatsApp IA vía YCloud si se confirma número/API.
8. Landing informativa primero; pedido web en fase posterior.
