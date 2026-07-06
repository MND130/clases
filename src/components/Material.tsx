import { useState } from 'react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { ArrowLeft, Download, FileDown, BookOpen, Wrench, MessageSquareText, Lightbulb, FileCode2 } from 'lucide-react'
import logoNegro from '../assets/logo_udesa.png'

import cheatsheet from '../material/cheatsheet.md?raw'
import guiaSetup from '../material/guia_setup.md?raw'
import guiaVercel from '../material/guia_vercel.md?raw'
import guiaSupabase from '../material/guia_supabase.md?raw'
import guiaAnthropic from '../material/guia_anthropic.md?raw'
import pasoAPasoChatbot from '../material/paso_a_paso_chatbot.md?raw'
import prompts from '../material/prompt_templates.md?raw'
import ejercicios from '../material/ejercicios_proyectos.md?raw'
import claudeMd from '../material/claude_md.md?raw'

type Doc = { id: string; titulo: string; desc: string; icon: typeof BookOpen; md: string; archivo?: string }

const DOCS: Doc[] = [
  { id: 'claude', titulo: 'CLAUDE.md — The MND130 Way', desc: 'El método fijo que dirige a la IA. No se edita: ordena crear y mantener tus docs/.', icon: FileCode2, md: claudeMd, archivo: 'CLAUDE.md' },
  { id: 'cheatsheet', titulo: 'Cheatsheet', desc: 'Glosario, stacks, checklist de calidad y red flags.', icon: BookOpen, md: cheatsheet },
  { id: 'setup', titulo: 'Guía de Setup', desc: 'Lo previo a la Clase 1: Cursor y Claude Code.', icon: Wrench, md: guiaSetup },
  { id: 'vercel', titulo: 'Guía — Vercel', desc: 'Crear la cuenta y publicar tu app online (Clase 3).', icon: Wrench, md: guiaVercel },
  { id: 'supabase', titulo: 'Guía — Supabase', desc: 'Crear la cuenta y conectarla a Claude Code (Clase 3).', icon: Wrench, md: guiaSupabase },
  { id: 'anthropic', titulo: 'Guía — API de Anthropic', desc: 'Sacar tu API key, cargar crédito y armar tu chatbot (Clase 4).', icon: Wrench, md: guiaAnthropic },
  { id: 'chatbot', titulo: 'Paso a paso — Chatbot', desc: 'Los prompts para sumarle un chatbot a tu app, con RAG y agentes (Clase 4).', icon: MessageSquareText, md: pasoAPasoChatbot },
  { id: 'prompts', titulo: 'Prompt Templates', desc: 'Prompts modelo para cada etapa del MVP.', icon: MessageSquareText, md: prompts },
  { id: 'ejercicios', titulo: 'Proyectos de ejemplo', desc: 'Ideas de MVP desarrolladas como referencia.', icon: Lightbulb, md: ejercicios },
]

export function Material({ onHome }: { onHome: () => void }) {
  const [abierto, setAbierto] = useState<Doc | null>(null)

  if (abierto) return <DocVista doc={abierto} onVolver={() => setAbierto(null)} />

  return (
    <div className="relative w-full h-full overflow-hidden bg-udesa-dark" style={{ borderTop: '6px solid #3C8DBC' }}>
      <div className="h-full px-20 py-16 flex flex-col justify-center max-w-[1100px]">
        <button onClick={onHome} className="absolute top-7 left-10 inline-flex items-center gap-2 text-white/70 hover:text-white transition text-sm font-medium">
          <ArrowLeft size={16} /> Volver al inicio
        </button>
        <div className="text-udesa-sigedu font-bold tracking-[0.16em] uppercase text-sm mb-2">Material de referencia</div>
        <h1 className="font-display font-extrabold text-white text-5xl leading-tight mb-3">Lo que te llevás del curso</h1>
        <p className="text-white/55 text-lg mb-9 max-w-[60ch]">Documentos de consulta para cuando estés solo con la IA. Cada uno se puede descargar como PDF.</p>
        <div className="grid grid-cols-2 gap-5">
          {DOCS.map((d) => (
            <button key={d.id} onClick={() => setAbierto(d)}
              className="group text-left rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-udesa-sigedu transition p-6 flex items-start gap-4">
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-udesa-sigedu/15 text-udesa-sigedu shrink-0"><d.icon size={24} /></span>
              <span className="flex-1">
                <span className="block font-display font-bold text-white text-xl leading-tight">{d.titulo}</span>
                <span className="block text-white/55 text-[14px] mt-1">{d.desc}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function descargarMd(nombre: string, contenido: string) {
  const blob = new Blob([contenido], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = nombre
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function DocVista({ doc, onVolver }: { doc: Doc; onVolver: () => void }) {
  return (
    <div className="fixed inset-0 bg-[#0b1020] overflow-y-auto material-scroll">
      {/* barra superior — no se imprime */}
      <div className="no-print sticky top-0 z-20 flex items-center justify-between px-8 py-3 bg-udesa-dark/95 backdrop-blur border-b border-white/10">
        <button onClick={onVolver} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition text-sm font-medium">
          <ArrowLeft size={16} /> Material
        </button>
        {doc.archivo ? (
          <button onClick={() => descargarMd(doc.archivo!, doc.md)} className="inline-flex items-center gap-2 rounded-lg bg-udesa-sigedu px-4 py-2 text-white text-sm font-semibold hover:brightness-110 transition">
            <FileDown size={16} /> Descargar .md
          </button>
        ) : (
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-lg bg-udesa-sigedu px-4 py-2 text-white text-sm font-semibold hover:brightness-110 transition">
            <Download size={16} /> Descargar PDF
          </button>
        )}
      </div>

      {/* hoja A4 vertical, centrada — es lo que se imprime */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        className="mx-auto my-8 bg-white shadow-2xl print-sheet" style={{ width: '210mm', minHeight: '297mm' }}>
        <div className="doc-header flex items-center justify-between px-14 pt-12 pb-4 border-b-2" style={{ borderImage: 'linear-gradient(90deg,#3C8DBC,#1D294D) 1' }}>
          <img src={logoNegro} alt="UdeSA" className="h-7" />
          <span className="text-[11px] uppercase tracking-widest text-ink-soft font-bold">MND130 · Material</span>
        </div>
        <article className="markdown px-14 py-10">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{doc.md}</ReactMarkdown>
        </article>
      </motion.div>
    </div>
  )
}
