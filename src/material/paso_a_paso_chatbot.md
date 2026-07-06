# Paso a paso — Sumale un chatbot a tu app (MND130)

> **Cuándo usás esto:** en la Clase 4, para meterle a tu MVP un chatbot que responde con TUS datos.
> **Qué vas a lograr:** un asistente en tu app que responde preguntas en lenguaje natural usando solo la información de tu base — sin inventar.
> **Antes de empezar:** necesitás tu API key de Anthropic cargada en el `.env` (seguí la **Guía — API de Anthropic**) y tu app funcionando con datos reales.

---

## La idea en una línea

El chatbot es: **tu app junta tus datos, se los pasa al modelo con la pregunta del usuario, y el modelo redacta la respuesta.** El modelo no se conecta a nada ni "aprende" de vos: le mandás los datos en cada pregunta. Todo el resto es afinado.

Este paso a paso es el que usamos para construir el asistente de CanchApp (el demo del curso): *"¿hay cancha libre hoy a las 19?"* → responde con la disponibilidad real de la base. Adaptá los prompts a tu app.

---

## Paso 0 — Decidí antes de pedir (2 min)

Como todo en el método: primero decidís, después construís. Tres decisiones, anotalas en tu `docs/brief.md`:

1. **Qué hace el bot, en una frase.** "Responde qué canchas están libres." No "un asistente inteligente".
2. **Qué NO hace.** El de CanchApp no reserva (te manda a la grilla), no inventa, no habla de otra cosa.
3. **Con qué datos responde.** ¿Qué tablas de tu base necesita ver para responder?

---

## Paso 1 — Pedí la versión más simple

El prompt que funciona (adaptá los nombres a tu app):

> *"Agregá un chatbot a mi app: una pantalla de chat donde el usuario pregunta en lenguaje natural.*
>
> *El endpoint tiene que: (1) consultar [tus tablas — en CanchApp: canchas y reservas] en Supabase, (2) armar un resumen en texto con esos datos [en CanchApp: los turnos LIBRES por fecha y hora de los próximos 7 días], y (3) pasarle ese resumen a la API de Claude (modelo `claude-sonnet-4-6`) junto con la pregunta del usuario.*
>
> *El system prompt: es el asistente de [tu app], responde SOLO con los datos provistos, si algo no está en los datos dice que no lo sabe, no inventa, y [lo que NO hace — en CanchApp: no reserva, deriva a la grilla]. Habla de vos, cordial y al grano.*
>
> *La API key está en el `.env` como `ANTHROPIC_API_KEY` y solo se usa del lado del servidor — nunca debe llegar al navegador. Probalo en local."*

Fijate lo que estás decidiendo en ese prompt: qué datos ve el bot, qué hace, qué no hace, y dónde vive la clave. La IA escribe el código; el criterio es tuyo.

---

## Paso 2 — Probalo con preguntas cuya respuesta CONOCÉS

No le preguntes cualquier cosa: preguntale algo que puedas verificar contra tu propia app.

- En CanchApp: *"¿hay cancha libre hoy a las 19?"* → y lo comparás **contra la grilla**. La grilla es la verdad.
- Probá también una **repregunta** ("¿y mañana a la noche?") para ver que sigue la conversación.
- Y algo **fuera de tema** ("¿tenés canchas de pádel en Rosario?") → tiene que decir que no sabe, no inventar.

---

## Paso 3 — Cuando se equivoca: la regla de oro

Al construir el demo, la primera versión del bot **metió una cancha de más**. ¿Por qué? Le pasábamos al modelo solo los turnos *ocupados* y le pedíamos deducir los libres. Deducir es donde el modelo patina.

**La regla: lo determinístico se calcula en código; el modelo solo redacta.** Si la respuesta se puede computar (filtrar, contar, restar conjuntos, sumar), que lo haga tu app y le pase el resultado ya resuelto. El prompt de corrección:

> *"El bot se equivocó: dedujo mal qué canchas estaban libres. No le pases los ocupados para que deduzca: calculá los turnos LIBRES en el código del endpoint y pasale al modelo la lista ya resuelta. El modelo solo tiene que redactarla."*

