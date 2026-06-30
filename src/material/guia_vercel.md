# Guía — Vercel (MND130)

> **Cuándo usás esto:** en la Clase 3, cuando publiques tu app para que viva online. En la Clase 2 trabajás solo en local, así que no hace falta antes.
> **Qué vas a lograr:** publicar tu app en internet con una URL pública, pidiéndoselo a Claude Code. Sin GitHub, sin tocar la terminal a mano.
> **Tiempo estimado:** ~5 minutos.

---

## Qué es Vercel

Vercel es donde tu app va a vivir en internet. Cuando termines de construir algo, Vercel lo publica con un link que cualquier persona puede visitar. Es gratis para un MVP.

> **Cómo se conecta:** Claude Code usa la herramienta de Vercel (la "CLI") para subir tu carpeta directo desde tu compu. Vos le pedís en español *"publicá mi app en Vercel"* y la IA lo hace. Te logueás una sola vez por el navegador.

---

## 1. Crear la cuenta

1. Andá a **[vercel.com](https://vercel.com)**
2. Hacé clic en **Sign Up** (arriba a la derecha)
3. Registrate **con tu email** (poné tu mail y una contraseña). Revisá tu casilla y confirmá el mail si te lo pide.
4. Cuando te pregunte por el tipo de cuenta, seleccioná **Hobby** (es gratis).
5. Listo. Ya tenés tu cuenta de Vercel.

### Si algo no sale

- **Me pide un número de teléfono o tarjeta**: en el plan Hobby no debería pedirte nada de eso. Si te lo pide, probablemente elegiste el plan equivocado. Volvé a empezar y seleccioná **Hobby**.
- **No me llega el mail de confirmación**: revisá spam. Si en un par de minutos no llega, pedí que lo reenvíen.

---

## 2. Cómo se publica tu app

Se la pedís a Claude Code. El circuito es:

1. Construís y probás tu app **en local** (en tu máquina), hasta que ande.
2. Le decís a la IA: **"publicá mi app en Vercel"**.
3. La primera vez, la IA instala la herramienta de Vercel y te pide **loguearte por el navegador** (una sola vez). Aceptás y listo.
4. La IA sube tu carpeta y Vercel te devuelve tu link `tu-proyecto.vercel.app`.

Para republicar más adelante, le volvés a pedir *"publicá los cambios"* y la IA sube la versión nueva.

### Las variables de entorno (el paso que más falla)

Tu app anda en local porque las claves de Supabase están en tu archivo `.env` **de tu compu**. Ese archivo **no viaja a Vercel**. Por eso es muy común que la app ande en local pero falle online: Vercel no tiene las claves.

La solución: cargá las claves **a mano en la web de Vercel**.

1. Entrá a tu proyecto en **[vercel.com](https://vercel.com)**.
2. Andá a **Settings → Environment Variables**.
3. Cargá las **mismas claves** que tenés en tu `.env` (mismo nombre y mismo valor).
4. Volvé a publicar (*"publicá los cambios"*) para que tome las claves nuevas.

### Si algo no sale

- **El deploy falla**: copiá el error que te muestra y pedile a Claude Code que te ayude a resolverlo.
- **La app abre pero no carga datos / da error**: casi siempre son las variables de entorno. Revisá que estén cargadas en **Settings → Environment Variables** y volvé a publicar.
