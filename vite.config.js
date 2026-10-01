import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// This repository is named gri_office_bearers on GitHub Pages.
// For a custom domain or user site, set VITE_BASE_PATH=/.
const base = process.env.VITE_BASE_PATH || '/gri_office_bearers/';
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

function createProfilePages() {
  return {
    name: 'create-github-pages-profile-routes',
    apply: 'build',
    writeBundle(outputOptions) {
      const outputDir = path.resolve(projectRoot, outputOptions.dir || 'dist');
      const html = fs.readFileSync(path.join(outputDir, 'index.html'), 'utf8');
      const slugs = fs.readdirSync(path.join(projectRoot, 'src', 'people'))
        .filter(file => file.endsWith('.js'))
        .map(file => path.basename(file, '.js'));

      for (const slug of slugs) {
        for (const route of [slug, path.join('office-bearers', slug)]) {
          const routeDir = path.join(outputDir, route);
          fs.mkdirSync(routeDir, { recursive: true });
          fs.writeFileSync(path.join(routeDir, 'index.html'), html);
        }
      }
    },
  };
}

export default defineConfig({
  base,
  plugins: [createProfilePages()],
});
