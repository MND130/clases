# Proyectos de ejemplo para MVPs

Estas son ideas listas para usar. Si no llegaste con una idea propia, elegí la que más te cierre y arrancá. Todas se pueden construir en 4 clases.

---

## 1. TurnoYa — Plataforma de turnos online

**Problema:** Consultorios, peluquerías, estudios de abogados — todos gestionan turnos por WhatsApp. El profesional pierde tiempo coordinando, el cliente no sabe qué horarios hay disponibles, y los turnos se superponen o se olvidan.

### Stack recomendado

| Tecnología | Por qué |
|---|---|
| Next.js | Página pública para que el cliente reserve + dashboard privado para el profesional |
| Supabase | Base de datos para turnos, clientes y disponibilidad + auth para el login |
| Vercel | Deploy rápido, dominio custom fácil |
| shadcn/ui | Componentes de calendario y formularios ya resueltos |

### Features del MVP

- Página pública con el perfil del profesional y sus servicios
- Calendario de disponibilidad visible para el cliente
- Formulario de reserva: elige servicio, fecha, horario, deja nombre y teléfono
- Mail de confirmación automático al cliente y al profesional
- Dashboard privado donde el profesional ve la agenda del día/semana y puede cancelar turnos

### Features que NO van en el MVP

- Pagos online / seña para reservar
- Múltiples profesionales en una misma cuenta (equipo)
- Recordatorio automático por WhatsApp
- Integración con Google Calendar
- Sistema de reseñas
- App mobile

### Spec inicial (prompt para la IA)

> Necesito una web app de turnos online. Tiene dos partes:
>
> 1. **Página pública** donde el cliente ve los servicios disponibles (nombre, duración, precio), elige uno, ve el calendario con horarios libres, y reserva dejando nombre, email y teléfono. Al confirmar, recibe un mail con los datos del turno.
>
> 2. **Dashboard privado** (con login) donde el profesional ve su agenda semanal, puede bloquear horarios, cancelar turnos y configurar sus servicios y disponibilidad horaria.
>
> Stack: Next.js, Supabase (auth + DB), shadcn/ui. Deploy en Vercel.
>
> Armemos esto en fases. FASE 1: schema de base de datos + auth + estructura del proyecto. No avances sin mi OK.

### Criterios de éxito

- Un cliente puede entrar, ver horarios disponibles y reservar un turno
- El profesional puede loguearse, ver su agenda y cancelar turnos
- Llega mail de confirmación al reservar
- Está deployado en una URL pública

---

## 2. ConnectPro — Marketplace de servicios profesionales de nicho

**Problema:** Una empresa necesita un servicio específico (diseñador de packaging, consultor de comercio exterior, fotógrafo de producto) y no sabe a quién llamar. Un marketplace vertical que conecta oferta y demanda en un nicho puntual.

### Stack recomendado

| Tecnología | Por qué |
|---|---|
| Next.js | Listado público de profesionales + panel para cada profesional + admin |
| Supabase | Perfiles, categorías, mensajes, auth con roles (profesional vs cliente) |
| Vercel | Deploy simple |
| shadcn/ui | Cards, filtros, formularios listos |

### Features del MVP

- Home con buscador y filtros por categoría/especialidad
- Perfil público del profesional: nombre, descripción, portfolio (links o imágenes), precio orientativo, rating
- Registro diferenciado: "Busco un profesional" vs "Soy profesional"
- Formulario de contacto/pedido de presupuesto desde el perfil del profesional
- Dashboard del profesional: editar perfil, ver pedidos recibidos, responder

### Features que NO van en el MVP

- Pagos a través de la plataforma (comisión)
- Chat en tiempo real
- Sistema de reviews verificadas
- Matching automático con IA
- App mobile
- Verificación de identidad / portfolio

### Spec inicial (prompt para la IA)

> Necesito un marketplace web donde empresas buscan y contratan profesionales de un nicho específico (ej: consultores de comercio exterior).
>
> **Roles:** Cliente (busca profesional) y Profesional (ofrece servicios).
>
> **Flujo del cliente:** Entra al home, filtra por categoría/especialidad, ve perfiles, envía solicitud de presupuesto desde el perfil.
>
> **Flujo del profesional:** Se registra, arma su perfil (descripción, especialidades, portfolio, precio orientativo), recibe solicitudes, responde.
>
> Stack: Next.js, Supabase (auth con roles + DB), shadcn/ui. Deploy en Vercel.
>
> Empecemos con FASE 1: schema de base de datos con los dos roles y la estructura del proyecto. No avances sin mi OK.

