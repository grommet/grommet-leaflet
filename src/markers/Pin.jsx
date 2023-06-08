import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';
import { adjustPadStyle, STATUS_MAP } from '../utils/styles';

const StyledBox = styled(Box)`
  // to create the pin shape
  border-bottom-right-radius: 0;
  transform: rotate(45deg);
  &:hover {
    // TO DO revisit "hover" color with designers. Use of "background-layer-overlay" feels strange semantically
    border: ${props => `${props.theme?.global?.borderSize?.[props.border.size] || props.border.size} solid ${props.theme?.global?.colors?.['background-layer-overlay']}`};
  }
`;

const Pin = ({ status, theme }) => {
  const border = { color: STATUS_MAP[status].color, size: STATUS_MAP[status].borderSize || 'small'};
  const StatusIcon = STATUS_MAP[status].icon;

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
      <StatusIcon color={STATUS_MAP[status].color} size="small" style={status === 'warning' ? { transform: 'rotate(-45deg)' } : undefined} />
    </StyledBox>
  );
}

export { Pin };