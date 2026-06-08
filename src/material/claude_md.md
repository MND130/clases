# CLAUDE.md — The MND130 Way

> Este archivo es la **fuente de verdad** de tu proyecto. Claude Code lo lee al inicio de cada sesión.
> La PARTE 1 es la **doctrina del método** — es igual para todos los proyectos y NO se toca.
> La PARTE 2 es **tu proyecto** — la completás vos en la fase Decidir y la mantenés actualizada.
>
> Regla de oro del método: **primero se decide, después se construye.** Cuando algo no está claro,
> la respuesta está en este archivo — no se improvisa.

---

# PARTE 1 — Cómo trabajamos (doctrina del método)

> Estas reglas son innegociables. Vienen de nuestra forma de construir MVPs con IA.
> Claude: seguilas siempre, aunque yo no las repita en cada pedido.

## 1. Primero entender, después escribir
Antes de escribir una sola línea de código, confirmá que entendés QUÉ te estoy pidiendo y por qué.
Si algo del proyecto (PARTE 2) no está claro o falta, **preguntá — no inventes**.
*Por qué: en este método las decisiones se toman antes de construir. Un build que arranca sobre una duda termina en un producto que no era el que queríamos.*

## 2. Trabajamos en fases, con checkpoints
Construimos en fases incrementales. Cada fase tiene que terminar con **algo que funcione y se pueda probar**.
- No avances a la siguiente fase sin que yo confirme que la anterior está OK.
- Al terminar cada fase, decime exactamente **qué probar y cómo verificarlo**.
- Si no podés decirme cómo probar lo que hiciste, probablemente no sabés bien qué hiciste — paremos y revisemos.
*Por qué: si algo se rompe, sé exactamente dónde volver. Y si me quedo sin tiempo, tengo algo que ya funciona.*

## 3. Local primero, producción al final
Todo corre **primero en mi máquina**, contra una base de datos de prueba. Rompé, experimentá y arreglá ahí, donde el error es gratis y nadie lo ve.
- No toques producción ni datos reales hasta que yo lo diga explícitamente.
- El deploy es un paso deliberado, no algo que pasa solo.
*Por qué: el amateur escribe directo en producción y reza. Nosotros publicamos sólo lo que ya funciona en privado.*

## 4. Seguridad mínima, siempre
- **Nunca** pongas claves, tokens o API keys en el código. Usá variables de entorno (`.env`) y avisame si necesito crear una.
- Nunca confíes en el input del usuario sin validarlo.
- Si algo expone datos sensibles, frená y avisame antes de seguir.
*Por qué: una clave filtrada o un input sin validar es el error más caro y más común. Lo cortamos de raíz.*

## 5. Mobile-first
Diseñá y construí pensando primero en el celular. La mayoría del tráfico es mobile.
*Por qué: si lo pensás para desktop y después lo adaptás, terminás rehaciendo todo.*

## 6. Código que se entienda y no se repita
- Si algo se repite en varios lados, está mal: refactorizá a un solo lugar.
- Archivos cortos y carpetas claras. Si un archivo se está volviendo gigante, partilo y avisame.
- Nada de `any` por todos lados ni dependencias que no usamos.
*Por qué: dentro de tres días yo (o vos) tenemos que poder entender este código. La prolijidad es lo que hace que el MVP sobreviva.*

## 7. Git como red de seguridad
Hacé commits frecuentes y con mensajes claros, sobre todo al cerrar cada fase.
*Por qué: si algo se rompe y no sabemos qué, volvemos al último commit que funcionaba. Sin drama.*

## 8. Cuando algo no sale
Si después de ~3 intentos un problema no se resuelve, **no insistas con el mismo enfoque**.
Frená, explicame en una línea qué estás intentando lograr, y proponé un approach distinto.
*Por qué: la IA dando vueltas sobre el mismo error casi siempre significa que el camino está mal, no que falta un intento más.*

## 9. La spec manda
Si lo que estamos por construir contradice algo de la PARTE 2, **avisame antes de hacerlo**.
Si hay que cambiar una decisión, primero la actualizamos acá y después la construimos — nunca al revés.
*Por qué: el archivo es la fuente de verdad. Si el código y la spec divergen en silencio, perdemos el control del proyecto.*

## 10. Las herramientas tienen que estar conectadas antes de construir
Este proyecto necesita **GitHub** (el código), **Supabase** (base de datos y login) y **Vercel** (publicar) conectados a Claude Code por MCP.
- **Antes de empezar a construir, verificá que estén conectados:** corré `claude mcp list` y fijate que GitHub, Supabase y Vercel digan **Connected**.
- Si **falta alguno o dice "Needs authentication"**, frená y avisame: tengo que conectarlo yo siguiendo la **Guía de Setup (paso 7)** — vos no podés hacerlo solo (requiere que yo genere un token o autorice un login en el navegador).
- No empieces a construir features que dependan de la base de datos o del deploy si la herramienta correspondiente no está conectada.
*Por qué: sin estas herramientas enchufadas, el build se traba a mitad de camino. Es parte del método decidir y dejar listo el setup ANTES de construir, no descubrir que falta algo cuando ya estás en la mitad.*

---

# PARTE 2 — Mi proyecto (se completa en la fase Decidir)

> Esto lo definís vos, con la IA como copiloto de pensamiento, ANTES de construir.
> Reemplazá todo lo que está entre [corchetes]. Mantenelo actualizado: si una decisión cambia, cambiala acá primero.

## Qué es
**Nombre del proyecto:** [nombre]
**En una frase:** [qué es y para quién, en una oración]

## El problema y el usuario
**Problema que resuelve:** [el dolor real, concreto]
**Usuario principal:** [quién exactamente, no "todos"]
**Qué quiere lograr ese usuario (job-to-be-done):** [la tarea que viene a resolver]

## Scope del MVP
**Features CORE (lo mínimo para validar la idea):**
- [feature 1]
- [feature 2]
- [feature 3]

**Lo que NO va en la v1 (explícito — para no caer en la tentación):**
- [nice-to-have 1]
- [nice-to-have 2]

## Pantallas y estados
**Pantallas principales:** [listado]
**Estados que hay que contemplar (no solo el happy path):** [vacío, cargando, error, sin permiso, etc.]

## Datos
**Qué necesito guardar:** [entidades principales y sus campos clave]
**Cómo se relacionan:** [ej: un usuario tiene muchos turnos]

## Stack
- **Frontend/Backend:** [ej: Next.js (App Router)]
- **Base de datos + Auth:** [ej: Supabase]
- **UI:** [ej: shadcn/ui + Tailwind]
- **Deploy:** [ej: Vercel]
*(Si no sé qué stack usar, Claude: ayudame a elegir según el tipo de proyecto, y explicámelo simple.)*

## Riesgos
**Lo más difícil / lo que más puede salir mal:** [ej: la lógica de disponibilidad de turnos]
**Qué hago si eso falla:** [plan B simple]

## Criterios de éxito
**Sé que el MVP validó algo si:** [métrica o señal concreta, ej: "10 personas reservan un turno sin ayuda"]

---

## Estado actual del build
> Esta sección la vas actualizando a medida que avanzás. Le dice a Claude en qué punto estamos.

**Fase actual:** [ej: Fase 2 — feature principal]
**Lo que ya funciona:** [listado]
**Lo próximo:** [lo que sigue]
**Decisiones que cambiaron sobre la marcha:** [si ajustaste algo del plan original, anotalo acá]
