import { useCallback, useEffect, useState } from 'react'

/** Estado de pantalla completa + toggle, sincronizado con el navegador. */
export function useFullscreen() {
  const [fs, setFs] = useState(false)

  useEffect(() => {
    const onChange = () => setFs(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  const toggle = useCallback(() => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.()
    else document.exitFullscreen?.()
  }, [])

  const enter = useCallback(() => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {})
  }, [])

  return { fs, toggle, enter }
}
