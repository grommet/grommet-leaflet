import React from 'react';
import PropTypes from 'prop-types';
import {
  Anchor,
  Box,
  Cards,
  Card as GrommetCard,
  CardBody,
  Text,
  Heading,
} from 'grommet';
import { StatusCriticalSmall, StatusGoodSmall } from 'grommet-icons';

export const CardView = () => {
  return (
    <Cards size="medium" margin={{ bottom: 'medium' }}>
      {datum => (
        <Card
          name={datum.name}
          success={datum.success}
          rocket={datum.rocket}
          date={datum.date_utc}
        />
      )}
    </Cards>
  );
};

const Card = ({ name, success, rocket, date }) => {
  return (
    <GrommetCard>
      <CardBody gap="medium">
        <Box gap="xsmall">
          <Heading level={2} margin="none">
            {name}
          </Heading>
          <Text>{rocket}</Text>
          <Box direction="row" align="center" gap="xsmall" flex>
            {success === 'Successful' ? (
              <StatusGoodSmall color="status-ok" height="medium" />
            ) : (
              <StatusCriticalSmall color="status-critical" height="medium" />
            )}
            <Text>{success}</Text>
          </Box>
          {date ? (
            <Text>
              {Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(
                new Date(date),
              )}
            </Text>
          ) : undefined}
        </Box>
        <Anchor label="View details" />
      </CardBody>
    </GrommetCard>
  );
};

Card.propTypes = {
  date: PropTypes.string,
  name: PropTypes.string,
  success: PropTypes.string,
  rocket: PropTypes.string,
};
