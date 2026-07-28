import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative asset paths for GitHub Pages deployment
  build: {
    outDir: 'dist',
  },
});
