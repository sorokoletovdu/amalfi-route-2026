import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sorokoletovdu.github.io',
  base: '/amalfi-route-2026',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
