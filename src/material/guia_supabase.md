# Guía — Supabase (MND130)

> **Cuándo usás esto:** en la Clase 3, cuando tu app pase de datos de prueba a datos reales y login. En la Clase 2 trabajás con datos mock, así que no hace falta antes.
> **Qué vas a lograr:** tener una cuenta de Supabase, conectar tu app a la base (URL + clave en el `.env`) y dejar que Claude Code cree las tablas por vos.
> **Tiempo estimado:** ~15 minutos.

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

- **Proyecto de prueba** — al que apunta tu app mientras construís en local. Lo llenás de datos truchos, lo rompés, no importa. **Este es el que creás en la Clase 3.**
- **Proyecto de producción** — los datos reales, el que usan tus usuarios. Lo creás cuando publicás (también en la Clase 3). Nunca lo tocás a mano.

> No hace falta una "base de datos local": montar eso en tu máquina es complejo y no aporta. Con el proyecto de prueba ya experimentás tranquilo, sin tocar nada real.

Cómo crear el proyecto de prueba (en la Clase 3):

1. En tu dashboard de Supabase, hacé clic en **New project**.
2. Ponele un nombre claro, por ejemplo `mi-mvp-dev` (dev = de prueba).
3. Elegí una contraseña para la base y **guardala** (la vas a necesitar en el paso 4). **Importante: usá solo letras y números, sin símbolos** (nada de `@`, `*`, `,`, `#`): una contraseña con símbolos rompe la conexión más adelante. Algo como `MiClave2026segura` está perfecto.
4. Elegí la región más cercana y creá el proyecto.

---

## 3. Conectar tu app a Supabase (URL + clave)

Tu app se conecta a la base con dos datos que van en el archivo `.env`: la **URL del proyecto** y la **anon key** (una clave pública pensada para que la app la use desde el navegador).

1. En tu proyecto de Supabase, andá a **Project Settings → API**.
2. Copiá el **Project URL** y la **anon public** key.
3. Pedile a Claude Code: *"conectá mi app a Supabase. Acá están la URL y la anon key, ponelas en variables de entorno (.env)"* y se las pegás.

Claude Code crea el `.env` con `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`, y arma el cliente de Supabase. El `.env` no se sube a GitHub.

> **¿Es seguro que la anon key esté en el navegador?** Sí: es pública a propósito. Lo que protege tus datos es **RLS** (Row Level Security), las reglas de "quién puede ver qué". Pedile a Claude Code que active RLS en tus tablas.

---

## 4. Que Claude Code cree las tablas (con el connection string)

Para crear las tablas, Claude Code usa **`psql`** (el cliente de Postgres) con el **connection string** de tu proyecto. Lo corre él solo: vos solo le das el string una vez.

### 4a. Instalar psql (una vez)

En la terminal integrada de Cursor:

- **Mac:** `brew install libpq` y después `brew link --force libpq`. (Si no tenés Homebrew, está en **[postgresql.org/download](https://www.postgresql.org/download/)**.)
- **Windows:** instalá PostgreSQL desde **[postgresql.org/download](https://www.postgresql.org/download/)** (incluye `psql`).

### 4b. Copiar el connection string (Session pooler)

1. En Supabase, andá a **Project Settings → Database → Connection string**.
2. Elegí la pestaña **Session pooler** (es la que funciona en cualquier red — usa IPv4).
3. Copiá el string. Tiene esta forma (con tu host y tu password):

```
postgresql://postgres.xxxxx:[TU-PASSWORD]@aws-0-xx.pooler.supabase.com:5432/postgres
```

4. Reemplazá `[TU-PASSWORD]` por la contraseña que pusiste al crear el proyecto.

### 4c. Pedile a Claude Code que cree las tablas

Pegale el connection string y decile, por ejemplo:

> *"Con este connection string de Supabase, creá las tablas que pide mi docs/brief.md y cargá unos datos de ejemplo. Activá RLS. Guardá el SQL en una carpeta de migraciones."*

Claude Code corre `psql` con ese string y crea todo por vos. No tenés que escribir SQL ni tocar la web.

> **El connection string es secreto** (tiene tu password): que vaya en el `.env`, nunca en el código ni en GitHub.

### Si algo no sale

- **`command not found: psql`**: no se instaló o la terminal no lo detecta. Cerrá y reabrí la terminal. En Mac, asegurate de haber corrido `brew link --force libpq`.
- **`could not translate host name` / la conexión cuelga**: estás usando la conexión directa (IPv6). Volvé a copiar el string de la pestaña **Session pooler**.
- **`password authentication failed`**: el `[TU-PASSWORD]` quedó sin reemplazar, o está mal. Si la perdiste, en Supabase podés resetearla en **Database → Reset database password**. **Ojo:** después de resetear la contraseña, tarda ~30 segundos en activarse. Si te la rechaza justo después de cambiarla, esperá medio minuto y reintentá.
- **La conexión falla o el host parece "cortado", y tu contraseña tiene símbolos** (`@`, `*`, `,`…): el símbolo rompe el connection string. Reseteá la contraseña en **Database → Reset database password** y elegí una de **solo letras y números**. Después volvé a copiar el connection string.
