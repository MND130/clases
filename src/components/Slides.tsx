import { type ReactNode, useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { MonitorPlay, Coffee, Play, Pause, RotateCcw, Copy, Check, Minus, Plus, FileDown } from 'lucide-react'
import logoBlanco from '../assets/logo_udesa_blanco.png'
import logoNegro from '../assets/logo_udesa.png'
import claudeMdRaw from '../material/claude_md.md?raw'

const MATERIA = 'MND130 · Cómo acelerar el ciclo de desarrollo de un MVP con IA'

/** Slide oscura (portada, secciones, generador). */
export function SlideOscura({ children, seccion = false }: { children: ReactNode; seccion?: boolean }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${seccion ? 'bg-udesa-seccion' : 'bg-udesa-dark'}`}
         style={{ borderTop: '6px solid #3C8DBC' }}>
      <img src={logoBlanco} alt="UdeSA" className="absolute top-7 right-10 h-7 opacity-90" />
      <div className="absolute bottom-6 left-10 text-white/45 t-label tracking-wide">{MATERIA}</div>
      {children}
    </div>
  )
}

/** Slide clara (contenido). title opcional pinta el encabezado estándar.
 *  El cuerpo arranca debajo del título (alineado arriba). */
export function SlideClara({ children, titulo, kicker }: { children: ReactNode; titulo?: string; kicker?: string }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white"
         style={{ borderTop: '6px solid', borderImage: 'linear-gradient(90deg,#3C8DBC,#1D294D) 1' }}>
      <img src={logoNegro} alt="UdeSA" className="absolute top-7 right-10 h-7 opacity-90" />
      <div className="absolute bottom-6 left-12 text-ink-soft t-label tracking-wide">{MATERIA}</div>
      <div className="px-16 pt-14 pb-16 h-full flex flex-col">
        {kicker && <div className="text-udesa-sigedu font-bold tracking-[0.16em] uppercase text-sm mb-1">{kicker}</div>}
        {titulo && (
          <h2 className="font-display font-extrabold text-udesa-blue text-[34px] leading-tight border-b-[3px] border-rule pb-3 mb-7">
            {titulo}
          </h2>
        )}
        <div className="flex-1 min-h-0 flex flex-col justify-center">{children}</div>
      </div>
    </div>
  )
}

// Mapa nombre → foto de perfil (servidas desde public/profes/).
const FOTO_PROFE: Record<string, string> = {
  'Fermín Rodríguez Del Castillo': '/profes/fermin.webp',
  'Damián Sztarkman': '/profes/damian.jpg',
}

export function Portada({ titulo, subtitulo, profes }: { titulo: string; subtitulo: string; profes: string[] }) {
  return (
    <SlideOscura>
      <div className="h-full flex flex-col justify-center px-20 max-w-[1100px]">
        <div className="w-24 h-[5px] rounded bg-gradient-to-r from-udesa-sigedu to-white mb-8" />
        <h1 className="font-display font-extrabold text-white text-6xl leading-[1.05] max-w-[20ch]">{titulo}</h1>
        <h2 className="font-display font-semibold text-udesa-sigedu text-3xl mt-5">{subtitulo}</h2>
        <div className="mt-10 flex gap-12 text-white/85 text-lg">
          {profes.map((p) => {
            const foto = FOTO_PROFE[p]
            return (
              <span key={p} className="inline-flex flex-col items-center gap-3 text-center">
                {foto && (
                  <img src={foto} alt={p}
                    className="w-28 h-28 rounded-full object-cover ring-2 ring-udesa-sigedu/80 shadow-soft" />
                )}
                <span className="leading-tight max-w-[12ch]">{p}</span>
              </span>
            )
          })}
        </div>
      </div>
    </SlideOscura>
  )
}

export function Seccion({ kicker, titulo }: { kicker: string; titulo: ReactNode }) {
  return (
    <SlideOscura seccion>
      <div className="h-full flex flex-col justify-center px-20">
        <div className="text-udesa-sigedu font-bold tracking-[0.18em] uppercase text-lg mb-3">{kicker}</div>
        <h1 className="font-display font-extrabold text-white text-6xl leading-tight max-w-[22ch]">{titulo}</h1>
      </div>
    </SlideOscura>
  )
}

/** Lista de bullets grande, con marcador celeste. */
export function Bullets({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ul className="space-y-5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3.5 t-body-lg leading-snug text-ink">
          <span className="mt-2.5 w-2 h-2 rounded-full bg-udesa-sigedu shrink-0" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

/** Bullets con un ícono por punto — más presencia visual que el marcador. */
export function BulletsIcono({ items }: { items: { icon: LucideIcon; children: ReactNode }[] }) {
  return (
    <ul className="space-y-6">
      {items.map(({ icon: Icon, children }, i) => (
        <li key={i} className="flex gap-4 items-start t-body-lg leading-snug text-ink">
          <span className="grid place-items-center w-11 h-11 rounded-xl bg-udesa-sigedu/12 text-udesa-sigedu shrink-0 mt-0.5">
            <Icon size={22} strokeWidth={2.2} />
          </span>
          <span className="pt-1.5">{children}</span>
        </li>
      ))}
    </ul>
  )
}

export type Tarjeta = { icon: LucideIcon; t: string; d: string }

export function Tarjetas({ cols = 3, items }: { cols?: 2 | 3; items: Tarjeta[] }) {
  return (
    <div className={`grid gap-5 ${cols === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
      {items.map(({ icon: Icon, t, d }) => (
        <div key={t} className="rounded-2xl bg-bgsoft border border-rule p-6" style={{ borderLeft: '4px solid #3C8DBC' }}>
          <Icon className="text-udesa-sigedu mb-3" size={28} />
          <h3 className="font-display font-bold text-udesa-dark t-card-t mb-1.5 leading-tight">{t}</h3>
          <p className="text-ink-soft t-body leading-snug">{d}</p>
        </div>
      ))}
    </div>
  )
}

/** Las 4 fases de The MND130 Way — el hilo conductor del curso.
 *  `activa` (1-4) resalta la fase de la clase actual. */
const FASES_MND = [
  { n: 1, t: 'Decidir', d: 'Antes de codear, decidís todo con la IA.' },
  { n: 2, t: 'Construir', d: 'La app navegable en local, con datos de prueba.' },
  { n: 3, t: 'Publicar', d: 'Datos reales, login y la app online.' },
  { n: 4, t: 'Sumar IA', d: 'Chatbots y agentes adentro del producto.' },
]

export function Fases({ activa }: { activa?: number }) {
  return (
    <div className="flex items-stretch gap-2">
      {FASES_MND.map((f, i, arr) => {
        const on = activa === f.n
        return (
          <div key={f.n} className="flex items-stretch gap-2 flex-1">
            <div className={`flex-1 flex flex-col rounded-xl p-4 border transition ${on ? 'bg-udesa-blue text-white border-udesa-blue shadow-soft' : 'bg-bgsoft border-rule'}`}>
              <div className={`t-label font-bold tracking-widest uppercase mb-1 ${on ? 'text-white/75' : 'text-udesa-sigedu'}`}>Fase {f.n}</div>
              <div className={`font-display font-extrabold t-step-t leading-tight ${on ? 'text-white' : 'text-udesa-dark'}`}>{f.t}</div>
              <div className={`t-body-sm leading-snug mt-1 ${on ? 'text-white/85' : 'text-ink-soft'}`}>{f.d}</div>
            </div>
            {i < arr.length - 1 && <span className={`self-center text-xl font-bold ${activa && activa > f.n ? 'text-udesa-blue' : 'text-udesa-sigedu/50'}`}>→</span>}
          </div>
        )
      })}
    </div>
  )
}

/** Cronograma de bloques con duración (para el "temas y tiempos" de cada clase). */
export function Cronograma({ bloques }: { bloques: { dur: string; t: string }[] }) {
  return (
    <div className="space-y-2.5">
      {bloques.map((b, i) => (
        <div key={i} className="flex items-center gap-4">
          <span className="font-display font-extrabold text-white text-sm bg-udesa-blue rounded-lg px-3 py-1.5 w-20 text-center shrink-0">
            {b.dur}
          </span>
          <span className="text-ink t-body">{b.t}</span>
        </div>
      ))}
    </div>
  )
}

/** Entregable: checklist con check celeste. */
export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 t-step-t text-ink">
          <span className="mt-1 grid place-items-center w-5 h-5 rounded bg-udesa-sigedu text-white text-[13px] shrink-0">✓</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

/** Botón para descargar el CLAUDE.md del material (el mismo que se entrega en Material de referencia). */
export function DescargarClaudeMd({ etiqueta = 'Descargar CLAUDE.md' }: { etiqueta?: string }) {
  const descargar = () => {
    const blob = new Blob([claudeMdRaw], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'CLAUDE.md'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
  return (
    <button onClick={descargar}
      className="inline-flex items-center gap-2 rounded-lg bg-udesa-sigedu px-4 py-2 text-white text-sm font-semibold hover:brightness-110 transition">
      <FileDown size={15} /> {etiqueta}
    </button>
  )
}

/** Dos columnas genéricas, centradas verticalmente entre sí. */
export function DosCols({ izq, der }: { izq: ReactNode; der: ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-12 items-center">
      <div>{izq}</div>
      <div>{der}</div>
    </div>
  )
}

/** Cita / frase destacada. */
export function Cita({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-r-xl bg-bgsoft border-l-4 border-udesa-sigedu px-7 py-5 t-body-lg leading-snug text-ink-soft italic">
      {children}
    </div>
  )
}

/** Bloque de código / prompt (oscuro). */
export function Codigo({ children }: { children: ReactNode }) {
  return (
    <pre className="bg-udesa-dark text-[#e8eef5] rounded-lg border-l-4 border-udesa-sigedu px-6 py-5 t-mono leading-relaxed whitespace-pre-wrap font-mono overflow-hidden">
      {children}
    </pre>
  )
}

/** Prompt → respuesta de la IA, lado a lado. El corazón del “mirá esto”. */
export function PromptRespuesta({ prompt, respuesta, nota }: { prompt: string; respuesta: ReactNode; nota?: ReactNode }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col min-w-0">
          <div className="t-label font-bold tracking-widest uppercase text-udesa-sigedu mb-1.5">Le pedís</div>
          <pre className="flex-1 bg-udesa-dark text-[#e8eef5] rounded-lg border-l-4 border-udesa-sigedu px-5 py-4 text-[14px] leading-relaxed whitespace-pre-wrap font-mono overflow-hidden">
            {prompt}
          </pre>
        </div>
        <div className="flex flex-col min-w-0">
          <div className="t-label font-bold tracking-widest uppercase text-ink-soft mb-1.5">Te devuelve</div>
          <div className="flex-1 bg-bgsoft border border-rule rounded-lg px-5 py-4 t-body-sm leading-snug text-ink">
            {respuesta}
          </div>
        </div>
      </div>
      {nota && <div className="mt-4 t-body-sm text-ink-soft"><b className="text-udesa-dark">Por qué importa:</b> {nota}</div>}
    </div>
  )
}

/** Antes / después en dos columnas con color rojo/verde suaves. */
export function AntesDespues({ antes, despues, tituloAntes = 'Sin criterio', tituloDespues = 'Con criterio' }: {
  antes: ReactNode; despues: ReactNode; tituloAntes?: string; tituloDespues?: string
}) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="rounded-xl border border-rule bg-[#fdf2f2] p-6" style={{ borderLeft: '4px solid #d64545' }}>
        <div className="t-label font-bold tracking-widest uppercase text-[#b13434] mb-2.5">✕ {tituloAntes}</div>
        <div className="t-body leading-snug text-ink">{antes}</div>
      </div>
      <div className="rounded-xl border border-rule bg-[#f0f8f3] p-6" style={{ borderLeft: '4px solid #2f9e6b' }}>
        <div className="t-label font-bold tracking-widest uppercase text-[#1f7a51] mb-2.5">✓ {tituloDespues}</div>
        <div className="t-body leading-snug text-ink">{despues}</div>
      </div>
    </div>
  )
}

