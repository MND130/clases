# Guía de Setup — MND130 (Posgrado UdeSA)

> **Objetivo:** llegar a la Clase 1 con tus dos herramientas listas: **Cursor** y **Claude Code**.
> **Tiempo total estimado:** 25-30 minutos.
> **Requisitos:** una computadora (Mac o Windows), conexión a internet y una cuenta de email.
>
> El curso es **virtual y en vivo** (videollamada por Zoom/Meet). Como no estamos en la misma sala, llegar con esto resuelto es clave: en una clase online un problema de instalación te puede dejar trabado un buen rato. Si algo no te sale, mandales un mail a los profesores y lo resolvemos antes de la clase.
>
> **Las cuentas de GitHub, Supabase y Vercel NO hacen falta para la Clase 1.** GitHub lo creás y conectás en la Clase 2; Supabase y Vercel en la Clase 3, cuando sumás datos reales y publicás. Cada uno tiene su propia guía. Para arrancar solo necesitás Cursor y Claude Code.

---

## Índice

1. [Crear cuenta de Claude (plan Pro)](#1-crear-cuenta-de-claude-plan-pro) (~10 min)
2. [Instalar Cursor](#2-instalar-cursor) (~10 min)
3. [Instalar la extensión de Claude Code](#3-instalar-la-extensión-de-claude-code) (~5 min)
4. [Test de que todo funciona](#4-test-de-que-todo-funciona) (~3 min)

---

## 1. Crear cuenta de Claude (plan Pro)

**Tiempo estimado: 10 minutos**

### Qué es Claude

Claude es un asistente de inteligencia artificial de la empresa Anthropic. Lo vamos a usar para que nos ayude a escribir código, resolver problemas y entender conceptos. La versión que trabaja dentro de tu editor se llama **Claude Code**.

### Paso a paso

1. Andá a **[claude.ai](https://claude.ai)**
2. Hacé clic en **Sign up**
3. Podés registrarte con email o con tu cuenta de Google
4. Verificá tu email si te lo pide
5. Suscribite al **plan Pro** desde la configuración de tu cuenta

> **Importante:** el **plan Pro de Claude es requisito para cursar la materia**. Es lo que habilita a Claude Code, que vamos a usar en todas las clases. Asegurate de tenerlo activo antes de la Clase 1.

### Troubleshooting

- **Claude: "Not available in your country"**: probá usando un navegador diferente o borrá las cookies. Si persiste, consultá con el equipo docente.

---

## 2. Instalar Cursor

**Tiempo estimado: 10 minutos**

### Qué es Cursor

Cursor es el editor de código que vamos a usar: la ventana donde vas a ver tus archivos y trabajar. Es como un Word pero para código, con inteligencia artificial integrada. Está basado en VS Code, así que si ya conocés VS Code te vas a sentir en casa.

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

> **Sobre el plan de Cursor:** Cursor se puede usar gratis. El modo gratuito alcanza de sobra para el curso, porque la herramienta de IA que vamos a usar es **Claude Code** (lo instalás en el paso 3). No necesitás pagar Cursor.

### Troubleshooting

- **Mac: "Cursor no se puede abrir porque Apple no puede verificarlo"**: andá a **Configuración del Sistema > Privacidad y seguridad** y hacé clic en **Abrir de todas formas**.
- **Prefiero usar VS Code**: está perfecto, es la misma base. Descargalo de **[code.visualstudio.com](https://code.visualstudio.com)**. La extensión de Claude Code (paso 3) se instala igual en los dos.

---

## 3. Instalar la extensión de Claude Code

**Tiempo estimado: 5 minutos**

### Qué es Claude Code

Claude Code es Claude trabajando directamente dentro de tu editor: en lugar de copiar y pegar código entre el chat y el editor, le pedís las cosas ahí mismo y él edita tus archivos, corre comandos y resuelve problemas. Es la herramienta central del curso.

### Paso a paso

1. Abrí **Cursor** (lo instalaste en el paso 2).
2. Abrí el panel de extensiones (icono de cuadraditos en la barra lateral izquierda, o `Cmd+Shift+X` en Mac / `Ctrl+Shift+X` en Windows).
3. Buscá **Claude Code** e instalá la extensión oficial de **Anthropic**.
4. Una vez instalada, abrila y logueate con la **misma cuenta de Claude** que creaste en el paso 1 (la del plan Pro).
5. Listo. Ya tenés Claude Code funcionando dentro de tu editor.

> **Aclaración importante (esto confunde a varios):** en este curso usamos Claude Code como **extensión de Cursor**. Le hablás desde un **panel de chat dentro de Cursor**, no desde una terminal.

> **Ojo: usá el panel de Claude Code, NO el agente de Cursor.** Cursor trae su propia IA integrada (su chat/agente). Esa NO es la que usamos. Asegurate de que estás escribiendo en el **panel de Claude Code** (el de la extensión de Anthropic que acabás de instalar), no en el chat propio de Cursor. Si dudás, fijate que arriba del panel diga **Claude Code**. Usar el agente de Cursor sin querer es el error más común.

> Si usás VS Code en vez de Cursor, la extensión de Claude Code se instala exactamente igual desde su panel de extensiones.

### Troubleshooting

- **Claude Code me pide loguearme de nuevo o no me toma el Pro**: asegurate de loguearte con la misma cuenta que tiene el plan Pro activo. Si recién te suscribiste, cerrá y volvé a abrir el editor.
- **No encuentro la extensión Claude Code**: verificá que estás en el panel de extensiones (icono de cuadraditos, `Cmd+Shift+X` / `Ctrl+Shift+X`) y que escribís el nombre exacto **Claude Code**. Instalá la que publica **Anthropic**. Si seguís sin verla, cerrá y volvé a abrir Cursor y buscá de nuevo.
- **Instalé Claude Code por línea de comandos (CLI) y no me quedó conectado a Cursor**: para el curso usamos la **extensión de Cursor**, no el CLI. Instalá la extensión siguiendo los pasos de arriba y logueate con tu cuenta Pro. Es la misma cuenta, así que no perdés nada: simplemente trabajás desde el panel de chat dentro de Cursor.

---

## 4. Test de que todo funciona

**Tiempo estimado: 3 minutos**

### Verificá Claude

Abrí **[claude.ai](https://claude.ai)** y comprobá que podés entrar y que tu cuenta tiene el **plan Pro** activo.

### Verificá Cursor + Claude Code

1. Abrí **Cursor**.
2. Abrí el panel de **Claude Code** (el de la extensión de Anthropic). Fijate que arriba diga **Claude Code**.
3. Escribile algo simple, por ejemplo: *"Hola, ¿estás funcionando?"*.
4. Si te responde, estás listo.

### Checklist final

Marcá cada item que tengas listo:

- [ ] Cuenta de Claude creada (plan Pro activo)
- [ ] Cursor instalado y con cuenta creada
- [ ] Extensión de Claude Code instalada y logueada en Cursor (la extensión, no el agente de Cursor)
- [ ] El panel de Claude Code responde cuando le escribís

**Si todos los items están tildados, estás listo para la Clase 1.**

---

## ¿Necesitás ayuda?

Si te trabaste en algún paso y no lo podés resolver:

1. Intentá buscar el error exacto en Google (copiá y pegá el mensaje de error).
2. Pedile ayuda a Claude: andá a [claude.ai](https://claude.ai) y describile tu problema.
3. Mandales un mail a los profesores y lo resolvemos antes de la clase.

No te preocupes si algo no sale a la primera. Estos problemas de setup son normales y se resuelven rápido.
