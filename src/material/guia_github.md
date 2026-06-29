# Guía — GitHub (MND130)

> **Cuándo usás esto:** en la Clase 2, cuando vayas a guardar tu código y subirlo. No hace falta antes.
> **Qué vas a lograr:** tener una cuenta de GitHub y dejar a Claude Code logueado con la GitHub CLI, para que la IA pueda crear repos y subir tu código por vos — sin generar tokens a mano.
> **Tiempo estimado:** ~10 minutos.

---

## Qué es GitHub

GitHub es donde va a vivir tu código. Pensalo como un Google Drive para proyectos de software: guarda tus archivos, mantiene un historial de cambios y te permite volver atrás cuando algo se rompe.

---

## 1. Crear la cuenta

1. Andá a **[github.com](https://github.com)**
2. Hacé clic en **Sign up** (arriba a la derecha)
3. Ingresá tu email, elegí una contraseña y un nombre de usuario
   - El nombre de usuario va a ser visible. Sugerencia: usá algo profesional (tu nombre, o nombre + apellido).
4. Resolvé el mini desafío de verificación
5. Revisá tu email y copiá el código de verificación que te enviaron
6. Cuando te pregunte por personalización, podés hacer clic en **Skip this for now**
7. Listo. Ya tenés tu cuenta.

### Si algo no sale

- **"Username is already taken"**: tu nombre de usuario ya existe. Probá agregando un número o tu inicial del apellido (ej: `fermin-lopez` o `flopez23`).
- **No te llega el email de verificación**: revisá spam. Si después de 2 minutos no llega, hacé clic en "Resend code".
- **¿Cuál plan elijo?**: el plan **Free** alcanza de sobra. No necesitás pagar nada.

---

## 2. Conectar GitHub a Claude Code (con la GitHub CLI)

Para que Claude Code pueda crear repos y subir tu código, usamos la **GitHub CLI** (`gh`): una herramienta oficial de GitHub que se loguea **por el navegador**, sin que tengas que generar ni copiar ningún token a mano.

### 2a. Instalar la GitHub CLI

En la terminal integrada de Cursor (menú **Terminal → New Terminal**, o `` Ctrl+` ``):

- **Mac:** pegá `brew install gh` y apretá Enter. (Si no tenés Homebrew, descargá el instalador desde **[cli.github.com](https://cli.github.com)**.)
- **Windows:** pegá `winget install --id GitHub.cli` y apretá Enter. (O descargá el instalador desde **[cli.github.com](https://cli.github.com)**.)

Cuando termine, cerrá y volvé a abrir la terminal.

### 2b. Loguearte (todo por el navegador)

En la terminal, pegá:

```
gh auth login
```

Te va a hacer unas preguntas. Elegí con las flechas y Enter:

1. **What account do you want to log into?** → **GitHub.com**
2. **What is your preferred protocol for Git operations?** → **HTTPS**
3. **Authenticate Git with your GitHub credentials?** → **Yes**
4. **How would you like to authenticate?** → **Login with a web browser**
5. Te muestra un **código** (ej: `XXXX-XXXX`). Copialo, apretá Enter, y se te abre el navegador.
6. Pegá el código en el navegador y autorizá. Volvé a la terminal: ya estás logueado.

Listo. No generaste ningún token: GitHub CLI maneja todo por vos.

### 2c. Verificar

En la terminal, pegá:

```
gh auth status
```

Tiene que decir que estás logueado (`Logged in to github.com as tu-usuario`). Si lo ves, ya está: Claude Code puede crear repos y pushear por vos. Probalo pidiéndole *"creá un repo para mi proyecto y subí el código"*.

### Si algo no sale

- **`command not found: gh`**: la CLI no se instaló o la terminal no la detecta. Cerrá y volvé a abrir la terminal (o Cursor). Si sigue, reinstalala con el instalador de **[cli.github.com](https://cli.github.com)**.
- **`command not found: brew` (Mac)**: no tenés Homebrew. Descargá el instalador de `gh` directo desde **[cli.github.com](https://cli.github.com)**.
- **No se abre el navegador**: copiá el link que te muestra la terminal y pegalo a mano en el navegador.
- **Claude Code no puede crear el repo**: pedile que use la GitHub CLI (`gh repo create`). Verificá con `gh auth status` que seguís logueado.