Esta regla te va a servir en cualquier feature de IA que hagas: **el modelo es bueno leyendo y redactando, no calculando.**

---

## Paso 4 — Afiná el system prompt

Con el bot andando, el trabajo fino es tuyo y es en español. Cosas que valen la pena pedir:

> *"Ajustá el system prompt del bot: (1) que responda corto y al grano, (2) sin emojis, (3) que escriba la respuesta de una — nunca que se corrija en el medio, (4) si el usuario quiere [la acción que tu bot no hace], que lo derive a [la pantalla de tu app]."*

Probá el mismo set de preguntas del Paso 2 después de cada cambio. El mismo modelo con dos system prompts distintos es dos productos distintos.

---

## Paso 5 — Publicá

Tu `.env` vive solo en tu compu. Al publicar:

1. En la web de Vercel: tu proyecto → **Settings → Environment Variables** → agregá `ANTHROPIC_API_KEY`.
2. Pedile a Claude Code que publique de nuevo la app en Vercel.
3. Probá el bot en la URL pública. Si anda en local pero online no: te faltó el paso 1 (es el error clásico).

---

## ¿Y si mi bot necesita leer documentos? (RAG)

Si tu info vive en PDFs (manuales, contratos, catálogos), el mismo esquema aplica con un paso más: **buscar el pedazo relevante** del documento antes de pasárselo al modelo. Eso es RAG (Retrieval Augmented Generation). Cómo se hace:

1. **Extraer el texto** de los PDFs (una librería lo hace; la IA la conecta).
2. **Guardarlo troceado** en Supabase con **pgvector** (búsqueda por significado, viene gratis en el free tier).
3. **Al preguntar**, tu app busca los 3-5 pedazos más relevantes y se los pasa al modelo con la pregunta — igual que le pasamos las canchas libres.

El prompt para pedirlo:

> *"Quiero que mi bot responda usando mis documentos PDF. Armá el flujo RAG: extraé el texto de los PDFs de [carpeta], guardalo troceado en Supabase con pgvector, y al recibir una pregunta buscá los pedazos más relevantes y pasáselos al modelo junto con la pregunta. Que responda SOLO con eso y cite de qué documento salió."*

¿Cuándo lo necesitás? Cuando los datos **no entran** en el prompt (cientos de páginas). Si tu info entra cómoda en el contexto — como las canchas de CanchApp — no hace falta RAG: pasásela directo.

## ¿Y si tiene que HACER cosas? (agente)

Si querés que el bot no solo responda sino que **ejecute acciones** (reservar, cancelar, agendar), eso es un agente con tool use: le declarás herramientas y el modelo elige cuándo usarlas. Tu app sigue siendo la que ejecuta — el modelo decide, no toca la base. El prompt (probado en el demo de CanchApp):

> *"Convertí el bot en un agente con tool use de la API de Claude: agregá la herramienta `crear_reserva(complejo, cancha, fecha, hora)`. Cuando el modelo la pida, el endpoint ejecuta la función de reservar que la app YA tiene (con sus validaciones: login obligatorio y anti-doble-reserva). Reglas para el system prompt: (1) antes de reservar, el bot confirma con el usuario cancha, fecha, hora y precio, y espera un sí explícito; (2) si la función dice que no está logueado, le pide iniciar sesión en la app; (3) si el turno ya está tomado, avisa y ofrece las alternativas libres."*

Dos cosas de ese prompt que son EL criterio (y valen para cualquier agente):

- **Confirmar antes de ejecutar.** Una acción irreversible nunca se dispara de una. El bot repite qué va a hacer y espera el sí.
- **Las validaciones viven en tu código, no en el modelo.** El login y el anti-doble-reserva los pone la función de tu app — la misma que usa la pantalla de reservar. Al modelo se lo puede engañar con prompts; a tu código no.

---

## Cuánto cuesta

Medido en el demo real: cada pregunta al bot de CanchApp cuesta **~1-2 centavos de dólar** (el contexto con una semana de disponibilidad es generoso). Con los US$5 mínimos de la cuenta hacés cientos de preguntas. El costo importa recién con volumen real — y para entonces ya validaste.
