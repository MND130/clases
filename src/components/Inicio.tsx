import { useEffect } from 'react'
import logoBlanco from '../assets/logo_udesa_blanco.png'
import { ArrowRight, Maximize, Minimize, BookOpen } from 'lucide-react'
import { useFullscreen } from '../lib/useFullscreen'

const CLASES = [
  { n: 1, t: 'El método: decidir antes de construir', d: 'The MND130 Way, las 8 decisiones y los docs de tu proyecto.' },
  { n: 2, t: 'Construir: en fases y en local', d: 'Setup, prompting y build incremental en local.' },
  { n: 3, t: 'Sumar IA: chatbots y agentes', d: 'IA adentro del producto: chatbot, agente y RAG.' },
  { n: 4, t: 'Revisar y publicar', d: 'Calidad, analytics, deploy a producción y presentación.' },
]

export function Inicio({ onElegir, onMaterial }: { onElegir: (i: number) => void; onMaterial: () => void }) {
  const { fs, toggle } = useFullscreen()
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key.toLowerCase() === 'f') toggle() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggle])
  return (
    <div className="relative w-full h-full overflow-hidden bg-udesa-dark" style={{ borderTop: '6px solid #3C8DBC' }}>
      <img src={logoBlanco} alt="UdeSA" className="absolute top-7 right-10 h-7 opacity-90" />
      <button onClick={toggle} title={fs ? 'Salir de pantalla completa (F)' : 'Pantalla completa (F)'}
        className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition px-4 py-2 text-sm font-medium z-10">
        {fs ? <><Minimize size={16} /> Salir de pantalla completa</> : <><Maximize size={16} /> Pantalla completa</>}
      </button>
      <div className="h-full px-20 py-16 flex flex-col justify-center max-w-[1200px]">
        <div className="w-24 h-[5px] rounded bg-gradient-to-r from-udesa-sigedu to-white mb-6" />
        <div className="text-udesa-sigedu font-bold tracking-[0.16em] uppercase text-sm mb-2">MND130 · Posgrado UdeSA</div>
        <h1 className="font-display font-extrabold text-white text-5xl leading-tight max-w-[20ch] mb-10">
          Cómo acelerar el ciclo de desarrollo de un MVP con IA
        </h1>
        <div className="grid grid-cols-2 gap-5">
          {CLASES.map((c) => (
            <button key={c.n} onClick={() => onElegir(c.n)}
              className="group text-left rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-udesa-sigedu transition p-6 flex items-center gap-5">
              <span className="font-display font-extrabold text-4xl text-udesa-sigedu w-12 shrink-0">{c.n}</span>
              <span className="flex-1">
                <span className="block font-display font-bold text-white text-2xl leading-tight">{c.t}</span>
                <span className="block text-white/55 text-[15px] mt-1">{c.d}</span>
              </span>
              <ArrowRight className="text-white/30 group-hover:text-udesa-sigedu transition" size={24} />
            </button>
          ))}
        </div>
      </div>
      <button onClick={onMaterial}
        className="group absolute bottom-6 left-10 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] hover:bg-white/12 hover:border-udesa-sigedu transition px-5 py-2.5 z-10">
        <BookOpen size={18} className="text-udesa-sigedu" />
        <span className="font-semibold text-white text-sm">Material de referencia</span>
        <ArrowRight className="text-white/30 group-hover:text-udesa-sigedu transition" size={16} />
      </button>
    </div>
  )
}
