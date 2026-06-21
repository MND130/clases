# Guía — Supabase (MND130)

> **Cuándo usás esto:** en la Clase 2, cuando tu app necesite guardar datos o manejar logins. No hace falta antes.
> **Qué vas a lograr:** tener una cuenta de Supabase y dejarla conectada a Claude Code, para que la IA pueda crear tablas y manejar la base por vos.
> **Tiempo estimado:** ~10 minutos.

---

## Qué es Supabase

Supabase es tu base de datos y tu sistema de login, todo en uno. Cuando tu app necesite guardar información (usuarios, registros, datos) o decidir quién puede entrar, Supabase se encarga. No tenés que montar ni mantener un servidor propio.

---

## 1. Crear la cuenta

1. Andá a **[supabase.com](https://supabase.com)**
2. Hacé clic en **Start your project** o **Sign Up**
3. Elegí **Continue with GitHub** (usás la cuenta de GitHub que ya tenés)
4. Autorizá la conexión con GitHub
5. Una vez adentro, vas a ver un dashboard. No hace falta crear ningún proyecto todavía: eso lo hacés en clase.
6. Listo.

### Si algo no sale

- **Me pide crear una organización**: creá una con tu nombre. Es solo para agrupar tus proyectos.
- **La interfaz está en inglés**: Supabase solo está en inglés, pero en clase repasamos todo lo necesario.
- **Me dice que tengo un límite de 2 proyectos gratis**: es correcto, con 2 alcanza para el curso.

---

## 2. Dos proyectos: prueba y producción

Una aclaración importante para que no te confundas: tu app corre en **local** (en tu máquina), pero la base de datos vive siempre en la nube, en Supabase. Tu app local se conecta a Supabase por internet.

Por eso trabajás con **dos proyectos** de Supabase (el plan gratis te da 2, justo):

- **Proyecto de prueba** — al que apunta tu app mientras construís en local. Lo llenás de datos truchos, lo rompés, no importa. **Este es el que creás en la Clase 2.**
- **Proyecto de producción** — los datos reales, el que usan tus usuarios. **Lo creás recién en la Clase 4**, cuando publicás. Nunca lo tocás a mano.

> No hace falta una "base de datos local": montar eso en tu máquina es complejo y no aporta. Con el proyecto de prueba ya experimentás tranquilo, sin tocar nada real.

Cómo crear el proyecto de prueba (en la Clase 2):

1. En tu dashboard de Supabase, hacé clic en **New project**.
2. Ponele un nombre claro, por ejemplo `mi-mvp-dev` (dev = de prueba).
3. Elegí una contraseña para la base y guardala.
4. Elegí la región más cercana y creá el proyecto.
5. Cuando esté listo, las **claves de conexión** (URL y API key) las vas a guardar en tu archivo `.env`. Pedile a Claude Code que te ayude: "conectá mi proyecto de Supabase, las claves van en variables de entorno".

---

## 2. Conectar Supabase a Claude Code

Abrí la terminal integrada de Cursor (menú **Terminal → New Terminal**, o `` Ctrl+` ``) y pegá esta línea **tal cual**:

```
claude mcp add --transport http supabase https://mcp.supabase.com/mcp
```

Apretá Enter. Después:

1. Abrí un **chat nuevo** de Claude Code y escribí `/mcp`.
2. Se abre una lista con las herramientas. Elegí **supabase** y hacé clic en **Authenticate**.
3. Se te va a abrir el navegador pidiéndote permiso para conectar tu cuenta. Hacé clic en **Authorize** / **Allow**.
4. Volvé a Cursor. Supabase quedó conectado.

> **Login con OAuth:** "OAuth" es el mismo mecanismo de cuando entrás a una web con "Continuar con Google". No compartís tu contraseña: solo autorizás la conexión desde el navegador.

### Verificar

En un chat nuevo de Claude Code, escribí `/mcp`. Tenés que ver **supabase** en la lista.

### Si algo no sale

- **Me sale "Streamable HTTP error" al autenticar**: es un error transitorio del login. **Reintentá** (volvé a darle Authenticate): suele andar en el segundo o tercer intento.
- **No aparece supabase en `/mcp`**: abrí un **chat nuevo** de Claude Code. Las herramientas recién agregadas no aparecen en chats viejos.
- **`command not found: claude`**: la extensión de Claude Code no está instalada o Cursor no la detecta. Volvé a la Guía de Setup, instalá la extensión y reabrí Cursor.