/** Callout de ejemplo concreto (caja celeste suave con ícono). */
export function Ejemplo({ titulo = 'Ejemplo', children }: { titulo?: string; children: ReactNode }) {
  return (
    <div className="rounded-xl bg-[#eef5fb] border border-[#cfe3f2] px-6 py-5" style={{ borderLeft: '4px solid #00529B' }}>
      <div className="t-label font-bold tracking-widest uppercase text-udesa-blue mb-1.5">{titulo}</div>
      <div className="t-body leading-snug text-ink">{children}</div>
    </div>
  )
}

/** Pasos numerados con título + explicación (no bullets pelados).
 *  `inicio` arranca la numeración en otro número (útil al partir una lista en 2 columnas). */
export function Pasos({ pasos, inicio = 1 }: { pasos: { t: string; d: ReactNode }[]; inicio?: number }) {
  return (
    <ol className="space-y-3.5">
      {pasos.map((p, i) => (
        <li key={i} className="flex gap-4">
          <span className="grid place-items-center w-8 h-8 rounded-lg font-display font-extrabold text-white bg-udesa-blue shrink-0">{inicio + i}</span>
          <div className="pt-0.5">
            <span className="font-bold text-udesa-dark t-step-t">{p.t}</span>
            <span className="text-ink-soft t-body"> — {p.d}</span>
          </div>
        </li>
      ))}
    </ol>
  )
}

