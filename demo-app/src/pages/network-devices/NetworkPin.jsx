import React from 'react';
import { Box, Text, ThemeContext } from 'grommet';
import { normalizeTheme } from 'grommet-leaflet-core';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  // to create the pin shape
  border-bottom-right-radius: 0;
  // translate to re-align with leaflet div
  transform: rotate(45deg) translateX(-35%);
  &:hover {
    transform: rotate(45deg) translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`;

const StyledContent = styled(Box)`
  // multiplier of font-size, for tighter alignment
  line-height: 1rem;
  // style needed to offset for rotation of location pin so
  // icon is vertical
  transform: rotate(-45deg);
`;

const NetworkPin = ({ kind = 'default', label }) => {
  const theme = React.useContext(ThemeContext);
  const normalizedTheme = normalizeTheme([
    theme?.map?.pin?.default?.container,
    theme?.map?.pin?.[kind]?.container,
  ]);

  let icon = theme?.map?.pin?.[kind]?.icon;

  return (
    <StyledBox
      {...normalizedTheme}
      height={{ min: '35px', max: '35px' }}
      width={{ min: '35px', max: '35px' }}
    >
      <StyledContent>
        {icon}
        <Text alignSelf="center" size="xsmall" color="text-strong" weight={500}>
          {label}
        </Text>
      </StyledContent>
    </StyledBox>
  );
};

export { NetworkPin };
