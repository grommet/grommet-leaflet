import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { Box, Text } from 'grommet';
import { deepMerge } from 'grommet/utils';

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
  cluster,
  kind = 'default',
  icon: iconProp,
  label: labelProp,
  size = 'medium',
  ...rest
}) => {
  const theme = React.useContext(ThemeContext);
  const count = cluster.getChildCount();

  const icon = iconProp || theme?.map?.cluster?.[kind]?.icon;
  const label = labelProp || count;

  // TO DO should we be deepMerging all of these?
  return (
    <StyledContainer
      {...deepMerge(
        theme?.map?.cluster?.default?.container,
        theme?.map?.cluster?.[kind]?.container,
      )}
      {...theme?.map?.cluster?.size?.small?.container}
      {...theme?.map?.cluster?.size?.[size]?.container}
      {...rest}
    >
      {icon}
      <StyledLabel
        {...theme?.map?.cluster?.size?.small?.label}
        {...theme?.map?.cluster?.size?.[size]?.label}
      >
        {label}
      </StyledLabel>
    </StyledContainer>
  );
};

Cluster.propTypes = {
  cluster: PropTypes.object.isRequired,
  kind: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { Cluster };
