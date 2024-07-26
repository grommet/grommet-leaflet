import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [peerDepsExternal(), react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'grommet-leaflet',
      fileName: 'grommet-leaflet',
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled with library
      external: [
        'react',
        // 'react/jsx-runtime',
        'react-dom',
        // 'react-dom/server',
        'styled-components',
        'grommet',
      ],
      output: {
        // global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
          // 'styled-components': 'styled',
          'react-dom': 'ReactDOM',
          grommet: 'grommet',
          // 'react-dom/server': 'ReactDOMServer',
          'react/jsx-runtime': 'react/jsx-runtime.js',
        },
      },
    },
  },
});
