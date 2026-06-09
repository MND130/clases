# Cheatsheet: Construir MVPs con IA

## 0. El método — The MND130 Way

La idea central del curso: **primero decidís todo, después construís. Nunca al revés.**
El que decide bien antes, construye 10x mejor con IA. El que decide *mientras* codea (vibecoding), termina con un quilombo frágil.

> No seas un cliente caprichoso con la IA ("quiero esto… ah, y aquello… no, mejor así"). Si vos no sabés qué querés, la IA tampoco. Y si algo se enredó sin vuelta atrás: dinamitá y volvé a arrancar desde un punto limpio — da miedo, pero es más rápido que parchar un desastre.

### Las 4 fases (una por clase)

| Fase | Qué hacés |
|---|---|
| **1. Decidir** | Antes de codear, tomás las 8 decisiones del brief (abajo). La IA las va escribiendo en `docs/brief.md` mientras las conversás. |
| **2. Construir** | En fases incrementales y **en local primero** (probás en tu máquina; publicás solo lo que ya funciona). |
| **3. Sumar IA** | Si tu producto lo pide: un chatbot, un agente o un asistente sobre tus documentos (RAG). |
| **4. Revisar y publicar** | Auditás contra tu brief, sumás analytics, y deployás a producción. |

### Las 8 decisiones del brief (Fase 1)

1. **Problema** — qué dolor real resolvés.
2. **Usuario** — para quién exactamente (no "para todos").
3. **Scope** — 3-5 features core, y explícito **qué NO entra** en la v1.
4. **Pantallas y estados** — no solo el happy path: vacío, cargando, error, sin permiso.
5. **Datos** — qué guardás y cómo se relaciona.
6. **Stack** — con qué lo construís.
7. **Riesgos** — qué es lo más difícil y qué hacés si falla.
8. **Criterios de éxito** — cómo sabés que el MVP validó algo.

> El `CLAUDE.md` (en el material) es el método y **no se edita**: lo descargás y lo dejás en tu proyecto. La IA lo lee en cada sesión y, conversando con vos, va escribiendo estas 8 decisiones en `docs/brief.md`. Esa carpeta `docs/` (brief, fases, decisiones) es la documentación viva de tu producto.

### La regla del scope

Por cada feature preguntá: *"¿sin esto puedo validar mi hipótesis?"*. Si la respuesta es sí, va a la lista de DESPUÉS.
La feature que más te entusiasma suele ser la que NO va en la v1.

> *"If you are not embarrassed by the first version of your product, you've launched too late."* — Reid Hoffman, fundador de LinkedIn.

---

## 1. Glosario técnico esencial

