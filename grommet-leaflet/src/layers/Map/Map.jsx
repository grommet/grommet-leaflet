import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, AttributionControl } from 'react-leaflet';
import styled, { ThemeContext } from 'styled-components';
import { deepMerge } from 'grommet/utils';
import { base } from '../../themes';
import { TileLayer } from '../TileLayer';

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
      // level 20 is the highest zoom level per OpenStreetMap docs
      // (https://wiki.openstreetmap.org/wiki/Zoom_levels)
      maxZoom = 20,
      scrollWheelZoom = true,
      tileLayer,
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
          attributionControl={false}
          center={center}
          ref={ref}
          scrollWheelZoom={scrollWheelZoom}
          maxZoom={maxZoom}
          zoom={zoom}
          zoomControl={zoomControl}
          {...rest}
        >
          <AttributionControl position="bottomright" prefix={false} />
          <TileLayer
            attribution={tileLayer.attribution}
            url={tileLayer.url}
            format={tileLayer.format}
            {...tileLayer}
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
  maxZoom: PropTypes.number,
  tileLayer: PropTypes.shape({
    attribution: PropTypes.string,
    url: PropTypes.string.isRequired,
    format: PropTypes.oneOf(['pmtiles']),
  }).isRequired,
  theme: PropTypes.object,
  zoom: PropTypes.number,
  zoomControl: PropTypes.bool,
};

export { Map };
