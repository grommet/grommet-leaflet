import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components';
import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet.markercluster';
import ReactDOMServer from 'react-dom/server';
import { Box, Text } from 'grommet';
import { statuses } from './GrommetMarker';

const StyledBox = styled(Box)`
  &:hover {
    // TO DO revisit "hover" color with designers. Use of "background-layer-overlay" feels strange semantically
    border: ${props => `${props.theme?.global?.borderSize?.[props.border.size] || props.border.size} solid ${props.theme?.global?.colors?.['background-layer-overlay']}`};
  }
`
const StyledCount = styled(Text)`
  // TO DO for some reason "Helvetica" was coming but not Metric?
  font-family: Metric;
  // multiplier of font-size, for tighter alignment
  line-height: 1;
`

// TO DO in production, this threshold should be set to 1000
// using 10 since our data set is small and I want to demo the
// different cluster flavors
const threshold = 10;
const formatCount = (count) => count > threshold ? `${Math.round(count / threshold)}k` : count;


// give critical status priority to be flagged (even if there's only 1 in a cluster of 20+) 
// this logic can be changed depending on preference decided later.
// TO DO can this loop be made more efficient?
const getClusterStatus = (childMarkers) => {
  // APPROACH A, single while loop where we eject from the loop is a critical status is found
  let critical = false;
  let warning = false;
  let good = false;
  let index = 0;
  while (!critical && index <= childMarkers.length - 1) {
    const status = childMarkers[index].options.icon.options.status;
    if (status === 'critical') critical = true;
    else if (status === 'warning') warning = true;
    else if (status === 'good') good = true;
    index += 1;
  }

  if (critical) return 'critical'
  else if (warning) return 'warning'
  else if (good) return ('good')
  else return 'unknown'

  // Approach B (leaving for reference), we are looping through 3 times (just looks cleaner, but maybe is less effecient?)
  // const critical = childMarkers.find(marker => marker.options.icon.options.status === 'critical');
  // const warning = childMarkers.find(marker => marker.options.icon.options.status === 'warning');
  // const good = childMarkers.find(marker => marker.options.icon.options.status === 'good');
}

const ClusterGroup = ({cluster, ...rest}) => {
  const count = cluster.getChildCount();
  const status = getClusterStatus(cluster.getAllChildMarkers())

  const border = { color: statuses[status].color, size: statuses[status].borderSize || 'small'};
  const StatusIcon = statuses[status].icon;

  const dimension = useMemo(() => {
    if (count >= 2 * threshold) return '54px'
    else if (count >= threshold) return '48px'
    else return '36px'
  }, [count]);

  const rowClusterProps = count >= threshold ? {
    direction: 'row-reverse',
    gap: 'xxsmall',
  } : {};


  return (
    <StyledBox
      align="center"
      justify="center"
      background="background-front"
      border={border}
      round="full"
      width={{ min: dimension, max: dimension }}
      height={{ min: dimension, max: dimension }}
      {...rowClusterProps}
      {...rest}
    >
      <StatusIcon color={statuses[status].color} size="small" />
      <StyledCount size={count >= 2 * threshold ? 'medium' : "small"} color="text-strong" weight={500}>
        {formatCount(count)}
      </StyledCount>
    </StyledBox>
  );
}

const createMarkerClusterGroup = (props, context) => {
  const theme = useContext(ThemeContext)
  const markerClusterGroup = new L.MarkerClusterGroup({
    iconCreateFunction: function(cluster) {
		  return L.divIcon({ 
        // 'grommet-marker' class prevents leaflet default divIcon styles
        className: 'grommet-cluster-group',
        html:  ReactDOMServer.renderToString(<ClusterGroup cluster={cluster} theme={theme} />) });
	  }, 
    ...props});
  return createElementObject(
    markerClusterGroup,
    extendContext(context, { layerContainer: markerClusterGroup }),
  );
};

const updateMarkerClusterGroup = (instance, props, prevProps) => {
  if (props.children !== prevProps.children) {
    instance.clearLayers();
    instance.addLayers(props.children);
  }
};

const MarkerClusterGroup = createPathComponent(
  createMarkerClusterGroup,
  updateMarkerClusterGroup,
);

export default MarkerClusterGroup;
