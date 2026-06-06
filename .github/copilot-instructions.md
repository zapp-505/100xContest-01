# Copilot Instructions for `week13react/vite-project`

## Project Scope
- This is a small React + Vite application located in `week13react/vite-project`.
- Primary source lives under `src/`; entrypoint is `src/main.jsx`, and the main UI component is `src/App.jsx`.
- UI components are organized in `src/components/`, including `button.jsx`, `otp.jsx`, `otp1.jsx`, and `answers/sidebar.jsx`.

## What matters most
- The app uses React function components with hooks such as `useState`, `useEffect`, and `useRef`.
- Styling is handled with Tailwind CSS plus local CSS files: `src/index.css` and `src/App.css`.
- The project is JavaScript-only (`type: module`), not TypeScript.

## Key conventions
- Keep components simple and use props for basic data flow.
- Tailwind utility classes are embedded directly in `className` strings, as seen in `src/components/answers/sidebar.jsx`.
- Use default Vite React conventions; avoid adding new routing, backend integration, or state-management libraries unless the task explicitly requires it.
- Prefer `export default` for standalone components like `button.jsx`, and named exports for reusable pieces like `Otp` and `Otp1`.

## Build and Run
- Development server: `npm run dev`
- Production build: `npm run build`
- Preview build output: `npm run preview`
- Linting: `npm run lint`

## Configuration notes
- `tailwind.config.js` includes `./src/**/*.{js,ts,jsx,tsx}` and `./components/**/*.{js,ts,jsx,tsx}` in content scanning.
- ESLint is configured through `eslint.config.js` with `@eslint/js`, React hooks rules, and Vite refresh support.
- No test framework is defined in `package.json`.

## Guidance for edits
- Prefer editing existing `src/components` files over adding new design systems.
- If adding UI, follow the tailwind-first approach already present in `src/components/otp.jsx` and `src/components/button.jsx`.
- Keep any changes compatible with Vite’s ESM module loading and current file structure.
- Do not assume a backend or API layer exists; this project is currently just a front-end prototype.

## Useful files
- `src/main.jsx` — React app bootstrap
- `src/App.jsx` — root component rendered by the app
- `src/components/otp.jsx` / `src/components/otp1.jsx` — examples of component state and input handling
- `src/components/answers/sidebar.jsx` — responsive layout example with Tailwind
- `eslint.config.js` — linting rules that Copilot should respect
- `tailwind.config.js` — Tailwind scanning paths
