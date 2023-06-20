import React, { forwardRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

const StyledMapContainer = styled(MapContainer)`
  ${({ theme }) => {
    return `
      font-family: ${theme.global.font.family};
      height: 100%;
    `;
  }}
`;

const Map = forwardRef(
  ({ center, children, scrollWheelZoom, zoom, ...rest }, ref) => {
    return (
      <StyledMapContainer
        center={center}
        ref={ref}
        scrollWheelZoom={scrollWheelZoom}
        zoom={zoom}
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
    );
  },
);

export { Map };
