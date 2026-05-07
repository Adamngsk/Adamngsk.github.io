# Adam Ng Shu Kai Portfolio

A multi-page developer portfolio built with React, React Router, Tailwind CSS, and Framer Motion.

## File Structure

```text
adam-ng-portfolio/
|-- public/
|   |-- .nojekyll
|   `-- assets/
|       `-- pre-rec-certification.png
|-- src/
|   |-- components/
|   |   |-- Footer.jsx
|   |   |-- GlassCard.jsx
|   |   |-- Navbar.jsx
|   |   |-- ScrollToTop.jsx
|   |   |-- SectionHeader.jsx
|   |   `-- Terminal.jsx
|   |-- data/
|   |   `-- siteData.js
|   |-- pages/
|   |   |-- Arsenal.jsx
|   |   |-- Contact.jsx
|   |   |-- Experience.jsx
|   |   |-- Home.jsx
|   |   |-- NotFound.jsx
|   |   |-- PageShell.jsx
|   |   |-- Projects.jsx
|   |   `-- TerminalPage.jsx
|   |-- utils/
|   |   `-- routerBase.js
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- .github/
|   `-- workflows/
|       `-- static.yml
|-- .nojekyll
|-- eslint.config.js
|-- index.html
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
`-- vite.config.js
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

## Routes

This app uses `HashRouter` for GitHub Pages refresh compatibility.

```text
/#/
/#/arsenal
/#/projects
/#/experience
/#/terminal
/#/contact
```

Unknown hash routes render the in-app 404 page.

## Production Build

```bash
npm run lint
npm run build
```

The build output uses relative asset paths because `vite.config.js` sets `base: "./"`.

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
