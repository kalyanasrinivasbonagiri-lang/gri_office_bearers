# GRI Website

Mobile-first website for the Centre for Grassroots Research & Innovation at JAIN University.

## Run locally

```sh
npm install
npm run dev
```

## Edit office bearer details

Each office bearer has a file in `src/people/`. Edit that file to change the person's name, role, branch, year, mobile number, LinkedIn, GitHub, Instagram, or photo path. Put photos in `public/photos/` and use a path such as `/photos/president.jpg`. The GRI LinkedIn and Instagram links are configured in `src/site.jsx` and appear on every profile.

## GitHub Pages deployment

This project is prepared for a repository named `gri`, served at `https://<github-username>.github.io/gri/`.

1. Create a GitHub repository named `gri` and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Pushes to `main` will build the site and deploy the `dist` folder using the included workflow.

Profile URLs include the repository prefix, for example:

`https://<github-username>.github.io/gri/office-bearers/tech-lead/`

GitHub Pages does not provide SPA rewrite rules for nested URLs. The included workflow publishes fallback files for client-side routes so QR profile URLs work when opened directly. Once deployed, verify the final URL before printing QR codes.

For a repository with a different name, update `base` in `vite.config.js` to `/<repository-name>/` before deployment. For a custom domain or `username.github.io` repository, set the base path to `/`.
