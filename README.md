# Project Website

This is a minimal static website scaffold created for a project showcase.

## What’s included

- `index.html` — the single-page site
- `styles.css` — simple responsive styles
- `script.js` — tiny interactivity (nav toggle, contact form simulation)
- `package.json` — convenience scripts to run a local server

Additional pages added for the IRCS report:

- `exec.html` — Executive Summary (landing)
- `challenge.html` — The Challenge & Context
- `design.html` — Design & Selection
- `detailed.html` — Detailed Design & Proof
- `implement.html` — Implementation & Sustainability
- `annex.html` — Technical Annex

## Run locally

You can open `index.html` directly in a browser, or use the included npm script to serve it:

```powershell
npm install -g http-server; npm start
```

Or (without installing globally):

```powershell
npx http-server -c-1 -p 8080
```

Open http://localhost:8080 in your browser.

Note: The site is a static HTML scaffold with placeholders for images and figures (system diagram, prototype proof, financial charts, SDG icons). Replace the placeholder blocks with final assets when ready.

## Next steps

- Add your real project cards and links.
- Connect the contact form to an email service or backend.
- Add a custom domain and CI deploy (GitHub Pages, Netlify, Vercel).
