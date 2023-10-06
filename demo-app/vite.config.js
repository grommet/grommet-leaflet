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
  resolve: {
    mainFields: ['jsnext', 'module', 'main'],
  },
};
