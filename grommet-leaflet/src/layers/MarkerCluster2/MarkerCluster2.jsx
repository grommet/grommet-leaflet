import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createRoot } from 'react-dom/client';
import { ThemeContext } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import {
  createElementObject,
  createLayerComponent,
  extendContext,
} from '@react-leaflet/core';
import { Popup as LeafletPopup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.markercluster';
import { Cluster, Popup } from '..';

function createMarkerClusterGroup(props, context) {
  const clusterProps = {};
  const clusterEvents = {};

  Object.entries(props).forEach(([key, value]) => {
    if (key.startsWith('on')) {
      clusterEvents[key] = value;
    } else {
      clusterProps[key] = value;
    }
  });

  const markers = new L.MarkerClusterGroup(clusterProps);

  // Bind events to markers
  Object.entries(clusterEvents).forEach(([key, value]) => {
    const event = `cluster${key.substring(2).toLowerCase()}`;
    markers.on(event, value);
  });

  markers.on('clusterclick', e => {
    const { propagatedFrom } = e;
    const popupContent = clusterProps.popup({ markers });
    const popupId = `grommet-leaflet-popup-${uuidv4()}`;
    const popup = new L.Popup();
    popup
      .setLatLng(propagatedFrom.getLatLng())
      .setContent(`<div id="${popupId}"></div>`)
      .openOn(context.map);

    const domNode = document.getElementById(popupId);
    domNode.style.width = 'max-content';
    domNode.style.height = 'max-content';
    domNode.parentElement.style.width = 'max-content';
    const root = createRoot(domNode);
    root.render(popupContent);
  });

  return createElementObject(
    markers,
    extendContext(context, {
      layerContainer: markers,
    }),
  );
}

const LeafletMarkerCluster = createLayerComponent(createMarkerClusterGroup);

const MarkerCluster2 = props => {
  const { children, icon: iconProp, popup: popupProp, ...rest } = props;
  const theme = React.useContext(ThemeContext);
  const popupRef = React.useRef(null);

  const createIcon = cluster => {
    return L.divIcon({
      // 'grommet-cluster-group' class prevents
      // leaflet default divIcon styles
      className: 'grommet-cluster-group',
      html: ReactDOMServer.renderToString(
        <ThemeContext.Provider value={theme}>
          {iconProp ? (
            React.cloneElement(iconProp({ cluster }), {
              cluster,
            })
          ) : (
            <Cluster cluster={cluster} />
          )}
        </ThemeContext.Provider>,
      ),
    });
  };

  const popup = ({ cluster }) =>
    popupProp ? (
      <ThemeContext.Provider ref={popupRef} value={theme}>
        <Popup>{popupProp({ cluster })}</Popup>
      </ThemeContext.Provider>
    ) : undefined;

  return (
    <LeafletMarkerCluster
      iconCreateFunction={createIcon}
      popup={popup}
      {...rest}
    >
      {children}
    </LeafletMarkerCluster>
  );
};

export { MarkerCluster2 };
