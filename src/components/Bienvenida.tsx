import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import logoBlanco from '../assets/logo_udesa_blanco.png'

/** Portada de entrada: un click entra a pantalla completa Y a la app
 *  (los navegadores no permiten fullscreen sin un gesto del usuario). */
export function Bienvenida({ onEntrar }: { onEntrar: () => void }) {
  return (
    <div className="fixed inset-0 grid place-items-center bg-udesa-dark cursor-pointer"
         onClick={onEntrar} style={{ borderTop: '6px solid #3C8DBC' }}>
      <img src={logoBlanco} alt="UdeSA" className="absolute top-7 right-10 h-7 opacity-90" />
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="text-center px-10 max-w-[760px]">
        <div className="w-20 h-[5px] rounded bg-gradient-to-r from-udesa-sigedu to-white mx-auto mb-8" />
        <div className="text-udesa-sigedu font-bold tracking-[0.18em] uppercase text-sm mb-3">MND130 · Posgrado UdeSA</div>
        <h1 className="font-display font-extrabold text-white text-5xl leading-tight mb-10">
          Cómo acelerar el ciclo de desarrollo de un MVP con IA
        </h1>
        <div className="inline-flex items-center gap-3 rounded-full bg-udesa-sigedu px-8 py-4 text-white font-semibold text-lg shadow-soft hover:brightness-110 transition">
          <Play size={20} fill="currentColor" /> Empezar
        </div>
        <p className="text-white/40 text-sm mt-5">Se abre en pantalla completa</p>
      </motion.div>
    </div>
  )
}
