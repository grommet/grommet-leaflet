module.exports = {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          leaflet: ['leaflet', 'react-leaflet', 'leaflet.markercluster'],
          react: ['react', 'react-dom', 'react-router-dom'],
          grommet: ['grommet', 'grommet-icons', 'grommet-theme-hpe'],
          'grommet-leaflet': ['grommet-leaflet'],
        },
      },
    },
  },
};
