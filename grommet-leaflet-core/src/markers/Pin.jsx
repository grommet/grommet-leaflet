import React from 'react';
import styled from 'styled-components';
import { Box, Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { STATUS_MAP } from '../utils/status';

const StyledBox = styled(Box)`
  // to create the pin shape
  border-bottom-right-radius: 0;
  // translate to re-align with leaflet div
  transform: rotate(45deg) translateX(-35%);
  &:hover {
    // TO DO revisit "hover" color with designers. Use of
    // "background-layer-overlay" feels strange semantically
    border: ${props =>
      `${
        props.theme?.global?.borderSize?.[props.border.size] ||
        props.border.size
      } solid ${props.theme?.global?.colors?.['background-layer-overlay']}`};
  }
`;

const Pin = ({ status }) => {
  const border = {
    color: STATUS_MAP[status].color,
    size: STATUS_MAP[status].borderSize || 'small',
  };
  const StatusIcon = STATUS_MAP[status].icon;

  return (
    <Grommet theme={hpe} background="transparent">
      <StyledBox
        background="background-front"
        border={border}
        elevation="medium"
        flex={false}
        round
        align="center"
        justify="center"
        // TO DO revisit sizing with designers
        width={{ min: '25px', max: '25px' }}
        height={{ min: '25px', max: '25px' }}
      >
        {/* style needed to offset for rotation of location pin so 
        triangle is vertical still */}
        {/* TO DO revisit icon sizes with designers */}
        <StatusIcon
          color={STATUS_MAP[status].color}
          size="13px"
          style={
            status === 'warning' || status === 'unknown'
              ? { transform: 'rotate(-45deg)' }
              : undefined
          }
        />
      </StyledBox>
    </Grommet>
  );
};

export { Pin };
