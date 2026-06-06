#!/usr/bin/env python3
"""
Timeline de las clases MND130.
Estima la duración slide-por-slide y muestra dónde caen los breaks.
Regla de ritmo: Break 1 ~60min, Break 2 ~120min, total ~180min.

Uso:  python3 scripts/timeline.py            (resumen de las 4 clases)
      python3 scripts/timeline.py 1 --full   (detalle completo de la clase 1)
"""
import re, sys, glob, os

# Minutos estimados por tipo de pieza (slide-por-slide, NO a ojo).
TIPO = {
    'Portada': 1.0, 'Seccion': 0.5, 'SlideClara': 2.3, 'SlideOscura': 2.0,
    'DemoEnVivo': 14.0, 'Checkpoint': 3.5, 'Break': 15.0,
}
PIEZAS = r'<(Portada|Seccion|SlideClara|SlideOscura|DemoEnVivo|Checkpoint|ManosALaObra|Break)\b([^>]*)'

def parse(path):
    s = open(path).read()
    items = []
    for m in re.finditer(PIEZAS, s):
        comp, rest = m.group(1), m.group(2)
        lbl = ''
        for attr in ('etiqueta', 'titulo', 'kicker'):
            mm = re.search(attr + r'="([^"]*)"', rest)
            if mm:
                lbl = mm.group(1)[:42]; break
        items.append((comp, lbl))
    hands = [int(x) for x in re.findall(r'minutos="(\d+) min"', s)]
    return items, hands

def run(path, full=False):
    items, hands = parse(path)
    hi = acc = 0
    breaks = []
    rows = []
    for comp, lbl in items:
        d = hands[hi] if comp == 'ManosALaObra' else TIPO[comp]
        if comp == 'ManosALaObra':
            hi += 1
        pre = acc; acc += d
        rows.append((pre, acc, comp, lbl))
        if comp == 'Break':
            breaks.append(round(pre))
    name = os.path.basename(path)
    # chequeo de ritmo
    warn = ''
    if len(breaks) >= 1 and not (45 <= breaks[0] <= 75):
        warn += f'  ⚠ Break1 a {breaks[0]}min (ideal ~60)'
    if len(breaks) >= 2 and not (105 <= breaks[1] <= 135):
        warn += f'  ⚠ Break2 a {breaks[1]}min (ideal ~120)'
    print(f'{name}: total {acc:.0f}min | breaks a los {breaks} min{warn}')
    if full:
        for pre, post, comp, lbl in rows:
            mark = '  <<<< BREAK' if comp == 'Break' else ''
            print(f'  {pre:6.1f}→{post:6.1f}  {comp:12} {lbl}{mark}')

if __name__ == '__main__':
    here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    full = '--full' in sys.argv
    if args:
        for n in args:
            run(os.path.join(here, 'src', 'clases', f'Clase{n}.tsx'), full)
    else:
        for path in sorted(glob.glob(os.path.join(here, 'src', 'clases', 'Clase*.tsx'))):
            run(path, full)
