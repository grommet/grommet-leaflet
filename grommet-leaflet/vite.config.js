import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [peerDepsExternal(), react(), commonjs()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'grommet-leaflet',
      fileName: 'grommet-leaflet',
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled with library
      external: ['react', 'styled-components', 'prop-types', /node_modules/],
      output: {
        // global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
          'styled-components': 'styled',
          'prop-types': 'PropTypes',
        },
      },
    },
  },
});
