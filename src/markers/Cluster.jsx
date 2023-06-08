import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Box, Text } from 'grommet';
import { STATUS_MAP } from '../utils/styles';

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
const getClusterStatus = (childMarkers) => {
    let mostSevere = 'good';
    let index = 0;
    while (mostSevere !== 'critical' && index <= childMarkers.length - 1) {
    const status = childMarkers[index].options.status
    if (status === 'critical') mostSevere = 'critical';
    else if (status === 'warning') mostSevere = 'warning';
    else if (status === 'unknown') mostSevere = 'unknown';
    index += 1;
    }
    return mostSevere;
}

const Cluster = ({ cluster, ...rest }) => {
  const count = cluster.getChildCount();
  const status = getClusterStatus(cluster.getAllChildMarkers())

  const border = { color: STATUS_MAP[status].color, size: STATUS_MAP[status].borderSize || 'small'};
  const StatusIcon = STATUS_MAP[status].icon;

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
      <StatusIcon color={STATUS_MAP[status].color} size="small" />
      <StyledCount size={count >= 2 * threshold ? 'medium' : "small"} color="text-strong" weight={500}>
        {formatCount(count)}
      </StyledCount>
    </StyledBox>
  );
}

export { Cluster }