| Término | Qué es |
|---|---|
| **API** | Un "puente" que permite que dos sistemas se comuniquen entre sí (ej: tu app le pide datos al clima vía API). |
| **Endpoint** | La dirección específica dentro de una API a la que le hacés un pedido (ej: `api.clima.com/temperatura`). |
| **Request / Response** | El ciclo básico de internet: tu app *pide* algo (request) y el servidor *responde* (response). |
| **Frontend** | Todo lo que el usuario ve y toca: botones, pantallas, formularios. |
| **Backend** | Todo lo que pasa detrás de escena: lógica de negocio, base de datos, autenticación. |
| **Full-stack** | Un proyecto (o desarrollador) que cubre frontend y backend. |
| **Base de datos** | Donde se guardan los datos de tu app de forma organizada (usuarios, pedidos, productos, etc.). |
| **SQL** | El lenguaje estándar para consultar y manipular bases de datos relacionales. |
| **Auth / Autenticación** | El sistema que verifica que un usuario es quien dice ser (login, registro, passwords). |
| **Token** | Una "credencial temporal" que demuestra que ya te autenticaste, sin tener que mandar tu password cada vez. |
| **API Key** | Una clave única que identifica a tu app cuando usa una API externa. Es secreta — nunca va en el código visible. |
| **Variable de entorno (.env)** | Un archivo donde guardás valores secretos (API keys, passwords de DB) separados del código. |
| **Deploy** | Publicar tu app para que cualquiera pueda acceder desde internet. |
| **Hosting** | El servicio que mantiene tu app corriendo y accesible 24/7 (ej: Vercel, Netlify). |
| **Dominio** | La dirección web de tu producto (ej: `miapp.com`). Se compra aparte del hosting. |
| **DNS** | El sistema que traduce tu dominio (`miapp.com`) a la dirección real del servidor. |
| **Repo / Repositorio** | La carpeta de tu proyecto versionada con Git. Vive en GitHub y guarda todo el historial de cambios. |
| **Git** | El sistema que trackea cada cambio en tu código. Permite volver atrás, trabajar en paralelo, y no perder nada. |
| **Branch** | Una "copia paralela" de tu código donde podés experimentar sin romper lo que ya funciona. |
| **Commit** | Un "checkpoint" — una foto del estado de tu código en un momento dado, con una descripción de qué cambiaste. |
| **Framework** | Una estructura pre-armada para construir apps (ej: Next.js para web, Express para backend). Te da las bases. |
| **Librería** | Un paquete de código que resuelve un problema puntual (ej: una librería para mandar emails). |
| **Dependencia** | Cualquier librería o paquete externo que tu proyecto necesita para funcionar. |
| **npm / yarn / pnpm** | Herramientas que instalan y administran las dependencias de un proyecto JavaScript. |
| **Componente** | Un bloque reutilizable de interfaz (ej: un botón, un formulario, una tarjeta de producto). |
| **Responsive** | Que la interfaz se adapta bien a cualquier pantalla: celular, tablet, desktop. |
| **Middleware** | Código que se ejecuta "en el medio" entre el pedido del usuario y la respuesta del servidor (ej: verificar si está logueado). |
| **CRUD** | Las 4 operaciones básicas sobre datos: Crear, Leer, Actualizar, Eliminar. La base de casi toda app. |
| **Webhook** | Una notificación automática que un servicio manda a otro cuando pasa algo (ej: Stripe te avisa que se procesó un pago). |
| **SDK** | Un kit de herramientas que un proveedor te da para integrar su servicio más fácil (ej: Vercel AI SDK). |
| **CI/CD** | Automatización que testea y publica tu app cada vez que subís cambios al repositorio. |

---

## 2. Stacks recomendados por tipo de proyecto

### Web App / SaaS

| Capa | Herramienta |
|---|---|
| Framework | **Next.js** (React) |
| Base de datos + Auth | **Supabase** (PostgreSQL + auth + storage incluidos) |
| UI | **shadcn/ui** + **Tailwind CSS** |
| Deploy | **Vercel** |

**Cuándo elegirlo:** Cualquier producto web con login, dashboard, datos de usuarios. El 80% de los MVPs caen acá.

---

### Landing Page / Sitio Institucional

| Capa | Herramienta |
|---|---|
| Framework | **Astro** (si es estático) o **Next.js** (si necesitás algo dinámico) |
| CMS (opcional) | **Sanity** o **Contentful** — para que alguien no-técnico edite contenido |
| Deploy | **Vercel** o **Netlify** |

**Cuándo elegirlo:** Necesitás una página para explicar tu producto, capturar leads, o validar una idea antes de construir la app real.

---

### App Mobile

| Capa | Herramienta |
|---|---|
| Framework | **React Native** con **Expo** |
| Backend + Auth | **Supabase** |
| Build y publicación | **EAS** (Expo Application Services) |

**Cuándo elegirlo:** Tu producto *necesita* estar en el celular (notificaciones push, cámara, GPS). Si no es estrictamente necesario, arrancá con una web responsive — es más rápido y barato.

---

### Automatización / Herramienta Interna

| Opción | Herramienta |
|---|---|
| Sin código | **n8n** (self-hosted) o **Make** (cloud) |
| Dashboards internos | **Retool** |
| Custom con código | **Python** + **FastAPI** + **Supabase** o **Airtable** como DB |

**Cuándo elegirlo:** Automatizar procesos internos, conectar servicios entre sí, armar un admin panel para tu equipo. No necesitás una app pública.

---

### Chatbot / Asistente IA

| Capa | Herramienta |
|---|---|
| Modelo | **Claude API** (Anthropic) o **OpenAI API** |
| Framework | **Next.js** |
| Integración | **Vercel AI SDK** |
| Base de conocimiento (opcional) | **Supabase** con pgvector para búsqueda semántica |

**Cuándo elegirlo:** Necesitás un asistente que responda preguntas sobre tu producto/servicio, procese documentos, o automatice interacciones con clientes.

---

## 3. Prompts de referencia

### El problema

Prompt malo:
> "Haceme una app para gestionar turnos"

La IA no tiene contexto. Va a elegir tecnologías al azar, inventar requerimientos, y devolver algo genérico e inutilizable.

### La estructura que funciona

