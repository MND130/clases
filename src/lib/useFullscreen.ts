import { useCallback, useEffect, useState } from 'react'

/** El elemento en pantalla completa, contemplando el prefijo webkit (Safari). */
function fsElement(): Element | null {
  return document.fullscreenElement ?? (document as any).webkitFullscreenElement ?? null
}

/** Pide pantalla completa, contemplando el prefijo webkit (Safari). */
function requestFs(el: HTMLElement): Promise<void> | undefined {
  const fn = el.requestFullscreen ?? (el as any).webkitRequestFullscreen
  return fn?.call(el)
}

/** Sale de pantalla completa, contemplando el prefijo webkit (Safari). */
function exitFs(): Promise<void> | undefined {
  const fn = document.exitFullscreen ?? (document as any).webkitExitFullscreen
  return fn?.call(document)
}

/** Estado de pantalla completa + toggle, sincronizado con el navegador. */
export function useFullscreen() {
  const [fs, setFs] = useState(false)

  useEffect(() => {
    const onChange = () => setFs(!!fsElement())
    document.addEventListener('fullscreenchange', onChange)
    document.addEventListener('webkitfullscreenchange', onChange)
    return () => {
      document.removeEventListener('fullscreenchange', onChange)
      document.removeEventListener('webkitfullscreenchange', onChange)
    }
  }, [])

  const toggle = useCallback(() => {
    if (!fsElement()) requestFs(document.documentElement)?.catch(() => {})
    else exitFs()
  }, [])

  const enter = useCallback(() => {
    if (!fsElement()) requestFs(document.documentElement)?.catch(() => {})
  }, [])

  return { fs, toggle, enter }
}
