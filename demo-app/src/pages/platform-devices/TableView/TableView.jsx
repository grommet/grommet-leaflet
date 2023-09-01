import React from 'react';
import { Box, DataTable, Pagination, Text } from 'grommet';

export const TableView = ({ ariaDescribedBy, columns, devices }) => {
  const [sort, setSort] = React.useState({
    property: 'properties.serial_number',
    direction: 'asc',
  });
  const [page, setPage] = React.useState(1);
  const limit = 25;
  const numberItems = devices.features.length;
  const pageResultStart = (page - 1) * limit + 1;
  const pageResultEnd = Math.min(page * limit, numberItems);

  return (
    <Box gap="xsmall">
      <DataTable
        aria-describedby={ariaDescribedBy}
        columns={columns}
        alignSelf="start"
        fill="vertical"
        sort={sort}
        onSort={setSort}
        pin
        sortable
        verticalAlign="top"
      />
      {numberItems > limit && (
        <Box direction="row" fill="horizontal" border="top" justify="end">
          <Text>
            Showing {pageResultStart}-{pageResultEnd} of {numberItems}
          </Text>
          <Pagination
            step={limit}
            numberItems={numberItems}
            page={page}
            onChange={({ page }) => setPage(page)}
            direction="row"
            flex={false}
          />
        </Box>
      )}
    </Box>
  );
};
