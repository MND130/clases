# CLAUDE.md — The MND130 Way

> Este archivo es la **doctrina fija** de tu proyecto. Claude Code lo lee al inicio de cada sesión.
> **No se completa ni se edita:** es igual para todos los proyectos. Lo que cambia (tu producto, tus
> decisiones, en qué fase vas) vive en la carpeta `docs/`, que Claude crea y mantiene actualizada.
>
> Regla de oro del método: **primero se decide, después se construye.** Las decisiones se escriben en
> `docs/` a medida que las tomás — no se improvisan ni se dejan para el final.

---

# PARTE 1 — Cómo trabajamos (doctrina del método)

> Estas reglas son innegociables. Vienen de nuestra forma de construir MVPs con IA.
> Claude: seguilas siempre, aunque yo no las repita en cada pedido.

## 1. Primero entender, después escribir
Antes de escribir una sola línea de código, confirmá que entendés QUÉ te estoy pidiendo y por qué.
Si algo del proyecto no está claro o falta en `docs/`, **preguntá — no inventes**.
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

---

# PARTE 2 — La documentación viva del proyecto (carpeta `docs/`)

> Esta es la parte que reemplaza al viejo "llená el brief al final". El producto, las decisiones y el
> estado del proyecto **no viven en este archivo**: viven en `docs/`, y los vas construyendo *mientras
> conversás conmigo*. Claude: esto es tan importante como la PARTE 1.

## 9. Creá y mantené la carpeta `docs/`
Apenas arrancamos un proyecto, si no existe, **creá la carpeta `docs/`** con estos tres archivos:

- **`docs/brief.md`** — qué es el producto. Contiene, a medida que las vamos decidiendo:
  - Nombre y una frase (qué es y para quién).
  - Problema que resuelve y usuario principal (quién exactamente, no "todos").
  - Features CORE (lo mínimo para validar) y, explícito, **lo que NO va en la v1**.
  - Pantallas y estados (no solo el happy path: vacío, cargando, error, sin permiso).
  - Datos (qué se guarda y cómo se relaciona).
  - Stack (frontend/backend, base de datos + auth, UI, deploy).
  - Riesgos (lo más difícil y el plan B) y criterios de éxito (cómo sé que validó algo).
- **`docs/fases.md`** — el plan de construcción por fases. Cada fase: qué incluye, cómo se prueba, y si está **pendiente / en curso / hecha**.
- **`docs/decisiones.md`** — un registro corto de las decisiones que vamos tomando y por qué. Cuando algo cambia, se anota acá (qué cambió, por qué, qué reemplaza).

> Si alguno de estos archivos todavía no existe cuando lo necesitás, crealo. No me pidas que lo arme yo a mano.

## 10. Actualizá la documentación SOBRE LA MARCHA, no al final
Esto es un comportamiento central, no opcional:

- **Mientras conversamos las decisiones, escribilas en `docs/brief.md` en el momento.** No esperes a que "terminemos de decidir": cada decisión que cerramos se anota ya.
- **Cada vez que avanzamos o cerramos una fase, actualizá `docs/fases.md`** (marcá qué quedó hecho y qué sigue).
- **Cada vez que cambiamos un rumbo, registralo en `docs/decisiones.md`** antes de construir el cambio.
- Si te pido algo y la documentación quedaría desactualizada, **actualizala como parte de la tarea**, no después.

*Por qué: si la documentación se llena al final, no sirve — para entonces ya nos olvidamos de la mitad y el proyecto se desincronizó. La doc que se escribe mientras se decide es la que nos mantiene en control.*

## 11. Sé el safeguard del proyecto (coherencia ante todo)
Tu trabajo no es solo construir: es **cuidar que el proyecto no se contradiga**. Antes de construir algo, chequeá contra `docs/`:

- Si lo que estamos por hacer **contradice** algo ya decidido en `docs/`, **frená y avisame** antes de tocar código. No lo construyas en silencio.
- Si una decisión nueva **invalida** una vieja, no dejes las dos: actualizá `docs/decisiones.md` y `docs/brief.md` para que quede una sola versión coherente.
- Si detectás que `docs/` y el código **divergieron** (el código hace algo que la doc no dice, o al revés), señalámelo y propongamos cómo realinear.
- Si te pido algo ambiguo o que se pisa con el scope, **preguntá antes** en vez de elegir por mí.

*Por qué: la documentación es la fuente de verdad. Si las decisiones se contradicen entre sí o el código se aleja de la spec en silencio, perdemos el control del proyecto. Vos sos la primera línea de defensa contra ese desorden.*

---

> **Cómo empieza todo (fase Decidir):** abrimos el proyecto con este CLAUDE.md adentro y empezamos a
> conversar la idea. A medida que respondés mis preguntas y yo las tuyas, **vas escribiendo `docs/brief.md`**.
> Cuando el brief está, armás `docs/fases.md`. De ahí en más, en cada sesión, mantenés los tres docs al día.
> Este archivo (CLAUDE.md) no se toca: es el método. Lo que evoluciona es `docs/`.
