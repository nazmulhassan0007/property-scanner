# Property Scanner — landing page

Coded build of the Figma frame "Main File" (1920 artboard): hero with video + radar scanner, Explore London, Home journey, Product film, Comparison, Founding members and footer.

- Vite + React + TypeScript + Tailwind v4
- Scroll motion with GSAP ScrollTrigger (`src/motion.ts`); hover/loop animations in `src/index.css`
- Sections in `src/sections/`, generated from Figma and keyed by `data-node-id`

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # static output in dist/
```

The London photos are from Wikimedia Commons (CC BY / BY-SA) and need attribution or replacing before launch.
