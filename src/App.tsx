import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Deck } from './components/Deck'
import { Inicio } from './components/Inicio'
import { Material } from './components/Material'
import { clase1 } from './clases/Clase1'
import { clase2 } from './clases/Clase2'
import { clase3 } from './clases/Clase3'
import { clase4 } from './clases/Clase4'

const DECKS: Record<number, React.ReactNode[]> = { 1: clase1, 2: clase2, 3: clase3, 4: clase4 }

type Vista = { tipo: 'inicio' } | { tipo: 'clase'; n: number } | { tipo: 'material' }

export default function App() {
  const [vista, setVista] = useState<Vista>({ tipo: 'inicio' })

  return (
    <AnimatePresence mode="wait">
      {vista.tipo === 'inicio' && (
        <motion.div key="inicio" className="fixed inset-0"
          initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
          <Inicio onElegir={(n) => setVista({ tipo: 'clase', n })} onMaterial={() => setVista({ tipo: 'material' })} />
        </motion.div>
      )}
      {vista.tipo === 'clase' && (
        <motion.div key={`clase-${vista.n}`} className="deck-root-wrap fixed inset-0"
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
          <Deck slides={DECKS[vista.n]} onHome={() => setVista({ tipo: 'inicio' })} clase={vista.n} />
        </motion.div>
      )}
      {vista.tipo === 'material' && (
        <motion.div key="material" className="fixed inset-0"
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
          <Material onHome={() => setVista({ tipo: 'inicio' })} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
