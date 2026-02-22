import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Direktori output untuk build
    assetsDir: 'assets', // Direktori untuk file aset (CSS, gambar, dll.)
    minify: 'esbuild', // Minifikasi menggunakan esbuild
    sourcemap: true, // Menghasilkan sourcemap
    terserOptions: {
      compress: {
        drop_console: true, // Menghapus console.log saat minifikasi
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias untuk path src/
    },
  },
});
