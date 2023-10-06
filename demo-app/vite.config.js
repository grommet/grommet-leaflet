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
    mainFields: ['module', 'jsnext:main', 'jsnext', 'local'],
  },
};