### Criterios de éxito

- Un profesional puede registrarse, armar su perfil y aparecer en el listado
- Un cliente puede buscar, filtrar y enviar un pedido de presupuesto
- El profesional recibe el pedido en su dashboard
- La búsqueda y filtros funcionan correctamente
- Está deployado y se puede compartir

---

## 3. AlquiGestión — Gestión de propiedades en alquiler

**Problema:** Tenés 3-10 propiedades en alquiler y gestionás todo con WhatsApp y una planilla de Excel. Quién pagó, quién debe, cuándo vence el contrato, qué reclamo hizo cada inquilino — todo en tu cabeza o disperso en 5 lugares.

### Stack recomendado

| Tecnología | Por qué |
|---|---|
| Next.js | Dashboard web accesible desde cualquier lugar |
| Supabase | Base de datos relacional perfecta para propiedades, inquilinos, pagos, contratos |
| Vercel | Deploy instantáneo |
| shadcn/ui | Tablas, cards de estado, formularios |

### Features del MVP

- Dashboard con vista general: propiedades, estado de cada una (ocupada/libre), próximos vencimientos
- ABM de propiedades: dirección, tipo, precio de alquiler, datos del inquilino actual
- Registro de pagos: monto, fecha, comprobante (upload de imagen)
- Vista por propiedad: datos del contrato, historial de pagos, reclamos
- Alertas: contratos por vencer en los próximos 30 días, pagos atrasados

### Features que NO van en el MVP

- Portal para el inquilino (donde suba comprobantes o haga reclamos)
- Integración con MercadoPago para cobrar
- Generación automática de recibos
- Cálculo de ajustes por inflación (ICL, IPC)
- Múltiples propietarios / administración de consorcios
- Reportes fiscales

### Spec inicial (prompt para la IA)

> Necesito una web app para gestionar mis propiedades en alquiler (entre 3 y 10 unidades).
>
> **Dashboard principal:** Lista de propiedades con estado (ocupada/libre), inquilino actual, monto del alquiler, próximo vencimiento de pago, próximo vencimiento de contrato. Indicadores de alerta en rojo para pagos atrasados y contratos por vencer.
>
> **Detalle de propiedad:** Datos de la propiedad, datos del contrato vigente (inicio, fin, monto, ajustes), datos del inquilino, historial de pagos, lista de reclamos/notas.
>
> **Registrar pago:** Seleccionar propiedad, monto, fecha, subir foto del comprobante.
>
> Stack: Next.js, Supabase (auth + DB + storage para comprobantes), shadcn/ui. Deploy en Vercel.
>
> FASE 1: schema de la base de datos y auth. Esperá mi OK antes de avanzar.

### Criterios de éxito

- Puedo cargar propiedades con datos de contrato e inquilino
- Puedo registrar pagos y ver el historial
- El dashboard muestra alertas de pagos atrasados y contratos por vencer
- Puedo subir fotos de comprobantes
- Está deployado y accesible desde el celular

---

## 4. MiTablero — Dashboard de métricas para PyME

**Problema:** El dueño de una PyME tiene datos de ventas, gastos y clientes dispersos en 3 planillas de Excel, un Google Sheet y la cabeza del contador. Necesita un dashboard simple que le muestre cómo va el negocio de un vistazo, sin tener que abrir 5 archivos.

### Stack recomendado

| Tecnología | Por qué |
|---|---|
| Next.js | Dashboard web responsive, accesible desde el celular |
| Supabase | Base de datos donde se centralizan los datos + auth |
| Vercel | Deploy simple |
| shadcn/ui + Recharts | Componentes UI + gráficos de barras, líneas, torta |

### Features del MVP

- Carga manual de datos: ventas del mes, gastos por categoría, cantidad de clientes nuevos
- Dashboard con 4-5 métricas clave con gráficos (ventas mensuales, gastos vs ingresos, top categorías, evolución MoM)
- Importar datos desde CSV (export de Excel/Google Sheets)
- Filtros por período (mes, trimestre, año)
- Vista mobile-friendly para chequear rápido desde el celular

### Features que NO van en el MVP

- Conexión automática con bancos o sistemas contables
- Múltiples usuarios con permisos (contador, socio, etc.)
- Exportar reportes a PDF
- Alertas automáticas ("tus ventas bajaron 20%")
- Proyecciones o forecasting
- Integración con facturación (AFIP)

### Spec inicial (prompt para la IA)

