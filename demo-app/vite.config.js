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
};
