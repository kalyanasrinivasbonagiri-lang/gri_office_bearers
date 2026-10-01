import { defineConfig } from 'vite';

// This repository is named gri_office_bearers on GitHub Pages.
// For a custom domain or user site, set VITE_BASE_PATH=/.
const base = process.env.VITE_BASE_PATH || '/gri_office_bearers/';

export default defineConfig({
  base,
});
