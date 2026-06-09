# Prompt Templates para Construir tu MVP con IA

Guía práctica para cada etapa del desarrollo. Copiá el prompt, rellená los placeholders y pegalo en tu herramienta de IA.

---

## 1. Definir el proyecto

### Describir la idea y definir el scope del MVP

**Prompt:**

```
Soy [tu rol, ej: product manager, fundador, etc.] y quiero construir un MVP de [tu idea en 1-2 oraciones].

El usuario principal es [descripcion del usuario target].
El problema que resuelve es [problema concreto].

Necesito que me ayudes a:
1. Definir las 3-5 funcionalidades CORE del MVP (lo minimo para validar la idea)
2. Listar lo que NO deberia incluir en la v1 (nice-to-haves para despues)
3. Estimar la complejidad relativa de cada funcionalidad (baja/media/alta)

Soy no-tecnico, asi que explicame todo en lenguaje simple.
```

> Por qué funciona: Le das contexto sobre quién sos y qué necesitás, y le pedís explícitamente que separe lo esencial de lo accesorio. Esto evita que la IA te sugiera un producto completo en vez de un MVP.

**Ejemplo concreto:**

```
Soy fundador de una consultora de RRHH y quiero construir un MVP de una plataforma donde empresas publican busquedas laborales y reciben candidatos pre-filtrados por IA.

El usuario principal es el responsable de RRHH de PyMEs argentinas (10-50 empleados).
El problema que resuelve es que pierden +10 horas semanales revisando CVs irrelevantes.

Necesito que me ayudes a:
1. Definir las 3-5 funcionalidades CORE del MVP (lo minimo para validar la idea)
2. Listar lo que NO deberia incluir en la v1 (nice-to-haves para despues)
3. Estimar la complejidad relativa de cada funcionalidad (baja/media/alta)

Soy no-tecnico, asi que explicame todo en lenguaje simple.
```

---

### Generar user stories

**Prompt:**

```
Basandote en este MVP: [pega aca la descripcion de tu proyecto y las funcionalidades core que definiste antes].

Genera user stories en formato:
"Como [tipo de usuario], quiero [accion], para [beneficio]"

Agrupa las stories por funcionalidad.
Para cada story, indica:
- Criterio de aceptacion (como se que esta terminada)
- Prioridad: P0 (obligatorio para lanzar), P1 (importante), P2 (puede esperar)

Maximo 15 stories para el MVP.
```

> Por qué funciona: Le das el output anterior como input, le pedís un formato estándar y le ponés un límite. Sin el límite, te genera 40 stories y perdiste el foco del MVP.

**Ejemplo concreto:**

```
Basandote en este MVP: Plataforma de busquedas laborales para PyMEs. Funcionalidades core: 1) Publicar busqueda con descripcion del puesto 2) Recibir postulaciones con CV 3) Dashboard con candidatos rankeados por match 4) Notificacion por email cuando hay nuevos candidatos.

Genera user stories en formato:
"Como [tipo de usuario], quiero [accion], para [beneficio]"

Agrupa las stories por funcionalidad.
Para cada story, indica:
- Criterio de aceptacion (como se que esta terminada)
- Prioridad: P0 (obligatorio para lanzar), P1 (importante), P2 (puede esperar)

Maximo 15 stories para el MVP.
```

---

### Elegir el stack tecnológico

**Prompt:**

```
Tengo que construir un MVP con estas caracteristicas:
- [funcionalidad principal 1]
- [funcionalidad principal 2]
- [funcionalidad principal 3]

Contexto:
- Soy no-tecnico, voy a construirlo con ayuda de IA (Claude/Cursor/v0)
- Necesito desplegarlo rapido (1-2 semanas)
- Los usuarios esperados inicialmente son [cantidad estimada]
- [algun requerimiento especial, ej: necesita pagos, necesita auth, necesita tiempo real]

Estoy considerando Next.js + Supabase + shadcn/ui + Vercel.
Decime si este stack tiene sentido para mi caso o si recomendas algo diferente, y por que.
```

> Por qué funciona: En vez de preguntar "¿qué stack uso?" (muy abierto), le planteás una opción concreta y le pedís que la valide o la desafíe. Esto da respuestas mucho más útiles.

**Ejemplo concreto:**

