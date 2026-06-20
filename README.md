# aashutosh-profile

Personal profile site for **Aashutosh Prakash** — a minimal, single-card landing page with a dark-mode-aware design, a featured projects list, and a hidden `/game` easter egg.

🔗 **Live:** https://aashutosh-profile.vercel.app/

## Tech stack

- [Next.js 16](https://nextjs.org/) (Pages Router) + [React 19](https://react.dev/)
- [Sass](https://sass-lang.com/) (CSS Modules) for styling
- [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/) for tests
- Deployed on [Vercel](https://vercel.com/)

## Project structure

Components follow an [atomic design](https://atomicdesign.bradfrost.com/) layout:

```
pages/                     Next.js routes (/ and /game)
src/
  component/
    atoms/                 Heading, Button, BackButton, icons
    molecules/             InfoCard (the profile card)
    organisms/             Home
    templates/             HomeTemplate, Game
  customHooks/             useDarkMode, useInterval
  jsUtils/                 shared helpers
  styles/                  global styles
```

The landing page content (name, bio, projects, social links) lives in
`src/component/molecules/InfoCard/InfoCard.jsx`.

## Getting started

Requires Node `22.x`.

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
```

## Scripts

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Start the local dev server           |
| `npm run build`      | Production build                     |
| `npm run start`      | Serve the production build           |
| `npm test`           | Run the test suite                   |
| `npm run test:watch` | Run tests in watch mode              |

## Features

- 🌗 Automatic light/dark mode based on the device preference
- 🧩 Inline **Projects** list linking to live apps and packages
- 🎮 Hidden game accessible via the "DEVELOPER" link

## License

[MIT](./LICENSE)
