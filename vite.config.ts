import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop();

          if (ext === 'css') return 'static/front/css/[name]-[hash][extname]';
          if (ext === 'woff' || ext === 'woff2' || ext === 'ttf' || ext === 'otf') return 'static/front/font/[name]-[hash][extname]';
          if (ext === 'png' || ext === 'jpg' || ext === 'jpeg' || ext === 'svg' || ext === 'webp' || ext === 'gif') return 'static/front/images/[name]-[hash][extname]';
          return 'static/front/assets/[name]-[hash][extname]'; // 기타 파일
        },
        chunkFileNames: 'static/front/js/[name]-[hash].js',
        entryFileNames: 'static/front/js/[name]-[hash].js',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://taptap.inpix.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/taptap'),
      },
    },
  },
});