# Guía — API de Anthropic (MND130)

> **Cuándo usás esto:** en la Clase 4, cuando le metas IA adentro de tu app (chatbot, agente, RAG). Antes no hace falta.
> **Qué vas a lograr:** crear tu cuenta de API de Anthropic, cargar crédito, sacar tu API key y dejar tu app llamando a Claude.
> **Tiempo estimado:** ~15 minutos.

---

## Qué es la API de Anthropic (y en qué se diferencia de lo que ya usás)

Hasta ahora usaste a Claude **para construir** tu app: Claude Code escribe el código por vos. En la Clase 4 tu app usa a Claude **como feature**: tu producto le manda una pregunta al modelo y le muestra la respuesta al usuario. Eso se hace por la **API de Anthropic**.

Son dos cosas separadas, con cuentas separadas:

| | Para qué sirve | Cómo se paga |
|---|---|---|
| **Claude Code / claude.ai** | Vos construís tu app | Tu suscripción mensual |
| **API de Anthropic** | Tu app le habla al modelo | Por uso: cargás crédito y se descuenta por mensaje |

> **Importante:** tu suscripción de Claude **no incluye** crédito de API. Aunque ya pagues Claude Code, para esto necesitás crear una cuenta de API y cargarle crédito (con US$5 te sobra para el curso).

---

## 1. Crear la cuenta

1. Andá a **[platform.claude.com](https://platform.claude.com)** (la consola de desarrolladores de Anthropic; si entrás por `console.anthropic.com` te lleva al mismo lugar).
2. Registrate **con tu email** y confirmalo desde tu casilla.
3. Si te pregunta por una organización o workspace, aceptá lo que te propone por defecto. Es solo una forma de agrupar; no cambia nada para vos.

### Si algo no sale

- **Ya tenía cuenta de claude.ai con ese mail**: no hay problema, es la misma cuenta de Anthropic. Pero la parte de API (crédito y claves) es un mundo aparte dentro de esa cuenta.

---

## 2. Cargar crédito

La API es prepaga: cargás un monto y cada mensaje que tu app le manda al modelo descuenta unos centavos (de verdad, centavos — abajo están los números).

1. En la consola, andá a **Settings → Billing** (facturación).
2. Hacé clic en **Buy credits** (o "Add funds").
3. Cargá **US$5** (el mínimo) con tarjeta. Con eso hacés cientos de mensajes de prueba: te alcanza para el curso entero.
4. **Desactivá el auto-recargado** si te lo ofrece ("auto-reload"): para el curso no lo necesitás, y así tenés la certeza de que nunca vas a gastar más que lo que cargaste.

> **¿Cuánto sale cada mensaje?** Un mensaje típico de chatbot (pregunta + un poco de contexto + respuesta) cuesta **menos de un centavo de dólar** con el modelo que usamos en el curso. Tus US$5 no corren peligro.

---

## 3. Crear tu API key

La API key es la credencial con la que tu app se identifica ante Anthropic. Es como la tarjeta de crédito de tu cuenta: quien la tiene, gasta tu crédito. Por eso se trata como un secreto.

1. En la consola, andá a **API Keys**.
2. Hacé clic en **Create Key**.
3. Ponele un nombre claro, por ejemplo `mi-mvp`.
4. Copiá la clave (empieza con `sk-ant-...`) y **guardala ya mismo** en un lugar seguro (un archivo de notas privado sirve). **Se muestra una sola vez**: si cerrás la ventana sin copiarla, no se puede volver a ver.

### Si algo no sale

- **Cerré la ventana sin copiar la clave**: no pasa nada. Creá una clave nueva y borrá la vieja desde la misma pantalla.
- **Creo que mi clave se filtró** (la pegaste en un chat público, la mandaste por mail, quedó en el código publicado): borrala en la consola y creá otra. Tarda 30 segundos y te quedás tranquilo.

---

## 4. Guardar la clave en tu app (el `.env`)

Igual que con Supabase, la clave va en **variables de entorno**, nunca pegada en el código. Pedíselo a Claude Code:

> *"Tengo mi API key de Anthropic. Guardala en el `.env` como `ANTHROPIC_API_KEY` y verificá que el `.env` no se publique con la app."*

Y le pegás la clave.

> **Ojo, esta clave es más delicada que las de Supabase.** La anon key de Supabase está pensada para viajar al navegador; la de Anthropic **no**: es secreta y solo puede usarse del lado del servidor de tu app. En la práctica: **no lleva el prefijo `NEXT_PUBLIC_`** (eso la expondría al navegador). Claude Code lo sabe, pero verificá con esta pregunta: *"¿la API key de Anthropic queda solo del lado del servidor, sin exponerse al navegador?"*

---

## 5. Tu primer chatbot

Con la clave en el `.env`, el chatbot es un pedido a Claude Code. Un prompt que funciona bien (adaptalo a tu app):

> *"En mi app, agregá un chatbot: una pantalla de chat donde el usuario escribe una pregunta y la app llama a la API de Claude (Messages API, modelo `claude-sonnet-4-6`) para responder. La API key está en el `.env` como `ANTHROPIC_API_KEY`. Escribí un system prompt que defina qué hace el bot, cómo habla y qué NO debe hacer. Probalo en local."*

Claude Code te arma el endpoint, la llamada al modelo y la pantalla de chat. Después tu trabajo es **afinar el system prompt**: el mismo modelo con dos system prompts distintos es dos productos distintos.

### Qué modelo elegir

Anthropic tiene varios modelos, que cambian en inteligencia y precio (por millón de tokens; un token es más o menos una sílaba):

| Modelo | Para qué | Precio (entrada / salida) |
|---|---|---|
| `claude-haiku-4-5` | Tareas simples y rápidas (clasificar, etiquetar) | US$1 / US$5 |
| `claude-sonnet-4-6` | **El del curso**: gran balance calidad-precio para tu chatbot | US$3 / US$15 |
| `claude-opus-4-8` | El más capaz; para cuando la calidad manda | US$5 / US$25 |

Para tu MVP, `claude-sonnet-4-6` está muy bien. Si tu bot hace algo trivial, bajá a Haiku y sale casi gratis; si notás que le falta cabeza, probá Opus.

---

## 6. Publicar: la clave también va a Vercel

Como con Supabase, tu `.env` vive solo en tu compu: cuando publiques, Vercel no lo tiene. Hay que cargar la clave a mano:

1. En la web de Vercel, entrá a tu proyecto → **Settings → Environment Variables**.
2. Agregá `ANTHROPIC_API_KEY` con tu clave.
3. Redeployá (o subí un cambio y se publica solo).

Si tu chatbot anda en local pero online no responde, **es esto el 90% de las veces**.

---

## Si algo no sale (errores típicos)

- **"authentication_error" o error 401**: la clave está mal pegada o no está en el `.env`. Revisá que empiece con `sk-ant-` y no tenga espacios de más.
- **"Your credit balance is too low"**: te quedaste sin crédito (o nunca cargaste). Volvé a Settings → Billing.
- **"rate_limit_error" o error 429**: mandaste muchos mensajes muy seguido. Esperá un minuto y seguí; para un MVP de curso no es un problema real.
- **Anda en local pero no online**: falta la variable en Vercel (paso 6).
- **El bot responde cualquier cosa**: no es un error técnico, es tu system prompt. Definí mejor qué hace, con qué información y qué NO debe hacer. Y si responde sobre datos, pedile que cite la fuente.
