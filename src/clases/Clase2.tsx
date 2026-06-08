import { Portada, Seccion, SlideClara, Bullets, Tarjetas, Checklist, DosCols, Cita, Codigo, Glosario, Ejemplo, AntesDespues, Pasos, Fases, DemoEnVivo, Break, ManosALaObra, Checkpoint } from '../components/Slides'
import { FolderGit2, Triangle, Database, MessageSquare, ListOrdered, RefreshCw, AlertTriangle, Laptop, ShieldAlert } from 'lucide-react'

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
        Ya hiciste lo difícil: <b>decidir</b>. Tu CLAUDE.md tiene el brief completo. Hoy la IA construye con ese contexto — y vos dirigís el ritmo, en fases y en local.
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
    <div className="mt-6"><Cita>El amateur escribe directo en producción y reza. Vos construís en privado, rompés en privado, y publicás solo lo que ya funciona.</Cita></div>
  </SlideClara>,

  <Seccion kicker="Bloque 1" titulo="Setup del entorno" />,

  <SlideClara titulo="Las tres cuentas y para qué sirve cada una">
    <Tarjetas items={[
      { icon: FolderGit2, t: 'GitHub', d: 'El repositorio: guarda tu código y su historial. Cada cambio queda versionado y podés volver atrás.' },
      { icon: Triangle, t: 'Vercel', d: 'Donde vive tu app online. Se conecta a GitHub: subís un cambio y se actualiza solo.' },
      { icon: Database, t: 'Supabase', d: 'Base de datos + login, sin servidor propio. Donde se guarda la info de tu app.' },
    ]} />
    <div className="mt-6">
      <Ejemplo titulo="Cómo se conectan">
        Escribís código → lo subís a <b>GitHub</b> → <b>Vercel</b> lo publica → tu app, online, lee y guarda datos en <b>Supabase</b>. Ese es el circuito completo.
      </Ejemplo>
    </div>
  </SlideClara>,

  <SlideClara titulo="MCP: el enchufe que conecta la IA con tus herramientas">
    <DosCols
      izq={<>
        Pensalo como el <b>USB-C de la IA</b>: un enchufe estándar para conectar Claude con herramientas reales (tu GitHub, tu base de datos, tu plataforma para publicar).<br /><br />
        Sin MCP, la IA solo <b>conversa</b>: te dice qué hacer. Con MCP, la IA <b>hace</b>: crea el repo, toca la base, publica la app. Vos no aprendés comandos — <b>conectás la herramienta una vez y le hablás</b>.
      </>}
      der={<Glosario items={[
        { t: 'MCP', d: 'el estándar que deja a la IA usar herramientas externas. "Model Context Protocol".' },
        { t: 'Quién lo hace', d: 'el dueño de cada herramienta: GitHub escribió el suyo, Supabase el suyo. No es Anthropic integrando todo a mano.' },
        { t: 'Por qué importa', d: 'cada app lo publica una vez y cualquier IA lo aprovecha. Por eso ya hay miles.' },
      ]} />}
    />
    <div className="mt-5"><Ejemplo titulo="Lo conectás en el setup">En la Guía de Setup conectás GitHub, Supabase y Vercel a Claude Code por MCP. Es pegar una línea y autorizar en el navegador, una sola vez. Después le pedís las cosas en español.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="Local vs. producción: dos lugares, no se mezclan">
    <AntesDespues
      tituloAntes="Local (tu máquina)"
      tituloDespues="Producción (online)"
      antes={<>Donde <b>construís y probás</b>. Corre en <span className="font-mono text-[13px]">localhost</span>, solo lo ves vos.<br /><br />Una base de datos <b>de prueba</b>: la llenás de datos truchos, la rompés, no importa.</>}
      despues={<>Donde vive la app <b>para los usuarios</b>. Es lo que está en Vercel con tu dominio.<br /><br />La base de datos <b>real</b>. Acá no se experimenta: llega lo que ya probaste en local.</>}
    />
    <div className="mt-5"><Cita>Regla simple para no-técnicos: tenés un proyecto de Supabase para probar y otro para producción. Nunca toques el de producción a mano.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="El setup, en orden">
    <Pasos pasos={[
      { t: 'Crear las cuentas', d: 'GitHub, Vercel y Supabase (con la guía de setup que mandamos antes).' },
      { t: 'Levantar el proyecto en local', d: 'que corra en tu máquina y lo veas en localhost. Primero acá.' },
      { t: 'Conectar GitHub con Vercel', d: 'para que el deploy sea automático cuando vos decidas subir.' },
      { t: 'Conectar Supabase', d: 'crear el proyecto de prueba y guardar las claves en variables de entorno.' },
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

  <SlideClara titulo="El archivo .env: dónde viven tus secretos">
    <DosCols
      izq={
        <>
          <div className="inline-flex items-center gap-2 text-udesa-blue font-bold mb-3"><ShieldAlert size={20} /> Qué es y para qué</div>
          <Bullets items={[
            <>Un archivo de texto donde guardás <b>claves y contraseñas</b> (de Supabase, de la IA).</>,
            <>El código las <b>lee de ahí</b>, no las tiene escritas adentro.</>,
            <>Está en una lista (<span className="font-mono text-[13px]">.gitignore</span>) que hace que <b>NUNCA se suba a GitHub</b>.</>,
          ]} />
        </>
      }
      der={<Ejemplo titulo="La regla de oro">Si una clave está en el código y subís a GitHub, queda pública para siempre (aunque la borres después). En el .env, no. Pedile a la IA: "poné esto en variables de entorno", y listo.</Ejemplo>}
    />
  </SlideClara>,

  <Seccion kicker="Bloque 2" titulo="Cómo promptear para desarrollo" />,

  <SlideClara titulo="Las 3 reglas del buen prompt">
    <Tarjetas items={[
      { icon: MessageSquare, t: '1. Contexto', d: 'Ya lo tenés resuelto: tu CLAUDE.md. La IA lee tu brief y tu stack sola, en cada sesión.' },
      { icon: ListOrdered, t: '2. Estructura', d: 'Pedí de a un paso. Un objetivo por prompt. "Hacé todo" produce todo a medias.' },
      { icon: RefreshCw, t: '3. Iteración', d: 'No tires y empieces de cero. Corregí lo que ya hay: "esto está bien, pero cambiá X".' },
    ]} />
    <div className="mt-5"><Ejemplo titulo="La ventaja de venir con el método">Quien no tiene CLAUDE.md repite el contexto en cada prompt (y se olvida la mitad). Vos no: ya está escrito y la IA lo respeta.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="La misma tarea, dos prompts, dos resultados">
    <AntesDespues
      tituloAntes="Prompt pobre"
      tituloDespues="Prompt con método"
      antes={<><span className="font-mono text-[13px]">"Hacé una pantalla de login"</span><br /><br />La IA elige el stack que quiere, inventa un diseño, quizás no usa tu Supabase. Tenés que rehacer la mitad.</>}
      despues={<><span className="font-mono text-[13px]">"Según mi CLAUDE.md, agregá la pantalla de login con Supabase Auth. Solo eso. Decime cómo probarla antes de seguir."</span><br /><br />Hace exactamente eso, sobre lo que ya tenés.</>}
    />
  </SlideClara>,

  <SlideClara titulo="El prompt para arrancar el build">
    <Codigo>{`Según mi CLAUDE.md, armemos el plan de fases.
Cada fase tiene que terminar con algo que
funcione y se pueda probar en local.

Empecemos por la Fase 1: scaffold del proyecto
+ la estructura base. Explicame las carpetas
antes de seguir, y decime cómo lo corro en mi
máquina. No avances a la Fase 2 sin mi OK.`}</Codigo>
    <div className="mt-5"><Ejemplo titulo="Por qué funciona">Apoya en el <b>CLAUDE.md</b> (contexto), pide <b>fases</b> (estructura) y un <b>paso</b> ("antes de seguir"). El método hecho prompt.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="No le pidas todo de una: corregí en el camino">
    <p className="t-body-lg text-ink-soft mb-5">Construir con IA es como dirigir a alguien que tipea rapidísimo: le pedís algo, mirás lo que hizo, y le decís qué ajustar. <b className="text-ink">Una cosa a la vez.</b> No tires un pedido gigante y reces.</p>
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
    titulo="Les muestro: armo el scaffold en vivo, en Cursor"
    prompt={`Según mi CLAUDE.md, armemos el plan de fases.
Cada fase tiene que terminar con algo que
funcione y se pueda probar en local.

Empecemos por la Fase 1: scaffold del proyecto
+ la estructura base. Explicame las carpetas
antes de seguir, y decime cómo lo corro en mi
máquina. No avances a la Fase 2 sin mi OK.`}
    mirar={<>Cómo pido <b>de a una fase</b>, cómo la IA me explica la estructura, cómo lo <b>corro en local</b> y verifico que anda — y recién ahí sigo. Después van ustedes.</>}
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

  <SlideClara titulo="El plan de fases típico (el skate → el auto)">
    <Pasos pasos={[
      { t: 'Fase 1 — La base (el skate)', d: 'scaffold + estructura + auth. Verificás: te registrás y entrás a un dashboard vacío, en local.' },
      { t: 'Fase 2 — La feature principal (el monopatín)', d: 'el CRUD de tu entidad core. Verificás: creás, ves, editás y borrás.' },
      { t: 'Fase 3 — Integración (la moto)', d: 'conectás las partes, permisos. Verificás: el flujo completo de punta a punta.' },
      { t: 'Fase 4 — Pulido (el auto)', d: 'estados de carga y error, mobile. Recién acá pensamos en deploy (Clase 4).' },
    ]} />
    <div className="mt-4"><Cita>En cada paso tenés algo que anda. Si te quedás sin tiempo en la Fase 2, igual tenés un producto usable.</Cita></div>
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
    titulo="Construí la base de tu MVP, en local"
    objetivo={<>Primera mitad: del scaffold a tu feature core andando en local. Después paramos y seguimos.</>}
    pasos={[
      { t: 'Armá el plan de fases', d: 'con la IA, a partir de tu CLAUDE.md. Que sea incremental.' },
      { t: 'Fase 1: scaffold + auth', d: 'que corra en local. Pedile que te explique la estructura.' },
      { t: 'Fase 2: arrancá tu feature core', d: 'el CRUD de tu entidad principal, contra Supabase de prueba.' },
    ]}
  />,

  <Checkpoint
    titulo="¿Quién tiene la base andando?"
    items={[
      'Tu proyecto corre en local (lo ves en localhost).',
      'Auth funciona: te podés registrar y entrar.',
      'Supabase de prueba conectado, con al menos una tabla.',
      'Hiciste al menos un commit en Git.',
    ]}
    mostrar={<>Avisá en el chat si tu base ya corre en local. Si estás trabado, compartí pantalla ahora — es el momento de resolver bloqueos juntos antes de seguir.</>}
  />,

  <Break minutos={15} etiqueta="Break 2 de 2" />,

  <ManosALaObra
    minutos="40 min"
    titulo="Terminá tu feature core y commiteá"
    objetivo={<>Segunda mitad: completás el CRUD, lo probás en local y guardás en Git.</>}
    pasos={[
      { t: 'Terminá el CRUD de tu entidad', d: 'crear, ver, editar y borrar — todo contra Supabase de prueba.' },
      { t: 'Probá cada cosa en local', d: 'como si fueras el usuario. Pedile a la IA cómo verificar.' },
      { t: 'Commiteá al cerrar la fase', d: 'guardás en Git lo que ya anda, antes de seguir.' },
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

  <SlideClara titulo="Tu entregable de hoy" kicker="Cierre">
    <Checklist items={[
      'Repositorio en GitHub con el código del proyecto.',
      'El MVP corre en local con auth funcionando.',
      'Al menos 2-3 pantallas y tu feature core (CRUD) andando.',
      'Supabase de prueba conectado.',
      'Commits en Git al cerrar cada fase.',
    ]} />
    <div className="mt-5"><Ejemplo titulo="Ojo">Hoy NO buscamos estar en producción. Buscamos que ande <b>en local</b>, bien. Publicar es la Clase 4, y es un paso deliberado.</Ejemplo></div>
  </SlideClara>,

  <Seccion kicker="Cierre" titulo="Tu MVP corre en local. La próxima: le metemos IA adentro." />,
]
