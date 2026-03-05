# AGENTS.md

## Resumen del proyecto
- Sitio institucional/landing de **Dynamic SA** (drogueria y distribucion farmaceutica).
- Implementado con **Astro 5** + **TailwindCSS 4**.
- Dominio objetivo configurado: `https://dynamicsa.com.ar`.
- El sitio actual es una sola pagina (`src/pages/index.astro`) compuesta por secciones reutilizables.

## Objetivo funcional actual
- Presentar propuesta de valor de Dynamic SA.
- Mostrar servicios, informacion corporativa y canales de contacto.
- Mejorar captacion de consultas comerciales (CTA y modal de contacto con WhatsApp).
- Sostener SEO local para Cordoba y Tucuman.

## Stack y comandos
- Runtime: Node.js (npm).
- Framework: Astro (`astro`).
- Estilos: Tailwind v4 via `@tailwindcss/vite`.
- Animaciones: `gsap` + animaciones CSS utilitarias.

Comandos principales:
- `npm run dev` inicia entorno local.
- `npm run build` compila a `dist/`.
- `npm run preview` sirve build local.

## Estructura clave
- `src/pages/index.astro`: pagina principal + JSON-LD tipo `Pharmacy`.
- `src/layouts/Layout.astro`: layout base (meta/SEO global).
- `src/components/sections/*`: secciones (Hero, Services, AboutUs, CTA, Contact).
- `src/components/elements/ContactChannelsModal.astro`: modal de contacto por sucursal/area.
- `src/styles/global.css`: estilos globales y tokens visuales.
- `public/images` y `public/logos`: assets estaticos.

## Estado de contenido relevante
- Marca y copy ya adaptados a Dynamic SA (no es solo template generico).
- `Hero` usa `ContactChannelsModal` con sucursales Cordoba/Tucuman.
- En el modal hay enlaces `whatsappHref` placeholder (`"#"`) en varias opciones: completar antes de produccion.
- Existen textos con problemas de codificacion en algunos archivos (ej. `Contact.astro`: `ContÃ¡ctenos`): normalizar a UTF-8.

## Criterios para futuras ediciones
- Mantener consistencia de tono corporativo y enfoque salud B2B.
- Preservar SEO local:
  - revisar `title`, `description`, `keywords` en `index.astro`.
  - mantener actualizado `structuredData` (telefonos, direcciones, areaServed).
- Si se cambia contacto comercial:
  - actualizar simultaneamente Hero, modal y seccion Contact.
  - verificar `mailto`, telefonos y enlaces de WhatsApp reales.
- Validar responsive en breakpoints mobile/tablet/desktop despues de cambios visuales.

## Checklist rapido antes de cerrar cambios
- `npm run build` sin errores.
- No dejar placeholders (`#`) en CTAs productivos.
- Revisar acentos/caracteres especiales en espanol.
- Verificar accesibilidad basica:
  - botones con `aria-label` cuando aplique.
  - foco/cierre por `Escape` en modales.
