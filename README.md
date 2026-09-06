# Automated Androids — FTC Website (2026–2027 Season)

Team website for FTC Team Automated Androids. Built with React, Vite, and Tailwind CSS, deployed on Firebase Hosting.

## Getting started

Requires [Node.js](https://nodejs.org/) 20+ (LTS).

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
```

## Project structure

```
src/
  components/   Navbar, Footer, shared UI
  pages/        Home, Robot, Team, Sponsors — one file per route
  App.jsx       route definitions
  main.jsx      app entry point
```

Content marked `// TODO` throughout `src/pages` and `src/components` still needs
real team info (team number, roster, sponsors, robot photos/specs).

## Building

```bash
npm run build     # outputs static site to dist/
npm run preview   # preview the production build locally
```

## Deploying to Firebase Hosting

This repo has `firebase.json` already configured to serve `dist/` as a single-page app.
One-time setup (run these yourself — they need your Google account):

```bash
npx firebase login
npx firebase projects:create   # or use an existing project from console.firebase.google.com
npx firebase use --add         # select the project, give it an alias like "default"
```

That last command creates `.firebaserc` (not gitignored) — commit it once it exists so
teammates deploy to the same project.

After that, deploy any time with:

```bash
npm run deploy    # builds, then runs `firebase deploy --only hosting`
```

Firebase will print the live hosting URL (also visible in the Firebase console under
**Hosting**).

## Linting

```bash
npm run lint
```