```
Tengo que construir un MVP con estas caracteristicas:
- Formulario para publicar busquedas laborales
- Upload de CVs y procesamiento basico
- Dashboard con metricas de postulaciones

Contexto:
- Soy no-tecnico, voy a construirlo con ayuda de IA (Claude/Cursor/v0)
- Necesito desplegarlo rapido (1-2 semanas)
- Los usuarios esperados inicialmente son 20-50 empresas
- Necesita autenticacion y almacenamiento de archivos

Estoy considerando Next.js + Supabase + shadcn/ui + Vercel.
Decime si este stack tiene sentido para mi caso o si recomendas algo diferente, y por que.
```

---

### Armar el plan de fases del proyecto

**Prompt:**

```
Voy a construir [descripcion del proyecto] usando [stack].

Necesito que me armes un plan de desarrollo en fases incrementales. Cada fase tiene que:
1. Terminar con algo que funcione y se pueda probar
2. Incluir un checklist de verificacion (que testear al final de la fase)
3. No depender de fases futuras para funcionar (si paro en la fase 2, tengo un producto usable)

Las fases deberian ser algo asi:
- FASE 1: Lo minimo que funciona (setup + auth + estructura base)
- FASE 2: La funcionalidad principal
- FASE 3: Features secundarias e integraciones
- FASE 4: Pulido, responsive y deploy a produccion

Para cada fase dame:
- Que se construye
- Que deberia funcionar al terminar
- Como lo testeo (pasos concretos para verificar)
- Que NO hacer todavia en esa fase

IMPORTANTE: No avances de fase sin que yo confirme que la anterior esta OK.
Cuando termines cada fase, decime exactamente que probar y como.
```

> Por qué funciona: Le das una estructura clara de entrega incremental. La IA no intenta resolver todo de golpe, y vos tenés checkpoints concretos. Si algo se rompe, sabés dónde volver. Si te quedás sin tiempo, tenés algo que funciona.

**Ejemplo concreto:**

```
Voy a construir una plataforma de busquedas laborales para PyMEs usando Next.js 14 (App Router), Supabase, shadcn/ui y deploy en Vercel.

Necesito que me armes un plan de desarrollo en fases incrementales. Cada fase tiene que:
1. Terminar con algo que funcione y se pueda probar
2. Incluir un checklist de verificacion (que testear al final de la fase)
3. No depender de fases futuras para funcionar (si paro en la fase 2, tengo un producto usable)

Las fases deberian ser algo asi:
- FASE 1: Setup del proyecto + auth (registro y login de empresas) + dashboard vacio
- FASE 2: CRUD de busquedas laborales (crear, editar, publicar, cerrar)
- FASE 3: Formulario publico de postulacion + upload de CV + listado de candidatos
- FASE 4: Ranking basico de candidatos, notificaciones por email, responsive, deploy

Para cada fase dame:
- Que se construye
- Que deberia funcionar al terminar
- Como lo testeo (pasos concretos para verificar)
- Que NO hacer todavia en esa fase

IMPORTANTE: No avances de fase sin que yo confirme que la anterior esta OK.
Cuando termines cada fase, decime exactamente que probar y como.
```

---

## 2. Scaffoldear el proyecto

### Inicializar un proyecto Next.js + Supabase + shadcn/ui

**Prompt:**

```
Necesito que me des los comandos exactos, paso a paso, para inicializar un proyecto con:
- Next.js (App Router, TypeScript)
- Supabase (auth + database)
- shadcn/ui para componentes
- Tailwind CSS

Para cada paso:
1. El comando exacto que tengo que correr en la terminal
2. Si me va a preguntar opciones, decime cual elegir
3. Las variables de entorno que necesito configurar (y donde las encuentro en Supabase)

Asumo que ya tengo una cuenta en Supabase.
```

> Por qué funciona: Pedir "los comandos exactos" y anticipar las preguntas interactivas de los instaladores evita que te quedes trabado en un paso intermedio.

**Ejemplo concreto:**

```
Necesito que me des los comandos exactos, paso a paso, para inicializar un proyecto con:
- Next.js (App Router, TypeScript)
- Supabase (auth + database)
- shadcn/ui para componentes
- Tailwind CSS

El proyecto se llama "talent-match" y es una plataforma de recruiting.

Para cada paso:
1. El comando exacto que tengo que correr en la terminal
2. Si me va a preguntar opciones, decime cual elegir
3. Las variables de entorno que necesito configurar (y donde las encuentro en Supabase)

Asumo que ya tengo una cuenta en Supabase.
```

---

### Definir la estructura de carpetas

**Prompt:**

