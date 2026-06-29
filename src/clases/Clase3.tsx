import { Portada, Seccion, SlideClara, Bullets, BulletsIcono, Tarjetas, DosCols, Cita, Glosario, Ejemplo, AntesDespues, Pasos, Codigo, Fases, DemoEnVivo, Break, ManosALaObra, Checkpoint } from '../components/Slides'
import { Database, ShieldCheck, KeyRound, RefreshCw, Globe, ShieldAlert } from 'lucide-react'

export const clase3 = [
  <Portada
    titulo="Publicar: datos reales y online"
    subtitulo="Clase 3 · MND130"
    profes={['Damián Sztarkman', 'Fermín Rodríguez Del Castillo']}
  />,

  <SlideClara titulo="Fase 3 del método: Publicar" kicker="Acá estamos">
    <Fases activa={3} />
    <div className="mt-7">
      <Ejemplo titulo="De qué se trata hoy">
        Tu app ya se navega en local, pero con <b>datos de mentira</b> y solo en tu compu. Hoy le damos las dos cosas que le faltan para ser un producto real: una <b>base de datos</b> (datos de verdad + login) y una <b>dirección online</b> para que otros la usen.
      </Ejemplo>
    </div>
  </SlideClara>,

  <SlideClara titulo="Dónde quedamos y qué falta">
    <AntesDespues
      tituloAntes="Lo que tenés (Clase 2)"
      tituloDespues="Lo que sumamos hoy"
      antes={<>Tu app <b>navegable en local</b>: todas las pantallas, con datos <b>mock</b> (falsos, escritos en el código).<br /><br />Solo la ves vos, en localhost. Nadie más puede entrar.</>}
      despues={<><b>Datos reales</b> en una base (Supabase): lo que se carga se guarda y persiste. Más <b>login</b> de usuarios.<br /><br />Y la app <b>publicada</b>: una URL que cualquiera abre desde su celular.</>}
    />
    <div className="mt-5"><Cita>Es el salto de "una maqueta que se ve linda" a "un producto que la gente usa de verdad".</Cita></div>
  </SlideClara>,

  <Seccion kicker="Bloque 1" titulo="Conectar la base de datos: Supabase" />,

  <SlideClara titulo="Supabase: la base de datos y el login, ya hechos">
    <DosCols
      izq={
        <Glosario items={[
          { t: 'Base de datos', d: 'donde tu app guarda la info de forma permanente. Pensá en una planilla de Excel, pero a la que la app consulta y escribe sola.' },
          { t: 'Tabla', d: 'una "hoja" de esa planilla para un tipo de cosa: una tabla de usuarios, una de turnos. Filas = registros, columnas = campos.' },
          { t: 'Auth (login)', d: 'el sistema de "quién entra y a qué accede". Registrarse, iniciar sesión, recuperar contraseña.' },
        ]} />
      }
      der={<Ejemplo titulo="Qué te ahorra Supabase">Armar una base de datos y un login seguro desde cero es de lo más difícil y peligroso de una app. Supabase te lo da <b>listo</b>: vos le pedís a la IA "creá una tabla de turnos" o "sumá login", y se apoya en Supabase. No programás el sistema de usuarios: ya está resuelto.</Ejemplo>}
    />
    <div className="mt-5"><Cita>Para vos, Supabase son dos cosas: dónde viven los datos de tu app, y quién puede entrar. Las dos, sin montar ni mantener un servidor.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="La base vive en la nube, no en tu máquina">
    <DosCols
      izq={
        <Bullets items={[
          <>Tu <b>app</b> sigue corriendo en local (localhost). Eso no cambia.</>,
          <>La <b>base de datos</b> vive en la nube, en Supabase. Tu app local se conecta a ella por internet.</>,
          <>Usás un <b>proyecto de prueba</b> de Supabase mientras construís: lo llenás de datos truchos, lo rompés, no importa.</>,
          <>Para producción vas a tener un <b>proyecto aparte</b> (el plan gratis te da 2). Nunca tocás el de producción a mano.</>,
        ]} />
      }
      der={<Ejemplo titulo="Por qué dos proyectos">Si probás contra la misma base que usan tus usuarios, un experimento te puede borrar datos reales. Separando prueba y producción, rompés tranquilo en una sin tocar la otra. Es la regla "local primero" aplicada a los datos.</Ejemplo>}
    />
    <div className="mt-5"><Cita>No hace falta montar una base en tu máquina (es complejo y no aporta). El proyecto de prueba en la nube ya te deja experimentar sin riesgo.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="Conectar Supabase: dos datos, dos usos">
    <DosCols
      izq={<>
        Conectar tu app a la base es <b>copiar dos datos</b> de Supabase a tu proyecto. No hay nada que "enchufar": son credenciales que le pasás a Claude Code y él arma la conexión.<br /><br />
        Para crear las tablas, Claude Code usa el <b>connection string</b> de tu proyecto y las crea solo: vos no escribís SQL.
      </>}
      der={<Pasos pasos={[
        { t: 'Creá el proyecto de prueba', d: 'en supabase.com, con la guía del material.' },
        { t: 'URL + anon key → al .env', d: 'es lo que tu app usa para leer y guardar. Se las pasás a Claude Code.' },
        { t: 'Connection string → las tablas', d: 'Claude Code lo usa para crear tus tablas, solo. También va al .env.' },
      ]} />}
    />
    <div className="mt-5"><Ejemplo titulo="La guía está en el material">Dónde están la URL, la anon key y el connection string (usá el <b>Session pooler</b>, que anda en cualquier red), paso a paso, en la <b>Guía de Supabase</b>. Hoy lo hacemos juntos, con pantalla compartida.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="Las claves: dónde van y dónde NO">
    <AntesDespues
      tituloAntes="Peligroso"
      tituloDespues="Correcto"
      antes={<><span className="inline-flex items-center gap-1"><ShieldAlert size={16} className="text-[#b13434]" /> Pegar la URL y la clave de Supabase <b>directo en el código</b>.</span><br /><br />Cuando subís a GitHub, quedan públicas. Cualquiera entra a tu base.</>}
      despues={<>Guardarlas en el archivo <b>.env</b> (variables de entorno), que <b>no se sube</b> a GitHub.<br /><br />Tu CLAUDE.md ya lo pide. Igual verificá: <i>"¿las claves de Supabase están en variables de entorno?"</i></>}
    />
  </SlideClara>,

  <Seccion kicker="Bloque 2" titulo="De datos mock a datos reales" />,

  <SlideClara titulo="El cambio clave: la pantalla no cambia, los datos sí">
    <DosCols
      izq={
        <BulletsIcono items={[
          { icon: Database, children: <>En la Clase 2 tus pantallas leían <b>datos falsos</b> escritos en el código.</> },
          { icon: RefreshCw, children: <>Hoy le pedís a la IA que esos datos vengan de <b>Supabase</b>: leer y guardar de verdad.</> },
          { icon: ShieldCheck, children: <>Lo que cargás <b>persiste</b>: cerrás, volvés a entrar, y sigue ahí. Eso es tener una base.</> },
        ]} />
      }
      der={<Ejemplo titulo="Por qué primero mock, ahora real">Como ya armaste la UI con mocks, ahora solo cambiás <b>de dónde salen los datos</b> — no rehacés las pantallas. Es enchufar la base a algo que ya funciona. Construir de a una capa: primero se ve, después es de verdad.</Ejemplo>}
    />
  </SlideClara>,

  <SlideClara titulo="El prompt para pasar de mock a real">
    <Codigo>{`Según mi docs/fases.md, vamos por la fase de
datos reales. Acá están mi URL, anon key y el
connection string de Supabase (van al .env):

1. Conectá mi app a Supabase con la URL y la anon key.
2. Con el connection string, creá las tablas que
   pide mi docs/brief.md y cargá datos de ejemplo.
3. Hacé que mis pantallas lean de Supabase, no del mock.

Decime cómo lo pruebo en local antes de seguir.`}</Codigo>
    <div className="mt-5"><Ejemplo titulo="Por qué funciona">Apoya en tus <b>docs</b> (las tablas salen del brief), va de a un <b>paso</b>, y termina con "cómo lo pruebo". La IA arma las tablas y el cambio; vos verificás que lo que cargás se guarda.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="Login: que cada usuario tenga lo suyo">
    <DosCols
      izq={
        <Bullets items={[
          <><b>Registro e inicio de sesión</b> con Supabase Auth: el usuario se crea una cuenta y entra.</>,
          <>Cada usuario ve <b>solo sus datos</b>: sus reservas, sus registros. No los de otros.</>,
          <>Pedíselo simple: <i>"sumá login con Supabase Auth: registro, inicio de sesión, y que cada usuario vea solo lo suyo"</i>.</>,
        ]} />
      }
      der={<Ejemplo titulo="Esto antes era carísimo">Un sistema de login seguro (contraseñas encriptadas, sesiones, recuperar clave) era semanas de trabajo de un dev. Supabase te lo da hecho y la IA lo conecta. Vos decidís qué ve cada usuario.</Ejemplo>}
    />
    <div className="mt-5"><Cita>Ojo con los estados: ¿qué ve alguien sin login? ¿Y si la contraseña está mal? Eso ya lo decidiste en tu brief — ahora se construye.</Cita></div>
  </SlideClara>,

  <DemoEnVivo
    titulo="Les muestro: conecto la base y paso de mock a real, en vivo"
    prompt={`Acá están mi URL, anon key y connection string
de Supabase. Conectá mi app y, según mi
docs/brief.md, creá las tablas que necesito
y cargá unos datos de ejemplo.

Después hacé que la pantalla principal lea de
Supabase en vez del mock. Decime cómo verifico
que lo que cargo se guarda de verdad.`}
    mirar={<>Cómo la IA <b>crea las tablas</b> desde mi brief, carga datos de ejemplo, y cómo mis pantallas <b>dejan de leer el mock</b> y leen la base. Cargo algo, recargo la página y <b>sigue ahí</b>: eso es tener datos reales. Después van ustedes.</>}
  />,

  <Seccion kicker="Bloque 3 · Manos a la obra" titulo="Conectá tu base y sumá login" />,

  <ManosALaObra
    minutos="30 min"
    titulo="Conectá Supabase y pasá a datos reales"
    objetivo={<>Primera mitad: conectás la base y reemplazás los mocks por datos reales. Después paramos y sumamos login.</>}
    pasos={[
      { t: 'Creá el proyecto de prueba', d: 'en supabase.com, con la Guía de Supabase. Copiá la URL, la anon key y el connection string (Session pooler).' },
      { t: 'Conectá tu app y creá las tablas', d: 'pasale esas claves a Claude Code (van al .env). Que conecte la app y cree las tablas de tu docs/brief.md con un seed.' },
      { t: 'Pasá las pantallas de mock a Supabase', d: 'que lean y guarden de la base. Probá que lo que cargás persiste.' },
    ]}
  />,

  <Break minutos={15} etiqueta="Break 1 de 2" />,

  <ManosALaObra
    minutos="20 min"
    titulo="Sumá login a tu app"
    objetivo={<>Segunda mitad: registro e inicio de sesión, para que cada usuario tenga lo suyo.</>}
    pasos={[
      { t: 'Sumá login con Supabase Auth', d: 'registro e inicio de sesión. Pedíselo simple a la IA.' },
      { t: 'Que cada usuario vea solo lo suyo', d: 'sus reservas, sus registros. No los de otros.' },
      { t: 'Probá los estados', d: 'qué ve alguien sin login, qué pasa si la contraseña está mal.' },
    ]}
  />,

  <Checkpoint
    titulo="¿Tu app ya usa datos reales?"
    items={[
      'Supabase conectado, con tus tablas creadas.',
      'Lo que cargás se guarda y sigue ahí al recargar.',
      'Login funciona: te registrás, salís y volvés a entrar.',
      'Las claves están en variables de entorno (.env), no en el código.',
    ]}
  />,

  <Seccion kicker="Bloque 4" titulo="Publicar: de local a online" />,

  <SlideClara titulo="Vercel: tu app online en pocos clicks">
    <DosCols
      izq={
        <Glosario items={[
          { t: 'Vercel', d: 'el servicio que mantiene tu app prendida 24/7 y le da una dirección web. Gratis para un MVP.' },
          { t: 'Deploy', d: 'publicar: pasar tu app de tu máquina a internet, para que otros la usen.' },
          { t: 'Dominio', d: 'la dirección de tu app. Empezás con una gratis (tu-app.vercel.app); comprar una propia es ~15 USD/año.' },
        ]} />
      }
      der={<Ejemplo titulo="Cómo se publica, sin terminal">Vercel se conecta a tu <b>GitHub</b>. Importás tu repo desde la web de Vercel, le das <b>Deploy</b>, y listo: tu app tiene URL. De ahí en más, cada cambio que subís a GitHub se publica <b>solo</b>.</Ejemplo>}
    />
  </SlideClara>,

  <SlideClara titulo="El circuito completo, ahora sí">
    <Pasos pasos={[
      { t: 'Subís tus cambios a GitHub', d: 'con un commit, como venís haciendo.' },
      { t: 'Vercel lo detecta y publica solo', d: 'cada push actualiza tu app online, automático.' },
      { t: 'Tu app online lee y guarda en Supabase', d: 'datos reales, en la nube, para todos tus usuarios.' },
    ]} />
    <div className="mt-5"><Ejemplo titulo="Las piezas se juntan">GitHub (el código) → Vercel (lo publica) → Supabase (los datos). Las tres herramientas que venís usando, ahora trabajando juntas para que tu app viva online.</Ejemplo></div>
  </SlideClara>,

  <SlideClara titulo="El paso que más falla: las variables de entorno">
    <DosCols
      izq={
        <>
          <div className="inline-flex items-center gap-2 text-udesa-blue font-bold mb-3"><KeyRound size={20} /> El error clásico</div>
          <Bullets items={[
            <>Tu app anda perfecto en local, pero <b>falla al publicarla</b>.</>,
            <>Casi siempre es lo mismo: las <b>claves de Supabase</b> están en tu <code>.env</code> local, pero no en Vercel.</>,
            <>El <code>.env</code> no se sube a GitHub (¡bien!), así que Vercel no las tiene: <b>hay que cargarlas a mano</b> en Vercel.</>,
          ]} />
        </>
      }
      der={<Ejemplo titulo="La solución">En la web de Vercel: Settings → Environment Variables → cargás las mismas claves que tenés en tu <code>.env</code>. Si tu deploy falla, mirá los logs y revisá esto primero: es el 90% de los casos.</Ejemplo>}
    />
  </SlideClara>,

  <DemoEnVivo
    titulo="Les muestro: publico la app en Vercel, en vivo"
    prompt={`Quiero publicar mi app en Vercel.

Guiame paso a paso: subir mi código a GitHub,
importar el repo desde la web de Vercel, cargar
las variables de entorno (las claves de Supabase),
y hacer el primer deploy.

Si el deploy falla, ayudame a leer los logs.`}
    mirar={<>Cómo <b>importo el repo</b> desde la web de Vercel, cargo las <b>variables de entorno</b> (el paso que más falla), y le doy Deploy. En un par de minutos la app tiene <b>URL pública</b> y la abro desde el celular. Después la publican ustedes.</>}
  />,

  <Break minutos={15} etiqueta="Break 2 de 2" />,

  <Seccion kicker="Bloque 5 · Manos a la obra" titulo="Publicá tu MVP" />,

  <ManosALaObra
    minutos="40 min"
    titulo="Poné tu app online"
    objetivo={<>Publicás tu app en Vercel, con datos reales. Salís con una URL que cualquiera puede abrir desde su celular.</>}
    pasos={[
      { t: 'Subí tu código a GitHub', d: 'commiteá lo que tenés y subilo a tu repo.' },
      { t: 'Importá el repo en Vercel', d: 'desde la web de Vercel (Add New → Project). Con la Guía de Vercel.' },
      { t: 'Cargá las variables de entorno', d: 'las claves de Supabase, en Settings → Environment Variables. El paso que más falla.' },
      { t: 'Deploy y abrí la URL', d: 'verificá que funciona online, no solo en tu compu. Probala desde el celular.' },
    ]}
  />,

  <Checkpoint
    titulo="¿Tu app está online?"
    items={[
      'Tu app tiene una URL pública (tu-app.vercel.app).',
      'La abrís desde el celular y funciona.',
      'Los datos que cargás online se guardan en Supabase.',
      'El login funciona también en producción.',
    ]}
    mostrar={<>Ronda rápida: cada uno comparte el link de su app y la abrimos entre todos. Ver tu MVP online, funcionando, es el momento del curso.</>}
  />,

  <Seccion kicker="Bloque 6" titulo="Cuidados al publicar" />,

  <SlideClara titulo="Prueba en prueba, publicá lo que ya anda">
    <AntesDespues
      tituloAntes="Lo riesgoso"
      tituloDespues="Lo correcto"
      antes={<>Probar cambios <b>directo en producción</b>, contra los datos reales de tus usuarios.<br /><br />Un experimento que sale mal te rompe la app que la gente está usando.</>}
      despues={<>Construir y probar <b>en local</b> (con tu proyecto de prueba). Cuando anda, subís a GitHub y se publica.<br /><br />Producción recibe <b>solo lo que ya verificaste</b>.</>}
    />
    <div className="mt-5"><Cita>El método no cambia al publicar: local primero, producción al final. La diferencia es que ahora "al final" ya llegó.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="Tres cosas que revisar antes de compartir tu link">
    <Tarjetas items={[
      { icon: KeyRound, t: 'Las claves cargadas', d: 'Variables de entorno en Vercel. Si la app falla online pero anda en local, casi siempre es esto.' },
      { icon: ShieldCheck, t: 'Que el login proteja', d: 'Que un usuario no vea los datos de otro. Probalo con dos cuentas distintas.' },
      { icon: Globe, t: 'Que ande en mobile', d: 'La mayoría te va a abrir el link desde el celular. Revisá que se vea bien ahí.' },
    ]} />
    <div className="mt-5"><Cita>No busques perfección: buscá que un desconocido pueda usarla sin que se rompa ni vea lo que no debe.</Cita></div>
  </SlideClara>,

  <SlideClara titulo="Tu entregable de hoy" kicker="Cierre">
    <Bullets items={[
      <>Tu app <b>publicada</b>, con una URL que cualquiera puede abrir.</>,
      <>Datos <b>reales</b> en Supabase: lo que se carga, se guarda.</>,
      <><b>Login</b> funcionando, en local y en producción.</>,
      <>Las claves <b>seguras</b> (variables de entorno, no en el código).</>,
    ]} />
    <div className="mt-5"><Ejemplo titulo="Lo lograste">De una idea (Clase 1) a una app online que la gente puede usar (hoy). Eso es un MVP en producción. La próxima: le sumamos IA adentro.</Ejemplo></div>
  </SlideClara>,

  <Seccion kicker="Cierre" titulo="Tu MVP está online. La próxima: le metemos IA adentro." />,
]
