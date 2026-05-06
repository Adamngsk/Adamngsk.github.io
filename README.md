# Adam Ng Shu Kai Portfolio

A single-page developer portfolio built with React, Tailwind CSS, and Framer Motion.

## File Structure

```text
adam-ng-portfolio/
├─ public/
│  └─ assets/
│     └─ pre-rec-certification.png
├─ src/
│  ├─ components/
│  │  ├─ GlassCard.jsx
│  │  ├─ SectionHeader.jsx
│  │  └─ Terminal.jsx
│  ├─ data/
│  │  └─ siteData.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ eslint.config.js
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ vite.config.js
```

## Local Development

```bash
npm install
npm run dev
```

On Windows PowerShell systems where script execution is restricted, use:

```powershell
npm.cmd install
npm.cmd run dev
```

## Production Build

```bash
npm run build
```

## GitHub Pages Deployment

This Vite/React site is deployed by `.github/workflows/static.yml`. On every push to
`main` or `master`, GitHub Actions installs dependencies, lints, builds the app, and
publishes the generated `dist` folder to the `gh-pages` branch.

In repository settings, set GitHub Pages to publish from:

```text
Branch: gh-pages
Folder: / (root)
```

## Notes

- Update `src/data/siteData.js` with Adam's final GitHub and LinkedIn profile URLs.
- The contact form opens the user's email client with a prefilled message.
