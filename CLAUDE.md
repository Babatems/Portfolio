# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at http://localhost:3000
npm run build    # Production build → /build
npm test         # Jest in interactive watch mode
```

No linting commands beyond what CRA includes (ESLint is built into `react-scripts`).

## Architecture

Single-page React app (Create React App) with **ref-based smooth scrolling** — React Router is installed but unused; navigation is handled by passing refs and a `scrollToSection()` callback from `App.js` down to `NavBar.js`.

### Layout flow

`App.js` owns all section refs and renders them sequentially:

```
NavBar (sticky, receives scrollToSection + refs)
Home → About → TechStack → Projects → Contact → Footer
```

A 2-second loading spinner (`ui/spinner.js`) gates the initial render. A fixed back-to-top button appears after 300px scroll.

### Sections (`src/sections/`)

Each section is a standalone component. `About.js` uses `react-intersection-observer` for a fade-in on scroll. `Home.js` composes `Typewriter.js` (cycles through 11-language greetings) and `FlickeringGrid` (canvas-based animated background).

### UI components (`src/ui/`)

- `flickering-grid.js` — Canvas-based background; parametrized via props (`squareSize`, `gridGap`, `flickerChance`, `maxOpacity`). Uses `useCallback`/`useMemo` and a `ResizeObserver` for performance.
- `spinner.js` — SVG spinner; accepts `size` and `className`.

### Styling

Tailwind CSS v3 (utility-first). Custom fonts configured in `tailwind.config.js`: Poppins, Lato, DM Sans. The `cn()` helper in `src/lib/utils.js` merges Tailwind classes via `clsx` + `tailwind-merge`.

Responsive pattern: mobile-first with large desktop padding (`px-4 md:px-[250px]`). Yellow-600 is the primary accent color.

### Static data

Projects are a plain array defined inside `Projects.js` — each entry has `name`, `url`, `github`, `image`, `description`, and `techStack`. The resume is served as `/public/Resume.docx`.

## Key dependencies

| Package | Role |
|---|---|
| `framer-motion` | Typewriter cursor animation |
| `react-intersection-observer` | Scroll-triggered fade-ins |
| `@mui/icons-material` | Icons in About/Projects |
| `react-icons` | Social icons in Footer (`FaLinkedin`, `FaGithub`, `FaTwitter`) |
| `tailwind-merge` + `clsx` | Safe class merging via `cn()` |

## Deployment

Hosted on Netlify (`babatems.netlify.app`). Production build is `/build` (CRA standard output).
