import React from 'react';
import { Box, Button, Heading, Text } from 'grommet';
import data from '../../utils/devices.json';
import { Next } from 'grommet-icons';
import { Container, TextEmphasis } from '../shared';

export const RecentActivity = () => {
  return (
    <Container alignSelf="start" gap="medium">
      <Heading level={2} margin="none">
        Recent activity
      </Heading>
      {data.activities.items.slice(0, 4).map((activity, index) => (
        <Box gap="xsmall" key={index}>
          <TextEmphasis>{activity.title}</TextEmphasis>
          <Text size="small">{activity.message}</Text>
          <Text size="small">
            {new Date(activity.createdAt).toLocaleString()}
          </Text>
        </Box>
      ))}

      <Button label="View all" icon={<Next />} alignSelf="end" reverse />
    </Container>
  );
};
