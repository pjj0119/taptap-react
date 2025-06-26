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

          if (ext === 'css') return 'front/css/[name]-[hash][extname]';
          if (ext === 'woff' || ext === 'woff2' || ext === 'ttf' || ext === 'otf') return 'front/font/[name]-[hash][extname]';
          if (ext === 'png' || ext === 'jpg' || ext === 'jpeg' || ext === 'svg' || ext === 'webp' || ext === 'gif') return 'front/images/[name]-[hash][extname]';
          return 'front/assets/[name]-[hash][extname]'; // 기타 파일
        },
        chunkFileNames: 'front/js/[name]-[hash].js',
        entryFileNames: 'front/js/[name]-[hash].js',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173, // 원하는 포트
    proxy: {
      '/magazineApi': {
        target: 'https://taptap.inpix.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/magazineApi/, '/front/ajax'),
      },
      '/archiveApi': {
        target: 'https://taptap.inpix.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/archiveApi/, '/front/ajax'),
      },
    },
  },
});