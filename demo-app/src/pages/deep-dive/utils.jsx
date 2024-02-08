import React from 'react';
import { Button, Box, Paragraph, Text } from 'grommet';
import { StatusCriticalSmall, StatusGoodSmall } from 'grommet-icons';

const buildQuery = view => {
  const query = {};
  const properties = view?.properties || [];
  Object.keys(properties).forEach(property => {
    switch (property) {
      case 'success':
        if (properties.success.length === 1) {
          query[property] = properties.success[0] === 'Successful';
        }
        break;
      case 'rocket':
        query.rocket = {
          $in: properties.rocket,
        };
        break;
      default:
        query[property] = properties[property];
    }
  });
  if (view?.search) query.$text = { $search: view.search };
  return query;
};

export const fetchLaunches = async (url, view) => {
  const query = buildQuery(view);
  const sort = {
    [view?.sort?.property || 'name']: view?.sort?.direction || 'asc',
  };

  const body = {
    options: {
      populate: [
        {
          path: 'rocket',
          select: { name: 1 },
        },
      ],
      sort,
      select: ['name', 'failures', 'success', 'date_utc'],
      //   limit: view?.step || 10,
      limit: 300, // for demo purposes
      page: view?.page || 1,
    },
    query,
  };
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(response => response.json());
};

export const fetchRockets = async () => {
  const body = {
    options: {
      sort: { name: 'asc' },
      select: ['name', 'id'],
    },
  };
  return fetch('https://api.spacexdata.com/v4/rockets/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(response => response.json());
};

export const formatData = data =>
  data?.map(datum => ({
    ...datum,
    rocket: datum.rocket.name,
    success: datum.success ? 'Successful' : 'Failed',
    failures: datum.failures?.map(({ reason }) => reason),
  }));

export const columns = [
  {
    property: 'name',
    header: 'Name',
    primary: true,
  },
  {
    property: 'rocket',
    header: 'Rocket',
  },
  {
    property: 'success',
    header: 'Success',
    // TO DO use typical icons, add words
    render: datum => {
      const icon =
        datum.success === 'Failed' ? (
          <StatusCriticalSmall color="status-critical" height="medium" />
        ) : (
          <StatusGoodSmall color="status-ok" height="medium" />
        );

      return (
        <Box direction="row" align="center" gap="xsmall">
          {icon}
          <Text>{datum.success}</Text>
        </Box>
      );
    },
  },
  {
    property: 'date_utc',
    header: 'Date',
    render: datum =>
      Intl.DateTimeFormat(undefined, {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      }).format(new Date(datum.date_utc)),
  },
  {
    property: 'failures',
    header: 'Reason for failure',
    sortable: false,
    render: datum => {
      if (datum.failures.length) {
        return datum.failures?.map(reason => (
          // TO DO add "View more" to expand
          <>
            <Paragraph key={reason} margin="none" maxLines={2}>
              {reason}
            </Paragraph>
            <Button alignSelf="start" label="View more" pad="none" />
          </>
        ));
      }
      return '--';
    },
    size: 'medium',
  },
];

export const defaultView = {
  search: '',
  sort: { property: 'name', direction: 'asc' },
  //   step: 10,
};

export const options = columns.map(column => ({
  property: column.property,
  label: column.header,
}));