# Atelier Handrbolka

Webová apka na grafiku pre Atelier Handrbolka: Instagram post a story, plagát A4 a A3 (PDF) a krátke intro video na Reels. Beží ako PWA, dá sa pridať na plochu iPhonu.

- **Hosting:** GitHub Pages z vetvy `main` (koreň repozitára).
- **Návrhy v cloude:** Supabase (projekt „stullers home“), tabuľka `atelier_navrhy`. Prístup len cez funkcie `atelier_*`, ktoré overujú kód ateliéru. Kód sa zadáva v apke pod „Moje návrhy“ a v repozitári nie je.
- **Súbory:** `index.html` (celá apka), `manifest.webmanifest`, `sw.js` (offline), `icons/`.

## Pridanie na iPhone
Otvor odkaz v Safari → tlačidlo Zdieľať → „Pridať na plochu“.

## Úpravy
Po zmene `index.html` zvýš `VERZIA` v `sw.js`, aby sa nová verzia v telefóne načítala.
