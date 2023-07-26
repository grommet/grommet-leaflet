import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Grommet, Text, ThemeContext } from 'grommet';
import { STATUS_MAP } from '../utils/status';

const StyledBox = styled(Box)`
  // translate to re-align with leaflet div
  transform: translateX(-35%);
  &:hover {
    transform: translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`;

const StyledCount = styled(Text)`
  // multiplier of font-size, for tighter alignment
  line-height: 1rem;
`;

// TO DO in production, this threshold should be set to 1000
// using 10 since our data set is small and I want to demo the
// different cluster flavors
const threshold = 10;
const formatCount = count =>
  count > threshold ? `${Math.round(count / threshold)}k` : count;

// give critical status priority to be flagged (even if there's only
// 1 in a cluster of 20+) this logic can be changed depending on preference
// decided later.
const getClusterStatus = childMarkers => {
  let mostSevere;
  let index = 0;
  const geoJSON = childMarkers[0]?.feature;
  while (mostSevere !== 'critical' && index <= childMarkers.length - 1) {
    const status = geoJSON
      ? childMarkers[index].feature.grommet.status
      : childMarkers[index].options.status;
    if (status === 'critical') mostSevere = 'critical';
    else if (status === 'warning') mostSevere = 'warning';
    else if (status === 'unknown') mostSevere = 'unknown';
    else if (status === 'good') mostSevere = 'good';
    index += 1;
  }
  return mostSevere;
};

const Cluster = ({ cluster, ...rest }) => {
  const theme = React.useContext(ThemeContext);
  const count = cluster.getChildCount();
  const status = getClusterStatus(cluster.getAllChildMarkers());

  let border = {
    color: '#000000B8',
    size: 'small',
  };
  let StatusIcon;

  if (status) {
    border = {
      color: STATUS_MAP[status].color,
      size: STATUS_MAP[status].borderSize || 'small',
    };
    StatusIcon = STATUS_MAP[status].icon;
  }

  const dimension = useMemo(() => {
    if (count >= 2 * threshold) return '54px';
    else if (count >= threshold) return '48px';
    else return '36px';
  }, [count]);

  const rowClusterProps =
    count >= threshold
      ? {
          direction: 'row-reverse',
          gap: 'xxsmall',
        }
      : {};

  return (
    <Grommet theme={theme} background="transparent">
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
        {StatusIcon && (
          <StatusIcon color={STATUS_MAP[status].color} size="10px" />
        )}
        <StyledCount
          size={count >= 2 * threshold ? 'medium' : 'small'}
          color="text-strong"
          weight={500}
        >
          {formatCount(count)}
        </StyledCount>
      </StyledBox>
    </Grommet>
  );
};

Cluster.propTypes = {
  cluster: PropTypes.object.isRequired,
};

export { Cluster };
