import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Maximize, Minimize, Home, Download } from 'lucide-react'
import { useFullscreen } from '../lib/useFullscreen'

type Props = { slides: ReactNode[]; onHome?: () => void; clase?: number }

// Slide direccional: adelante entra desde la derecha y sale a la izquierda; atrás al revés.
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

export function Deck({ slides, onHome, clase }: Props) {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const [idle, setIdle] = useState(false)
  const [colapsada, setColapsada] = useState(false)
  const idleTimer = useRef<number | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const { fs, toggle: toggleFs } = useFullscreen()
  const n = slides.length

  const ir = useCallback((next: number) => {
    setDir(next > i ? 1 : -1)
    setI(Math.max(0, Math.min(n - 1, next)))
  }, [i, n])

  useEffect(() => { setI(0) }, [slides])

  // mientras el Deck está montado: impresión apaisada (A4 landscape, sin márgenes)
  useEffect(() => {
    document.body.classList.add('deck-activo')
    const style = document.createElement('style')
    style.id = 'deck-print-page'
    style.textContent = '@media print { @page { size: A4 landscape; margin: 0 } }'
    document.head.appendChild(style)
    return () => {
      document.body.classList.remove('deck-activo')
      document.getElementById('deck-print-page')?.remove()
    }
  }, [])

  // auto-ocultar controles tras inactividad (solo presentando)
  useEffect(() => {
    const wake = () => {
      setIdle(false)
      if (idleTimer.current) window.clearTimeout(idleTimer.current)
      idleTimer.current = window.setTimeout(() => setIdle(true), 2600)
    }
    wake()
    window.addEventListener('mousemove', wake)
    window.addEventListener('keydown', wake)
    return () => {
      window.removeEventListener('mousemove', wake)
      window.removeEventListener('keydown', wake)
      if (idleTimer.current) window.clearTimeout(idleTimer.current)
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); ir(i + 1) }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); ir(i - 1) }
      else if (e.key === 'Home') ir(0)
      else if (e.key === 'End') ir(n - 1)
      else if (e.key === 'Escape') { if (!document.fullscreenElement) onHome?.() }
      else if (e.key.toLowerCase() === 'f') toggleFs()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [i, ir, n, onHome, toggleFs])

  const ocultar = fs && idle

  return (
    <div ref={rootRef} className="deck-root fixed inset-0 grid place-items-center bg-black"
         style={{ cursor: ocultar ? 'none' : 'auto' }}>
      {/* lienzo 16:9 en pantalla — no se imprime */}
      <div className={`no-print relative overflow-hidden ${fs ? '' : 'rounded-xl shadow-2xl'}`}
           style={{ width: 'min(100vw, calc(100vh * 16 / 9))', height: 'min(100vh, calc(100vw * 9 / 16))' }}>
        <AnimatePresence mode="popLayout" custom={dir} initial={false}>
          <motion.div
            key={i}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            {slides[i]}
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 h-1 bg-udesa-sigedu transition-all duration-300 z-20"
             style={{ width: `${((i + 1) / n) * 100}%` }} />
      </div>

      {/* TODAS las slides apiladas — solo visible al imprimir (1 slide por hoja A4 landscape) */}
      <div className="print-deck">
        {slides.map((s, idx) => (
          <div key={idx} className="print-slide">{s}</div>
        ))}
      </div>

      {/* controles flotantes — centrados abajo, colapsables. Se desvanecen al presentar quieto. */}
      <div className={`no-print fixed bottom-5 left-1/2 -translate-x-1/2 z-30 transition-all duration-500 ${ocultar ? 'opacity-0' : 'opacity-100'} ${colapsada ? 'translate-y-[140%]' : 'translate-y-0'}`}>
        <div className="flex items-center gap-1.5 rounded-full bg-udesa-dark/85 backdrop-blur px-2 py-1.5 shadow-lg">
          {onHome && (
            <button onClick={onHome} title="Volver al inicio (Esc)"
              className="grid place-items-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition mr-1">
              <Home size={18} />
            </button>
          )}
          <button onClick={() => window.print()} title="Descargar clase como PDF"
            className="grid place-items-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition mr-1">
            <Download size={18} />
          </button>
          <button onClick={() => ir(i - 1)} disabled={i === 0}
            className="grid place-items-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition">
            <ChevronLeft size={20} />
          </button>
          <span className="text-white/60 text-sm tabular-nums w-20 text-center">
            {clase ? `C${clase} · ` : ''}{i + 1}/{n}
          </span>
          <button onClick={() => ir(i + 1)} disabled={i === n - 1}
            className="grid place-items-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition">
            <ChevronRight size={20} />
          </button>
          <button onClick={toggleFs} title={fs ? 'Salir de pantalla completa (F)' : 'Pantalla completa (F)'}
            className="grid place-items-center w-10 h-10 rounded-full bg-udesa-sigedu/90 text-white hover:bg-udesa-sigedu transition ml-1">
            {fs ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
          <button onClick={() => setColapsada(true)} title="Ocultar la barra"
            className="grid place-items-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition ml-1">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      {/* tirador para reabrir la barra cuando está colapsada */}
      <button onClick={() => setColapsada(false)} title="Mostrar la barra"
        className={`no-print fixed bottom-0 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center w-16 h-7 rounded-t-xl bg-udesa-dark/85 backdrop-blur text-white/70 hover:text-white shadow-lg transition-all duration-500 ${ocultar ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${colapsada ? 'translate-y-0' : 'translate-y-[140%] pointer-events-none'}`}>
        <ChevronUp size={18} />
      </button>
    </div>
  )
}