```
Estoy armando un proyecto en Next.js (App Router) para [descripcion corta del proyecto].

Las funcionalidades principales son:
- [feature 1]
- [feature 2]
- [feature 3]

Dame la estructura de carpetas recomendada para este MVP.
Usa el formato de arbol (con simbolos como ├── y └──).
Para cada carpeta, agrega un comentario corto explicando que va ahi.

Quiero que sea simple y escalable, no sobre-engineered.
```

> Por qué funciona: Pedirle el formato de árbol con comentarios te da algo visual que podés consultar después. El cierre de "simple y escalable" evita que te arme una arquitectura enterprise.

**Ejemplo concreto:**

```
Estoy armando un proyecto en Next.js (App Router) para una plataforma de recruiting para PyMEs.

Las funcionalidades principales son:
- Publicar busquedas laborales
- Recibir y ver postulaciones
- Dashboard con metricas

Dame la estructura de carpetas recomendada para este MVP.
Usa el formato de arbol (con simbolos como ├── y └──).
Para cada carpeta, agrega un comentario corto explicando que va ahi.

Quiero que sea simple y escalable, no sobre-engineered.
```

---

### Configurar la base de datos en Supabase

**Prompt:**

```
Necesito configurar la base de datos en Supabase para [descripcion del proyecto].

Las entidades principales son:
- [entidad 1]: [campos principales que necesitas]
- [entidad 2]: [campos principales que necesitas]
- [entidad 3]: [campos principales que necesitas]

Dame:
1. El SQL para crear las tablas (con tipos de datos, claves primarias, foreign keys)
2. Las Row Level Security (RLS) policies basicas para que cada usuario solo vea sus datos
3. Si necesito algun trigger o funcion, explicame para que sirve

Formato: SQL listo para pegar en el SQL Editor de Supabase.
```

> Por qué funciona: Al listar las entidades con sus campos, la IA no tiene que adivinar tu modelo de datos. Pedir RLS desde el arranque evita problemas de seguridad después.

**Ejemplo concreto:**

```
Necesito configurar la base de datos en Supabase para una plataforma de recruiting.

Las entidades principales son:
- Empresas: nombre, industria, tamaño, logo_url
- Busquedas: titulo, descripcion, requisitos, salario_rango, estado (abierta/cerrada), empresa_id
- Postulaciones: candidato_nombre, candidato_email, cv_url, busqueda_id, estado (nueva/revisada/descartada/finalista)

Dame:
1. El SQL para crear las tablas (con tipos de datos, claves primarias, foreign keys)
2. Las Row Level Security (RLS) policies basicas para que cada usuario solo vea sus datos
3. Si necesito algun trigger o funcion, explicame para que sirve

Formato: SQL listo para pegar en el SQL Editor de Supabase.
```

---

## 3. Desarrollar features

### Crear una página o componente nuevo

**Prompt:**

```
Necesito crear [pagina/componente] en mi proyecto Next.js (App Router) + shadcn/ui + Supabase.

Que tiene que hacer:
- [funcionalidad 1]
- [funcionalidad 2]
- [funcionalidad 3]

Contexto del proyecto: [1 linea describiendo la app]
Esta pagina/componente se conecta con: [tabla de Supabase / otra pagina / API externa]

Dame el codigo completo del archivo, listo para copiar y pegar.
Usa componentes de shadcn/ui donde tenga sentido.
Si necesito instalar algun componente de shadcn que no tengo, decime el comando.
```

> Por qué funciona: "Código completo, listo para copiar y pegar" es clave. Si no lo decís, la IA a veces te da fragmentos sueltos que después no sabés dónde van.

**Ejemplo concreto:**

```
Necesito crear una pagina de dashboard en mi proyecto Next.js (App Router) + shadcn/ui + Supabase.

Que tiene que hacer:
- Mostrar las busquedas activas de la empresa logueada
- Para cada busqueda, mostrar cantidad de postulaciones nuevas
- Boton para crear nueva busqueda
- Boton para ver postulaciones de cada busqueda

Contexto del proyecto: plataforma de recruiting para PyMEs.
Esta pagina se conecta con: tablas "busquedas" y "postulaciones" en Supabase.

Dame el codigo completo del archivo, listo para copiar y pegar.
Usa componentes de shadcn/ui donde tenga sentido.
Si necesito instalar algun componente de shadcn que no tengo, decime el comando.
```

---

### Agregar autenticación

**Prompt:**

