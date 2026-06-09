# Guía — Vercel (MND130)

> **Cuándo usás esto:** en la Clase 2, cuando quieras publicar tu app para que viva online. No hace falta antes.
> **Qué vas a lograr:** tener una cuenta de Vercel conectada a tu GitHub, para que cada vez que subas cambios tu app se publique sola.
> **Tiempo estimado:** ~5 minutos.

---

## Qué es Vercel

Vercel es donde tu app va a vivir en internet. Cuando termines de construir algo, Vercel lo publica con un link que cualquier persona puede visitar. Se conecta con GitHub: cada vez que subís cambios a tu código, Vercel actualiza tu sitio **automáticamente**.

> **Importante:** Vercel **no** se conecta a Claude Code por MCP. Se maneja desde su propia web, enganchado a GitHub. Publicar es subir tus cambios a GitHub; Vercel hace el resto solo.

---

## 1. Crear la cuenta

1. Andá a **[vercel.com](https://vercel.com)**
2. Hacé clic en **Sign Up** (arriba a la derecha)
3. Elegí la opción **Continue with GitHub** (usás la cuenta de GitHub que ya tenés)
4. Autorizá a Vercel a conectarse con tu cuenta de GitHub: hacé clic en **Authorize Vercel**
5. Cuando te pregunte por el tipo de cuenta, seleccioná **Hobby** (es gratis)
6. Listo. Ya tenés Vercel conectado a GitHub.

### Si algo no sale

- **"I don't have a GitHub account"**: necesitás la cuenta de GitHub primero (ver la Guía de GitHub).
- **No me deja autorizar**: asegurate de estar logueado en GitHub en el mismo navegador.
- **Me pide un número de teléfono o tarjeta**: en el plan Hobby no debería pedirte nada de eso. Si te lo pide, probablemente elegiste el plan equivocado. Volvé a empezar y seleccioná **Hobby**.

---

## 2. Cómo se publica tu app

No hay que conectar nada más. El circuito es:

1. Construís y probás tu app **en local** (en tu máquina).
2. Cuando está lista, **subís los cambios a GitHub**.
3. Vercel lo detecta y **publica la nueva versión sola**, con tu link `tu-proyecto.vercel.app`.

La primera vez, desde la web de Vercel vas a **importar tu repo de GitHub** (botón **Add New → Project**) y darle **Deploy**. De ahí en más, cada cambio que subas a GitHub se publica automáticamente.

### Si algo no sale

- **El deploy falla**: entrá al deploy en la web de Vercel y mirá los **logs** (te dicen qué falló). Copiá el error y pedile a Claude Code que te ayude a resolverlo.
- **No veo mi repo al importar**: en Vercel, revisá los permisos de la app de GitHub para que tenga acceso a ese repositorio.
- **Las variables de entorno (claves)**: configuralas en la web de Vercel (**Settings → Environment Variables**), nunca en el código.
