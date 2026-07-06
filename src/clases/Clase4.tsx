import { Portada, Seccion, SlideClara, Bullets, BulletsIcono, Tarjetas, Checklist, DosCols, Cita, Glosario, Ejemplo, PromptRespuesta, AntesDespues, Pasos, Fases, DemoEnVivo, Break, ManosALaObra, Checkpoint } from '../components/Slides'
import { Bot, FileText, MessageSquare, Wrench, Sparkles, ShieldAlert, Users, GitBranch, Presentation, GraduationCap } from 'lucide-react'

export const clase4 = [
  <Portada
    titulo="Sumar IA: chatbots y agentes"
    subtitulo="Clase 4 · MND130"
    profes={['Damián Sztarkman', 'Fermín Rodríguez Del Castillo']}
  />,

  <SlideClara titulo="Fase 4 del método: Sumar IA" kicker="Acá estamos">
    <Fases activa={4} />
    <div className="mt-7">
      <Ejemplo titulo="La última fase — y la más de moda">
        Tu MVP ya está <b>online y con datos reales</b>. Hoy, si tu producto lo pide, le metemos IA <b>adentro</b>: un asistente, un agente que hace cosas, un bot que lee tus documentos. Vas a ver que, técnicamente, es tu app + una llamada a un modelo.
      </Ejemplo>
    </div>
  </SlideClara>,

  <SlideClara titulo="Dos formas de usar IA (no las confundas)">
    <AntesDespues
      tituloAntes="IA como herramienta"
      tituloDespues="IA dentro del producto"
      antes={<><b>Para construir</b> el MVP.<br />Claude Code y Cursor escriben el código, explican errores, refactorean.<br /><br />Es lo que usaste <b>vos</b>, el constructor, en las clases 1, 2 y 3.</>}
      despues={<><b>Como feature</b> del MVP.<br />Tu app llama a un modelo para responder, clasificar, resumir o redactar.<br /><br />Es lo que usa <b>tu cliente</b>. La clase de hoy.</>}
    />
  </SlideClara>,

  <Seccion kicker="Bloque 1" titulo="El chatbot: la versión más simple" />,

  <SlideClara titulo="Una feature de IA es, técnicamente, esto">
    <DosCols
      izq={
        <>
          <div className="inline-flex items-center gap-2 text-udesa-blue font-bold mb-3"><Bot size={20} /> Los 3 pasos</div>
          <Pasos pasos={[
            { t: 'Tu app arma un texto', d: 'con lo que escribió el usuario + una instrucción tuya (el system prompt).' },
            { t: 'Lo manda al modelo', d: 'por la API de Claude o GPT, con tu API key.' },
            { t: 'Muestra la respuesta', d: 'que devuelve el modelo, en tu pantalla.' },
          ]} />
        </>
      }
      der={
        <Glosario items={[
          { t: 'API key', d: 'tu credencial para usar el modelo. Va en variables de entorno, NUNCA en el código.' },
          { t: 'system prompt', d: 'la instrucción fija que define cómo se comporta tu bot.' },
          { t: 'prompt', d: 'lo que tu app le manda al modelo (no lo que vos le decís a Cursor).' },
          { t: 'token', d: 'la unidad que se cobra. Más texto = más tokens = más costo.' },
        ]} />
      }
    />
  </SlideClara>,

  <SlideClara titulo="Ejemplo: un asistente que responde sobre tu negocio">
    <PromptRespuesta
      prompt={`En mi app Next.js, agregá un endpoint que
reciba la pregunta del usuario, le sume el
contexto de mis productos (de Supabase), y
llame a la API de Claude para responder.
Mostrá la respuesta en una pantalla de chat.`}
      respuesta={<>La IA te arma el endpoint, la llamada al modelo y la pantalla de chat. Vos pegás tu API key en las variables de entorno y ya tenés un asistente sobre tus propios datos.</>}
      nota={<>Esto es un "chatbot" en su versión más simple. No hay magia: es tu app + una llamada a un modelo. Ahora le damos poderes.</>}
    />
  </SlideClara>,

  <SlideClara titulo="El system prompt: la personalidad de tu bot">
    <DosCols
      izq={
        <>
          <div className="inline-flex items-center gap-2 text-udesa-blue font-bold mb-3"><MessageSquare size={20} /> Qué definís ahí</div>
          <Bullets items={[
            <><b>Quién es:</b> "Sos el asistente de [tu empresa], experto en [tema]."</>,
            <><b>Cómo habla:</b> formal, cercano, breve, con emojis o sin.</>,
            <><b>Qué NO hace:</b> "No des consejo legal. No inventes precios."</>,
            <><b>Qué hace si no sabe:</b> "Si no tenés el dato, decí que no sabés."</>,
          ]} />
        </>
      }
      der={<Ejemplo titulo="Es donde está tu criterio">El mismo modelo, con dos system prompts distintos, es dos productos distintos. Acá no programás: escribís en español cómo querés que se comporte. Ese es tu trabajo, y es donde un MVP se siente profesional o amateur.</Ejemplo>}
    />
  </SlideClara>,

  <SlideClara titulo="Casos reales: chatbots simples que ya aportan valor">
    <Tarjetas items={[
      { icon: MessageSquare, t: 'Atención 24/7', d: 'Responde las dudas frecuentes de tus clientes a cualquier hora, sin que esté nadie.' },
      { icon: FileText, t: 'Onboarding interno', d: 'Un empleado nuevo le pregunta al bot en vez de interrumpir a un compañero.' },
      { icon: Bot, t: 'Pre-calificación', d: 'Hace 3 preguntas a un lead y lo clasifica antes de que lo vea un vendedor.' },
    ]} />
    <div className="mt-5"><Cita>No hace falta un agente complejo para aportar valor. Un chatbot bien apuntado a UN problema concreto ya cambia la experiencia.</Cita></div>
  </SlideClara>,

  <Seccion kicker="Bloque 2" titulo="De responder a hacer: agentes" />,

  <SlideClara titulo="Qué es un agente (y en qué se diferencia de un chatbot)">
    <AntesDespues
      tituloAntes="Un chatbot"
      tituloDespues="Un agente"
      antes={<>Recibe una pregunta y <b>responde texto</b>. Nada más.<br /><br />"¿Cuánto cuesta el plan Pro?" → te tira la respuesta.</>}
      despues={<>Puede <b>decidir y hacer cosas</b>: buscar en tu base, guardar un registro, mandar un mail, consultar un documento.<br /><br />"Agendá una demo con este lead" → busca el lead, crea el evento, confirma.</>}
    />
    <div className="mt-5"><Ejemplo titulo="La idea clave">Un agente es un modelo + un conjunto de <b>herramientas</b> (acciones que puede ejecutar). El modelo <b>elige cuál usar</b> según lo que le pediste. Eso es "tool use".</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="Cómo funciona el “tool use”, sin tecnicismos">
    <Pasos pasos={[
      { t: 'Vos le declarás las herramientas', d: 'una lista de acciones: "buscar cliente", "crear turno", "consultar documento". Cada una con qué hace y qué datos necesita.' },
      { t: 'El usuario pide algo', d: 'en lenguaje natural: "reservá para el martes a las 10".' },
      { t: 'El modelo elige la herramienta', d: 'decide que tiene que usar "crear turno", y con qué datos.' },
      { t: 'Tu app la ejecuta y devuelve el resultado', d: 'el modelo confirma al usuario con lenguaje natural.' },
    ]} />
    <div className="mt-5"><Cita>Vos no programás la lógica de decisión. La pone el modelo. Vos sólo definís qué herramientas existen y qué hace cada una.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="Pedirle a la IA que construya un agente">
    <PromptRespuesta
      prompt={`En mi app Next.js + Supabase, quiero un
agente que ayude a gestionar turnos.

Definí estas herramientas para el modelo:
- buscar_turnos(fecha)
- crear_turno(fecha, hora, paciente)
- cancelar_turno(id)

Usá tool use de la API de Claude: el modelo
elige la herramienta según lo que pide el
usuario. Mostrame el flujo completo.`}
      respuesta={<>La IA te arma las 3 funciones contra Supabase, el endpoint que conecta el modelo con esas herramientas, y el chat. El usuario escribe "cancelá mi turno del jueves" y el agente lo hace.</>}
      nota={<>No necesitás la teoría de agentes. Necesitás saber describir bien las herramientas. Ese es tu trabajo.</>}
    />
  </SlideClara>,

  <SlideClara titulo="MCP: herramientas listas para enchufar">
    <DosCols
      izq={<>
        Cuando declarás las herramientas vos (tool use), las programás en tu app. Pero muchas ya vienen <b>listas para enchufar</b>: eso es <b>MCP</b>.<br /><br />
        El dueño de cada herramienta (un CRM, una base, un calendario) publica su MCP <b>una vez</b>, y cualquier IA que lo soporte lo usa. No programás la integración: la conectás. Por eso ya hay miles.
      </>}
      der={<Glosario items={[
        { t: 'Chatbot', d: 'te responde.' },
        { t: 'Tool use', d: 'usa herramientas que vos le declarás en tu app.' },
        { t: 'MCP', d: 'la herramienta ya viene "lista para enchufar". La conectás, no la programás.' },
      ]} />}
    />
    <div className="mt-5"><Cita>Para tu agente, MCP significa que muchas integraciones que pensabas programar ya están hechas: las enchufás y listo. Buscás "MCP de [la herramienta]" y suele existir.</Cita></div>
  </SlideClara>,

  <Seccion kicker="Bloque 3" titulo="Que la IA lea tus documentos (RAG)" />,

  <SlideClara titulo="El problema: tu info está en PDFs, el modelo no la conoce">
    <DosCols
      izq={
        <>
          <div className="inline-flex items-center gap-2 text-udesa-blue font-bold mb-3"><FileText size={20} /> La situación</div>
          <Bullets items={[
            <>Tenés manuales, contratos o catálogos en <b>PDF</b>.</>,
            <>Querés que el asistente responda <b>usando esa info</b>, no inventando.</>,
            <>El modelo no vio tus documentos: hay que <b>dárselos</b>.</>,
          ]} />
        </>
      }
      der={<Ejemplo titulo="Esto se llama RAG">Retrieval Augmented Generation. Suena complejo, pero es: <b>buscar</b> el pedazo relevante de tus documentos y <b>pasárselo</b> al modelo junto con la pregunta. Responde con tu info.</Ejemplo>}
    />
  </SlideClara>,

  <SlideClara titulo="RAG en 3 pasos (el flujo real)">
    <Pasos pasos={[
      { t: 'Extraer el texto del PDF', d: 'una librería lo lee y saca el texto plano. La IA te la conecta.' },
      { t: 'Guardarlo troceado en Supabase', d: 'partís el texto en pedazos y los guardás con pgvector (búsqueda por significado, no por palabra exacta).' },
      { t: 'Al preguntar, buscás los pedazos relevantes', d: 'y se los pasás al modelo con la pregunta. Responde usando solo eso, citando la fuente.' },
    ]} />
    <div className="mt-5"><Ejemplo titulo="Dato importante">pgvector viene <b>gratis</b> en Supabase (free tier). No pagás nada extra para tener búsqueda semántica sobre tus documentos.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="Pedirle a la IA que tu bot lea tus documentos">
    <PromptRespuesta
      prompt={`Quiero que mi bot responda usando mis
documentos PDF. Armá el flujo RAG:

- Extraé el texto de los PDFs de docs/manuales.
- Guardalo troceado en Supabase con pgvector.
- Al recibir una pregunta, buscá los pedazos
  más relevantes y pasáselos al modelo junto
  con la pregunta.

Que responda SOLO con eso y cite de qué
documento salió cada cosa.`}
      respuesta={<>La IA conecta la librería de PDF, crea la tabla con pgvector y arma la búsqueda. Vos no programás nada de eso: decidiste qué documentos entran y que cite la fuente.</>}
      nota={<>¿Cuándo lo necesitás? Cuando tus datos NO entran en el prompt (cientos de páginas). Si tu info entra cómoda — como las canchas del demo — no hace falta RAG: se la pasás directo.</>}
    />
  </SlideClara>,

  <SlideClara titulo="Juntando todo: un agente que también lee documentos">
    <Ejemplo titulo="El combo completo">
      "Buscar en mis documentos" es <b>una herramienta más</b> del agente. Un agente de soporte puede: buscar el ticket del cliente (herramienta 1), consultar el manual en PDF (herramienta 2 = RAG), y redactar la respuesta (el modelo). Las piezas de hoy se combinan.
    </Ejemplo>
    <div className="mt-6">
      <Cita>Esto es exactamente lo que muchos vinieron a construir: asistentes y agentes que trabajan con la información real de su negocio.</Cita>
    </div>
  </SlideClara>,

  <Seccion kicker="Bloque 4 · Manos a la obra" titulo="Metele IA a tu MVP" />,

  <SlideClara titulo="Antes de codear: decidí (también acá aplica el método)">
    <DosCols
      izq={
        <BulletsIcono items={[
          { icon: MessageSquare, children: <><b>Qué hace</b> tu bot, en una frase. Y qué <b>NO</b> hace.</> },
          { icon: Wrench, children: <>¿Es un <b>chatbot</b> (responde) o un <b>agente</b> (hace cosas)? ¿Qué herramientas?</> },
          { icon: FileText, children: <>¿Necesita <b>tus documentos</b> (RAG) o le alcanza con el system prompt?</> },
        ]} />
      }
      der={<Ejemplo titulo="Anotalo en tu brief">La feature de IA es una decisión más del brief. Definila en <b>docs/brief.md</b> y la IA la construye coherente con el resto de tu producto.</Ejemplo>}
    />
  </SlideClara>,

  <SlideClara titulo="El demo de hoy: CanchApp responde dónde hay cancha libre">
    <DosCols
      izq={
        <Bullets items={[
          <><b>Qué hace:</b> le preguntás "¿hay cancha libre hoy a las 19?" y responde en lenguaje natural.</>,
          <><b>De dónde saca la info:</b> de la <b>misma base</b> que ya usa la grilla (Supabase). Nada nuevo.</>,
          <><b>El truco para confiar:</b> la <b>grilla es la verdad</b>. Comparamos la respuesta del bot contra la grilla, en vivo.</>,
        ]} />
      }
      der={<Ejemplo titulo="Por qué este ejemplo">Un bot sobre un tema que no podés verificar no te dice nada: no sabés si miente. Este responde sobre datos que la app ya muestra — si acierta o alucina, se ve al toque contra la grilla.</Ejemplo>}
    />
  </SlideClara>,

  <DemoEnVivo
    titulo="Les muestro: CanchApp con asistente, en vivo"
    prompt={`Agregá un chatbot a CanchApp: el usuario
pregunta por canchas libres en lenguaje
natural.

El endpoint consulta canchas y reservas en
Supabase, arma la lista de turnos LIBRES por
fecha y hora, y se la pasa a Claude junto con
la pregunta. El modelo solo redacta: responde
SOLO con esos datos, no inventa, y no reserva
(deriva a la grilla).

La API key va en el .env, solo en el server.`}
    mirar={<>Pregunto "<b>¿hay cancha libre hoy a las 19?</b>" y comparamos contra la grilla. Después: algo fuera de tema ("¿pádel en Rosario?") → dice que no sabe; y "reservámela" → no reserva, te manda a la app. Ojo al detalle del prompt: <b>los turnos libres los calcula el código</b> y el modelo solo redacta — si le pedís al modelo que deduzca, se equivoca (nos pasó armándolo).</>}
  />,

  <Break minutos={15} etiqueta="Break 1 de 2" />,

  <ManosALaObra
    minutos="40 min"
    titulo="Sumá tu primer chatbot, en local"
    objetivo={<>Primera mitad: tu feature de IA respondiendo en local. Después paramos y la afinamos.</>}
    pasos={[
      { t: 'Decidí qué bot querés', d: 'qué hace, qué NO hace y con qué datos responde. Anotalo en tu brief.' },
      { t: 'Conseguí tu API key', d: 'de Anthropic, con la guía del material: cuenta, crédito y clave al .env.' },
      { t: 'Seguí el paso a paso del material', d: '"Paso a paso — Chatbot": el prompt de la versión más simple, adaptado a tu app.' },
    ]}
  />,

  <Checkpoint
    titulo="¿Tu bot ya responde?"
    items={[
      'Tenés una pantalla de chat o una feature de IA en tu app.',
      'La API key está en variables de entorno, no en el código.',
      'Probaste que responde con sentido (y no alucina).',
    ]}
    mostrar={<>Un par de voluntarios comparten pantalla y le hacen una pregunta a su bot en vivo. Vemos qué funciona y qué se puede afinar.</>}
  />,

  <Break minutos={15} etiqueta="Break 2 de 2" />,

  <ManosALaObra
    minutos="30 min"
    titulo="Afiná tu bot y probalo a fondo"
    objetivo={<>Segunda mitad: mejorás el system prompt, agregás lo que falte y verificás que no inventa.</>}
    pasos={[
      { t: 'Probalo con respuestas que conocés', d: 'preguntas verificables contra tu app, una repregunta, y algo fuera de tema (no debe inventar).' },
      { t: 'Ajustá el system prompt', d: 'qué hace, cómo habla, qué NO debe hacer. Y recordá: lo que se calcula, en código.' },
      { t: 'Publicá', d: 'cargá la ANTHROPIC_API_KEY en Vercel (Settings → Environment Variables) y pedile a la IA que publique de nuevo.' },
    ]}
  />,

  <Seccion kicker="Bloque 5" titulo="Cuidados al meter IA en un producto" />,

  <SlideClara titulo="Cuándo NO usar IA (sí, a veces es de más)">
    <AntesDespues
      tituloAntes="Metiste IA porque suena cool"
      tituloDespues="Una solución simple alcanza"
      antes={<>"Un chatbot para que el usuario filtre productos."<br /><br />Caro, lento, puede alucinar… para algo que un <b>par de botones de filtro</b> resuelven mejor, más rápido y gratis.</>}
      despues={<>IA cuando el problema es <b>lenguaje, criterio o creatividad</b>: resumir, clasificar texto libre, responder preguntas abiertas.<br /><br />Para reglas claras (filtrar, ordenar, calcular): código común. Es más confiable.</>}
    />
    <div className="mt-5"><Cita>La pregunta no es "¿le puedo meter IA?". Es "¿este problema NECESITA IA?". Si un if/else o un formulario lo resuelve, ganó la opción aburrida.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="Tres cosas que no podés ignorar">
    <Tarjetas items={[
      { icon: ShieldAlert, t: 'Alucinaciones', d: 'El modelo puede inventar con seguridad. Si responde sobre datos, que cite la fuente. Verificá.' },
      { icon: Sparkles, t: 'Costo por token', d: 'Cada llamada cuesta. Mandar PDFs enteros en cada pregunta se paga. Por eso RAG manda solo el pedazo.' },
      { icon: Bot, t: 'Límites claros', d: 'Definí en el system prompt qué NO debe hacer (dar consejo legal, médico, prometer cosas).' },
    ]} />
    <div className="mt-5"><Ejemplo titulo="Para un MVP, el costo es muy poco">Se cobra por uso (no una mensualidad fija) y una charla típica cuesta fracciones de centavo. Validar tu idea con decenas o cientos de usuarios probando el bot cuesta pocos dólares. El costo recién importa con volumen real — y para entonces ya validaste.</Ejemplo></div>
  </SlideClara>,

  <Seccion kicker="Bloque 6" titulo="Cierre del curso" />,

  <SlideClara titulo="El recorrido que hiciste">
    <Fases />
    <div className="mt-7"><Cita>De una idea a un MVP online con IA adentro, en 4 clases. Decidiste, construiste, publicaste y le sumaste IA — vos, dirigiendo a la IA con método. Eso es lo que te llevás: no una app, sino saber repetirlo.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="Cuándo la IA deja de alcanzar (y está bien)">
    <Tarjetas items={[
      { icon: Users, t: 'Cuándo contratar un dev', d: 'Pagos reales, integraciones complejas, performance bajo carga, seguridad seria.' },
      { icon: ShieldAlert, t: 'Cuándo la IA no escala', d: 'Mucha lógica de negocio custom, equipos grandes, requisitos de compliance.' },
      { icon: GitBranch, t: 'Tu ventaja nueva', d: 'Ya hablás el idioma: sabés pedir, evaluar y dirigir a un dev. No te venden humo.' },
    ]} />
    <div className="mt-5"><Cita>Vercel y Supabase tienen free tiers que aguantan un MVP entero. Dominio ~15 USD/año. Podés validar una idea en producción gastando casi nada.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="Cómo presentás tu MVP (~4 min)">
    <DosCols
      izq={
        <>
          <div className="inline-flex items-center gap-2 text-udesa-sigedu font-bold uppercase tracking-wide text-sm mb-3"><Presentation size={18} /> La estructura</div>
          <Pasos pasos={[
            { t: 'El problema', d: 'qué dolor resolvés, en una frase.' },
            { t: 'Demo en vivo', d: 'abrís la URL pública y lo mostrás funcionando.' },
            { t: 'Qué aprendiste', d: 'lo que te sorprendió del proceso.' },
            { t: 'Qué sigue', d: 'el próximo paso si lo seguís.' },
          ]} />
        </>
      }
      der={
        <>
          <div className="inline-flex items-center gap-2 text-udesa-dark font-bold mb-3"><GraduationCap size={20} /> Te llevás del curso</div>
          <Checklist items={[
            'Un MVP real en producción, con URL pública.',
            'El método (The MND130 Way) para repetirlo solo.',
            'El CLAUDE.md, tus docs y el cheatsheet como referencia.',
            'Criterio para dirigir a la IA y saber cuándo necesitás un dev.',
          ]} />
        </>
      }
    />
  </SlideClara>,

  <SlideClara titulo="Para seguir después del curso">
    <Tarjetas items={[
      { icon: GraduationCap, t: 'Repetí el método', d: 'Tu próxima idea: sumá el CLAUDE.md, armá tus docs con las 8 decisiones, construí en fases. Ya sabés cómo.' },
      { icon: Users, t: 'La comunidad', d: 'El grupo del curso sigue activo. Mostrá lo que hacés, pedí ayuda cuando te trabes, aprendé de los demás.' },
      { icon: GitBranch, t: 'Subí un escalón', d: 'Cuando tu MVP valide, ahí pensás en escalar: un dev, más features, o profundizar lo técnico vos.' },
    ]} />
    <div className="mt-5"><Cita>Lo más valioso que te llevás no es la app: es saber que la próxima idea también la podés llevar a producción vos.</Cita></div>
  </SlideClara>,

  <Seccion kicker="Fin del curso" titulo="Tenés un producto online con IA y un método. Seguilo." />,
]
