# Guía de Setup — MND130 (Posgrado UdeSA)

> **Objetivo:** tener todo instalado y configurado ANTES de la Clase 2.
> **Tiempo total estimado:** 45-60 minutos.
> **Requisitos:** una computadora (Mac o Windows), conexión a internet y una cuenta de email.
>
> El curso es **virtual y en vivo** (videollamada por Zoom/Meet). Como no estamos en la misma sala, llegar con todo esto resuelto es clave: en una clase online un problema de instalación te puede dejar trabado un buen rato. Si algo no te sale, mandales un mail a los profesores y lo resolvemos antes de la clase.

---

## Índice

1. [Crear cuenta de GitHub](#1-crear-cuenta-de-github) (~5 min)
2. [Instalar Node.js](#2-instalar-nodejs) (~5 min)
3. [Instalar Cursor](#3-instalar-cursor) (~10 min)
4. [Crear cuenta de Vercel](#4-crear-cuenta-de-vercel) (~5 min)
5. [Crear cuenta de Supabase](#5-crear-cuenta-de-supabase) (~5 min)
6. [Crear cuenta de Claude e instalar Claude Code](#6-crear-cuenta-de-claude-e-instalar-claude-code) (~15 min)
7. [Test de que todo funciona](#7-test-de-que-todo-funciona) (~5 min)

---

## 1. Crear cuenta de GitHub

**Tiempo estimado: 5 minutos**

### Qué es GitHub

GitHub es donde va a vivir tu código. Pensalo como un Google Drive para proyectos de software: guarda tus archivos, mantiene un historial de cambios y te permite colaborar con otros.

### Paso a paso

1. Abrí tu navegador y andá a **[github.com](https://github.com)**
2. Hacé clic en **Sign up** (arriba a la derecha)
3. Ingresá tu email, elegí una contraseña y un nombre de usuario
   - El nombre de usuario va a ser visible. Sugerencia: usá algo profesional (tu nombre, o nombre + apellido)
4. Resolvé el mini desafío de verificación (te va a pedir que identifiques imágenes o algo similar)
5. Revisá tu email y copiá el código de verificación que te enviaron
6. Cuando te pregunte por personalización, podés hacer clic en **Skip this for now**
7. Listo. Ya tenés tu cuenta

![Página de signup de GitHub](/screenshots/github.png)

### Troubleshooting

- **"Username is already taken"**: tu nombre de usuario ya existe. Probá agregando un número o tu inicial del apellido (ej: `fermin-lopez` o `flopez23`).
- **No te llega el email de verificación**: revisá la carpeta de spam. Si después de 2 minutos no llega, hacé clic en "Resend code".
- **¿Cuál plan elijo?**: el plan **Free** es suficiente. No necesitás pagar nada.

---

## 2. Instalar Node.js

**Tiempo estimado: 5 minutos**

### Qué es Node.js

Node.js es el motor que hace que tu proyecto corra en tu computadora. Sin esto, tu aplicación no puede ejecutarse localmente. Lo instalás una vez y te olvidás.

### Paso a paso

1. Andá a **[nodejs.org](https://nodejs.org)**
2. Vas a ver dos botones grandes de descarga. Hacé clic en el que dice **LTS** (es la versión estable y recomendada)

![Página de descarga de Node.js](/screenshots/nodejs.png)

#### En Mac

3. Se descarga un archivo `.pkg`. Abrilo.
4. Seguí los pasos del instalador: Next, Next, Next, Install.
5. Te va a pedir tu contraseña de Mac (la que usás para desbloquear la compu). Ingresala.
6. Listo.

#### En Windows

3. Se descarga un archivo `.msi`. Abrilo.
4. Seguí los pasos del instalador: Next, aceptá los términos, Next, Next, Install.
5. Si te pregunta "Do you want to allow this app to make changes?", hacé clic en **Yes**.
6. Listo.

### Troubleshooting

- **Mac: "No se puede abrir porque proviene de un desarrollador no identificado"**: andá a **Configuración del Sistema > Privacidad y seguridad**. Abajo vas a ver un mensaje sobre el archivo bloqueado. Hacé clic en **Abrir de todas formas**.
- **Windows: "Windows protected your PC"**: hacé clic en **More info** y después en **Run anyway**.
- **No sé si ya lo tengo instalado**: no te preocupes, en el paso 7 lo verificamos.

---

## 3. Instalar Cursor

**Tiempo estimado: 10 minutos**

### Qué es Cursor

Cursor es el editor de código que vamos a usar. Es como un Word pero para código, con inteligencia artificial integrada: te resalta cosas con colores, te autocompleta, te marca errores y, sobre todo, te deja pedirle a la IA que escriba, corrija o explique código directamente. Está basado en VS Code, así que si ya conocés VS Code te vas a sentir en casa.

> **¿Por qué Cursor y no VS Code?** Cursor ya viene con la IA integrada y es nuestra herramienta principal. Si preferís usar VS Code podés hacerlo (es la misma base), pero la guía y las clases asumen Cursor.

### Paso a paso

1. Andá a **[cursor.com](https://cursor.com)**
2. Hacé clic en **Download** y descargá la versión para tu sistema operativo

![Página de descarga de Cursor](/screenshots/cursor.png)

#### En Mac

3. Se descarga un archivo `.dmg`. Abrilo.
4. Arrastrá **Cursor** a la carpeta **Aplicaciones**.
5. Abrilo desde Aplicaciones (la primera vez puede tardar unos segundos).

#### En Windows

3. Se descarga un archivo `.exe`. Abrilo.
4. Seguí el instalador. Aceptá los valores por defecto.
5. **Importante:** cuando te pregunte, dejá tildada la opción **"Add to PATH"**.
6. Listo. Abrilo.

### Configuración inicial

7. La primera vez que abrís Cursor, te va a pedir crear una cuenta o loguearte. Registrate con tu email o cuenta de Google.
8. Si te ofrece importar configuración de VS Code, podés aceptarlo o dejar la opción por defecto. Da igual para el curso.

> **Sobre el plan de Cursor:** Cursor se puede usar gratis. Tiene un modo gratuito con un límite de uso de IA que alcanza de sobra para el curso, porque la herramienta principal de IA que vamos a usar es **Claude Code** (lo instalamos en el paso 6). No necesitás pagar Cursor.

### Troubleshooting

- **Mac: "Cursor no se puede abrir porque Apple no puede verificarlo"**: andá a **Configuración del Sistema > Privacidad y seguridad** y hacé clic en **Abrir de todas formas**.
- **Prefiero usar VS Code**: está perfecto, es la misma base. Descargalo de **[code.visualstudio.com](https://code.visualstudio.com)**. El plugin de Claude Code (paso 6) funciona igual en los dos.

---

## 4. Crear cuenta de Vercel

**Tiempo estimado: 5 minutos**

### Qué es Vercel

Vercel es donde tu app va a vivir en internet. Cuando termines de construir algo, Vercel lo publica con un link que cualquier persona puede visitar. Se conecta con GitHub: cada vez que subas cambios a tu código, Vercel actualiza tu sitio automáticamente.

### Paso a paso

1. Andá a **[vercel.com](https://vercel.com)**
2. Hacé clic en **Sign Up** (arriba a la derecha)
3. Elegí la opción **Continue with GitHub**

![Página de signup de Vercel](/screenshots/vercel.png)

4. Te va a pedir que autorices a Vercel a conectarse con tu cuenta de GitHub. Hacé clic en **Authorize Vercel**.
5. Cuando te pregunte por el tipo de cuenta, seleccioná **Hobby** (es gratis).
6. Listo. Ya tenés Vercel conectado a GitHub.

### Troubleshooting

- **"I don't have a GitHub account"**: volver al paso 1 de esta guía y crear la cuenta de GitHub primero.
- **No me deja autorizar**: asegurate de estar logueado en GitHub en el mismo navegador.
- **Me pide un número de teléfono o tarjeta**: en el plan Hobby no debería pedirte nada de eso. Si te lo pide, probablemente elegiste el plan equivocado. Volvé a empezar y seleccioná **Hobby**.

---

## 5. Crear cuenta de Supabase

**Tiempo estimado: 5 minutos**

### Qué es Supabase

Supabase es tu base de datos y sistema de login, todo en uno. Cuando tu app necesite guardar información (usuarios, datos, etc.) o manejar quién puede entrar y quién no, Supabase se encarga de todo eso. También se conecta con GitHub.

### Paso a paso

1. Andá a **[supabase.com](https://supabase.com)**
2. Hacé clic en **Start your project** o **Sign Up**
3. Elegí **Continue with GitHub**

![Página principal de Supabase](/screenshots/supabase.png)

4. Autorizá la conexión con GitHub (similar a lo que hiciste con Vercel)
5. Una vez adentro, vas a ver un dashboard. No hace falta crear ningún proyecto todavía, eso lo hacemos en clase.
6. Listo.

### Troubleshooting

- **Me pide crear una organización**: está bien, creá una con tu nombre. Es solo para agrupar tus proyectos.
- **La interfaz está en inglés y no entiendo algo**: Supabase solo está en inglés, pero en clase vamos a repasar todo lo necesario.
- **Me dice que tengo un límite de 2 proyectos gratis**: es correcto, con 2 proyectos gratis es suficiente para el curso.

---

## 6. Crear cuenta de Claude e instalar Claude Code

**Tiempo estimado: 15 minutos**

Claude Code es la herramienta de IA principal del curso: trabaja dentro de tu editor y construye, corrige y explica código por vos. Para usarlo necesitás una cuenta de Claude con plan Pro.

### 6a. Crear cuenta de Claude (plan Pro)

#### Qué es Claude

Claude es un asistente de inteligencia artificial de la empresa Anthropic. Lo vamos a usar para que nos ayude a escribir código, resolver problemas y entender conceptos.

#### Paso a paso

1. Andá a **[claude.ai](https://claude.ai)**
2. Hacé clic en **Sign up**
3. Podés registrarte con email o con tu cuenta de Google
4. Verificá tu email si te lo pide
5. Suscribite al **plan Pro** desde la configuración de tu cuenta


> **Importante:** el **plan Pro de Claude es requisito para cursar la materia**. Es lo que habilita a Claude Code, que vamos a usar en todas las clases. Aseguráte de tenerlo activo antes de la Clase 2.

---

### 6b. Instalar el plugin de Claude Code en Cursor

#### Qué es Claude Code

Claude Code es Claude trabajando directamente dentro de tu editor: en lugar de copiar y pegar código entre el chat y el editor, le pedís las cosas ahí mismo y él edita tus archivos, corre comandos y resuelve problemas. Es la herramienta central del curso.

#### Paso a paso

1. Abrí **Cursor** (lo instalaste en el paso 3).
2. Abrí el panel de extensiones (icono de cuadraditos en la barra lateral izquierda, o `Cmd+Shift+X` en Mac / `Ctrl+Shift+X` en Windows).
3. Buscá **Claude Code** e instalá la extensión oficial de **Anthropic**.
4. Una vez instalada, abrila y logueate con la **misma cuenta de Claude** que creaste en el paso 6a (la del plan Pro).
5. Listo. Ya tenés Claude Code funcionando dentro de tu editor.

> Si usás VS Code en vez de Cursor, el plugin de Claude Code se instala exactamente igual desde su panel de extensiones.

### Troubleshooting

- **Claude: "Not available in your country"**: probá usando un navegador diferente o borrá las cookies. Si persiste, consultá con el equipo docente.
- **Claude Code me pide loguearme de nuevo o no me toma el Pro**: asegurate de loguearte con la misma cuenta que tiene el plan Pro activo. Si recién te suscribiste, cerrá y volvé a abrir el editor.
- **No encuentro la extensión Claude Code**: verificá que estás en el panel de extensiones y que escribís el nombre exacto. Instalá la que publica **Anthropic**.

---

## 7. Test de que todo funciona

**Tiempo estimado: 5 minutos**

Vamos a verificar que todo está correctamente instalado.

### Verificar Node.js

1. Abrí **Cursor** (o VS Code)
2. Abrí la terminal integrada:
   - **Mac:** menú superior > **Terminal** > **New Terminal** (o presioná `` Ctrl+` ``)
   - **Windows:** menú superior > **Terminal** > **New Terminal** (o presioná `` Ctrl+` ``)
3. Escribí el siguiente comando y presioná Enter:

```
node --version
```

4. Deberías ver un número de versión, algo como `v22.x.x` o `v20.x.x`

5. Ahora escribí:

```
npm --version
```

6. Deberías ver otro número de versión, algo como `10.x.x`

> **Si alguno de estos comandos da error** ("command not found" o similar): Node.js no se instaló correctamente. Volvé al paso 2 de esta guía y reinstalalo. En Windows, después de instalar Node.js, tenés que cerrar y volver a abrir Cursor/VS Code para que lo detecte.

### Verificar cuentas

Abrí cada uno de estos links y verificá que podés entrar (que estás logueado):

- [ ] **GitHub:** [github.com](https://github.com) - deberías ver tu perfil arriba a la derecha
- [ ] **Vercel:** [vercel.com/dashboard](https://vercel.com/dashboard) - deberías ver el dashboard
- [ ] **Supabase:** [supabase.com/dashboard](https://supabase.com/dashboard) - deberías ver el dashboard
- [ ] **Claude:** [claude.ai](https://claude.ai) - deberías poder iniciar un chat

### Checklist final

Marcá cada item que tengas listo:

- [ ] Cuenta de GitHub creada
- [ ] Node.js instalado (el comando `node --version` muestra un número)
- [ ] VS Code instalado
- [ ] Extensiones de VS Code instaladas (Prettier, ESLint, Live Server)
- [ ] Cuenta de Vercel creada y conectada a GitHub
- [ ] Cuenta de Supabase creada
- [ ] Cuenta de Claude creada
- [ ] Cursor instalado y con cuenta creada

**Si todos los items están tildados, estás listo para la Clase 2.**

---

## ¿Necesitás ayuda?

Si te trabaste en algún paso y no lo podés resolver:

1. Intentá buscar el error exacto en Google (copiá y pegá el mensaje de error)
2. Pedile ayuda a Claude: andá a [claude.ai](https://claude.ai) y describile tu problema
3. Escribí al equipo docente con una captura de pantalla del error

No te preocupes si algo no sale a la primera. Estos problemas de setup son normales y se resuelven rápido.
