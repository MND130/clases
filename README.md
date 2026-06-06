# MND130 — Curso "Cómo acelerar el ciclo de desarrollo de un MVP con IA"

App de slides del curso de posgrado de UdeSA. Son **4 clases** que se presentan en pantalla (no son PDFs: es una web interactiva, con generador de ideas, timer de breaks y material descargable).

El curso enseña a perfiles de management (no-técnicos) a llevar una idea a un **MVP en producción** usando IA, siguiendo un método propio: **The MND130 Way**.

---

## El método: The MND130 Way

> Primero decidís todo, después construís. Nunca al revés.

4 fases, una por clase:

1. **Decidir** — antes de codear, tomás las 8 decisiones del brief y las dejás en un `CLAUDE.md` que dirige a la IA.
2. **Construir** — en fases incrementales y en local primero (probás en tu máquina; publicás solo lo que ya funciona).
3. **Sumar IA** — chatbots, agentes y asistentes sobre documentos (RAG), si el producto lo pide.
4. **Revisar y publicar** — auditás contra tu brief, sumás analytics y deployás a producción.

---

## Cómo correr

```bash
npm install        # solo la primera vez
npm run dev        # levanta la app en local (http://localhost:5173)
npm run build      # build de producción + chequeo de tipos
```

Para **verificar los tiempos y la ubicación de los breaks** de cada clase:

```bash
python3 scripts/timeline.py            # resumen de las 4 clases
python3 scripts/timeline.py 1 --full   # detalle slide por slide de una clase
```

### Cómo presentar

Abrí la app, entrá a una clase y usá las flechas (o la barra inferior) para navegar. Tecla `F` para pantalla completa. La barra de navegación se puede colapsar para que no moleste durante una demo en vivo.

---

## Estructura

```
src/
  clases/Clase1..4.tsx      Cada clase = un array de slides (JSX). El CONTENIDO vive acá.
  components/
    Slides.tsx              Todos los componentes de slide (ver abajo). Tocás acá → cambia en las 4 clases.
    Deck.tsx                El reproductor: navegación, fullscreen, barra colapsable, impresión.
    GeneradorIdeas.tsx      Sortea una idea de MVP al azar (banco en lib/ideas.ts).
    Material.tsx            La pantalla de material descargable.
  lib/ideas.ts              El banco de ideas que usa el generador.
  material/*.md             El material que descargan los alumnos (cheatsheet, CLAUDE.md, prompts, guía de setup, ejercicios).
  index.css                 La escala tipográfica central (--type-scale) y estilos del material.
public/profes/              Fotos de los profes (Portada).
scripts/timeline.py         Script para medir tiempos y breaks de las clases.
```

### Componentes de slide

Las clases no tienen estilos propios: arman slides combinando componentes de `Slides.tsx`.

- **Contenedores:** `SlideClara`, `SlideOscura`, `Portada`, `Seccion`.
- **Texto:** `Bullets`, `BulletsIcono`, `Glosario`, `Pasos`, `Cita`, `Ejemplo`, `Codigo`, `Tarjetas`, `DosCols`, `AntesDespues`, `PromptRespuesta`, `Checklist`.
- **Propios del curso:** `Fases` (la fila de las 4 fases), `ManosALaObra` (hands-on), `Checkpoint` (parar y verificar), `DemoEnVivo` (cuando el profe construye en vivo), `Break` (descanso con timer editable).

---

## Convenciones (importante mantenerlas)

- **Tipografía:** los tamaños viven como clases semánticas en `index.css` (`.t-body`, `.t-label`, etc.), calculadas desde `--type-scale`. Para agrandar/achicar TODO el texto del curso, se cambia ese único número. No hardcodear `text-[15px]` en los componentes.
- **Tiempos:** cada clase apunta a ~180 min (incluye 2 breaks de 15). Se estima slide por slide con `scripts/timeline.py`, no a ojo.
- **Breaks:** 2 por clase, el primero cerca de los 60 min, el segundo cerca de los 120. El script avisa si caen fuera de rango.
- **Material descargable:** los `.md` de `src/material/` son lo que se les entrega a los alumnos. Mantenerlos alineados con lo que enseñan las clases.

---

## Stack

Vite + React + TypeScript + Tailwind CSS. Las animaciones usan Framer Motion; los íconos, lucide-react.
