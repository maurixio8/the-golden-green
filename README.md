# The Golden Green

> **Fábrica del proyecto.** Toda la información, código, diseño y documentación vive aquí.
> Proyecto separado de TusAguacates y BioNeural.

## 🧬 ADN Operativo Mao + Hermes

```text
auditar realidad → diseñar → planificar → ejecutar → verificar → documentar
```

## 📋 Datos del proyecto

| Campo | Valor |
|---|---|
| Negocio | Distribuidora de aguacate y plátano |
| Ubicación | Cajicá, Colombia |
| Dueño | Primo de Mao |
| Dominio | `thegoldengreen.co` |
| Productos | Papelillo/Lorena, Hass, Plátano |
| Canal principal | WhatsApp Business |
| Apertura | ~3:00 AM |
| Cierre | ~3:00 PM |
| Sin domicilios en MVP | ✅ |

## 🏗️ Stack

- **Frontend/Landing:** Next.js + Tailwind CSS + TypeScript + Framer Motion
- **Deploy:** Vercel
- **DB (fase 2):** PostgreSQL (Neon/Supabase)
- **WhatsApp (fase 2):** YCloud API
- **Automatización (fase 2):** n8n + Hermes server

## 📁 Estructura

```
TheGoldenGreen/
├── README.md              ← este archivo
├── docs/                  ← documentación fuente (plan, decisiones, prompts)
│   ├── assets/            ← assets de diseño/referencia
│   └── *.md               ← plan completo del proyecto
├── imagenes/              ← fotos y videos reales del producto/bodega (13 JPEG, 2 MP4)
├── public/
│   ├── images/
│   │   ├── raw/           ← fotos originales sin optimizar
│   │   ├── optimized/     ← WebP/AVIF optimizadas
│   │   └── selected/      ← selección final para la landing
│   └── video/
│       └── raw/           ← videos originales
├── src/                   ← código fuente (Next.js App Router)
└── .gitignore
```

## 🚀 Fases

| Fase | Qué | Estado |
|---|---|---|
| 0 | Preparación: repo, estructura, docs | ✅ Ahora |
| 1 | Landing pública: hero, productos, CTA WhatsApp, Vercel | ⏳ Siguiente |
| 2 | Backend/DB: modelo de viajes, inventario, pedidos | 📋 Planeado |
| 3 | Panel mobile-first: registrar viaje, inventario, pedidos | 📋 Planeado |
| 4 | WhatsApp IA: YCloud + agente de pedidos | 📋 Planeado |
| 5 | Pedido web: formulario conectado a misma DB | 📋 Planeado |

## 🔗 Referencias

- Docs completos en `docs/`
- Obsidian vault: `Mao memo/04_Golden_Green/`
- Server vault: `/opt/data/vault/04_Golden_Green/`
