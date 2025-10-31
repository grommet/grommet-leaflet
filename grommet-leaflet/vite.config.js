import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    peerDepsExternal(), 
    react(), 
    dts({
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      exclude: ['**/*.test.tsx', '**/*.test.ts', '**/vitest.setup.ts', 'src/index.html'],
      outDir: 'dist',
      entryRoot: 'src',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'grommet-leaflet',
      fileName: 'grommet-leaflet',
      formats: ['es', 'cjs'],
    },
    sourcemap: true,
    rollupOptions: {
      // externalize deps that shouldn't be bundled with library
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        'react-dom/server',
        'styled-components',
        'grommet',
      ],
      output: {
        interop: 'auto',
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
