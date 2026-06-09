import { Portada, Seccion, SlideClara, Bullets, BulletsIcono, Tarjetas, Checklist, DosCols, Cita, Glosario, Ejemplo, PromptRespuesta, AntesDespues, Pasos, Fases, DemoEnVivo, Break, ManosALaObra, Checkpoint } from '../components/Slides'
import { Bot, FileText, MessageSquare, Wrench, Sparkles, ShieldAlert } from 'lucide-react'

export const clase3 = [
  <Portada
    titulo="Sumar IA: chatbots y agentes"
    subtitulo="Clase 3 · MND130"
    profes={['Damián Sztarkman', 'Fermín Rodríguez Del Castillo']}
  />,

  <SlideClara titulo="Fase 3 del método: Sumar IA" kicker="Acá estamos">
    <Fases activa={3} />
    <div className="mt-7">
      <Ejemplo titulo="La clase más de moda — y más simple de lo que parece">
        Hoy le metemos IA <b>adentro</b> del producto: un asistente, un agente que hace cosas, un bot que lee tus documentos. Vas a ver que, técnicamente, es tu app + una llamada a un modelo.
      </Ejemplo>
    </div>
  </SlideClara>,

  <SlideClara titulo="Dos formas de usar IA (no las confundas)">
    <AntesDespues
      tituloAntes="IA como herramienta"
      tituloDespues="IA dentro del producto"
      antes={<><b>Para construir</b> el MVP.<br />Claude Code y Cursor escriben el código, explican errores, refactorean.<br /><br />Es lo que usás <b>vos</b>, el constructor. (Las clases 1, 2 y 4.)</>}
      despues={<><b>Como feature</b> del MVP.<br />Tu app llama a un modelo para responder, clasificar, resumir o redactar.<br /><br />Es lo que usa <b>tu cliente</b>. (La clase de hoy.)</>}
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

  <SlideClara titulo="MCP: enchufar herramientas que ya existen" kicker="Esto ya lo hiciste en la Clase 2">
    <DosCols
      izq={<>
        Vos ya conectaste <b>GitHub y Supabase</b> a Claude Code en la Clase 2. Eso <b>es</b> tool use: le diste herramientas reales y ahora las usa por vos.<br /><br />
        <b>MCP</b> es el "enchufe universal" que hace esa conexión. Cada herramienta publica su MCP <b>una vez</b>, y cualquier IA que lo soporte la puede usar. No hay que programar la integración.
      </>}
      der={<Glosario items={[
        { t: 'Chatbot', d: 'te responde.' },
        { t: 'Tool use', d: 'usa herramientas que vos le declarás en tu app.' },
        { t: 'MCP', d: 'la herramienta ya viene "lista para enchufar". La conectás, no la programás.' },
      ]} />}
    />
    <div className="mt-5"><Cita>El que escribe el MCP es el dueño de la herramienta (GitHub, Supabase…), no Anthropic. Por eso hay miles: cada app lo implementa una vez y todas las IAs lo aprovechan.</Cita></div>
  </SlideClara>,

  <DemoEnVivo
    titulo="Conecto un MCP y le pido algo, en vivo"
    prompt={`Conectá GitHub a Claude Code y, cuando esté
listo, creá un repositorio nuevo llamado
"mi-mvp-demo" y subí un README que diga
de qué se trata mi proyecto.`}
    mirar={<>Que <b>no abro la terminal a programar</b>: pego una línea, autorizo en el navegador, y después le hablo en español. Si te quedó pendiente de la Clase 2, los pasos exactos están en la <b>Guía de GitHub</b> del material.</>}
  />,

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

  <SlideClara titulo="El demo de hoy: un bot que se sabe este curso">
    <DosCols
      izq={
        <Bullets items={[
          <><b>Qué hace:</b> responde preguntas sobre el MND130 (stacks, el método, el setup).</>,
          <><b>De dónde saca la info:</b> le pasamos el <b>material del curso</b> como contexto.</>,
          <><b>El truco para confiar:</b> lo conocen, así que si inventa, <b>se nota al toque</b>.</>,
        ]} />
      }
      der={<Ejemplo titulo="Por qué este ejemplo">Un bot sobre un tema inventado no se puede verificar: nadie sabe si miente. Uno sobre algo que ustedes conocen — este curso — es el banco de pruebas perfecto para ver cuándo la IA acierta y cuándo alucina.</Ejemplo>}
    />
  </SlideClara>,

  <DemoEnVivo
    titulo="Les muestro: armo un bot que responde sobre ESTE curso"
    prompt={`En mi app Next.js, agregá un chatbot que
responda preguntas sobre este curso (MND130).

Te paso el contenido del curso (el cheatsheet,
el método, los stacks) como contexto en el
system prompt. Que responda SOLO con eso, y si
no está en el material, que diga que no lo sabe.

Usá una variable de entorno para la API key.
Mostrá la respuesta en una pantalla de chat, y
arrancá por la versión más simple.`}
    mirar={<>Le pregunto en vivo "<b>¿qué stack usamos?</b>" o "<b>¿qué es el CLAUDE.md?</b>" y responde con el material del curso. Ustedes saben si está bien o si <b>alucina</b> — por eso elegimos un tema que conocen. Es tu app + una llamada a un modelo, nada más.</>}
  />,

  <Break minutos={15} etiqueta="Break 1 de 2" />,

  <ManosALaObra
    minutos="40 min"
    titulo="Sumá tu primer chatbot, en local"
    objetivo={<>Primera mitad: tu feature de IA respondiendo en local. Después paramos y la afinamos.</>}
    pasos={[
      { t: 'Decidí qué bot querés', d: 'chatbot simple, agente con herramientas, o asistente sobre documentos.' },
      { t: 'Conseguí tu API key', d: 'de Claude o OpenAI, y guardala en variables de entorno.' },
      { t: 'Pedíselo a la IA con contexto', d: 'apoyado en tus docs (brief y fases). Empezá por la versión más simple.' },
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
    minutos="35 min"
    titulo="Afiná tu bot y probalo a fondo"
    objetivo={<>Segunda mitad: mejorás el system prompt, agregás lo que falte y verificás que no inventa.</>}
    pasos={[
      { t: 'Ajustá el system prompt', d: 'definí bien qué hace, cómo habla y qué NO debe hacer.' },
      { t: 'Sumá lo que tu bot necesite', d: 'una herramienta (agente) o tus documentos (RAG), si aplica.' },
      { t: 'Probalo en local', d: 'verificá que responde con sentido y, si usa datos, que cite la fuente y no invente.' },
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
  </SlideClara>,

  <SlideClara titulo="¿Cuánto sale tener IA en tu producto?">
    <DosCols
      izq={
        <Glosario items={[
          { t: 'se cobra por uso', d: 'pagás por cada pregunta-respuesta, no una mensualidad fija.' },
          { t: 'precio por token', d: 'un token es ~3/4 de una palabra. Una charla típica cuesta fracciones de centavo.' },
          { t: 'modelos baratos', d: 'para tareas simples (clasificar, responder corto) hay modelos chicos que cuestan mucho menos.' },
        ]} />
      }
      der={<Ejemplo titulo="Para un MVP, es muy poco">Validar tu idea con decenas o cientos de usuarios probando el chatbot cuesta pocos dólares. El costo recién importa cuando tenés volumen real — y para entonces ya validaste que vale la pena.</Ejemplo>}
    />
  </SlideClara>,

  <SlideClara titulo="Tu entregable de hoy" kicker="Cierre">
    <Checklist items={[
      'Una feature de IA andando en local (chatbot, agente o RAG).',
      'API key en variables de entorno.',
      'Decidido en docs/brief.md qué hace y qué no hace el bot.',
      'Probado que responde con sentido y sin inventar.',
    ]} />
  </SlideClara>,

  <Seccion kicker="Cierre" titulo="Ya tenés IA adentro. La próxima: que esté bien hecho y a producción." />,
]