```
Necesito agregar autenticacion a mi proyecto Next.js (App Router) + Supabase.

Requerimientos:
- Login con [email/password | Google | ambos]
- Pagina de registro
- Pagina de login
- Proteger estas rutas (que solo usuarios logueados puedan acceder): [lista de rutas]
- Redirigir a [ruta] despues del login

Dame:
1. La configuracion necesaria en Supabase (si hay algo que activar en el dashboard)
2. El middleware de Next.js para proteger rutas
3. Los componentes de login y registro (usando shadcn/ui)
4. Como obtener el usuario actual en cualquier pagina

Codigo completo, listo para copiar en cada archivo.
```

> Por qué funciona: Auth es donde más gente se traba. Especificar el método de login, las rutas protegidas y el redirect evita idas y vueltas.

**Ejemplo concreto:**

```
Necesito agregar autenticacion a mi proyecto Next.js (App Router) + Supabase.

Requerimientos:
- Login con email/password y Google
- Pagina de registro
- Pagina de login
- Proteger estas rutas: /dashboard, /busquedas, /postulaciones
- Redirigir a /dashboard despues del login

Dame:
1. La configuracion necesaria en Supabase (si hay algo que activar en el dashboard)
2. El middleware de Next.js para proteger rutas
3. Los componentes de login y registro (usando shadcn/ui)
4. Como obtener el usuario actual en cualquier pagina

Codigo completo, listo para copiar en cada archivo.
```

---

### Conectar con la base de datos

**Prompt:**

```
Necesito hacer [operacion: leer/crear/actualizar/eliminar] datos de la tabla "[nombre_tabla]" en Supabase desde mi app Next.js (App Router).

Estructura de la tabla:
[pega aca las columnas y tipos, o el SQL con el que la creaste]

Necesito:
1. La funcion/hook para hacer la operacion
2. Como usarla en un componente/pagina (con manejo de loading y errores)
3. Si es una lista, agregar paginacion basica

Que sea con el cliente de Supabase (@supabase/supabase-js).
Si corresponde, usa Server Components o Server Actions segun best practices.
```

> Por qué funciona: Especificar la operación exacta (CRUD) y la estructura de la tabla elimina la ambigüedad. Pedir manejo de loading y errores te ahorra bugs después.

**Ejemplo concreto:**

```
Necesito leer y mostrar las postulaciones de una busqueda especifica desde Supabase en mi app Next.js (App Router).

Estructura de la tabla postulaciones:
- id (uuid, PK)
- candidato_nombre (text)
- candidato_email (text)
- cv_url (text)
- busqueda_id (uuid, FK a busquedas)
- estado (text: nueva/revisada/descartada/finalista)
- created_at (timestamp)

Necesito:
1. La funcion para traer postulaciones filtradas por busqueda_id
2. Como mostrarlas en una pagina con manejo de loading y errores
3. Paginacion basica (10 por pagina)

Que sea con el cliente de Supabase (@supabase/supabase-js).
Si corresponde, usa Server Components o Server Actions segun best practices.
```

---

### Agregar un formulario con validación

**Prompt:**

```
Necesito un formulario para [que hace el formulario] en mi app Next.js + shadcn/ui.

Campos:
- [campo 1]: [tipo] - [reglas de validacion, ej: obligatorio, minimo 10 caracteres]
- [campo 2]: [tipo] - [reglas de validacion]
- [campo 3]: [tipo] - [reglas de validacion]

Al enviar el formulario, tiene que [guardar en Supabase tabla X / llamar a API / etc].

Usa:
- react-hook-form + zod para validacion
- Componentes de shadcn/ui (Input, Button, Select, etc.)
- Mensajes de error en español debajo de cada campo
- Estado de loading en el boton de submit
- Toast de confirmacion o error al enviar

Dame el codigo completo del componente.
```

> Por qué funciona: Especificar la librería de validación (zod + react-hook-form) y los componentes UI asegura consistencia. Pedir los mensajes en español y el toast evita tener que hacer ajustes después.

**Ejemplo concreto:**

```
Necesito un formulario para publicar una nueva busqueda laboral en mi app Next.js + shadcn/ui.

Campos:
- titulo: texto - obligatorio, minimo 5 caracteres, maximo 100
- descripcion: textarea - obligatorio, minimo 50 caracteres
- requisitos: textarea - obligatorio
- salario_minimo: numero - opcional, debe ser positivo
- salario_maximo: numero - opcional, debe ser mayor que salario_minimo
- modalidad: select (remoto/hibrido/presencial) - obligatorio

Al enviar el formulario, tiene que guardar en Supabase tabla "busquedas" asociado a la empresa del usuario logueado.

Usa:
- react-hook-form + zod para validacion
- Componentes de shadcn/ui (Input, Button, Select, Textarea)
- Mensajes de error en español debajo de cada campo
- Estado de loading en el boton de submit
- Toast de confirmacion o error al enviar

Dame el codigo completo del componente.
```

