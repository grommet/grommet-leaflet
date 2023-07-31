import React, { forwardRef, useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import styled, { ThemeContext } from 'styled-components';
import { base } from '../themes';
import { deepMerge } from 'grommet/utils';

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
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
          {children}
        </StyledMapContainer>
      </ThemeContext.Provider>
    );
  },
);

export { Map };
