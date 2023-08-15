import React from 'react';
import { Box, Button, Heading, Text } from 'grommet';
import { Next } from 'grommet-icons';
import { ContentContainer, TextEmphasis } from '../../components';
import data from './data/servers.json';

export const RecentActivity = () => {
  return (
    <ContentContainer alignSelf="start" gap="medium">
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
    </ContentContainer>
  );
};
