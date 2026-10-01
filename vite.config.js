import { defineConfig } from 'vite';

// GitHub Pages serves project sites below /<repository-name>/.
// Override with VITE_BASE_PATH=/ for a custom domain or user site.
const base = process.env.VITE_BASE_PATH || '/gri/';

export default defineConfig({
  base,
});
