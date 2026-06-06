import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Shuffle, Sparkles, Rocket, Copy, Check, Bot, ChevronLeft, ChevronRight } from 'lucide-react'
import { ideas, type Idea } from '../lib/ideas'

/** Prompt inicial listo para pegar en Claude Code / Cursor, alineado con The MND130 Way:
 *  primero Decidir (armar el CLAUDE.md), después Construir. */
function promptInicial(idea: Idea): string {
  return `Quiero construir el MVP de "${idea.nombre}": ${idea.frase}

Las features core: ${idea.core}
Lo que NO va en la v1: ${idea.estirar}
${idea.llevaIA ? '\nEste MVP lleva IA adentro: ' + idea.frase + '\n' : ''}
Trabajamos con The MND130 Way: primero decidimos, después construimos.
Antes de escribir código, ayudame a completar el brief en mi archivo
CLAUDE.md (problema, usuario, scope, pantallas y estados, datos, stack,
riesgos y criterios de éxito). Hacelo de a una pregunta, no todo junto.

Cuando el brief esté completo, recién ahí armamos el plan de fases.`
}

export function GeneradorIdeas() {
  const [i, setI] = useState<number | null>(null)
  const [copiado, setCopiado] = useState(false)
  const idea = i !== null ? ideas[i] : null

  function sortear() {
    // evita repetir la misma de corrido
    let n = Math.floor(Math.random() * ideas.length)
    if (i !== null && ideas.length > 1) while (n === i) n = Math.floor(Math.random() * ideas.length)
    setI(n); setCopiado(false)
  }
  function mover(delta: number) {
    if (i === null) { sortear(); return }
    setI((i + delta + ideas.length) % ideas.length); setCopiado(false)
  }

  async function copiarPrompt() {
    if (!idea) return
    try {
      await navigator.clipboard.writeText(promptInicial(idea))
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2200)
    } catch { /* noop */ }
  }

  return (
    <div className="w-full max-w-[1080px] mx-auto px-8 flex flex-col h-full justify-center">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 text-udesa-sigedu font-bold tracking-widest uppercase text-sm mb-1">
          <Sparkles size={16} /> Generador de MVP del curso
        </div>
        <h2 className="font-display font-extrabold text-3xl text-white">Una idea al azar para construir en vivo</h2>
        <p className="text-white/55 text-[15px] mt-1">{ideas.length} ideas ya scopeadas. Tocá Sorpresa y arrancamos con esa.</p>
      </div>

      <AnimatePresence mode="wait">
        {idea ? (
          <motion.div key={idea.nombre}
            initial={{ opacity: 0, y: 18, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl bg-white shadow-card px-8 py-6 mx-auto w-full max-w-[680px]" style={{ borderLeft: '6px solid #3C8DBC' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-[11px] font-bold tracking-widest uppercase text-udesa-sigedu">El MVP de hoy</div>
              {idea.llevaIA && <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-udesa-blue bg-[#eef5fb] rounded-full px-3 py-1"><Bot size={13} /> Lleva IA adentro</span>}
            </div>
            <p className="font-display font-extrabold text-[26px] leading-tight text-udesa-dark">{idea.nombre}</p>
            <p className="text-ink-soft text-[16px] leading-snug mt-1 mb-4">{idea.frase}</p>
            <div className="text-[14.5px] leading-snug space-y-2">
              <p><span className="font-bold text-udesa-blue">Core:</span> <span className="text-ink-soft">{idea.core}</span></p>
              <p className="inline-flex items-start gap-1.5"><Rocket size={15} className="text-udesa-dark mt-0.5 shrink-0" /><span className="text-ink-soft"><span className="font-bold text-udesa-dark">Para después:</span> {idea.estirar}</span></p>
            </div>
            <button onClick={copiarPrompt}
              className={`mt-5 w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${copiado ? 'bg-[#2f9e6b] text-white' : 'bg-udesa-blue text-white hover:brightness-110'}`}>
              {copiado ? <><Check size={16} /> Prompt copiado</> : <><Copy size={16} /> Copiar prompt inicial</>}
            </button>
            <p className="text-[11.5px] text-ink-soft mt-2 text-center">Lo pegás en Claude Code o Cursor. Arranca por el brief, no por el código.</p>
          </motion.div>
        ) : (
          <motion.div key="ph" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-12 text-center text-white/45 text-[16px] mx-auto w-full max-w-[680px]">
            Tocá <b className="text-white/70">Sorpresa</b> para que salga una idea.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-center gap-3 mt-6">
        <button onClick={() => mover(-1)} aria-label="Anterior"
          className="grid place-items-center w-11 h-11 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 transition">
          <ChevronLeft size={20} />
        </button>
        <button onClick={sortear}
          className="inline-flex items-center gap-2 rounded-xl bg-udesa-sigedu px-7 py-3 font-semibold text-white shadow-soft hover:brightness-110 transition text-[17px]">
          <Shuffle size={19} /> Sorpresa
        </button>
        <button onClick={() => mover(1)} aria-label="Siguiente"
          className="grid place-items-center w-11 h-11 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 transition">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
