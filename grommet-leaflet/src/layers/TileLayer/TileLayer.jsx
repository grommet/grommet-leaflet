import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { TileLayer as LeafletTileLayer } from 'react-leaflet';
import { leafletLayer, paintRules } from 'protomaps-leaflet';
import {
  createElementObject,
  createTileLayerComponent,
  updateGridLayer,
} from '@react-leaflet/core';

const leafletElement = ({ ...options }, context) => {
  const layer = leafletLayer({ paint_rules: options.paintRules, ...options });
  return createElementObject(layer, context);
};

const ProtomapsTileLayer = createTileLayerComponent(
  leafletElement,
  updateGridLayer,
);

export const TileLayer = ({ attribution, url, format, ...rest }) => {
  const theme = useContext(ThemeContext);

  let tileLayer = (
    <LeafletTileLayer attribution={attribution} url={url} {...rest} />
  );

  if (format === 'pmtiles') {
    tileLayer = (
      <ProtomapsTileLayer
        attribution={attribution}
        url={url}
        paintRules={theme.map?.tiles && paintRules({ ...theme.map.tiles })}
        {...rest}
      />
    );
  }

  return tileLayer;
};

TileLayer.propTypes = {
  attribution: PropTypes.string,
  url: PropTypes.string.isRequired,
  format: PropTypes.oneOf(['pmtiles']),
};