> Necesito un dashboard web para visualizar métricas de una PyME.
>
> **Datos que maneja:** Ventas (fecha, monto, categoría, cliente), Gastos (fecha, monto, categoría, proveedor), Clientes (nombre, fecha de alta, categoría).
>
> **Dashboard:** Cards con métricas resumen (ventas del mes, gastos del mes, margen, clientes nuevos). Gráfico de líneas de ventas últimos 12 meses. Gráfico de barras gastos por categoría. Gráfico de torta distribución de ventas por categoría. Filtro por período.
>
> **Carga de datos:** Formulario manual + importación de CSV.
>
> Stack: Next.js, Supabase, shadcn/ui, Recharts para gráficos. Deploy en Vercel.
>
> FASE 1: schema de base de datos y estructura del proyecto. No avances sin mi OK.

### Criterios de éxito

- Puedo cargar ventas y gastos (manual y por CSV)
- El dashboard muestra gráficos que se actualizan con los datos cargados
- Los filtros por período funcionan
- Se ve bien en el celular
- Está deployado en una URL accesible

---

## 5. OnboardKit — Herramienta de onboarding para empleados

**Problema:** Cada vez que entra alguien nuevo a la empresa, HR manda 15 mails con PDFs, links y tareas. El empleado se pierde, HR no sabe qué completó y qué no, y siempre falta algo. Necesitan un checklist interactivo centralizado.

### Stack recomendado

| Tecnología | Por qué |
|---|---|
| Next.js | Portal web para el empleado + panel de admin para HR |
| Supabase | Usuarios, checklists, progreso, documentos + auth con roles |
| Vercel | Deploy rápido |
| shadcn/ui | Checklists, progress bars, tablas de seguimiento |

### Features del MVP

- Panel HR: crear plantilla de onboarding (lista de tareas: leer documento, firmar contrato, completar formulario, ver video, etc.)
- Invitar nuevo empleado por mail (se crea cuenta automáticamente)
- Portal del empleado: ve su checklist, marca tareas como completadas, sube documentos requeridos
- Dashboard HR: ver todos los empleados en onboarding, porcentaje de completitud de cada uno, tareas pendientes
- Notificación por mail cuando un empleado completa todo (o lleva más de X días sin avanzar)

### Features que NO van en el MVP

- Firma digital de documentos
- Integración con HRIS (BambooHR, etc.)
- Múltiples plantillas por puesto/área
- Gamificación (badges, puntos)
- Evaluación post-onboarding
- Workflow de aprobaciones

### Spec inicial (prompt para la IA)

> Necesito una web app de onboarding para nuevos empleados. Dos roles: HR (admin) y Empleado.
>
> **Flujo HR:** Crea una plantilla de onboarding con tareas (título, descripción, tipo: lectura/upload/link/checkbox). Invita empleado por mail. Ve dashboard con todos los onboardings activos y su progreso.
>
> **Flujo empleado:** Recibe mail con link, crea cuenta, ve su checklist de tareas. Puede marcar como completadas, subir documentos donde se requiera, y ver su progreso general.
>
> **Notificaciones:** Mail a HR cuando un empleado completa el 100%. Mail a HR si un empleado lleva 5 días sin actividad.
>
> Stack: Next.js, Supabase (auth con roles + DB + storage), shadcn/ui. Deploy en Vercel.
>
> FASE 1: schema de base de datos y sistema de auth con dos roles. Esperá mi OK.

### Criterios de éxito

- HR puede crear una plantilla de onboarding con tareas
- HR puede invitar un empleado y ver su progreso
- El empleado puede loguearse, ver sus tareas y completarlas
- Se pueden subir documentos
- Llega notificación cuando completa todo
- Está deployado

---

## Resumen rápido

| # | Proyecto | Tipo | Stack principal | Dificultad |
|---|---|---|---|---|
| 1 | TurnoYa | Web app — turnos | Next.js + Supabase | Media |
| 2 | ConnectPro | Marketplace de servicios | Next.js + Supabase | Media-Alta |
| 3 | AlquiGestión | Gestión de propiedades | Next.js + Supabase | Media |
| 4 | MiTablero | Dashboard de métricas | Next.js + Supabase + Recharts | Media |
| 5 | OnboardKit | Onboarding de empleados | Next.js + Supabase | Media |

**Regla general para el MVP:** si dudás si una feature entra o no, no entra. Siempre vas a tener más ideas que tiempo. El objetivo es tener algo funcionando que puedas mostrar y que valide tu hipótesis de negocio.
