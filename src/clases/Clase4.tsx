import { Portada, Seccion, SlideClara, Bullets, Tarjetas, Checklist, DosCols, Cita, Codigo, Glosario, Ejemplo, PromptRespuesta, AntesDespues, Pasos, Fases, DemoEnVivo, Break, ManosALaObra, Checkpoint } from '../components/Slides'
import { FolderTree, Copy, Smartphone, Shield, GitBranch, CheckCircle, Flag, BarChart3, AlertTriangle, Users, DollarSign, Presentation, GraduationCap } from 'lucide-react'

export const clase4 = [
  <Portada
    titulo="Revisar y publicar"
    subtitulo="Clase 4 · MND130"
    profes={['Damián Sztarkman', 'Fermín Rodríguez Del Castillo']}
  />,

  <SlideClara titulo="Fase 4 del método: Revisar y publicar" kicker="Acá estamos">
    <Fases activa={4} />
    <div className="mt-7">
      <Ejemplo titulo="Las dos últimas fases, juntas">
        Primero <b>revisás</b> que lo que construiste esté bien hecho y cumpla lo que decidiste en tu brief. Después <b>publicás</b>: el pasaje controlado de local a producción. Y presentás.
      </Ejemplo>
    </div>
  </SlideClara>,

  <Seccion kicker="Bloque 1" titulo="Revisar: de “funciona” a “está bien hecho”" />,

  <SlideClara titulo="La IA te da código que funciona. No siempre, bueno.">
    <DosCols
      izq={
        <Bullets items={[
          <>La IA te da código que <b>funciona</b>. No siempre te da código <b>bueno</b>.</>,
          <>Hoy revisás con <b>criterio</b> — sin ser ingeniero.</>,
          <>Y revisás contra una vara concreta: <b>tu CLAUDE.md</b>. ¿Cumple lo que decidiste?</>,
        ]} />
      }
      der={
        <Ejemplo titulo="Por qué importa para vos">
          Un MVP que funciona pero es un desastre por dentro se vuelve <b>imposible de mantener</b>: cada cambio rompe algo. El criterio técnico evita que tu producto se pudra a las dos semanas.
        </Ejemplo>
      }
    />
  </SlideClara>,

  <SlideClara titulo="Los 6 criterios que sí o sí tenés que conocer">
    <Tarjetas items={[
      { icon: FolderTree, t: 'Estructura', d: 'Carpetas claras = proyecto mantenible. Si todo está en un archivo gigante, está mal.' },
      { icon: Copy, t: 'DRY', d: '"Don\'t Repeat Yourself". Si el mismo código aparece copiado en 3 lados, un cambio implica 3 ediciones.' },
      { icon: Smartphone, t: 'Mobile-first', d: 'El 70%+ del tráfico es mobile. Si no lo pensaste desde el inicio, rehacés todo.' },
      { icon: Shield, t: 'Seguridad', d: 'Nunca claves en el código. Variables de entorno. Validar lo que el usuario carga.' },
      { icon: GitBranch, t: 'Git', d: 'Tu red de seguridad. Commiteás seguido y podés volver a una versión que funcionaba.' },
      { icon: CheckCircle, t: 'Testing mínimo', d: '"Funciona en mi máquina" no alcanza. Probá cada flujo crítico antes de mostrarlo.' },
    ]} />
  </SlideClara>,

  <SlideClara titulo="Revisar contra tu brief (no en abstracto)">
    <AntesDespues
      tituloAntes="Review genérico"
      tituloDespues="Review contra el CLAUDE.md"
      antes={<>"¿Está bien este código?"<br /><br />Vago. La IA te dice que sí casi siempre. No tenés con qué comparar.</>}
      despues={<>"Según los criterios de éxito y el scope de mi CLAUDE.md, ¿esto cumple? ¿Quedó algo del 'NO va en v1' que se coló?"<br /><br />Concreto. Revisás contra lo que vos decidiste, no contra un ideal.</>}
    />
  </SlideClara>,

  <SlideClara titulo="La checklist práctica (no hace falta leer cada línea)">
    <Pasos pasos={[
      { t: '¿Se entiende qué hace?', d: 'si ni vos ni la IA pueden explicarlo simple, es una bandera roja.' },
      { t: '¿Hace lo que pedí?', d: 'probalo de verdad, no asumas que sí porque compiló.' },
      { t: '¿No tiene datos hardcodeados?', d: 'nombres, precios o claves "pegados" a mano que deberían ser variables.' },
      { t: '¿Maneja errores?', d: '¿qué pasa si el usuario deja un campo vacío o se cae internet?' },
      { t: '¿Funciona en mobile?', d: 'abrilo en el celular o achicá la ventana. La mayoría lo va a usar así.' },
    ]} />
  </SlideClara>,

  <SlideClara titulo="Red flags y cómo se le pide a la IA que mejore">
    <DosCols
      izq={
        <>
          <div className="inline-flex items-center gap-2 text-udesa-blue font-bold mb-3"><Flag size={20} /> Qué mirar</div>
          <Bullets items={[
            <>Archivos de <b>más de 300 líneas</b>.</>,
            <><b>Lógica duplicada</b> en varios archivos.</>,
            <><b>API keys visibles</b> en el código.</>,
            <>La consola llena de <b>warnings</b>.</>,
          ]} />
        </>
      }
      der={
        <PromptRespuesta
          prompt={`Revisá este componente con ojo crítico:
¿hay código repetido, datos hardcodeados,
o algo que falle en mobile? Listame los
problemas antes de tocar nada.`}
          respuesta={<>Te audita su propio trabajo y lista los problemas. Después decidís cuáles arreglar.</>}
          nota={<>Pedir el diagnóstico antes del fix evita que la IA reescriba medio proyecto sin que te enteres.</>}
        />
      }
    />
  </SlideClara>,

  <DemoEnVivo
    titulo="Les muestro: reviso mi código contra el brief, en vivo"
    prompt={`Revisá este componente con ojo crítico, según
los criterios de éxito y el scope de mi CLAUDE.md:
¿hay código repetido, datos hardcodeados, o algo
que falle en mobile? ¿Se coló algo del "NO va en
v1"? Listame los problemas antes de tocar nada.`}
    mirar={<>Cómo reviso <b>contra lo que decidí</b> (no en abstracto), cómo pido el <b>diagnóstico antes del fix</b>, y cómo elijo qué arreglar. Después auditan ustedes su propio MVP.</>}
  />,

  <Seccion kicker="Bloque 2 · Manos a la obra" titulo="Auditá, mejorá y medí" />,

  <ManosALaObra
    minutos="25 min"
    titulo="Auditá tu MVP contra tu brief"
    objetivo={<>Primera mitad: encontrás qué falla y qué no cumple lo que decidiste. Después paramos y lo arreglás.</>}
    pasos={[
      { t: 'Auditá con la checklist', d: 'pasá tu proyecto por los 5 puntos. Anotá lo que falla.' },
      { t: 'Revisá contra el CLAUDE.md', d: '¿cumple los criterios de éxito? ¿se respetó el scope?' },
      { t: 'Anotá 2-3 mejoras prioritarias', d: 'las que más impactan. No intentes arreglar todo.' },
    ]}
  />,

  <Break minutos={15} etiqueta="Break 1 de 2" />,

  <ManosALaObra
    minutos="20 min"
    titulo="Aplicá las mejoras y sumá analytics"
    objetivo={<>Segunda mitad: arreglás lo prioritario y dejás el MVP midiendo desde el día 1.</>}
    pasos={[
      { t: 'Aplicá tus 2-3 mejoras', d: 'con la IA. Código repetido, mobile, manejo de errores.' },
      { t: 'Sumá analytics', d: 'Vercel Analytics (2 clicks) o PostHog. Para medir desde el día 1.' },
      { t: 'Probá que todo sigue andando', d: 'en local, antes de pensar en publicar.' },
    ]}
  />,

  <SlideClara titulo="Analytics: si no medís, no sabés si funciona">
    <Tarjetas cols={2} items={[
      { icon: BarChart3, t: 'Vercel Analytics', d: 'Dos clicks, ya viene integrado. Cuánta gente entra, de dónde, qué tan rápido carga.' },
      { icon: BarChart3, t: 'PostHog', d: 'Eventos custom y funnels: ¿cuántos se registran? ¿dónde abandonan? Free tier generoso.' },
    ]} />
    <div className="mt-5"><Ejemplo titulo="Qué medir en un MVP">Lo básico: <b>visitas</b>, <b>tasa de registro</b>, <b>uso de la feature principal</b> y <b>errores</b>. Con eso ya ves si la hipótesis se sostiene.</Ejemplo></div>
  </SlideClara>,

  <Seccion kicker="Bloque 3" titulo="Publicar: de local a producción" />,

  <SlideClara titulo="Ahora sí: el pasaje controlado a producción">
    <DosCols
      izq={
        <>
          <div className="text-udesa-sigedu font-bold uppercase tracking-wide text-sm mb-3">La checklist de deploy</div>
          <Bullets items={[
            <><b>Variables de entorno</b> cargadas en producción (no solo en local).</>,
            <><b>Dominio custom</b> configurado, o el subdominio de Vercel.</>,
            <><b>HTTPS</b> activo (automático en Vercel).</>,
            <>Sin <b>datos de prueba</b> visibles ("Cliente Test 123").</>,
          ]} />
        </>
      }
      der={
        <Ejemplo titulo="El error clásico">
          Tu app anda perfecto en local pero <b>falla en producción</b>. Casi siempre es esto: las variables de entorno no están cargadas en Vercel. Andan en tu máquina, no en el server.
        </Ejemplo>
      }
    />
  </SlideClara>,

  <SlideClara titulo="Que se vea bien al compartir el link">
    <Glosario items={[
      { t: 'dominio', d: 'la dirección de tu app (tuempresa.com). Se compra ~15 USD/año.' },
      { t: 'meta tags', d: 'título y descripción que ve Google y los buscadores.' },
      { t: 'Open Graph', d: 'la imagen y texto que aparece cuando compartís el link en WhatsApp o redes.' },
    ]} />
    <div className="mt-5"><Ejemplo titulo="Por qué importa el Open Graph">Mandás tu link a un inversor por WhatsApp. Con Open Graph, aparece una tarjeta linda con imagen. Sin él, un link pelado y feo. Detalle chico, gran diferencia de percepción.</Ejemplo></div>
  </SlideClara>,

  <ManosALaObra
    minutos="20 min"
    titulo="Deploy final, todos juntos"
    objetivo={<>Tu MVP queda en producción con una URL pública para compartir.</>}
    pasos={[
      { t: 'Variables de entorno', d: 'cargá en Vercel todas las claves que usás en local.' },
      { t: 'Revisá datos de prueba', d: 'que no queden "Cliente Test" ni cosas a medias visibles.' },
      { t: 'Meta tags y Open Graph', d: 'pedile a la IA que los agregue para que el link se vea bien.' },
      { t: 'Deploy y abrí la URL', d: 'verificá que todo funciona en producción, no solo en tu compu.' },
    ]}
  />,

  <Checkpoint
    titulo="¿Tu MVP está en producción?"
    items={[
      'Tenés una URL pública que abre y funciona.',
      'No hay datos de prueba a la vista.',
      'El link se ve bien al compartirlo (Open Graph).',
    ]}
    mostrar={<>Pegá tu URL en el chat. Entre todos abrimos algunas y damos feedback rápido antes de las presentaciones.</>}
  />,

  <Seccion kicker="Bloque 4" titulo="Cuando algo se rompe (y la vida después)" />,

  <SlideClara titulo="El prompt de emergencia">
    <Codigo>{`Mi app muestra este error:
[pegás el error COMPLETO, no un pedacito]

Estoy usando Next.js + Supabase + Vercel.

Acá está el código relevante:
[pegás el código de la parte que falla]

¿Qué puede estar pasando y cómo lo arreglo?`}</Codigo>
    <div className="mt-5"><Ejemplo titulo="El secreto">El <b>error completo</b> y el <b>código relevante</b>. La mayoría pega "no funciona" y la IA adivina. Con contexto, suele resolverlo de una. Y si no sale: volvé atrás con Git.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="El CKM: a dónde lleva esto cuando crece">
    <DosCols
      izq={
        <Bullets items={[
          <>Tu <b>CLAUDE.md</b> es la versión MVP de algo más grande.</>,
          <>Las empresas que usan IA en serio tienen <b>repositorios enteros</b> de conocimiento versionado.</>,
          <>Sus agentes <b>consultan ese conocimiento</b> para no inventar. Se llama knowledge management para IA.</>,
        ]} />
      }
      der={<Ejemplo titulo="El horizonte">Una fintech real organiza cada documento (specs, procesos, legal) con metadatos para que la IA los lea con precisión. Vos hiciste el primer paso con un archivo. Es hacia donde va la industria.</Ejemplo>}
    />
  </SlideClara>,

  <SlideClara titulo="Cuándo la IA deja de alcanzar (y está bien)">
    <Tarjetas items={[
      { icon: Users, t: 'Cuándo contratar un dev', d: 'Pagos reales, integraciones complejas, performance bajo carga, seguridad seria.' },
      { icon: AlertTriangle, t: 'Cuándo la IA no escala', d: 'Mucha lógica de negocio custom, equipos grandes, requisitos de compliance.' },
      { icon: GitBranch, t: 'Tu ventaja nueva', d: 'Ya hablás el idioma: sabés pedir, evaluar y dirigir a un dev. No te venden humo.' },
    ]} />
    <div className="mt-5">
      <div className="inline-flex items-center gap-2 text-udesa-blue font-bold mb-2"><DollarSign size={20} /> Costos reales de un MVP vivo</div>
      <Cita>Vercel y Supabase tienen free tiers que aguantan un MVP entero. Dominio ~15 USD/año. Podés validar una idea en producción gastando casi nada.</Cita>
    </div>
  </SlideClara>,

  <Break minutos={15} etiqueta="Break 2 de 2" />,

  <Seccion kicker="Bloque 5" titulo="Presentaciones de MVPs" />,

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
            'Tu CLAUDE.md y el cheatsheet como referencia.',
            'Saber qué hacer cuando algo se rompe.',
          ]} />
        </>
      }
    />
  </SlideClara>,

  <SlideClara titulo="Con qué te vas">
    <Checklist items={[
      'Un MVP tuyo, online, que podés mostrar y seguir.',
      'Un método repetible: decidir → construir → sumar IA → publicar.',
      'El vocabulario y el criterio para dirigir a la IA sin perderte.',
      'Saber cuándo te alcanza con IA y cuándo necesitás un dev.',
      'El CLAUDE.md, el cheatsheet y la comunidad para cuando sigas solo.',
    ]} />
  </SlideClara>,

  <SlideClara titulo="Para seguir después del curso">
    <Tarjetas items={[
      { icon: GraduationCap, t: 'Repetí el método', d: 'Tu próxima idea: abrí un CLAUDE.md, tomá las 8 decisiones, construí en fases. Ya sabés cómo.' },
      { icon: Users, t: 'La comunidad', d: 'El grupo del curso sigue activo. Mostrá lo que hacés, pedí ayuda cuando te trabes, aprendé de los demás.' },
      { icon: GitBranch, t: 'Subí un escalón', d: 'Cuando tu MVP valide, ahí pensás en escalar: un dev, más features, o profundizar lo técnico vos.' },
    ]} />
    <div className="mt-5"><Cita>Lo más valioso que te llevás no es la app: es saber que la próxima idea también la podés llevar a producción vos.</Cita></div>
  </SlideClara>,

  <Seccion kicker="Fin del curso" titulo="Tenés un producto online y un método. Seguilo." />,
]
