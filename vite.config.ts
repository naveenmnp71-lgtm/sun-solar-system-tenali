import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this site from /sun-solar-system-tenali/
export default defineConfig({
  base: '/sun-solar-system-tenali/',
  plugins: [react()],
});
