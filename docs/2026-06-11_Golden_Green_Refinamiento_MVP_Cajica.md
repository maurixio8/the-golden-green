---
type: project
fecha: 2026-06-11
tags: [golden-green, mvp, cajica, whatsapp-business, inventario, aguacate, pedidos]
---

# Golden Green — Refinamiento MVP Cajicá

## Nueva realidad operativa

Mao aclaró que la operación inicial no requiere domicilios ni sucursales.

- La sucursal/bodega de Cajicá no entrega a domicilio por ahora.
- Los clientes hacen pedidos con anticipación, normalmente un día antes.
- Al día siguiente recogen el pedido en bodega.
- El negocio abre muy temprano, aproximadamente 3:00 a.m.
- El cierre podría ser alrededor de 3:00 p.m., pendiente confirmar.
- Se creó un nuevo número de WhatsApp Business en el teléfono del primo.
- Los clientes todavía escriben al WhatsApp personal del primo; hay que migrarlos al nuevo canal de negocio.

## Objetivo MVP refinado

Crear un sistema donde el agente IA atienda por WhatsApp Business, conozca inventario aproximado, tome pedidos para recogida en bodega, consolide pedidos antes de la apertura y permita al primo visualizar/controlar información desde un panel.

## Fuera del MVP inicial

- Domicilios / zonas de entrega.
- Multi-sucursal.
- Merma detallada.
- Predicción avanzada de maduración.
- Estadísticas comerciales avanzadas.

Estos módulos quedan para fases posteriores.

## Productos iniciales

1. Aguacate papelillo / lorena — mismo producto, nombres equivalentes.
2. Aguacate Hass — inicialmente Hass primera, bajo volumen.
3. Plátano.

## Variantes para papelillo / lorena

- Categoría: primera, segunda. Tercera queda fuera inicialmente porque casi no la maneja.
- Maduración: verde, pintón/maduro.
- Unidad de venta: kilos.

Combinaciones iniciales:

- Papelillo primera verde.
- Papelillo primera pintón/maduro.
- Papelillo segunda verde.
- Papelillo segunda pintón/maduro.

## Inventario y maduración

El sistema debe registrar lo que entra a bodega por lotes. El aguacate cambia de estado con el tiempo: verde → pintón/maduro. La transición aproximada ocurre después de unos 4 días, pero depende del origen y muchos factores.

MVP: manejar inventario por estado actual y permitir ajustes manuales o asistidos.

Fase posterior: estimar maduración por lote con porcentajes/proyección.

## Pedidos

El MVP debe enfocarse en pedidos de recogida en bodega.

Estados sugeridos:

- recibido
- pendiente_confirmacion
- confirmado_para_recoger
- preparado
- recogido
- cancelado

## Consolidación diaria

Necesidad clave: consolidar pedidos a cierta hora antes de abrir, para que el primo sepa qué preparar.

Ejemplo pendiente de horario exacto:

- Corte/consolidación: antes de 3:00 a.m.
- Reporte de preparación: HTML descargable.
- Reporte debe agrupar por producto, categoría, maduración y kilos.

## Reportes

Mao quiere reportes en HTML, bien estructurados y descargables.

Reportes MVP:

- Consolidado de pedidos para preparar.
- Inventario actual en bodega.
- Pedidos del día por estado.
- Clientes/pedidos nuevos.

Reportes posteriores:

- Merma.
- Ventas históricas.
- Clientes frecuentes.
- Proyección de maduración.

## Plataforma

MVP debe incluir:

- Base de datos.
- Backend/API.
- Panel administrativo.
- WhatsApp Business con agente IA.
- Reportes HTML descargables.
- Web pública simple o landing, conectada más adelante.

## Preguntas pendientes

- Nombre final del negocio y dominio.
- Número de WhatsApp Business y proveedor técnico deseado: Meta Cloud API, YCloud u otro.
- Horario exacto de corte de pedidos y apertura/cierre.
- Lista inicial de precios y formatos de venta.
- Cómo se registra entrada de inventario: por compra/lote/manual.
- Quién confirma o edita pedidos.
- Si el agente puede confirmar pedidos solo o debe dejar algunos para aprobación humana.
