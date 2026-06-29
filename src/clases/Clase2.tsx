import { Portada, Seccion, SlideClara, Bullets, BulletsIcono, DosCols, Cita, Codigo, Glosario, Ejemplo, AntesDespues, Pasos, Fases, DemoEnVivo, Break, ManosALaObra, Checkpoint } from '../components/Slides'
import { FolderGit2, ListOrdered, RefreshCw, AlertTriangle, Laptop, ShieldAlert } from 'lucide-react'

export const clase2 = [
  <Portada
    titulo="Construir: en fases y en local"
    subtitulo="Clase 2 · MND130"
    profes={['Damián Sztarkman', 'Fermín Rodríguez Del Castillo']}
  />,

  <SlideClara titulo="Fase 2 del método: Construir" kicker="Acá estamos">
    <Fases activa={2} />
    <div className="mt-7">
      <Ejemplo titulo="Por qué hoy es más fácil de lo que parece">
        Ya hiciste lo difícil: <b>decidir</b>. Tenés tu CLAUDE.md y tus docs (brief y fases) de la Clase 1. Hoy la IA construye con ese contexto — y vos dirigís el ritmo, en fases y en local.
      </Ejemplo>
    </div>
  </SlideClara>,

  <SlideClara titulo="Los dos principios de la fase Construir">
    <DosCols
      izq={
        <div className="rounded-2xl bg-bgsoft border border-rule p-6" style={{ borderLeft: '4px solid #3C8DBC' }}>
          <ListOrdered className="text-udesa-sigedu mb-2" size={28} />
          <h3 className="font-display font-bold text-udesa-dark text-[21px] mb-1.5">En fases</h3>
          <p className="text-ink-soft text-[15.5px] leading-snug">Nada de "hacé todo". Cada fase termina con algo que funciona y se puede probar. No avanzás sin confirmar la anterior.</p>
        </div>
      }
      der={
        <div className="rounded-2xl bg-bgsoft border border-rule p-6" style={{ borderLeft: '4px solid #2f9e6b' }}>
          <Laptop className="text-[#1f7a51] mb-2" size={28} />
          <h3 className="font-display font-bold text-udesa-dark text-[21px] mb-1.5">En local primero</h3>
          <p className="text-ink-soft text-[15.5px] leading-snug">Todo corre en tu máquina antes de publicarse. Rompés, probás y arreglás donde el error es gratis y nadie lo ve.</p>
        </div>
      }
    />
    <div className="mt-6"><Cita>Construís en privado, rompés en privado, y publicás solo lo que ya funciona. Romper en local no cuesta nada; romper en producción, sí.</Cita></div>
  </SlideClara>,

  <Seccion kicker="Bloque 1" titulo="Setup del entorno" />,

  <SlideClara titulo="Lo único que conectás hoy: GitHub">
    <DosCols
      izq={
        <BulletsIcono items={[
          { icon: FolderGit2, children: <><b>GitHub</b> es tu repositorio: guarda tu código y su historial. Cada cambio queda versionado y podés volver atrás.</> },
          { icon: Laptop, children: <>Hoy todo corre en tu <b>máquina</b> (localhost). No publicamos nada, no conectamos base de datos todavía.</> },
        ]} />
      }
      der={<Ejemplo titulo="Por qué solo GitHub hoy">La base de datos (Supabase) y publicar online (Vercel) son la <b>Clase 3</b>. Hoy nos enfocamos en una sola cosa: que tu app, con todas sus pantallas, ande en tu compu. GitHub es para no perder nada en el camino.</Ejemplo>}
    />
    <div className="mt-5"><Cita>El método: una cosa a la vez. Hoy construimos la app navegable en local. Datos reales y publicar vienen después, cuando esto ya funciona.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="Claude Code no solo conversa: hace">
    <DosCols
      izq={<>
        La IA que usás para construir no se queda en darte consejos: <b>ejecuta acciones reales</b> en tu compu. Crea archivos, corre tu proyecto, y —cuando lo conectás— crea tu repositorio y sube tu código.<br /><br />
        Para GitHub usamos la <b>GitHub CLI</b>: te logueás una vez por el navegador (sin tokens a mano) y después le pedís en español <i>"creá un repo y subí el código"</i>, y lo hace.
      </>}
      der={<Glosario items={[
        { t: 'GitHub CLI (gh)', d: 'la herramienta oficial de GitHub. Te logueás por el navegador y Claude Code la usa para crear repos y pushear.' },
        { t: 'Login por navegador', d: 'sin generar ni copiar tokens: clickeás "autorizar" y listo. Una sola vez.' },
        { t: 'Después, en español', d: 'no aprendés comandos: le pedís lo que querés y la IA corre la herramienta por vos.' },
      ]} />}
    />
    <div className="mt-5"><Ejemplo titulo="Lo conectás hoy">Hoy instalás y logueás la <b>GitHub CLI</b> (la guía está en el material). Es un login por el navegador, una sola vez. Supabase y publicar vienen en la Clase 3.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="Datos mock: construí la app antes de tener la base">
    <DosCols
      izq={
        <Bullets items={[
          <>Hoy tus pantallas se llenan con <b>datos falsos</b> escritos en el código (mock). Una lista de turnos inventada, usuarios de mentira.</>,
          <>Así ves y probás <b>toda la app navegable</b> sin depender de una base de datos todavía.</>,
          <>En la <b>Clase 3</b> reemplazás esos mocks por datos <b>reales</b> de Supabase. La pantalla no cambia: cambia de dónde saca los datos.</>,
        ]} />
      }
      der={<Ejemplo titulo="Por qué primero mock">Conectar una base es un paso aparte que puede trabar. Si primero armás la UI con datos falsos, ves el producto completo, lo mostrás, lo ajustás — y recién después le enchufás la base. Construir de a una capa.</Ejemplo>}
    />
    <div className="mt-5"><Cita>Es como maquetar una casa con muebles de cartón antes de comprar los de verdad: ves cómo queda todo, y recién después gastás en lo real.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="El setup de hoy, en orden">
    <Pasos pasos={[
      { t: 'Crear la cuenta de GitHub', d: 'si no la tenés (la guía está en el material). Es lo único que conectás hoy.' },
      { t: 'Levantar el proyecto en local', d: 'que la app corra en tu máquina y la veas en localhost. Acá vivís toda la clase.' },
      { t: 'Conectar GitHub a Claude Code', d: 'instalás la GitHub CLI y te logueás por el navegador, una sola vez. Sin tokens.' },
      { t: 'Construir las pantallas con datos mock', d: 'la app navegable de punta a punta, con datos falsos. Sin base, sin login todavía.' },
    ]} />
    <div className="mt-6"><Cita>Lo hacemos con pantalla compartida, todos a la vez. Quien se traba comparte su pantalla; los bloqueos chicos van por el chat en paralelo.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="¿Qué es “localhost” y por qué importa?">
    <DosCols
      izq={
        <Glosario items={[
          { t: 'localhost', d: 'tu propia computadora actuando como servidor. La app corre ahí, solo para vos.' },
          { t: 'localhost:3000', d: 'la dirección donde ves tu app en el navegador mientras la construís.' },
          { t: 'servidor de dev', d: 'el programa que mantiene viva tu app en local y refresca al instante cuando cambia el código.' },
        ]} />
      }
      der={<Ejemplo titulo="La magia del desarrollo local">Cambiás algo en el código → en un segundo lo ves en localhost, sin publicar nada. Esa velocidad de "edito y veo" es lo que hace que construir con IA sea rápido. Producción ni se entera hasta que vos quieras.</Ejemplo>}
    />
  </SlideClara>,

  <SlideClara titulo="El archivo .env: dónde vivirán tus secretos">
    <DosCols
      izq={
        <>
          <div className="inline-flex items-center gap-2 text-udesa-blue font-bold mb-3"><ShieldAlert size={20} /> Qué es y para qué</div>
          <Bullets items={[
            <>Un archivo de texto donde guardás <b>claves y contraseñas</b> (las de Supabase y la IA llegan en la Clase 3).</>,
            <>El código las <b>lee de ahí</b>, no las tiene escritas adentro.</>,
            <>Está en una lista (<span className="font-mono text-[13px]">.gitignore</span>) que hace que <b>NUNCA se suba a GitHub</b>.</>,
          ]} />
        </>
      }
      der={<Ejemplo titulo="La regla de oro">Si una clave está en el código y subís a GitHub, queda pública para siempre (aunque la borres después). En el .env, no. Cuando tengas claves (Clase 3), pedile a la IA: "poné esto en variables de entorno", y listo.</Ejemplo>}
    />
  </SlideClara>,

  <SlideClara titulo="Git y GitHub: tu botón de guardado con historial">
    <DosCols
      izq={
        <Glosario items={[
          { t: 'Commit', d: 'un punto de guardado de tu código, con una nota de qué cambiaste. Podés volver a cualquiera.' },
          { t: 'Git', d: 'la herramienta que guarda esos puntos en tu máquina y arma el historial.' },
          { t: 'Repo (GitHub)', d: 'la copia de tu proyecto en la nube, con todo el historial. Es "subir" tus commits.' },
          { t: 'Push', d: 'mandar tus commits locales a GitHub, para tenerlos a salvo y compartibles.' },
        ]} />
      }
      der={<Ejemplo titulo="Por qué commiteás cada fase">Cada vez que una fase anda, hacés un commit. Así, si la próxima cosa rompe algo, <b>volvés al último punto que funcionaba</b> sin perder nada. No tenés que aprender comandos: le pedís a la IA <i>"commiteá esto"</i> y lo hace. Vos decidís cuándo guardar.</Ejemplo>}
    />
    <div className="mt-5"><Cita>Pensalo como el "guardar" de un videojuego: antes de algo arriesgado, guardás. Si sale mal, cargás la última partida.</Cita></div>
  </SlideClara>,

  <Seccion kicker="Bloque 2" titulo="Cómo promptear para desarrollo" />,

  <SlideClara titulo="El prompt para arrancar el build">
    <Codigo>{`Mirá mi docs/fases.md (el plan que armamos
en la Clase 1) y mi docs/brief.md. Si hace
falta, ajustá el plan. Cada fase tiene que
terminar con algo que funcione y se pueda
probar en local.

Empecemos por la Fase 1: armá la estructura
base del proyecto (el esqueleto vacío que ya
corre). Explicame las carpetas antes de seguir,
y decime cómo lo corro en mi máquina. No avances
a la Fase 2 sin mi OK.`}</Codigo>
    <div className="mt-5"><Ejemplo titulo="Por qué funciona">No repetís el contexto: la IA lee tus <b>docs</b> sola. El prompt solo apunta a tu <b>plan</b> (fases), pide de a un <b>paso</b> ("antes de seguir") y se construye en local. El método hecho prompt.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="No le pidas todo de una: corregí en el camino">
    <p className="t-body-lg text-ink-soft mb-5">Construir con IA es como dirigir a alguien que tipea rapidísimo: le pedís algo, mirás lo que hizo, y le decís qué ajustar. <b className="text-ink">Una cosa a la vez.</b> No le tires un pedido gigante de una.</p>
    <div className="rounded-xl border border-rule overflow-hidden">
      {[
        { vos: 'Armá la pantalla de turnos.', ia: 'La construye. La mirás en tu compu.' },
        { vos: 'Está bien, pero movele el botón arriba y sumá un filtro por fecha.', ia: 'Lo ajusta. No empezó de cero: corrigió lo que ya había.' },
        { vos: 'El filtro no se ve bien en el celular.', ia: 'Arregla solo esa parte, sin romper el resto.' },
        { vos: 'Perfecto. Guardalo y sigamos con lo próximo.', ia: 'Commitea y pasan a la siguiente cosa.' },
      ].map((m, i) => (
        <div key={i} className={`grid grid-cols-[1fr_1.1fr] ${i ? 'border-t border-rule' : ''}`}>
          <div className="px-4 py-3 bg-udesa-blue/[0.06] border-r border-rule">
            <span className="t-label font-bold uppercase text-udesa-blue">Le decís</span>
            <div className="t-body text-ink mt-0.5">"{m.vos}"</div>
          </div>
          <div className="px-4 py-3">
            <span className="t-label font-bold uppercase text-ink-soft">Y entonces</span>
            <div className="t-body-sm text-ink-soft mt-0.5">{m.ia}</div>
          </div>
        </div>
      ))}
    </div>
  </SlideClara>,

  <SlideClara titulo="Decile también qué NO hacer">
    <AntesDespues
      tituloAntes="Solo decís qué querés"
      tituloDespues="Decís qué querés Y qué evitar"
      antes={<><span className="font-mono text-[13px]">"Agregá login."</span><br /><br />La IA quizás instala una librería pesada, cambia tu estructura, o te arma algo que no necesitabas.</>}
      despues={<><span className="font-mono text-[13px]">"Agregá login con Supabase Auth. No instales librerías nuevas, no toques las otras pantallas, no armes recuperación de contraseña todavía."</span><br /><br />La IA se mantiene en el carril. Menos sorpresas.</>}
    />
  </SlideClara>,

  <Seccion kicker="Bloque 3 · Construir" titulo="Construí tu MVP en local" />,

  <DemoEnVivo
    titulo="Les muestro: armo la estructura base en vivo, en Cursor"
    prompt={`Mirá mi docs/fases.md y mi docs/brief.md.
Empecemos por la Fase 1: armá la estructura
base del proyecto (el esqueleto vacío que ya
corre). Explicame las carpetas antes de seguir,
y decime cómo lo corro en mi máquina. Actualizá
docs/fases.md cuando la Fase 1 esté lista.
No avances a la Fase 2 sin mi OK.`}
    mirar={<>Cómo arranco desde <b>mi plan de fases</b>, cómo la IA me explica la estructura, cómo lo <b>corro en local</b> y verifico que anda — y cómo va <b>actualizando docs/fases.md</b>. Después van ustedes.</>}
  />,

  <SlideClara titulo="Leer la estructura sin asustarte (no hace falta entender el código)">
    <DosCols
      izq={
        <Glosario items={[
          { t: '/app o /pages', d: 'tus pantallas. Cada archivo suele ser una página de la app.' },
          { t: '/components', d: 'piezas reutilizables (un botón, una tarjeta) que se usan en varias pantallas.' },
          { t: '/lib o /utils', d: 'funciones de ayuda: cálculos, conexión a la base, cosas que no son pantalla.' },
          { t: '.env', d: 'tus claves secretas. No se sube a GitHub.' },
          { t: 'package.json', d: 'la lista de "ingredientes" (librerías) que usa tu proyecto.' },
        ]} />
      }
      der={<Ejemplo titulo="Tu trabajo no es entenderlo todo">Es saber <b>dónde está cada cosa</b> para poder pedirle a la IA "tocá la pantalla de turnos" y entender qué archivo va a cambiar. Si una carpeta te intriga, preguntale: <i>"¿para qué es esta carpeta?"</i>.</Ejemplo>}
    />
  </SlideClara>,

  <SlideClara titulo="El plan de fases de hoy (el skate → el auto)">
    <Pasos pasos={[
      { t: 'Fase 1 — El esqueleto (el skate)', d: 'el proyecto vacío que ya corre. Verificás: levantás localhost y ves "Hola [tu app]".' },
      { t: 'Fase 2 — Las pantallas con datos mock', d: 'todas tus pantallas navegables, con datos falsos hardcodeados. Verificás: recorrés la app entera clickeando.' },
      { t: 'Fase 3 — Estados y mobile', d: 'no solo el happy path: vacío, cargando, error. Y que se vea bien en el celular.' },
      { t: 'Hasta acá llega hoy', d: 'datos reales (Supabase), login y publicar online son la Clase 3. Hoy: app navegable en local.' },
    ]} />
    <div className="mt-4"><Cita>En cada paso tenés algo que anda. Al terminar hoy, tu app se ve y se navega completa — aunque los datos todavía sean de mentira.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="¿Cómo sé que una fase está realmente terminada?">
    <DosCols
      izq={
        <>
          <div className="inline-flex items-center gap-2 text-udesa-blue font-bold mb-3"><ListOrdered size={20} /> El test de la fase</div>
          <Bullets items={[
            <>Le pedís a la IA: <b>"decime cómo pruebo que esto funciona"</b>.</>,
            <>Hacés vos esos pasos, en local, como si fueras el usuario.</>,
            <>Si algo no anda, lo arreglás <b>antes</b> de avanzar.</>,
            <>Recién cuando pasa el test, commiteás y seguís.</>,
          ]} />
        </>
      }
      der={<Ejemplo titulo="La trampa común">Avanzar a la Fase 3 sin verificar la 2 es construir sobre arena. Cuando algo se rompe, no sabés si fue lo nuevo o algo viejo que nunca anduvo. Verificá cada fase: es lo que te da terreno firme.</Ejemplo>}
    />
  </SlideClara>,

  <Break minutos={15} etiqueta="Break 1 de 2" />,

  <ManosALaObra
    minutos="40 min"
    titulo="Armá el esqueleto y tus primeras pantallas"
    objetivo={<>Primera mitad: del proyecto vacío a las primeras pantallas navegables, con datos mock. Después paramos y seguimos.</>}
    pasos={[
      { t: 'Abrí tu docs/fases.md', d: 'el plan que armaste en la Clase 1. Revisalo con la IA y ajustalo si hace falta.' },
      { t: 'Fase 1: el esqueleto', d: 'el proyecto vacío que ya corre en local. Pedile que te explique las carpetas y que actualice docs/fases.md.' },
      { t: 'Fase 2: tus primeras pantallas con datos mock', d: 'las principales de tu app, con datos falsos. Que se vean y se naveguen.' },
    ]}
  />,

  <Checkpoint
    titulo="¿Quién tiene la app navegando?"
    items={[
      'Tu proyecto corre en local (lo ves en localhost).',
      'Tenés al menos 2-3 pantallas navegables, con datos mock.',
      'Podés clickear de una pantalla a otra.',
      'Hiciste al menos un commit en Git.',
    ]}
  />,

  <Break minutos={15} etiqueta="Break 2 de 2" />,

  <ManosALaObra
    minutos="40 min"
    titulo="Completá las pantallas y los estados"
    objetivo={<>Segunda mitad: terminás las pantallas que faltan, sumás los estados (vacío, error, cargando) y revisás mobile. Todo con datos mock, en local.</>}
    pasos={[
      { t: 'Terminá las pantallas que falten', d: 'tu app navegable de punta a punta, con datos mock. Recorrela como si fueras el usuario.' },
      { t: 'Sumá los estados', d: 'no solo el happy path: pantalla vacía, cargando, error. Pedile a la IA que los contemple.' },
      { t: 'Revisá mobile y commiteá', d: 'que se vea bien en el celular. Guardás en Git lo que ya anda.' },
    ]}
  />,

  <Seccion kicker="Bloque 4" titulo="Cuando la IA se equivoca (porque se equivoca)" />,

  <SlideClara titulo="Leer un error sin entrar en pánico">
    <Pasos pasos={[
      { t: 'No te asustes del texto rojo', d: 'no hace falta que lo entiendas. Hace falta copiarlo COMPLETO.' },
      { t: 'Mirá dónde aparece', d: 'la consola del navegador (F12), o la terminal donde corre el proyecto.' },
      { t: 'Pasáselo a la IA con contexto', d: 'el error completo + qué estabas haciendo cuando apareció.' },
      { t: 'No copies media línea', d: 'el error entero tiene la pista. Un pedacito hace que la IA adivine.' },
    ]} />
    <div className="mt-4"><Ejemplo titulo="El 90% de los errores">No son catástrofes: son cosas chiquitas (una coma, una variable de entorno que falta, un nombre mal escrito). La IA los resuelve en segundos si le das el error completo.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="La IA no siempre tiene razón">
    <DosCols
      izq={
        <>
          <div className="inline-flex items-center gap-2 text-udesa-blue font-bold mb-3"><AlertTriangle size={20} /> Señales de alerta</div>
          <ul className="space-y-3 text-[18px] text-ink">
            <li className="flex gap-3"><span className="mt-2.5 w-2 h-2 rounded-full bg-udesa-sigedu shrink-0" /><span>El proyecto <b>no levanta</b> en local (un error al correrlo).</span></li>
            <li className="flex gap-3"><span className="mt-2.5 w-2 h-2 rounded-full bg-udesa-sigedu shrink-0" /><span>La <b>consola</b> llena de errores rojos.</span></li>
            <li className="flex gap-3"><span className="mt-2.5 w-2 h-2 rounded-full bg-udesa-sigedu shrink-0" /><span>La IA <b>"alucina"</b>: inventa funciones o usa versiones viejas.</span></li>
          </ul>
        </>
      }
      der={
        <>
          <div className="inline-flex items-center gap-2 text-udesa-dark font-bold mb-3"><RefreshCw size={20} /> La regla de los 3 intentos</div>
          <Cita>Si después de 3 idas y vueltas la IA no lo resuelve, no insistas con el mismo enfoque: volvé un paso atrás (¡tenés Git!), explicá el objetivo de nuevo, o pedí un approach distinto.</Cita>
        </>
      }
    />
  </SlideClara>,

  <SlideClara titulo="Seguridad mínima desde el día uno">
    <AntesDespues
      tituloAntes="Peligroso"
      tituloDespues="Correcto"
      antes={<><span className="inline-flex items-center gap-1"><ShieldAlert size={16} className="text-[#b13434]" /> Pegar tu API key o la contraseña de la base <b>directo en el código</b>.</span><br /><br />Cuando subís a GitHub, queda pública. Cualquiera la usa y te llega la factura.</>}
      despues={<>Guardar las claves en <b>variables de entorno</b> (un archivo que no se sube).<br /><br />Tu CLAUDE.md ya lo pide. Igual, verificá: "¿usaste variables de entorno para las claves?"</>}
    />
  </SlideClara>,

  <Seccion kicker="Cierre" titulo="Tu app se navega en local. La próxima: datos reales y online." />,
]
