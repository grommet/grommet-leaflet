module.exports = {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          leaflet: ['leaflet'],
          grommet: ['grommet'],
        },
      },
    },
  },
  // resolve: {
  //   // alias: {
  //   //   'grommet-leaflet': 'grommet-leaflet/dist/index.esm.js',
  //   // },
  //   // mainFields: ['module', 'main'],
  // },
};
