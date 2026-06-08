import { Portada, Seccion, SlideClara, SlideOscura, Bullets, BulletsIcono, Tarjetas, Cronograma, DosCols, Cita, Glosario, Ejemplo, AntesDespues, Pasos, Codigo, Fases, DemoEnVivo, Break, ManosALaObra, Checkpoint } from '../components/Slides'
import { GeneradorIdeas } from '../components/GeneradorIdeas'
import { Target, Rocket, Layers, Smartphone, Users, Clock, Wallet, Compass, Server, FileCode2, ListChecks, ShieldCheck, MessageCircle, Wrench, Bot } from 'lucide-react'

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

  <SlideClara titulo="El alcance: qué entra y qué no en tu MVP">
    <AntesDespues
      tituloAntes="Lo que NO es el MVP"
      tituloDespues="Lo que SÍ es"
      antes={<>El producto completo, con todas las features que imaginás, pulido para escalar a 100.000 usuarios.<br /><br />Eso viene después — y muchas veces nunca, porque la hipótesis no se valida.</>}
      despues={<>La versión más chica que prueba tu hipótesis más riesgosa, <b>en manos de usuarios reales</b>.<br /><br />Una cosa, bien hecha, online. El resto se decide con datos, no con suposiciones.</>}
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

  <SlideClara titulo="Las 3 formas en que la IA trabaja para vos">
    <Tarjetas cols={3} items={[
      { icon: MessageCircle, t: '1. Conversa', d: 'Le preguntás, te responde texto. Te aconseja, redacta, explica. Es el ChatGPT de toda la vida: no toca nada por sí solo.' },
      { icon: Wrench, t: '2. Usa herramientas', d: 'Además de responder, ejecuta acciones reales: crea un repo, escribe en la base, publica la app. Eso es lo que habilita MCP. La IA pasa de aconsejar a hacer.' },
      { icon: Bot, t: '3. Es un agente', d: 'Encadena varias acciones sola para cumplir un objetivo: "agendá una demo con este lead" → busca el lead, crea el evento, confirma. Decide los pasos, no solo uno.' },
    ]} />
    <div className="mt-5"><Ejemplo titulo="Por qué te importa hoy">Dirigir a la IA es saber qué nivel le estás pidiendo. En este curso vas a usar los tres. El salto de "conversa" a "hace" es lo que convierte a la IA en alguien que construye tu MVP, no que te lo explica.</Ejemplo></div>
    <div className="mt-3 t-body-sm text-ink-soft">Las formas 2 y 3 —herramientas y agentes— son el corazón de la <b>Clase 3 (Sumar IA)</b>: ahí las metés adentro de TU MVP. Por ahora alcanza con tener el mapa.</div>
  </SlideClara>,

  <Seccion kicker="Bloque 3" titulo="Fase 1 — Decidir: las 8 decisiones del brief" />,

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

  <SlideClara titulo="Una spec floja vs. una que la IA puede ejecutar">
    <AntesDespues
      tituloAntes="Spec vaga"
      tituloDespues="Spec accionable"
      antes={<>"Quiero una herramienta de scoring que también haga forecast, mande mails, se integre al CRM y arme reportes…"<br /><br />Demasiado, sin prioridad. La IA construye 5 cosas a medias.</>}
      despues={<>"MVP: cargar leads + definir pesos + ver ranking. Datos: lead, criterio, score. <b>Después</b>: forecast. <b>Más tarde</b>: integración al CRM."<br /><br />Una cosa a la vez, priorizada. La IA construye algo que funciona.</>}
    />
    <div className="mt-5"><Cita>La spec no es burocracia: es lo que separa "la IA me hizo un quilombo" de "la IA me hizo lo que pedí".</Cita></div>
  </SlideClara>,

  <SlideClara titulo="La decisión que todos se olvidan: los estados">
    <DosCols
      izq={
        <>
          <div className="text-udesa-sigedu font-bold uppercase tracking-wide text-sm mb-3">No solo el "todo salió bien"</div>
          <Bullets items={[
            <><b>Vacío:</b> la pantalla cuando todavía no hay datos. ¿Qué ve el usuario el primer día?</>,
            <><b>Cargando:</b> mientras la app busca o guarda. ¿Spinner? ¿Skeleton?</>,
            <><b>Error:</b> falló algo. ¿Qué mensaje? ¿Puede reintentar?</>,
            <><b>Sin permiso:</b> entró alguien que no debería. ¿Qué pasa?</>,
          ]} />
        </>
      }
      der={<Ejemplo titulo="Por qué importa decidirlo ANTES">La IA por default te construye solo el camino feliz. Si no le decís los estados, tu MVP se rompe feo el primer día real — pantalla en blanco, errores sin mensaje. Decidirlos en el brief es 2 minutos; descubrirlos en producción es un papelón.</Ejemplo>}
    />
  </SlideClara>,

  <SlideClara titulo="Cómo la IA te ayuda a decidir mejor (si la dejás)">
    <AntesDespues
      tituloAntes="Le pedís que te dé la razón"
      tituloDespues="Le pedís que te cuestione"
      antes={<><span className="font-mono text-[13px]">"Mi idea es genial, armame el plan."</span><br /><br />La IA es complaciente: te dice que sí, infla el scope, y no te avisa de los riesgos. Salís con un plan lindo y frágil.</>}
      despues={<><span className="font-mono text-[13px]">"Antes de planear: ¿qué de mi idea es ambiguo o riesgoso? ¿Qué feature estoy metiendo que NO debería ir en un MVP?"</span><br /><br />La IA actúa como un PM crítico. Recortás antes de construir, no después.</>}
    />
    <div className="mt-5"><Cita>El valor no es que la IA diga que sí. Es que la uses para encontrar los agujeros de tu idea antes de gastar tiempo construyéndola.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="El scope: qué entra y qué NO (lo más difícil)">
    <p className="t-body-lg text-ink-soft mb-5">Decidir qué features van es fácil. Lo difícil — y lo más valioso — es decidir <b className="text-ink">qué dejás afuera</b>. Un MVP no es tu producto chiquito: es la <b className="text-ink">prueba más rápida</b> de tu idea más riesgosa.</p>
    <DosCols
      izq={
        <div className="rounded-xl border border-rule bg-[#fdf2f2] p-5" style={{ borderLeft: '4px solid #d64545' }}>
          <div className="t-label font-bold uppercase text-[#b13434] mb-2">La trampa de la feature linda</div>
          <div className="t-body text-ink">La feature que más te entusiasma suele ser la que <b>NO va</b> en la v1. Te enamorás de ella y le metés semanas… antes de saber si alguien quiere el producto.</div>
        </div>
      }
      der={
        <div className="rounded-xl border border-rule bg-[#f0f8f3] p-5" style={{ borderLeft: '4px solid #2f9e6b' }}>
          <div className="t-label font-bold uppercase text-[#1f7a51] mb-2">El test para recortar</div>
          <div className="t-body text-ink">Por cada feature, preguntá: <b>"¿sin esto puedo validar mi hipótesis?"</b> Si la respuesta es sí, va a la lista de DESPUÉS. Sé brutal.</div>
        </div>
      }
    />
  </SlideClara>,

  <SlideClara titulo="Cómo achicar una idea grande (con la IA)">
    <Pasos pasos={[
      { t: 'Escribí TODO lo que se te ocurre', d: 'sin filtro. Volcá la idea completa, con todas las features que imaginás.' },
      { t: 'Pedile a la IA que la ataque', d: '"De todo esto, ¿qué es lo MÍNIMO para validar la idea? ¿Qué sacarías?"' },
      { t: 'Quedate con 3-5 features core', d: 'si te quedan más de 5, todavía no recortaste suficiente. Volvé al paso 2.' },
      { t: 'El resto va a "DESPUÉS"', d: 'no lo borrás: lo guardás en el CLAUDE.md como "no va en v1". Existe, pero después.' },
    ]} />
    <div className="mt-4"><Cita>"If you are not embarrassed by the first version of your product, you've launched too late." — <b>Reid Hoffman</b>, fundador de LinkedIn.</Cita></div>
  </SlideClara>,

  <Seccion kicker="Bloque 3b" titulo="El CLAUDE.md: tu proyecto le habla a la IA" />,

  <SlideClara titulo="Dónde viven esas 8 decisiones: el CLAUDE.md">
    <DosCols
      izq={
        <BulletsIcono items={[
          { icon: FileCode2, children: <>Un solo archivo de texto en tu proyecto. La IA lo <b>lee en cada sesión</b>, sola.</> },
          { icon: ListChecks, children: <>Arriba: <b>nuestro método</b> (reglas fijas). Abajo: <b>tu brief</b> (las 8 decisiones).</> },
          { icon: ShieldCheck, children: <>Volvés tres días después y la IA <b>ya sabe</b> tu stack y qué decidiste. No reinventa.</> },
        ]} />
      }
      der={
        <Ejemplo titulo="La idea robada a las empresas en serio">
          Las fintech y empresas que usan IA para programar tienen repositorios enteros de contexto para que sus agentes no inventen. Vos hacés la versión MVP: <b>un archivo</b>. El 20% que da el 80% del valor.
        </Ejemplo>
      }
    />
  </SlideClara>,

  <SlideClara titulo="Cómo se ve el CLAUDE.md (las dos partes)">
    <DosCols
      izq={
        <>
          <div className="text-[12px] font-bold tracking-widest uppercase text-udesa-sigedu mb-2">Parte 1 — El método (fija)</div>
          <Codigo>{`# Cómo trabajamos
1. Primero entender, después escribir.
   Si algo no está claro, preguntá.
2. En fases. No avances sin mi OK.
3. Local primero. Producción al final.
4. Nunca claves en el código.
5. Mobile-first. Código que no se repita.
6. Si en 3 intentos no sale, cambiá
   de enfoque.`}</Codigo>
        </>
      }
      der={
        <>
          <div className="text-[12px] font-bold tracking-widest uppercase text-udesa-sigedu mb-2">Parte 2 — Tu proyecto (lo llenás vos)</div>
          <Codigo>{`# Mi proyecto
Problema: [...]
Usuario: [...]
Features core: [...]
NO va en v1: [...]
Pantallas y estados: [...]
Datos: [...]
Stack: Next.js + Supabase + Vercel
Riesgos: [...]
Criterios de éxito: [...]`}</Codigo>
        </>
      }
    />
    <div className="mt-4"><Ejemplo titulo="Te lo damos hecho">El CLAUDE.md con la Parte 1 ya escrita está en el Material del curso. Hoy completás la Parte 2 con tu idea.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="Un brief real, completo (así se ve bien hecho)">
    <DosCols
      izq={
        <Codigo>{`Problema: las peluquerías pierden turnos
  por WhatsApp desorganizado.
Usuario: dueño de una peluquería chica.
Job: que el cliente reserve solo, sin
  que yo conteste mensajes todo el día.

Features core:
  - el cliente ve horarios libres y reserva
  - el dueño ve su agenda del día
  - cancelar / reprogramar un turno
NO va en v1: pagos, recordatorios SMS,
  varias sucursales, programa de puntos.`}</Codigo>
      }
      der={
        <Codigo>{`Pantallas: home con horarios, mis turnos,
  panel del dueño.
Estados: sin turnos aún, horario lleno,
  reserva fallida, turno cancelado.
Datos: turno (fecha, hora, cliente,
  estado), servicio, dueño.
Stack: Next.js + Supabase + Vercel.
Riesgo: la lógica de horarios ocupados
  → plan B: bloquear franjas a mano.
Éxito: 10 turnos reservados sin que el
  dueño toque el teléfono.`}</Codigo>
      }
    />
    <div className="mt-4"><Cita>Mirá lo concreto que es. Cualquiera — o cualquier IA — puede construir esto sin preguntarte nada. Eso es un brief que sirve.</Cita></div>
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

  // --- Pieza interactiva: sale la idea al azar que el profe va a construir en vivo ---
  <SlideOscura><GeneradorIdeas /></SlideOscura>,

  <Break minutos={15} etiqueta="Break 1 de 2" />,

  <DemoEnVivo
    titulo="Les muestro: completo el brief de la idea que salió, en vivo"
    prompt={`Quiero construir el MVP que salió en el generador.

Trabajamos con The MND130 Way: primero decidimos,
después construimos. Antes de escribir código,
ayudame a completar el brief en mi CLAUDE.md
(problema, usuario, scope, pantallas y estados,
datos, stack, riesgos y criterios de éxito).
Hacelo de a una pregunta, no todo junto.`}
    mirar={<>Tomo <b>la idea que acaba de salir al azar</b> y armo su brief en vivo: cómo Claude me <b>cuestiona</b> cada decisión, cómo separo <b>lo core de lo que NO va</b>, y cómo queda escrito en el CLAUDE.md antes de tocar código. Después lo hacen ustedes con la suya.</>}
  />,

  <Seccion kicker="Bloque 5 · Manos a la obra" titulo="Completá el brief de TU MVP" />,

  <ManosALaObra
    minutos="30 min"
    titulo="Arrancá tu CLAUDE.md: las primeras decisiones"
    objetivo={<>Primera mitad: idea + las primeras decisiones del brief. Después paramos y seguimos.</>}
    pasos={[
      { t: 'Tomá tu idea (5 min)', d: 'la que trajiste, o sorteá una en el generador. No le des más vueltas.' },
      { t: 'Abrí el CLAUDE.md del material', d: 'ya tiene el método arriba. Solo llenás la Parte 2.' },
      { t: 'Problema, usuario y scope (25 min)', d: 'las primeras decisiones, con Claude. Que te cuestione, no que te dé la razón.' },
    ]}
  />,

  <Break minutos={15} etiqueta="Break 2 de 2" />,

  <ManosALaObra
    minutos="35 min"
    titulo="Terminá tu CLAUDE.md: cerrá el brief"
    objetivo={<>Segunda mitad: completás las decisiones que faltan. Salís con el brief terminado — es el entregable de hoy.</>}
    pasos={[
      { t: 'Pantallas, estados y datos (15 min)', d: 'no solo el happy path: vacío, error, cargando. Y qué guardás.' },
      { t: 'Stack, riesgos y criterios de éxito (15 min)', d: 'con qué lo construís, qué puede salir mal, cómo sabés que validó algo.' },
      { t: 'Cerrá scope (5 min)', d: 'dejá explícito qué NO entra en la v1. Si lleva IA adentro, anotalo.' },
    ]}
  />,

  <Checkpoint
    titulo="Antes de cerrar, chequeá tu brief"
    items={[
      'Tu CLAUDE.md con las 8 decisiones completas (problema → criterios de éxito).',
      'Stack elegido y justificado.',
      'Definido si tu MVP lleva IA adentro y para qué.',
      'Lo más riesgoso identificado (el "qué puede salir mal").',
    ]}
    mostrar={<><b>Ronda rápida:</b> cada uno comparte pantalla y presenta su MVP en 1 minuto. Si a alguien le falta una decisión, la cerramos entre todos ahora — así nadie se va sin el brief.</>}
  />,

  <SlideClara titulo="El recorrido completo del curso" kicker="Para que veas el hilo">
    <Cronograma bloques={[
      { dur: 'Clase 1', t: 'Decidir: el método, las 8 decisiones y tu CLAUDE.md. ← estás acá' },
      { dur: 'Clase 2', t: 'Construir: setup, prompting y build en fases, en local.' },
      { dur: 'Clase 3', t: 'Sumar IA: chatbots y agentes adentro de tu producto.' },
      { dur: 'Clase 4', t: 'Revisar y publicar: calidad, deploy a producción y presentación.' },
    ]} />
    <div className="mt-7"><Cita>Cada clase es una fase del método y deja un entregable. Salís con algo real en la mano, no con apuntes.</Cita></div>
  </SlideClara>,

  <Seccion kicker="Cierre" titulo="Ya decidiste. Tenés tu CLAUDE.md. La próxima lo construimos." />,
]