---

## 4. Debuggear

### El prompt de emergencia (cuando tenés un error)

**Prompt:**

```
Tengo este error en mi proyecto Next.js + Supabase:

ERROR:
[pega el mensaje de error completo, incluyendo el stack trace]

ARCHIVO DONDE OCURRE:
[pega el codigo del archivo que menciona el error]

QUE ESTABA HACIENDO:
[ej: "intentando guardar un formulario", "cargando la pagina de dashboard"]

QUE CAMBIE ULTIMO:
[ej: "agregue el campo email al formulario", "modifique la query de Supabase"]

Decime:
1. Que significa el error en lenguaje simple
2. Cual es la causa mas probable
3. El codigo corregido, listo para reemplazar
```

> Por qué funciona: El contexto lo es todo para debuggear. "Qué estaba haciendo" y "qué cambié último" le dan a la IA la información que necesita para no darte soluciones genéricas.

**Ejemplo concreto:**

```
Tengo este error en mi proyecto Next.js + Supabase:

ERROR:
TypeError: Cannot read properties of null (reading 'map')
  at PostulacionesList (./app/busquedas/[id]/page.tsx:23:18)

ARCHIVO DONDE OCURRE:
const PostulacionesList = ({ busquedaId }) => {
  const [postulaciones, setPostulaciones] = useState(null);

  useEffect(() => {
    fetchPostulaciones(busquedaId).then(setPostulaciones);
  }, [busquedaId]);

  return (
    <div>{postulaciones.map(p => <Card key={p.id}>{p.candidato_nombre}</Card>)}</div>
  );
};

QUE ESTABA HACIENDO:
Cargando la pagina de postulaciones de una busqueda.

QUE CAMBIE ULTIMO:
Agregue el useEffect para traer las postulaciones de Supabase.

Decime:
1. Que significa el error en lenguaje simple
2. Cual es la causa mas probable
3. El codigo corregido, listo para reemplazar
```

---

### Cuando algo no funciona y no sabés por qué

**Prompt:**

```
En mi proyecto Next.js + Supabase, [descripcion de lo que deberia pasar] pero en cambio [lo que pasa en realidad].

No hay error en la consola / El error que veo es: [si hay alguno]

Codigo relevante:
[pega los archivos/funciones que crees que estan involucrados]

Ya probe:
- [lo que ya intentaste, si probaste algo]

Necesito que:
1. Me digas las 3 causas mas probables, ordenadas de mas a menos probable
2. Para cada causa, como verificarla (que console.log poner, que revisar)
3. La solucion para la causa mas probable
```

> Por qué funciona: Describir "lo que debería pasar vs lo que pasa" es mucho más útil que "no funciona". Pedir las 3 causas más probables te da un plan de acción en vez de una sola apuesta.

**Ejemplo concreto:**

```
En mi proyecto Next.js + Supabase, cuando el usuario envia el formulario de nueva busqueda deberia guardarse en la tabla "busquedas" y redirigir al dashboard, pero en cambio la pagina se recarga y no se guarda nada.

No hay error en la consola.

Codigo relevante:
// app/busquedas/nueva/page.tsx
const onSubmit = async (data) => {
  const { error } = await supabase.from('busquedas').insert(data);
  if (!error) router.push('/dashboard');
};

Ya probe:
- Revisar que las variables de entorno de Supabase esten bien
- Abrir el Network tab del browser (no veo la request a Supabase)

Necesito que:
1. Me digas las 3 causas mas probables, ordenadas de mas a menos probable
2. Para cada causa, como verificarla
3. La solucion para la causa mas probable
```

---

### Pedir revisión de código

**Prompt:**

```
Revisa este codigo de mi proyecto Next.js + Supabase y decime si hay errores, problemas de seguridad o mejoras importantes.

ARCHIVO: [nombre del archivo]
```
[pega el codigo completo]
```

Enfocate en:
1. Errores que van a romper algo (bugs)
2. Problemas de seguridad (datos expuestos, queries inseguras, etc.)
3. Mejoras de performance (si aplican)

No me des sugerencias de estilo o formateo. Solo cosas que impactan el funcionamiento.
Para cada problema, dame el codigo corregido.
```

> Por qué funciona: "No me des sugerencias de estilo" enfoca la respuesta en lo que importa. Sin eso, la IA te llena de sugerencias cosméticas y se pierden los bugs reales.

