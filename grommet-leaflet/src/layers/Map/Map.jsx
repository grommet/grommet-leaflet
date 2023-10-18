import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer } from 'react-leaflet';
import styled, { ThemeContext } from 'styled-components';
import { deepMerge } from 'grommet/utils';
import { base } from '../../themes';

const PORT = 8080;

const TILE_STYLES = {
  hosted: {
    alidade_smooth:
      'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
    alidade_smooth_dark:
      'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  },
  local: {
    'basic-preview': `http://localhost:${PORT}/styles/basic-preview/{z}/{x}/{y}.png`,
    positron: `http://localhost:${PORT}/styles/positron/{z}/{x}/{y}.png`,
    'osm-bright': `http://localhost:${PORT}/styles/osm-bright/{z}/{x}/{y}.png`,
  },
};

const tileServer = TILE_STYLES.local['basic-preview'];
// const tileServer = TILE_STYLES.hosted['alidade_smooth'];

const StyledMapContainer = styled(MapContainer)`
  ${({ theme }) => {
    return `
      font-family: ${theme.global.font.family};
      height: 100%;
    `;
  }}
`;

const Map = forwardRef(
  (
    {
      center = [0, 0],
      children,
      scrollWheelZoom,
      theme,
      zoom = 1,
      zoomControl = false,
      ...rest
    },
    ref,
  ) => {
    // grab grommet theme from the application
    const appTheme = useContext(ThemeContext);
    // merge map theme and caller's theme into app theme
    const mapTheme = deepMerge(appTheme, { map: deepMerge(base, theme) });

    return (
      <ThemeContext.Provider value={mapTheme}>
        <StyledMapContainer
          center={center}
          ref={ref}
          scrollWheelZoom={scrollWheelZoom}
          zoom={zoom}
          zoomControl={zoomControl}
          {...rest}
        >
          <TileLayer
            attribution={`
              &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>,
              &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>
                &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`}
            url={tileServer}
          />
          {children}
        </StyledMapContainer>
      </ThemeContext.Provider>
    );
  },
);

Map.propTypes = {
  center: PropTypes.array,
  children: PropTypes.any,
  scrollWheelZoom: PropTypes.string || PropTypes.bool,
  theme: PropTypes.object,
  zoom: PropTypes.number,
  zoomControl: PropTypes.bool,
};

export { Map };
