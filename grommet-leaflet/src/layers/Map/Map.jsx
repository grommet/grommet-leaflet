import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, AttributionControl } from 'react-leaflet';
import styled, { ThemeContext } from 'styled-components';
import { deepMerge } from '../../utils';
import { base } from '../../themes';
import { TileLayer } from '../TileLayer';

const StyledMapContainer = styled(MapContainer)`
  ${({ theme }) => {
    return `
      ${
        theme?.global?.font?.family
          ? `font-family: ${theme.global.font.family};`
          : ''
      }
      height: 100%;
    `;
  }}
`;

const Map = ({
  center = [0, 0],
  children,
  // level 20 is the highest zoom level per OpenStreetMap docs
  // (https://wiki.openstreetmap.org/wiki/Zoom_levels)
  maxZoom = 20,
  minZoom = 3,
  ref,
  scrollWheelZoom = true,
  tileLayer,
  theme,
  zoom = 1,
  zoomControl = false,
  ...rest
}) => {
    // Internal ref to track the map instance for cleanup
    const mapRef = useRef(null);
    
    // grab grommet theme from the application
    const appTheme = useContext(ThemeContext);
    // merge map theme and caller's theme into app theme
    const mapTheme = deepMerge(appTheme, { map: deepMerge(base, theme) });

    // Cleanup effect to handle React 19 StrictMode double-mounting
    useEffect(() => {
      return () => {
        // When component unmounts, properly clean up the Leaflet map
        if (mapRef.current) {
          const container = mapRef.current;
          // Check if this is a Leaflet map instance
          if (container._leaflet_id) {
            // Remove the map instance to allow re-initialization
            container.remove();
          }
        }
      };
    }, []);

    // Combined ref handler to support both internal tracking and forwarded ref
    const handleRef = (node) => {
      mapRef.current = node;
      
      // Handle forwarded ref
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    return (
      <ThemeContext.Provider value={mapTheme}>
        <StyledMapContainer
          attributionControl={false}
          center={center}
          ref={handleRef}
          scrollWheelZoom={scrollWheelZoom}
          maxZoom={maxZoom}
          minZoom={minZoom}
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
};

Map.propTypes = {
  center: PropTypes.array,
  children: PropTypes.any,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  scrollWheelZoom: PropTypes.string || PropTypes.bool,
  maxZoom: PropTypes.number,
  minZoom: PropTypes.number,
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
