import { Portada, Seccion, SlideClara, SlideOscura, Bullets, BulletsIcono, Tarjetas, Cronograma, DosCols, Cita, Glosario, Ejemplo, AntesDespues, Pasos, Codigo, Fases, DemoEnVivo, Break, ManosALaObra, DescargarClaudeMd } from '../components/Slides'
import { GeneradorIdeas } from '../components/GeneradorIdeas'
import { Target, Rocket, Layers, Smartphone, Users, Clock, Wallet, Compass, Server, FileCode2, ListChecks, ShieldCheck, AppWindow, Terminal, FolderOpen, PanelLeft } from 'lucide-react'

export const clase1 = [
  <Portada
    titulo="El método: decidir antes de construir"
    subtitulo="Clase 1 · MND130"
    profes={['Damián Sztarkman', 'Fermín Rodríguez Del Castillo']}
  />,

  <SlideClara titulo="La promesa de este curso" kicker="Arrancamos">
    <DosCols
      izq={
        <BulletsIcono items={[
          { icon: Rocket, children: <>En 4 clases salís con un <b>MVP funcional, deployado en producción</b>, construido por vos con IA.</> },
          { icon: Compass, children: <>No venís a aprender a programar. Venís a aprender <b>nuestra forma de trabajar</b> con IA — un método que vas a repetir solo.</> },
          { icon: Target, children: <>La idea central: <b>primero decidís todo, después construís.</b> Nunca al revés.</> },
        ]} />
      }
      der={
        <Ejemplo titulo="Lo que nos diferencia">
          No es "hacé una app con ChatGPT en 10 minutos". Es un <b>método</b> — The MND130 Way — para que lo que construís sea un producto real, no un prototipo frágil que se rompe.
        </Ejemplo>
      }
    />
  </SlideClara>,

  <Seccion kicker="El método" titulo={<>The MND130 Way:<br />4 fases, una idea</>} />,

  <SlideClara titulo="The MND130 Way" kicker="El hilo de todo el curso">
    <Fases />
    <div className="mt-8">
      <Cita>El que decide bien antes, construye 10x mejor con IA. El que decide <i>mientras</i> codea, termina con un quilombo. Todo el curso es este recorrido — una fase por clase.</Cita>
    </div>
  </SlideClara>,

  <SlideClara titulo="Por qué este orden importa tanto">
    <AntesDespues
      tituloAntes="Vibecoding: decidir mientras codeás"
      tituloDespues="The MND130 Way: decidir antes"
      antes={<>Le pedís a la IA "hacé una app de X" y vas viendo qué sale. Cambiás de idea a mitad de camino, la IA reescribe, se contradice.<br /><br />Resultado: algo que <b>funciona a medias</b> y nadie entiende, ni vos ni la IA.</>}
      despues={<>Primero decidís problema, usuario, alcance, datos y stack — <b>con la IA como copiloto de pensamiento</b>. Recién después construís.<br /><br />Resultado: la IA ya sabe qué hacer. <b>Construir se vuelve la parte fácil.</b></>}
    />
  </SlideClara>,

  <Seccion kicker="Antes de arrancar" titulo="Las dos herramientas que vas a usar todo el curso" />,

  <SlideClara titulo="Cursor y Claude Code: qué es cada uno">
    <Tarjetas cols={2} items={[
      { icon: AppWindow, t: 'Cursor', d: 'El editor donde vive tu proyecto: la ventana con tus archivos y carpetas. Es como un Word para código, pero hecho para programar con IA. Acá ves y guardás todo lo que construís.' },
      { icon: Terminal, t: 'Claude Code', d: 'La IA que construye por vos. Corre adentro de Cursor, en un panel de chat (la "terminal"). Le hablás en español y ella escribe el código, crea archivos y publica. Es tu copiloto que sí toca el teclado.' },
    ]} />
    <div className="mt-6"><Ejemplo titulo="Cómo se relacionan">Cursor es el <b>taller</b> (la mesa, las herramientas, tu proyecto a la vista). Claude Code es el <b>que construye</b> ahí adentro mientras vos dirigís. No vas a escribir código: vas a darle instrucciones a Claude Code, en el chat, dentro de Cursor.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="Cómo abrir todo y empezar a trabajar">
    <DosCols
      izq={
        <Pasos pasos={[
          { t: 'Abrí Cursor', d: 'el ícono que instalaste en el setup. Es la ventana donde vas a trabajar toda la clase.' },
          { t: 'Abrí la carpeta de tu proyecto', d: 'File → Open Folder. Elegís la carpeta del material que descargaste. Tus archivos aparecen a la izquierda.' },
          { t: 'Abrí el panel de Claude Code', d: 'el panel de chat (ícono de Claude o el atajo). Ahí le vas a escribir. Si pide login, entrás con tu cuenta de Claude.' },
          { t: 'Escribile en español', d: 'le hablás como a una persona. Empieza a construir desde tu instrucción. No tocás código a mano.' },
        ]} />
      }
      der={
        <BulletsIcono items={[
          { icon: FolderOpen, children: <>Si no ves tus archivos, es porque no abriste la <b>carpeta</b>. Volvé a File → Open Folder.</> },
          { icon: PanelLeft, children: <>Usá el panel de <b>Claude Code</b>, no el <b>agente propio de Cursor</b>. Fijate que arriba diga "Claude Code". Es el error más común.</> },
          { icon: ShieldCheck, children: <>Si algo no abre o pide instalar, lo resolvemos <b>ahora</b>, antes de seguir. Nadie avanza sin esto listo.</> },
        ]} />
      }
    />
    <div className="mt-5"><Cita>Si algo de esto no te quedó instalado en el setup previo, frená y avisá. Mejor perder 5 minutos acá que quedar trabado toda la clase.</Cita></div>
  </SlideClara>,

  <Seccion kicker="Bloque 1" titulo="Qué cambió: ahora lo construís vos" />,

  <SlideClara titulo="Lo que antes necesitabas para construir un producto">
    <AntesDespues
      tituloAntes="Antes (hace 2 años)"
      tituloDespues="Hoy, con IA"
      antes={
        <div className="space-y-2">
          <div className="flex gap-2 items-center"><Users size={18} className="text-[#b13434]" /> Un equipo de devs (o una agencia).</div>
          <div className="flex gap-2 items-center"><Wallet size={18} className="text-[#b13434]" /> Decenas de miles de dólares.</div>
          <div className="flex gap-2 items-center"><Clock size={18} className="text-[#b13434]" /> Meses hasta tener algo usable.</div>
          <div className="mt-2">Tenías que conseguir todo eso <b>antes</b> de saber si la idea funcionaba.</div>
        </div>
      }
      despues={
        <div className="space-y-2">
          <div className="flex gap-2 items-center"><Compass size={18} className="text-[#1f7a51]" /> Vos + IA dirigida con método.</div>
          <div className="flex gap-2 items-center"><Wallet size={18} className="text-[#1f7a51]" /> Free tiers: casi cero.</div>
          <div className="flex gap-2 items-center"><Clock size={18} className="text-[#1f7a51]" /> Días hasta tener algo online.</div>
          <div className="mt-2">Podés validar <b>construyendo</b>, no pidiendo presupuestos.</div>
        </div>
      }
    />
  </SlideClara>,

  <SlideClara titulo="Qué significa esto para tu rol">
    <Tarjetas items={[
      { icon: Compass, t: 'Dejás de depender', d: 'No necesitás licitar a consultoras cada cosa que se te ocurre. Lo prototipás vos.' },
      { icon: Rocket, t: 'Validás más rápido', d: 'De idea a producto en productivo en días, con menos gente y menos plata.' },
      { icon: Target, t: 'Tu criterio manda', d: 'El cuello de botella ya no es construir. Es saber qué construir y evaluar si está bien.' },
    ]} />
    <div className="mt-7"><Cita>Alguien de negocio ahora puede llevar una idea a producción sin un equipo técnico. Eso es lo que vamos a aprovechar — con método.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="No seas un cliente caprichoso con la IA">
    <p className="t-body-lg text-ink-soft mb-5">Vibecodear es ser ese cliente que dice <i>"quiero esto… ah, y aquello… no, mejor así"</i>. ¿El resultado? La IA se confunde — igual que te confundirías vos con un cliente que no sabe lo que quiere. <b className="text-ink">Y ojo: no es que la IA se confunde sola. La confundimos nosotros.</b></p>
    <AntesDespues
      tituloAntes="Cliente caprichoso (vibecoding)"
      tituloDespues="Cliente prolijo (el método)"
      antes={<>Le vas tirando ideas sueltas a medida que se te ocurren. Cambiás de opinión a mitad de camino.<br /><br />La IA acumula contradicciones, parcha sobre parches, y el proyecto se ensucia.</>}
      despues={<>Sabés qué querés <b>antes</b> de hablarle, porque ya lo decidiste. Le das un pedido claro.<br /><br />La IA no tiene que adivinar tu intención: la ejecuta.</>}
    />
  </SlideClara>,

  <SlideClara titulo="Y si se ensució todo: dinamitá sin miedo">
    <DosCols
      izq={
        <Bullets items={[
          <>A veces el proyecto se enredó tanto que <b>arreglarlo cuesta más</b> que volver a empezar.</>,
          <>Cuesta aceptarlo: <b>"le metí horas, no quiero borrarlo"</b>. Es la trampa.</>,
          <>Pero ahora ya <b>sabés más</b>: la segunda vez sale en una fracción del tiempo.</>,
          <>Tenés Git: <b>volver a un punto limpio</b> no es perder, es no arrastrar el problema.</>,
        ]} />
      }
      der={<Ejemplo titulo="La regla">Si después de varios intentos la IA da vueltas sobre el mismo enredo, no insistas: <b>dinamitá y volvé a arrancar</b> desde el último punto que funcionaba, con lo que aprendiste. Da miedo, pero es más rápido que parchar un desastre.</Ejemplo>}
    />
  </SlideClara>,

  <Seccion kicker="Bloque 2" titulo="El vocabulario mínimo para dirigir a la IA" />,

  <SlideClara titulo="Vocabulario (1/2): de qué está hecha una app">
    <Glosario items={[
      { t: 'Frontend', d: 'lo que el usuario ve y toca: pantallas, botones, formularios.' },
      { t: 'Backend', d: 'la lógica que corre por detrás: cálculos, reglas, permisos.' },
      { t: 'Base de datos', d: 'donde se guarda la info de forma permanente (usuarios, registros).' },
      { t: 'API', d: 'la forma en que dos sistemas se hablan entre sí.' },
      { t: 'Auth', d: 'autenticación: quién puede entrar y a qué tiene acceso.' },
      { t: 'Framework', d: 'una estructura pre-armada para construir apps (ej: Next.js). Te da las bases hechas.' },
      { t: 'CRUD', d: 'las 4 cosas básicas con datos: crear, leer, editar y borrar. La base de casi toda app.' },
    ]} />
    <div className="mt-4 t-body-sm text-ink-soft">No hace falta saber programar. Sí saber qué pedir — y para eso alcanza con conocer estas palabras.</div>
  </SlideClara>,

  <SlideClara titulo="Vocabulario (2/2): cómo vive online y cómo no perderla">
    <Glosario items={[
      { t: 'Deploy', d: 'publicar la app para que viva online y otros la usen.' },
      { t: 'Hosting', d: 'el servicio que mantiene tu app prendida 24/7 (ej: Vercel). Casi siempre gratis para un MVP.' },
      { t: 'Dominio', d: 'la dirección web de tu app (ej: miapp.com). Se compra aparte, ~15 USD/año.' },
      { t: 'Variable de entorno', d: 'dónde guardás las claves secretas (.env), separadas del código. NUNCA en el código.' },
      { t: 'Repo', d: 'la carpeta de tu proyecto versionada. Vive en GitHub y guarda todo el historial.' },
      { t: 'Commit', d: 'un "punto de guardado" de tu código, con una nota de qué cambiaste. Podés volver atrás.' },
    ]} />
    <div className="mt-4 t-body-sm text-ink-soft">El glosario completo (más términos) está en el cheatsheet del material, para consultar cuando estés solo.</div>
  </SlideClara>,

  <Seccion kicker="Bloque 3" titulo="Fase 1 — Decidir" />,

  <SlideClara titulo="El costo de NO decidir antes">
    <DosCols
      izq={
        <>
          <div className="t-label font-bold uppercase text-[#b13434] mb-3">La historia de siempre</div>
          <Pasos pasos={[
            { t: '"Hacé una app de turnos"', d: 'la IA arranca, inventa pantallas y datos que vos no pensaste.' },
            { t: '"No, así no"', d: 'a mitad de camino te das cuenta de qué querías. La IA rehace.' },
            { t: '"Faltaba esto otro"', d: 'agregás cosas sobre la marcha. El proyecto se contradice.' },
            { t: 'Empezás de cero', d: 'tres días después, frustrado, con un desastre que nadie entiende.' },
          ]} />
        </>
      }
      der={<Ejemplo titulo="La cuenta">Esos 3 días perdidos eran <b>20 minutos de decisiones</b> al principio. Decidir antes no es burocracia ni te frena: es lo que te ahorra rehacer todo. El método no es más lento — es muchísimo más rápido.</Ejemplo>}
    />
  </SlideClara>,

  <SlideClara titulo="Fase 1 del método: Decidir" kicker="Acá estamos">
    <Fases activa={1} />
    <div className="mt-7">
      <Ejemplo titulo="Qué hacemos en esta fase">
        Antes de tocar una línea de código, tomás <b>8 decisiones</b> sobre tu producto — conversándolas con la IA. No es burocracia: es lo que hace que la fase Construir sea rápida y no un caos.
      </Ejemplo>
    </div>
  </SlideClara>,

  <SlideClara titulo="Las 8 decisiones que tomás antes de construir">
    <div className="grid grid-cols-2 gap-x-10 gap-y-3.5">
      <Pasos pasos={[
        { t: 'Problema', d: 'qué dolor real resolvés (la IA te cuestiona si es de verdad).' },
        { t: 'Usuario', d: 'para quién exactamente, no "para todos".' },
        { t: 'Scope', d: '3-5 features core y, explícito, qué NO entra en la v1.' },
        { t: 'Pantallas y estados', d: 'no solo el happy path: vacío, error, cargando.' },
      ]} />
      <Pasos inicio={5} pasos={[
        { t: 'Datos', d: 'qué guardás y cómo se relaciona.' },
        { t: 'Stack', d: 'con qué lo construís (árbol de decisión).' },
        { t: 'Riesgos', d: 'qué es lo más difícil y qué hacés si falla.' },
        { t: 'Criterios de éxito', d: 'cómo sabés que el MVP validó algo.' },
      ]} />
    </div>
    <div className="mt-5"><Cita>Cada decisión es una conversación con la IA, no un formulario que se llena solo. Ahí está el "dirigir, no programar".</Cita></div>
  </SlideClara>,

  <Seccion kicker="Bloque 3b" titulo="El CLAUDE.md y los docs: el proyecto le habla a la IA" />,

  <SlideClara titulo="El CLAUDE.md: el método fijo que dirige a la IA">
    <DosCols
      izq={
        <BulletsIcono items={[
          { icon: FileCode2, children: <>Un archivo de texto en tu proyecto. La IA lo <b>lee en cada sesión</b>, sola.</> },
          { icon: ListChecks, children: <>Es el <b>método</b> (reglas fijas). <b>No se completa ni se toca</b>: es igual para todos. Lo descargás hecho.</> },
          { icon: ShieldCheck, children: <>Le ordena a la IA ser tu <b>safeguard</b>: que mantenga todo al día y avise si dos decisiones se contradicen.</> },
        ]} />
      }
      der={
        <Ejemplo titulo="La idea robada a las empresas en serio">
          Las fintech y empresas que usan IA para programar tienen repositorios enteros de contexto para que sus agentes no inventen. Vos hacés la versión MVP: <b>un archivo de método + tus docs</b>. El 20% que da el 80% del valor.
        </Ejemplo>
      }
    />
    <div className="mt-7"><DescargarClaudeMd /></div>
  </SlideClara>,

  <SlideClara titulo="Dos cosas: el método (fijo) y los docs (vivos)">
    <DosCols
      izq={
        <>
          <div className="text-[12px] font-bold tracking-widest uppercase text-udesa-sigedu mb-2">CLAUDE.md — el método (NO se toca)</div>
          <Codigo>{`# Cómo trabajamos
1. Primero entender, después escribir.
2. En fases. No avances sin mi OK.
3. Local primero. Producción al final.
4. Nunca claves en el código.
...
# Sé el safeguard:
- Mantené docs/ siempre al día.
- Avisá si dos decisiones se
  contradicen.
- Actualizá las fases sobre la marcha.`}</Codigo>
        </>
      }
      der={
        <>
          <div className="text-[12px] font-bold tracking-widest uppercase text-udesa-sigedu mb-2">docs/ — tu proyecto (lo arma la IA)</div>
          <Codigo>{`docs/
├── brief.md      ← qué es, usuario,
│                   scope, datos, stack
├── fases.md      ← el plan por fases
│                   y en qué punto vas
└── decisiones.md ← qué se decidió
                    y por qué`}</Codigo>
        </>
      }
    />
    <div className="mt-4"><Ejemplo titulo="La diferencia clave">El CLAUDE.md te lo damos hecho y no lo editás. Los <b>docs</b> los va escribiendo la IA <b>mientras conversás</b> — no al final. Esa es la documentación viva de tu producto.</Ejemplo></div>
  </SlideClara>,

  <Seccion kicker="Bloque 4" titulo="Decidir el stack + demo en vivo" />,

  <SlideClara titulo="El stack por defecto del curso (y por qué)">
    <DosCols
      izq={
        <Glosario items={[
          { t: 'Next.js', d: 'el framework para frontend + backend en un solo lugar.' },
          { t: 'Supabase', d: 'base de datos + auth lista para usar, sin servidor propio.' },
          { t: 'Vercel', d: 'deploy en un click, conectado a tu repo de GitHub.' },
          { t: 'shadcn/ui', d: 'componentes de UI lindos y listos, sobre Tailwind.' },
        ]} />
      }
      der={
        <Ejemplo titulo="Por qué ESTE stack">
          No es el único — es el que la IA <b>mejor conoce</b>: muchísimo código de ejemplo en los modelos, documentación enorme y free tiers. Traducción: la IA se equivoca menos y vos avanzás más rápido.
        </Ejemplo>
      }
    />
  </SlideClara>,

  <SlideClara titulo="Otros stacks según qué construís">
    <Tarjetas cols={2} items={[
      { icon: Layers, t: 'Web app / SaaS', d: 'Next.js + Supabase + Vercel. El default. Sirve para el 80% de los MVPs.' },
      { icon: Smartphone, t: 'App mobile', d: 'React Native + Expo. Cuando necesitás estar en el celular de verdad.' },
      { icon: Rocket, t: 'Landing / waitlist', d: 'Next.js + Vercel solo. Para medir demanda antes de construir todo.' },
      { icon: Server, t: 'Herramienta interna', d: 'Retool o Next.js + Supabase. Procesos del equipo, no para clientes.' },
    ]} />
  </SlideClara>,

  <Break minutos={15} etiqueta="Break" />,

  // --- Pieza interactiva: sale la idea al azar que el profe va a construir en vivo ---
  <SlideOscura><GeneradorIdeas /></SlideOscura>,

  <DemoEnVivo
    titulo="Les muestro: armo los docs de la idea que salió, en vivo"
    prompt={`Quiero construir el MVP que salió en el generador.
Ya tengo el CLAUDE.md con el método en el proyecto.

Trabajamos con The MND130 Way: primero decidimos,
después construimos. Antes de escribir código,
creá la carpeta docs/ y, conversando conmigo de a
una pregunta, andá completando docs/brief.md
(problema, usuario, scope, pantallas y estados,
datos, stack, riesgos y criterios de éxito).`}
    mirar={<>Tomo <b>la idea que acaba de salir al azar</b> y armo sus docs en vivo: cómo la IA <b>crea la carpeta docs/</b>, cómo me <b>cuestiona</b> cada decisión y la <b>va escribiendo en docs/brief.md mientras hablamos</b>, separando lo core de lo que NO va. Después lo hacen ustedes con la suya.</>}
  />,

  <Seccion kicker="Bloque 5 · Manos a la obra" titulo="Armá los docs de TU MVP" />,

  <ManosALaObra
    minutos="65 min"
    titulo="Armá tus docs conversando con la IA"
    objetivo={<>Tomás tu idea y, conversando con Claude, vas armando <b>docs/brief.md</b> y <b>docs/fases.md</b>. Salís con tu documentación viva del producto — es el entregable de hoy.</>}
    pasos={[
      { t: 'Descargá el CLAUDE.md y abrí tu proyecto', d: 'el del material (botón de descarga en la slide del CLAUDE.md o en Material). Es el método: no se toca.' },
      { t: 'Tomá tu idea y pedile que cree docs/', d: 'la que trajiste o sorteá una. Pedile a Claude que cree la carpeta docs/ y arranque docs/brief.md con vos.' },
      { t: 'Problema, usuario y scope', d: 'las primeras decisiones. Que te cuestione, no que te dé la razón. Se van escribiendo en el brief al toque.' },
      { t: 'Pantallas, estados, datos, stack y riesgos', d: 'no solo el happy path: vacío, error, cargando. Y dejá explícito qué NO va en la v1.' },
      { t: 'Cerrá con docs/fases.md', d: 'con el brief listo, pedile que arme el plan por fases. Ese es tu mapa para la Clase 2.' },
    ]}
  />,

  <SlideClara titulo="El recorrido completo del curso" kicker="Para que veas el hilo">
    <Cronograma bloques={[
      { dur: 'Clase 1', t: 'Decidir: el método, las 8 decisiones y los docs de tu proyecto. ← estás acá' },
      { dur: 'Clase 2', t: 'Construir: setup, prompting y build en fases, en local.' },
      { dur: 'Clase 3', t: 'Sumar IA: chatbots y agentes adentro de tu producto.' },
      { dur: 'Clase 4', t: 'Revisar y publicar: calidad, deploy a producción y presentación.' },
    ]} />
    <div className="mt-7"><Cita>Cada clase es una fase del método y deja un entregable. Salís con algo real en la mano, no con apuntes.</Cita></div>
  </SlideClara>,

  <Seccion kicker="Cierre" titulo="Ya decidiste. Tenés tus docs. La próxima lo construimos." />,
]