**Ejemplo concreto:**

```
Revisa este codigo de mi proyecto Next.js + Supabase y decime si hay errores, problemas de seguridad o mejoras importantes.

ARCHIVO: app/api/busquedas/route.ts

export async function POST(request: Request) {
  const body = await request.json();
  const { data, error } = await supabase
    .from('busquedas')
    .insert({
      titulo: body.titulo,
      descripcion: body.descripcion,
      empresa_id: body.empresa_id,
    });
  return Response.json({ data, error });
}

Enfocate en:
1. Errores que van a romper algo (bugs)
2. Problemas de seguridad (datos expuestos, queries inseguras, etc.)
3. Mejoras de performance (si aplican)

No me des sugerencias de estilo o formateo. Solo cosas que impactan el funcionamiento.
Para cada problema, dame el codigo corregido.
```

---

## 5. Mejorar y pulir

### Hacer responsive / mobile-first

**Prompt:**

```
Este componente/pagina de mi proyecto Next.js + Tailwind CSS no se ve bien en mobile.

CODIGO ACTUAL:
[pega el codigo del componente/pagina]

Necesito que:
1. Lo hagas responsive con enfoque mobile-first
2. Uses las breakpoints de Tailwind (sm, md, lg)
3. En mobile: [como queres que se vea, ej: "todo en una columna, menu hamburguesa"]
4. En desktop: [como queres que se vea, ej: "sidebar a la izquierda, contenido a la derecha"]

Dame el codigo completo reescrito, no solo los cambios.
```

> Por qué funciona: Describir cómo querés que se vea en cada tamaño le da un target concreto a la IA. "Mobile-first" como principio asegura que no agregue hacks después.

**Ejemplo concreto:**

```
Este componente de mi proyecto Next.js + Tailwind CSS no se ve bien en mobile.

CODIGO ACTUAL:
<div className="flex gap-6">
  <aside className="w-64 border-r p-4">
    <nav>...</nav>
  </aside>
  <main className="flex-1 p-6">
    <div className="grid grid-cols-3 gap-4">
      {busquedas.map(b => <BusquedaCard key={b.id} {...b} />)}
    </div>
  </main>
</div>

Necesito que:
1. Lo hagas responsive con enfoque mobile-first
2. Uses las breakpoints de Tailwind (sm, md, lg)
3. En mobile: una columna, sin sidebar, navegacion arriba como tabs
4. En desktop: sidebar a la izquierda, grid de 3 columnas para las cards

Dame el codigo completo reescrito, no solo los cambios.
```

---

### Mejorar el diseño con shadcn/ui

**Prompt:**

```
Esta pagina de mi app funciona correctamente pero se ve basica/fea. Necesito mejorar el diseno visual.

CODIGO ACTUAL:
[pega el codigo]

Quiero que:
1. Reemplaces los elementos HTML basicos por componentes de shadcn/ui equivalentes
2. Mejores el espaciado, tipografia y jerarquia visual
3. Agregues feedback visual (estados hover, transiciones suaves, iconos donde corresponda)
4. Mantengas el mismo funcionamiento exacto, solo cambia lo visual

Usa lucide-react para iconos si hace falta.
Dame el codigo completo del componente mejorado y la lista de componentes de shadcn que necesito instalar.
```

> Por qué funciona: "Mantengas el mismo funcionamiento exacto" es crítico. Sin eso, la IA a veces cambia la lógica junto con el diseño y te rompe cosas.

**Ejemplo concreto:**

```
Esta pagina de mi app funciona correctamente pero se ve basica. Necesito mejorar el diseno visual.

CODIGO ACTUAL:
<div>
  <h1>Mis busquedas</h1>
  <button onClick={handleNew}>Nueva busqueda</button>
  <ul>
    {busquedas.map(b => (
      <li key={b.id}>
        <h3>{b.titulo}</h3>
        <p>{b.descripcion}</p>
        <span>{b.postulaciones_count} postulaciones</span>
      </li>
    ))}
  </ul>
</div>

Quiero que:
1. Reemplaces los elementos HTML basicos por componentes de shadcn/ui equivalentes
2. Mejores el espaciado, tipografia y jerarquia visual
3. Agregues feedback visual (estados hover, transiciones suaves, iconos donde corresponda)
4. Mantengas el mismo funcionamiento exacto, solo cambia lo visual

Usa lucide-react para iconos si hace falta.
Dame el codigo completo del componente mejorado y la lista de componentes de shadcn que necesito instalar.
```

---

### Agregar analytics (Vercel Analytics / PostHog)

