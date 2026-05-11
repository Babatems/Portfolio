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

React app (Create React App) with two routes served via React Router v7 (BrowserRouter in `index.js`, Routes/Route in `App.js`):

- `/` — single-page homepage with ref-based smooth scrolling
- `/projects` — standalone projects gallery page with 3 view modes

### Layout flow

`App.js` defines the two routes. `HomePage` (inside `App.js`) owns all section refs and passes `scrollToSection()` down to `NavBar`:

```
NavBar (sticky; scroll-nav on /, link-nav on /projects)
Home → About → TechStack → Projects → Contact → Footer
```

`ProjectsPage` (`src/pages/ProjectsPage.js`) has its own NavBar + Footer and a view-mode switcher.

A 2-second loading spinner (`ui/spinner.js`) gates the initial render on `/`. A fixed back-to-top button appears after 300px scroll.

### NavBar behaviour

`NavBar` uses `useLocation()` to detect the current route. On `/`, nav items call `scrollToSection()`; on any other route, they render as `<Link to="/">` anchors back to home.

### Sections (`src/sections/`)

Each section is a standalone component. `About.js` uses `react-intersection-observer` for a fade-in on scroll. `Home.js` composes `Typewriter.js` (cycles through 11-language greetings) and `FlickeringGrid` (canvas-based animated background).

### Pages (`src/pages/`)

`ProjectsPage.js` — three view modes (Grid / List / Compact) toggled via `ViewSwitcher`. View preference persists in `localStorage` under the key `portfolio-view-mode`. Mode changes use a 150ms fade-out/in transition (`isTransitioning` state). Screen reader mode announcements via `aria-live="polite"`.

### Project card components (`src/components/projects/`)

| File | View | Key behaviour |
|---|---|---|
| `ViewSwitcher.js` | — | Segmented control; MUI GridView / ViewList / DensityMedium icons; `aria-pressed` per button |
| `GridCard.js` | Grid | `aspect-video` image, 3-line description, max-5 tech badges + overflow pill, filled CTA + GitHub icon button |
| `ListCard.js` | List | Image right 40% / content left 60% (stacks mobile), full description, year+category metadata, all badges, dual CTAs |
| `CompactCard.js` | Compact | 64×64 thumbnail, truncated title, top-3 tech, category badge; entire row is a link |

All three cards handle `image: null` (letter placeholder) and `url: null` (GitHub fallback, Live Demo hidden).

### Shared data

`src/data/projects.js` — single source of truth for all 7 projects. Schema:

```js
{ id, name, url, github, image, description, techStack, category, year }
```

- `techStack` is an **array** of strings — use `.join(', ')` when rendering as plain text (e.g., in `Projects.js` on the homepage).
- `url` and `image` may be `null`.

`src/sections/Projects.js` (homepage) renders only the first 3 projects (`projects.slice(0, 3)`) with a "See All Projects" CTA that links to `/projects`. `src/pages/ProjectsPage.js` renders all 7. Both import from this file. The resume is at `/public/Resume.docx`.

### UI components (`src/ui/`)

- `flickering-grid.js` — Canvas-based background; parametrized via props (`squareSize`, `gridGap`, `flickerChance`, `maxOpacity`). Uses `useCallback`/`useMemo` and a `ResizeObserver` for performance.
- `spinner.js` — SVG spinner; accepts `size` and `className`.

### Styling

Tailwind CSS v3 (utility-first). Custom fonts configured in `tailwind.config.js`: Poppins, Lato, DM Sans. The `cn()` helper in `src/lib/utils.js` merges Tailwind classes via `clsx` + `tailwind-merge`.

**Responsive padding scale** used consistently across all sections and NavBar:
```
px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px]
```

Yellow-600 is the primary accent color. Transitions-dev CSS custom properties are declared in `src/index.css` under `:root`.

## Key dependencies

| Package | Role |
|---|---|
| `react-router-dom` v7 | Routing (`/` and `/projects`) |
| `framer-motion` | Typewriter cursor animation |
| `react-intersection-observer` | Scroll-triggered fade-ins in About |
| `react-icons/si` | Brand icons in TechStack (Simple Icons set) |
| `react-icons/tb` | `TbBrandVscode` for VSCode in TechStack |
| `react-icons/fa` | Social icons in Footer (`FaLinkedin`, `FaGithub`, `FaTwitter`) |
| `@mui/icons-material` | Icons in About, Projects, Contact, ViewSwitcher |
| `tailwind-merge` | Safe class merging via `cn()` (uses `clsx` as a transitive dep — not in package.json directly) |
| `@headlessui/react` | Installed (not yet used in components) |
| `primereact` | CSS theme imported in `index.css`; not yet used in components |
| `@fontsource/lato` + `@fontsource/poppins` | Self-hosted web fonts for Lato and Poppins |

### TechStack icons

All 12 entries use `react-icons`. VSCode uses `TbBrandVscode` from `react-icons/tb` (official Tabler brand icon). Claude uses `SiClaude`; Claude Code uses `SiAnthropic`.

## Deployment

Hosted on Netlify (`babatems.netlify.app`). Production build is `/build` (CRA standard output).
