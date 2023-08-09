import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { Box, Text } from 'grommet';
import { normalizeTheme } from '../utils';

const StyledContainer = styled(Box)`
  // translate to re-align with leaflet div
  transform: translateX(-35%);
  &:hover {
    transform: translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`;

const StyledLabel = styled(Text)`
  // multiplier of font-size, for tighter alignment
  line-height: 1rem;
`;

const Cluster = ({
  cluster = {},
  kind = 'default',
  size = 'medium',
  ...rest
}) => {
  const theme = React.useContext(ThemeContext);
  const normalizedTheme = normalizeTheme([
    theme?.map?.cluster?.default,
    theme?.map?.cluster?.[kind],
    theme?.map?.cluster?.size?.medium,
    theme?.map?.cluster?.size?.[size],
  ]);

  const count = cluster.getChildCount();

  const icon = theme?.map?.cluster?.[kind]?.icon;
  const label = count;

  return (
    <StyledContainer {...normalizedTheme?.container} {...rest}>
      {icon}
      <StyledLabel {...normalizedTheme?.label}>{label}</StyledLabel>
    </StyledContainer>
  );
};

Cluster.propTypes = {
  cluster: PropTypes.object,
  kind: PropTypes.string,
};

export { Cluster };