```
Necesito construir [QUE] usando [STACK].

Contexto:
- Es para [QUIEN / QUE TIPO DE USUARIO]
- El usuario necesita poder [FUNCIONALIDADES CLAVE]
- [RESTRICCIONES O DECISIONES YA TOMADAS]

Stack:
- Frontend: [framework + UI]
- Backend/DB: [servicio]
- Auth: [metodo]
- Deploy: [plataforma]

Empeza por [COMPONENTE ESPECIFICO], no armes todo de una.
```

### Ejemplos concretos

**Ejemplo 1 — Arrancar un proyecto**

```
Necesito construir una web app para gestionar turnos de una clinica
usando Next.js 14 (App Router), Supabase y shadcn/ui.

Contexto:
- Los pacientes reservan turnos desde la web
- Los medicos ven su agenda en un dashboard
- Hay 3 roles: paciente, medico, admin
- Auth con email + password via Supabase Auth

Empeza por:
1. El schema de la base de datos en Supabase (tablas, relaciones, RLS policies)
2. Dame el SQL para crear las tablas

No escribas codigo de frontend todavia.
```

**Ejemplo 2 — Pedirle un componente especifico**

```
En mi proyecto Next.js 14 con shadcn/ui y Tailwind, necesito
un componente de calendario semanal para la vista del medico.

Requerimientos:
- Muestra los turnos del dia agrupados por hora
- Cada turno muestra nombre del paciente y motivo
- Click en un turno abre un modal con detalle
- Responsive: en mobile se ve como lista, en desktop como grilla

Los datos vienen de Supabase, ya tengo un hook useAppointments()
que devuelve un array de { id, patient_name, reason, datetime, duration_minutes }.

Usa solo componentes de shadcn/ui. No instales librerias externas.
```

**Ejemplo 3 — Debuggear un error**

```
Estoy usando Supabase Auth en Next.js 14 (App Router).
Cuando un usuario hace login, el redirect funciona pero la sesion
no persiste — si recargo la pagina, aparece como no logueado.

Mi middleware.ts se ve asi:
[pegar codigo del middleware]

Mi layout.tsx tiene esto:
[pegar codigo relevante]

El error en consola es:
[pegar error exacto]

¿Que puede estar pasando?
```

**Ejemplo 4 — Evaluar una decision**

```
Estoy construyendo un MVP de marketplace con Next.js y Supabase.
Necesito manejar pagos entre compradores y vendedores.

Opciones que estoy considerando:
1. Stripe Connect
2. MercadoPago split payments
3. Hacerlo manual con transferencias

El MVP es para Argentina, volumen inicial bajo (< 100 transacciones/mes).
¿Cual me conviene y por que? Dame pros y contras de cada una.
```

### La regla de oro: desarrollar en FASES

No le pidas a la IA que te arme todo de una. Funciona mucho mejor si le planteás el proyecto como fases incrementales, donde cada fase tiene un entregable concreto que funciona por sí solo. Pensalo como: primero un skate, después un monopatín, después una moto, después un auto. En cada paso tenés algo que anda.

**Cómo plantearlo:**

```
Vamos a construir este proyecto en fases. Cada fase tiene que terminar con algo
que funcione y se pueda probar. No avances a la siguiente fase sin que yo confirme
que la anterior esta OK.

FASE 1 — Base (el skate):
- Setup del proyecto con Next.js + Supabase + shadcn/ui
- Schema de la base de datos
- Auth basico (registro + login)
- Verificar: puedo registrarme, loguearme, y ver un dashboard vacio

FASE 2 — Feature principal (el monopatin):
- [la funcionalidad core de tu MVP]
- CRUD basico de la entidad principal
- Verificar: puedo crear, ver, editar y borrar [entidad]

FASE 3 — Integracion (la moto):
- Conectar las partes entre si
- Roles y permisos
- Verificar: el flujo completo funciona de punta a punta

FASE 4 — Pulido y deploy (el auto):
- Responsive / mobile
- Estados de carga y error
- Deploy a Vercel
- Verificar: la app funciona en produccion desde el celular

Al terminar cada fase:
1. Revisa que todo lo anterior sigue funcionando
2. Decime que testear y como
3. Esperá mi OK antes de avanzar
```

**Por qué esto funciona:**
- La IA no pierde contexto intentando armar todo de golpe
- Tenés checkpoints: si algo se rompe, sabés exactamente dónde volver
- Cada fase es verificable — no avanzás sobre terreno inestable
- Si te quedás sin tiempo o presupuesto, tenés algo que funciona (el skate ya se mueve)

