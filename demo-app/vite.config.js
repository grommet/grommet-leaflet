module.exports = {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          leaflet: ['leaflet'],
          grommet: ['grommet', 'grommet-icons', 'grommet-theme-hpe'],
          vendor: ['react', 'react-dom', 'react-router-dom', 'styled-components'],
        },
      },
    },
  },
};