/** Glosario: término + definición en una línea, con el término resaltado. */
export function Glosario({ items }: { items: { t: string; d: ReactNode }[] }) {
  return (
    <div className="rounded-xl border border-rule overflow-hidden">
      {items.map((it, i) => (
        <div key={i} className={`flex gap-4 items-start px-4 py-2.5 ${i % 2 ? 'bg-bgsoft' : 'bg-white'} ${i ? 'border-t border-rule' : ''}`}>
          <span className="font-mono font-bold text-udesa-blue t-body shrink-0 w-40 leading-snug">{it.t}</span>
          <span className="text-ink-soft t-body leading-snug flex-1">{it.d}</span>
        </div>
      ))}
    </div>
  )
}

/** Slide de "manos a la obra": arranca un bloque hands-on con tiempo, objetivo y pasos. */
export function ManosALaObra({ minutos, titulo, objetivo, pasos }: { minutos: string; titulo: string; objetivo: ReactNode; pasos: { t: string; d: ReactNode }[] }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-udesa-dark" style={{ borderTop: '6px solid #3C8DBC' }}>
      <img src={logoBlanco} alt="UdeSA" className="absolute top-7 right-10 h-7 opacity-90" />
      <div className="absolute bottom-6 left-12 text-white/45 t-label tracking-wide">{MATERIA}</div>
      <div className="h-full px-16 py-14 flex flex-col justify-center max-w-[1150px]">
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="rounded-full bg-udesa-sigedu text-white font-bold text-sm px-4 py-1.5">Manos a la obra · {minutos}</span>
        </div>
        <h2 className="font-display font-extrabold text-white text-[36px] leading-tight mb-2">{titulo}</h2>
        <p className="text-udesa-sigedu t-step-t mb-7">{objetivo}</p>
        <ol className="space-y-3.5">
          {pasos.map((p, i) => (
            <li key={i} className="flex gap-4">
              <span className="grid place-items-center w-8 h-8 rounded-lg font-display font-extrabold text-udesa-dark bg-white shrink-0">{i + 1}</span>
              <div className="pt-0.5 t-body">
                <span className="font-bold text-white">{p.t}</span>
                <span className="text-white/70"> — {p.d}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

/** Slide de checkpoint: pará, verificá, mostrá. Para sincronizar al grupo. */
export function Checkpoint({ titulo, items, mostrar }: { titulo: string; items: string[]; mostrar?: ReactNode }) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: 'linear-gradient(135deg,#0d6e8c 0%,#1D294D 120%)', borderTop: '6px solid #3C8DBC' }}>
      <img src={logoBlanco} alt="UdeSA" className="absolute top-7 right-10 h-7 opacity-90" />
      <div className="absolute bottom-6 left-12 text-white/45 t-label tracking-wide">{MATERIA}</div>
      <div className="h-full px-16 py-14 flex flex-col justify-center max-w-[1100px]">
        <div className="text-white/60 font-bold tracking-[0.18em] uppercase text-sm mb-2">Checkpoint · pará y verificá</div>
        <h2 className="font-display font-extrabold text-white text-[38px] leading-tight mb-7">{titulo}</h2>
        <ul className="space-y-4">
          {items.map((it, i) => (
            <li key={i} className="flex gap-3 text-white t-body-lg">
              <span className="mt-1 grid place-items-center w-6 h-6 rounded-full bg-white/15 text-white text-[13px] shrink-0">✓</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
        {mostrar && <div className="mt-7 rounded-xl bg-white/10 border border-white/15 px-6 py-4 text-white/85 t-body">{mostrar}</div>}
      </div>
    </div>
  )
}

/** Slide de DEMO EN VIVO: "ahora me ven a MÍ construir". Muestra el aviso de cambio
 *  a Cursor/Claude Code, el prompt que voy a pegar, y qué mirar mientras lo hago. */
export function DemoEnVivo({ titulo, prompt, mirar, descargaClaudeMd }: { titulo: string; prompt: string; mirar?: ReactNode; descargaClaudeMd?: boolean }) {
  const [copiado, setCopiado] = useState(false)
  async function copiar() {
    try { await navigator.clipboard.writeText(prompt); setCopiado(true); setTimeout(() => setCopiado(false), 2000) } catch { /* noop */ }
  }
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: 'linear-gradient(135deg,#5b1d8c 0%,#1D294D 120%)', borderTop: '6px solid #a86bd8' }}>
      <img src={logoBlanco} alt="UdeSA" className="absolute top-7 right-10 h-7 opacity-90" />
      <div className="absolute bottom-6 left-12 text-white/45 t-label tracking-wide">{MATERIA}</div>
      <div className="h-full px-16 py-12 flex flex-col justify-center max-w-[1180px]">
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#c89bf0] text-[#3a1060] font-bold text-sm px-4 py-1.5">
            <MonitorPlay size={17} /> Demo en vivo · me ven construir
          </span>
        </div>
        <h2 className="font-display font-extrabold text-white text-[34px] leading-tight mb-1">{titulo}</h2>
        <p className="text-[#d9c2f0] t-body mb-6">Cambio a Cursor / Claude Code y empiezo a construir con este prompt. Síganlo desde acá.</p>
        <div className="grid grid-cols-2 gap-6 items-start">
          <div>
            <div className="t-label font-bold tracking-widest uppercase text-[#c89bf0] mb-1.5">El prompt que pego</div>
            <pre className="bg-[#1a0f2e] text-[#ecdcff] rounded-lg border-l-4 border-[#a86bd8] px-5 py-4 t-mono leading-relaxed whitespace-pre-wrap font-mono overflow-hidden">{prompt}</pre>
            <div className="mt-3 flex items-center gap-3">
              <button onClick={copiar}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${copiado ? 'bg-[#2f9e6b] text-white' : 'bg-[#a86bd8] text-white hover:brightness-110'}`}>
                {copiado ? <><Check size={15} /> Copiado</> : <><Copy size={15} /> Copiar prompt</>}
              </button>
              {descargaClaudeMd && <DescargarClaudeMd />}
            </div>
          </div>
          <div>
            <div className="t-label font-bold tracking-widest uppercase text-[#c89bf0] mb-1.5">Qué mirar mientras construyo</div>
            <div className="rounded-lg bg-white/10 border border-white/15 px-5 py-4 text-white/90 t-body leading-snug">
              {mirar ?? 'Cómo pido de a un paso, cómo verifico cada cosa antes de seguir, y qué hago cuando algo falla.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Slide de BREAK con timer editable (default 15 min). Cuenta regresiva grande y
 *  animación al llegar a cero. El estado vive en el componente del slide. */
export function Break({ minutos = 15, etiqueta = 'Break' }: { minutos?: number; etiqueta?: string }) {
  const [total, setTotal] = useState(minutos * 60)
  const [restante, setRestante] = useState(minutos * 60)
  const [corriendo, setCorriendo] = useState(false)
  const ref = useRef<number | null>(null)
  const termino = restante === 0

  useEffect(() => {
    if (!corriendo) return
    ref.current = window.setInterval(() => {
      setRestante((r) => {
        if (r <= 1) { window.clearInterval(ref.current!); setCorriendo(false); return 0 }
        return r - 1
      })
    }, 1000)
    return () => { if (ref.current) window.clearInterval(ref.current) }
  }, [corriendo])

  function arrancar() { if (restante === 0) setRestante(total); setCorriendo(true) }
  function pausar() { setCorriendo(false) }
  function reiniciar() { setCorriendo(false); setRestante(total) }
  function ajustar(delta: number) {
    const nuevo = Math.max(60, Math.min(60 * 60, total + delta * 60))
    setTotal(nuevo); if (!corriendo) setRestante(nuevo)
  }

  const mm = String(Math.floor(restante / 60)).padStart(2, '0')
  const ss = String(restante % 60).padStart(2, '0')
  const pct = total > 0 ? (restante / total) * 100 : 0

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: 'linear-gradient(135deg,#0d6e8c 0%,#1D294D 120%)', borderTop: '6px solid #3C8DBC' }}>
      <img src={logoBlanco} alt="UdeSA" className="absolute top-7 right-10 h-7 opacity-90" />
      <div className="absolute bottom-6 left-12 text-white/45 t-label tracking-wide">{MATERIA}</div>

      {/* pulso de fondo cuando terminó */}
      <AnimatePresence>
        {termino && (
          <motion.div key="pulso" className="absolute inset-0 bg-[#2f9e6b]"
            initial={{ opacity: 0 }} animate={{ opacity: [0, 0.35, 0] }} exit={{ opacity: 0 }}
            transition={{ duration: 1.4, repeat: Infinity }} />
        )}
      </AnimatePresence>

      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 text-[#9fd8ec] font-bold tracking-[0.2em] uppercase text-sm mb-3">
          <Coffee size={18} /> {etiqueta}
        </div>

        <AnimatePresence mode="wait">
          {termino ? (
            <motion.div key="fin" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 14 }} className="text-center">
              <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 1, repeat: Infinity }}
                className="font-display font-extrabold text-white text-[88px] leading-none">¡Volvemos!</motion.div>
              <p className="text-white/70 text-xl mt-3">Se terminó el break. Arrancamos de nuevo.</p>
            </motion.div>
          ) : (
            <motion.div key="contando" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
              <div className="font-display font-extrabold text-white tabular-nums leading-none" style={{ fontSize: '150px' }}>
                {mm}:{ss}
              </div>
              {/* barra de progreso */}
              <div className="w-[420px] h-2 rounded-full bg-white/15 mx-auto mt-6 overflow-hidden">
                <div className="h-full rounded-full bg-[#3C8DBC] transition-all duration-1000 ease-linear" style={{ width: `${pct}%` }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* controles */}
        <div className="flex items-center gap-3 mt-9">
          {!termino && (
            <button onClick={() => ajustar(-1)} disabled={corriendo} aria-label="Restar un minuto"
              className="grid place-items-center w-11 h-11 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 disabled:opacity-30 transition">
              <Minus size={18} strokeWidth={2.5} />
            </button>
          )}
          {!corriendo && !termino && (
            <button onClick={arrancar} className="inline-flex items-center gap-2 rounded-xl bg-[#3C8DBC] px-7 py-3 font-semibold text-white shadow-soft hover:brightness-110 transition t-body">
              <Play size={19} /> Iniciar {mm}:{ss}
            </button>
          )}
          {corriendo && (
            <button onClick={pausar} className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-7 py-3 font-semibold text-white hover:bg-white/25 transition t-body">
              <Pause size={19} /> Pausar
            </button>
          )}
          {(corriendo || termino || restante !== total) && (
            <button onClick={reiniciar} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-semibold text-white/80 hover:bg-white/10 transition">
              <RotateCcw size={18} /> Reiniciar
            </button>
          )}
          {!termino && (
            <button onClick={() => ajustar(1)} disabled={corriendo} aria-label="Sumar un minuto"
              className="grid place-items-center w-11 h-11 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 disabled:opacity-30 transition">
              <Plus size={18} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
