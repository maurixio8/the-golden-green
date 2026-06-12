---
type: project
fecha: 2026-06-11
tags: [golden-green, ia-whatsapp, aguacates, inventario, pedidos, crm, mvp]
---

# Golden Green / Sistema IA para negocio del primo — Visión inicial

## Contexto

Mao compartió el resumen de una llamada sobre implementar un sistema con IA para el negocio de aguacates de su primo, inspirado en la experiencia de Tus Aguacates / Leonor.

## Idea central

Crear una plataforma para que el negocio del primo pueda operar ventas por WhatsApp con agente IA, página web, inventario, pedidos y reportes sin depender de que el dueño esté pegado al celular.

## Necesidades del primo

- Agente IA que atienda clientes por WhatsApp.
- Preguntar y responder precios/productos.
- Tomar pedidos.
- Separar vida personal y trabajo usando un teléfono dedicado al negocio.
- Reportar bodega, ventas, faltantes y merma.
- Consultar inventario mediante IA.
- Sincronización en tiempo real entre tienda web, precios e IA.
- Comunicación con audios para que la atención se sienta natural.

## Negocio

- Vende aguacate.
- También mueve plátano.
- Tiene demanda alta y está perdiendo pedidos por falta de sistema.
- Quiere eventualmente abrir sucursal en Bogotá, posiblemente norte/Chapinero/Suba.
- Tiene capacidad económica y paga desarrollo a medida.
- Tiene otros ingresos: taxis.

## Hipótesis de producto

Este proyecto no debe ser solo una página web. Debe ser un **sistema operativo comercial para un negocio de frutas/aguacates**, compuesto por:

1. Backend con base de datos como fuente de verdad.
2. Web pública para catálogo/pedidos/leads.
3. Panel administrativo para productos, precios, inventario y pedidos.
4. Agente IA WhatsApp conectado al inventario y pedidos.
5. Reportes operativos: ventas, bodega, merma, faltantes.
6. Módulo futuro multi-sucursal.

## Enfoque metodológico

Aplicar `mao-operating-methodology`:

```text
auditar realidad → diseñar → planificar → backend/datos → web/panel → agente IA → verificar → documentar
```

Para este proyecto parece mejor empezar por **modelo de datos/backend** antes que por diseño visual, porque la IA, la web y los reportes deben compartir una misma verdad: productos, precios, inventario, pedidos y clientes.

## MVP tentativo

MVP 1 debería incluir:

- Base de datos.
- Productos/precios/stock.
- Clientes.
- Pedidos.
- Web pública sencilla.
- Panel básico para cambiar precios e inventario.
- Agente WhatsApp básico que consulta precios, toma pedidos y registra conversaciones/pedidos.
- Reporte diario simple.

## Preguntas pendientes

- Dominio exacto.
- Nombre final del negocio: ¿Golden Green o marca del primo?
- Ciudad/zonas de entrega.
- Tipos de clientes: hogar, restaurantes, tiendas, mayoristas.
- Catálogo inicial: aguacate, plátano, otros.
- Unidades y precios.
- Cómo maneja domicilios.
- Medios de pago.
- Qué debe hacer la IA cuando hay duda o queja.
- Quién administrará inventario y pedidos.
- Integración WhatsApp: YCloud, Meta Cloud API u otra.

## Estado

Primer intake recibido. Falta conversación de definición de negocio y dominio.
