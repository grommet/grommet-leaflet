import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components'
import ReactDOMServer from 'react-dom/server';
import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import { Box } from 'grommet';
import { StatusCriticalSmall, StatusGoodSmall, StatusWarningSmall, StatusUnknownSmall } from 'grommet-icons';
import { adjustPadStyle } from './utils/styles';

const StyledBox = styled(Box)`
  // to create the pin shape
  border-bottom-right-radius: 0;
  transform: rotate(45deg);
  &:hover {
    // TO DO revisit "hover" color with designers. Use of "background-layer-overlay" feels strange semantically
    border: ${props => `${props.theme?.global?.borderSize?.[props.border.size] || props.border.size} solid ${props.theme?.global?.colors?.['background-layer-overlay']}`};
  }
`;

export const statuses = {
  critical: {
    color: 'status-critical',
    icon: StatusCriticalSmall,
    borderSize: '3px',
  },
  warning: {
    color: 'status-warning',
    icon: StatusWarningSmall,
  },
  good: {
    color: 'status-ok',
    icon: StatusGoodSmall,
  },
  unknown: {
    color: 'status-unknown',
    icon: StatusUnknownSmall
  }
}

const StatusIcon = ({ status, theme }) => {
  const border = { color: statuses[status].color, size: statuses[status].borderSize || 'small'};
  const StatusIcon = statuses[status].icon;

  return (
    <StyledBox 
      background="background-front"
      border={border}
      elevation="medium"
      flex={false}
      pad={adjustPadStyle(theme.global.edgeSize.xsmall, theme.global.borderSize[border.size] || border.size)}
      round
      theme={theme}
      width={{min: 'fit-content'}}
    >
      {/* style needed to offset for rotation of location pin so triangle is vertical still */}
      <StatusIcon color={statuses[status].color} size="small" style={status === 'warning' ? { transform: 'rotate(-45deg)' } : undefined} />
    </StyledBox>
  );
}

const createGrommetMarker = (
  { position, title, alt, icon: iconProp, status },
  context,
) => {
  const theme = useContext(ThemeContext)
  const icon = L.divIcon({
    // 'grommet-marker' class prevents leaflet default divIcon styles
    className: 'grommet-marker',
    // to be used my MarkerClusterGroup
    status: status,
    html: ReactDOMServer.renderToString(iconProp || <StatusIcon status={status} theme={theme} />),
  });
  const options = { title, alt, icon };
  const marker = new L.Marker(position, options);
  return createElementObject(
    marker,
    extendContext(context, { overlayContainer: marker }),
  );
};

const updateGrommetMarker = (instance, props, prevProps) => {
  if (props.position !== prevProps.position) {
    instance.setLatLng(props.position);
  }
};

const GrommetMarker = createPathComponent(
  createGrommetMarker,
  updateGrommetMarker,
);

export default GrommetMarker;
