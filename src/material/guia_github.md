# Guía — GitHub (MND130)

> **Cuándo usás esto:** en la Clase 2, cuando vayas a guardar tu código y subirlo. No hace falta antes.
> **Qué vas a lograr:** tener una cuenta de GitHub y dejarla conectada a Claude Code, para que la IA pueda crear repos y subir tu código por vos.
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

## 2. Conectar GitHub a Claude Code

Para que Claude Code pueda crear repos y subir tu código, primero necesita un **token**: una especie de contraseña descartable y limitada que le da permiso para tocar tus repos, sin entregarle tu contraseña real.

### 2a. Generar el token

1. Logueado en GitHub, andá a **[github.com/settings/tokens](https://github.com/settings/tokens)** (o: foto de perfil → **Settings** → **Developer settings** → **Personal access tokens**).
2. Hacé clic en **Generate new token** → elegí **Fine-grained token**.
3. Ponele un nombre, por ejemplo `claude-code`.
4. En **Expiration**, elegí una fecha cómoda (ej: 90 días).
5. **El paso clave (no lo saltees):** bajá hasta **Permissions → Repository permissions** y hacé clic en **Add permissions**. Agregá estos dos y ponelos en **Read and write**:
   - **Administration**
   - **Contents**
6. Bajá hasta el final y hacé clic en **Generate token**.
7. **Copiá el token ahora** (empieza con `github_pat_...`). No vas a poder verlo de nuevo: si lo perdés, generás otro.

### 2b. Pegarlo en Claude Code

Abrí la terminal integrada de Cursor (menú **Terminal → New Terminal**, o `` Ctrl+` ``) y pegá esta línea **reemplazando `PEGÁ_TU_TOKEN_ACÁ`** por el token que copiaste:

```
claude mcp add --transport http github https://api.githubcopilot.com/mcp/ --header "Authorization: Bearer PEGÁ_TU_TOKEN_ACÁ"
```

Apretá Enter. Listo: GitHub quedó conectado.

### 2c. Verificar

Abrí un **chat nuevo** de Claude Code (las conexiones recién agregadas no aparecen en chats ya abiertos) y escribí:

```
/mcp
```

Tenés que ver **github** en la lista. Si no aparece, abrí otro chat nuevo y probá de nuevo.

### Si algo no sale

- **No me deja crear repos (error "403" o "permission")**: al token le faltaron permisos. Generá uno nuevo y asegurate de que **Repository permissions** tenga **Administration** y **Contents** en **Read and write** (los dos, no uno solo).
- **`command not found: claude`**: la extensión de Claude Code no está instalada o Cursor no la detecta todavía. Volvé a la Guía de Setup, instalá la extensión y cerrá y volvé a abrir Cursor.
- **No aparece github en `/mcp`**: abrí un **chat nuevo** de Claude Code. Las herramientas recién agregadas no aparecen en chats viejos.

> **Tratá el token como una contraseña:** no lo compartas ni lo pegues en lugares públicos.
