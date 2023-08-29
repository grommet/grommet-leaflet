import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet.markercluster';
import ReactDOMServer from 'react-dom/server';
import { Cluster, Popup } from '..';

const createMarkerClusterGroup = ({ ...rest }, context) => {
  const markerClusterGroup = new L.MarkerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: false,
    ...rest,
  });
  return createElementObject(
    markerClusterGroup,
    extendContext(context, { layerContainer: markerClusterGroup }),
  );
};

const LeafletMarkerCluster = createPathComponent(createMarkerClusterGroup);

const MarkerCluster = ({ icon: iconProp, popup: popupProp, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <LeafletMarkerCluster
      iconCreateFunction={cluster => {
        if (popupProp) {
          const popup = cluster.bindPopup(
            ReactDOMServer.renderToString(
              <ThemeContext.Provider value={theme}>
                <Popup>{popupProp({ cluster })}</Popup>
              </ThemeContext.Provider>,
            ),
          );

          cluster.on('click', () => {
            popup.openPopup();
          });
        }

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
      }}
      {...rest}
    />
  );
};

MarkerCluster.propTypes = {
  icon: PropTypes.func,
  popup: PropTypes.func,
};

export { MarkerCluster };
