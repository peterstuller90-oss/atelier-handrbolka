# Atelier Handrbolka

Apka: https://peterstuller90-oss.github.io/atelier-handrbolka/

Webová apka na grafiku pre Atelier Handrbolka: Instagram post a story, plagát A4 a A3 (PDF) a krátke intro video na Reels. Beží ako PWA, dá sa pridať na plochu iPhonu.

- **Hosting:** GitHub Pages z vetvy `main` (koreň repozitára).
- **Návrhy v cloude:** Supabase (projekt „stullers home“), tabuľka `atelier_navrhy`. Prístup len cez funkcie `atelier_*`, ktoré overujú kód ateliéru. Kód sa zadáva v apke pod „Moje návrhy“ a v repozitári nie je.
- **Tlač:** plagáty A4/A3 idú ako vektorové PDF (texty prevedené na krivky, logo a ozdoby ako vektory), fotky vložené v 300 dpi. Voľba spadávky 3 mm s orezovými značkami (TrimBox/BleedBox). PNG pre sociálne siete má 72 dpi.
- **Súbory:** `index.html` (celá apka), `manifest.webmanifest`, `sw.js` (offline), `icons/`, `libs/` (jsPDF, JSZip, mp4-muxer, opentype.js), `fonts/` (Montserrat TTF pre krivky v PDF).

## Pridanie na iPhone
Otvor odkaz v Safari → tlačidlo Zdieľať → „Pridať na plochu“.

## Úpravy
Po zmene `index.html` zvýš `VERZIA` v `sw.js`, aby sa nová verzia v telefóne načítala.