**Clave:** Pedile siempre que al final de cada fase te diga qué testear y cómo verificar que todo está bien. Si la IA no puede decirte cómo probar lo que hizo, probablemente no sabe bien qué hizo.

---

### Tips para promptear

- **Sé específico con el stack.** "Next.js 14 con App Router" es mucho mejor que "React".
- **Desarrollá en fases.** Primero que ande lo básico, después agregá complejidad. Pedí checkpoints de verificación.
- **Pegá código y errores.** La IA necesita ver exactamente qué tenés y qué falla.
- **Decile qué NO hacer.** "No uses librerías externas", "No armes el frontend todavía", "No uses pages router".
- **Iterá.** El primer output rara vez es el definitivo. Pedí ajustes, cuestioná decisiones, pedí alternativas.
- **Pedile que testee.** Después de cada cambio, que te diga cómo verificar que funciona.

---

## 4. Checklist de calidad mínima

Antes de dar por bueno lo que genera la IA, verificar:

### Seguridad

- [ ] No hay API keys, passwords o secrets en el código (deben estar en `.env`)
- [ ] El archivo `.env` está en `.gitignore` (nunca se sube al repositorio)
- [ ] Las rutas protegidas verifican autenticación (no se puede acceder sin login)
- [ ] Los datos del usuario A no son accesibles por el usuario B (RLS en Supabase)
- [ ] Los formularios validan input tanto en frontend como en backend
- [ ] No hay queries SQL armadas concatenando strings (riesgo de SQL injection)

### Funcionalidad

- [ ] La app funciona en Chrome, Safari y Firefox
- [ ] Se ve bien en mobile (probar con DevTools del navegador, F12 > icono de celular)
- [ ] Los formularios manejan errores (¿qué pasa si el server no responde? ¿si mando datos inválidos?)
- [ ] Los estados de carga existen (spinners, skeletons — no pantallas en blanco)
- [ ] Los mensajes de error son útiles para el usuario, no errores técnicos crudos
- [ ] El login/logout funciona correctamente, la sesión persiste al recargar

### Código

- [ ] No hay bloques grandes de código duplicado (copy-paste es red flag)
- [ ] Las dependencias que instalo son conocidas y mantenidas (revisar en npmjs.com)
- [ ] El proyecto tiene un `.gitignore` que excluye `node_modules/`, `.env`, `.next/`
- [ ] Los nombres de variables y funciones son descriptivos (no `x`, `data2`, `temp`)
- [ ] No hay `console.log()` de debug en producción

### Deploy

- [ ] Las variables de entorno están configuradas en la plataforma de deploy (Vercel, etc.)
- [ ] El build pasa sin errores (`npm run build` no falla)
- [ ] La URL de producción funciona correctamente (no solo localhost)
- [ ] HTTPS está activo (el candadito en el navegador)

---

## 5. Red flags: cuando la IA te generó algo malo

### Críticas — parar y corregir

| Red flag | Por qué es grave |
|---|---|
| API keys o secrets en el código fuente | Cualquiera que vea tu repo tiene acceso a tus servicios (y tu tarjeta de crédito). |
| `dangerouslySetInnerHTML` sin sanitizar | Permite que alguien inyecte código malicioso en tu página. |
| Queries SQL armadas con concatenación de strings | Abre la puerta a SQL injection — pueden leer/borrar toda tu base de datos. |
| Sin verificación de auth en rutas protegidas | Cualquiera puede acceder a datos privados cambiando la URL. |
| Passwords guardadas en texto plano | Si hackean tu DB, tienen todos los passwords. Siempre deben estar hasheadas. |
| `.env` sin `.gitignore` | Tus secrets se suben a GitHub y quedan públicos para siempre (aunque borres el archivo después). |

### Serias — revisar antes de publicar

| Red flag | Por qué importa |
|---|---|
| Bloques grandes de código duplicado | La IA copy-pastea en vez de abstraer. Hace el proyecto imposible de mantener. |
| Dependencias con pocos downloads o sin updates recientes | Puede tener bugs no resueltos, vulnerabilidades, o quedar incompatible. |
| Sin manejo de errores (no try/catch, no estados de error) | La app se rompe en silencio. El usuario ve pantallas en blanco o datos corruptos. |
| Usa `any` en todos lados (TypeScript) | Anula las ventajas de TypeScript. Vas a tener bugs que el compilador podría haber atrapado. |
| Todo en un solo archivo de 500+ líneas | Imposible de entender, debuggear o modificar. Pedí que lo separe en componentes. |
| Instala 15 librerías para algo simple | Más dependencias = más riesgo, más peso, más cosas que se pueden romper. |
| Fetch de datos sin loading ni error states | La app queda congelada mientras carga. El usuario no sabe si funciona o se rompió. |