**Prompt:**

```
Necesito agregar analytics a mi proyecto Next.js desplegado en Vercel.

Quiero trackear:
- Page views automaticos
- [evento custom 1, ej: "cuando un usuario publica una busqueda"]
- [evento custom 2, ej: "cuando un usuario descarga un CV"]
- [evento custom 3, ej: "cuando se completa el registro"]

Dame:
1. Los paquetes a instalar y el comando
2. La configuracion en el layout principal
3. Como disparar los eventos custom desde mis componentes (con ejemplo)
4. Donde veo los datos despues (dashboard de Vercel / PostHog)

Usa [Vercel Analytics | PostHog | ambos] segun lo que recomiendes para un MVP.
```

> Por qué funciona: Definir los eventos custom desde el arranque te obliga a pensar qué métricas importan. Pedir "dónde veo los datos" cierra el loop completo.

**Ejemplo concreto:**

```
Necesito agregar analytics a mi proyecto Next.js desplegado en Vercel.

Quiero trackear:
- Page views automaticos
- Cuando una empresa publica una busqueda nueva
- Cuando un candidato envia una postulacion
- Cuando una empresa descarga el CV de un candidato

Dame:
1. Los paquetes a instalar y el comando
2. La configuracion en el layout principal
3. Como disparar los eventos custom desde mis componentes (con ejemplo)
4. Donde veo los datos despues

Usa Vercel Analytics para lo basico. Si necesito algo mas avanzado, agregame PostHog tambien.
```

---

### Agregar SEO básico

**Prompt:**

```
Necesito agregar SEO basico a mi proyecto Next.js (App Router).

Mi app es: [descripcion en 1 linea]
Las paginas principales son:
- [pagina 1]: [que muestra]
- [pagina 2]: [que muestra]
- [pagina 3]: [que muestra]

Necesito:
1. Metadata global (titulo, descripcion, og:image) en el layout principal
2. Metadata especifica para cada pagina listada arriba
3. Un archivo sitemap.ts generado dinamicamente
4. Un archivo robots.ts
5. Los tags Open Graph para que se vea bien al compartir en LinkedIn/Twitter

Dame el codigo para cada archivo, listo para copiar.
```

> Por qué funciona: Listar las páginas permite que la IA genere metadata específica en vez de genérica. Pedir Open Graph asegura que se vea bien cuando compartas tu MVP en redes.

**Ejemplo concreto:**

```
Necesito agregar SEO basico a mi proyecto Next.js (App Router).

Mi app es: plataforma de recruiting para PyMEs argentinas.
Las paginas principales son:
- Home (/): landing page con propuesta de valor
- Busquedas (/busquedas): listado publico de busquedas activas
- Detalle de busqueda (/busquedas/[id]): informacion y boton para postularse

Necesito:
1. Metadata global (titulo, descripcion, og:image) en el layout principal
2. Metadata especifica para cada pagina listada arriba
3. Un archivo sitemap.ts generado dinamicamente
4. Un archivo robots.ts
5. Los tags Open Graph para que se vea bien al compartir en LinkedIn/Twitter

Dame el codigo para cada archivo, listo para copiar.
```

---

## 6. Deploy

### Preparar el proyecto para producción

**Prompt:**

```
Mi proyecto Next.js + Supabase esta listo para deployar. Necesito una checklist de produccion.

Revisame:
1. Variables de entorno: que necesito configurar en Vercel (listame todas)
2. Seguridad: RLS en Supabase activado, API keys correctas (anon vs service_role)
3. Performance: imagenes optimizadas, fonts, bundle size
4. Errores comunes: cosas que funcionan en dev pero rompen en produccion con Next.js

Ademas:
- Dame el comando para hacer un build local y verificar que no hay errores
- Explicame como hacer el primer deploy importando mi repo de GitHub desde la web de Vercel (vercel.com)

Asumo que ya tengo cuenta en Vercel conectada a mi GitHub, y que el deploy se hace desde la web (no por CLI).
```

> Por qué funciona: "Cosas que funcionan en dev pero rompen en producción" es oro. Variables de entorno olvidadas, mixed content, y RLS desactivado son los errores más comunes.

**Ejemplo concreto:**

