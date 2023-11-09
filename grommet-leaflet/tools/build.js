const { build } = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');
const { dependencies } = require('../package.json');

const entryFile = 'src/index.js';

const shared = {
  bundle: true,
  entryPoints: [entryFile],
  // treating dependencies as external to keep the bundle size minimal
  external: Object.keys(dependencies),
  plugins: [sassPlugin({ type: 'style' })],
  logLevel: 'info',
  minify: true,
  sourcemap: true,
};

build({
  ...shared,
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ['esnext', 'node12.22.0'],
});

build({
  ...shared,
  format: 'cjs',
  outfile: './dist/index.cjs.js',
  target: ['esnext', 'node12.22.0'],
});

build({
  entryPoints: ['src/index.d.ts'],
  outfile: './dist/index.d.ts',
  target: ['esnext', 'node12.22.0'],
});