### Cómo verificar rápido

1. **Buscá secrets en tu código:** buscá en tu proyecto las palabras `sk_`, `pk_`, `key`, `secret`, `password`. Si aparecen con valores reales, movelos a `.env`.
2. **Revisá `package.json`:** Buscá cada dependencia en [npmjs.com](https://www.npmjs.com). Si tiene menos de 1000 descargas semanales o no se actualizó en 2+ años, buscá alternativa.
3. **Leé el código, no solo lo ejecutes.** Que "funcione" no significa que esté bien. La IA puede generar código que funciona hoy pero es inseguro o imposible de mantener.

---

## 6. Costos aproximados — free tiers y primeros gastos

### Gratis para un MVP

| Servicio | Free tier | Límite clave | Cuándo empezás a pagar |
|---|---|---|---|
| **Vercel** (hosting) | Gratis para proyectos personales | 100 GB bandwidth, builds ilimitados | Cuando necesitás dominio custom en equipo o más bandwidth (~USD 20/mes) |
| **Supabase** (DB + auth) | Gratis | 500 MB database, 1 GB storage, 50k auth users | Cuando necesitás más de 500 MB de datos o querés backups diarios (~USD 25/mes) |
| **GitHub** (repositorio) | Gratis para repos públicos y privados | Ilimitado para la mayoría de usos | Casi nunca para un MVP |
| **Netlify** (hosting alternativo) | Gratis | 100 GB bandwidth, 300 build minutes/mes | Similar a Vercel (~USD 19/mes) |
| **Cloudflare** (DNS + CDN) | Gratis | DNS ilimitado, CDN básico | Funciones avanzadas (Workers, R2 storage) |

### Costos fijos probables

| Item | Costo aproximado |
|---|---|
| **Dominio `.com`** | USD 10-15/año (Namecheap, Cloudflare, Google Domains) |
| **Dominio `.com.ar`** | ~ARS 5.000-10.000/año vía NIC Argentina (requiere CUIT) |
| **Claude Pro** (para desarrollar con IA) | USD 20/mes |
| **ChatGPT Plus** (alternativa) | USD 20/mes |
| **Cursor Pro** (editor con IA) | USD 20/mes |
| **Claude Max** (límites más altos) | USD 100/mes o USD 200/mes |

### APIs de IA — si tu producto usa IA

| Servicio | Modelo | Costo aproximado |
|---|---|---|
| **Anthropic (Claude)** | Claude Sonnet | ~USD 3 por millón de tokens input, ~USD 15 output |
| **OpenAI** | GPT-4o | ~USD 2.50 por millón de tokens input, ~USD 10 output |
| **OpenAI** | GPT-4o mini | ~USD 0.15 por millón de tokens input, ~USD 0.60 output |

Un token es aprox. 3/4 de una palabra. Una conversación típica de chatbot usa entre 1.000 y 5.000 tokens. Para un MVP con bajo volumen, esperá gastar USD 5-50/mes en API de IA.

### Resumen: presupuesto típico para un MVP

| Escenario | Costo mensual estimado |
|---|---|
| MVP web sin IA, dominio .com.ar, bajo tráfico | **USD 0-20/mes** (solo herramientas de desarrollo) |
| MVP web sin IA, dominio .com, tráfico moderado | **USD 20-40/mes** |
| MVP con IA integrada, uso bajo-medio | **USD 40-100/mes** |
| MVP con IA, múltiples servicios, tráfico alto | **USD 100-300/mes** |

---

## Referencia rápida: comandos que vas a usar siempre

```bash
# Clonar un repositorio
git clone https://github.com/usuario/proyecto.git

# Instalar dependencias del proyecto
npm install

# Levantar el proyecto en tu maquina (modo desarrollo)
npm run dev

# Ver tu app local en el navegador
# Abrir http://localhost:3000

# Guardar cambios en git
git add .
git commit -m "descripcion de que cambiaste"
git push

# Hacer build de produccion (para verificar que todo compila)
npm run build
```