```
Mi proyecto "talent-match" (Next.js + Supabase, plataforma de recruiting) esta listo para deployar. Necesito una checklist de produccion.

Revisame:
1. Variables de entorno: que necesito configurar en Vercel (listame todas)
2. Seguridad: RLS en Supabase activado, API keys correctas (anon vs service_role)
3. Performance: imagenes optimizadas, fonts, bundle size
4. Errores comunes: cosas que funcionan en dev pero rompen en produccion con Next.js

Ademas:
- Dame el comando para hacer un build local y verificar que no hay errores
- Explicame como hacer el primer deploy importando mi repo de GitHub desde la web de Vercel (vercel.com)

Asumo que ya tengo cuenta en Vercel conectada a mi GitHub, y que el deploy se hace desde la web (no por CLI).
```

---

### Configurar un dominio custom

**Prompt:**

```
Ya tengo mi proyecto deployado en Vercel en [tu-proyecto.vercel.app].
Compre el dominio [tu-dominio.com] en [registrador: Namecheap/GoDaddy/NIC Argentina/etc].

Dame las instrucciones paso a paso para:
1. Agregar el dominio en Vercel
2. Configurar los DNS en [tu registrador]
3. Verificar que el SSL funciona
4. Redirigir www a sin-www (o viceversa)

Con capturas de pantalla no me ayuda porque uso IA por texto, asi que dame los valores exactos que tengo que poner en cada campo.
```

> Por qué funciona: Especificar el registrador es clave porque la interfaz de DNS cambia entre proveedores. Pedir "valores exactos" evita explicaciones vagas tipo "agregá un registro CNAME".

**Ejemplo concreto:**

```
Ya tengo mi proyecto deployado en Vercel en talent-match.vercel.app.
Compre el dominio talentmatch.com.ar en NIC Argentina.

Dame las instrucciones paso a paso para:
1. Agregar el dominio en Vercel
2. Configurar los DNS en NIC Argentina
3. Verificar que el SSL funciona
4. Redirigir www.talentmatch.com.ar a talentmatch.com.ar

Con capturas de pantalla no me ayuda porque uso IA por texto, asi que dame los valores exactos que tengo que poner en cada campo.
```

---

### Resolver errores de deploy

**Prompt:**

```
Mi deploy en Vercel fallo. Necesito ayuda para resolverlo.

ERROR DEL BUILD LOG:
[pega aca los ultimos 30-50 lineas del build log de Vercel]

Contexto:
- Stack: Next.js + Supabase + shadcn/ui
- Funciona en local: [si/no]
- Ultimo cambio que hice antes del deploy: [que modificaste]
- Es el primer deploy o ya habia deployado antes: [primer deploy / ya funcionaba antes]

Decime:
1. Que significa el error
2. Como lo soluciono (con el codigo/config corregido)
3. Como verifico que no va a fallar de nuevo antes de re-deployar
```

> Por qué funciona: El build log es la evidencia clave. "Funciona en local" y "primer deploy vs ya funcionaba" le da contexto crítico para diagnosticar. Los errores de deploy casi siempre son variables de entorno, dependencias o diferencias entre dev y prod.

**Ejemplo concreto:**

```
Mi deploy en Vercel fallo. Necesito ayuda para resolverlo.

ERROR DEL BUILD LOG:
Error: Module not found: Can't resolve '@/lib/supabase'
  Import trace for requested module:
  ./app/dashboard/page.tsx

./app/dashboard/page.tsx
Type error: Property 'empresa_id' does not exist on type 'User'.

Contexto:
- Stack: Next.js + Supabase + shadcn/ui
- Funciona en local: si, sin errores
- Ultimo cambio: agregue el dashboard con la query a Supabase
- Ya habia deployado antes y funcionaba (era solo la landing page)

Decime:
1. Que significa el error
2. Como lo soluciono (con el codigo/config corregido)
3. Como verifico que no va a fallar de nuevo antes de re-deployar
```

---

## Tips generales para usar estos prompts

1. **Siempre pegá el código relevante.** La IA no puede ver tu proyecto. Cuanto más contexto le des, mejor respuesta te da.

2. **Si la respuesta es muy larga o confusa, pedí que simplifique.** Usá: *"Simplifica tu respuesta. Dame solo el codigo que tengo que cambiar y en que archivo va."*

3. **Si algo no funciona, no repitas el mismo prompt.** Agregá información nueva: qué probaste, qué pasó, qué log ves.

4. **Usá la respuesta anterior como input de la siguiente.** Estos prompts están diseñados para encadenarse: el output de "definir proyecto" alimenta "generar user stories", que alimenta "configurar base de datos", etc.

5. **Ante la duda, preguntá antes de implementar.** Usá: *"Antes de escribir codigo, explicame tu plan para [lo que necesitas]. Quiero validar el approach antes de avanzar."*
