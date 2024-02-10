import React from 'react';
import { Box, DataTable } from 'grommet';
import { Pagination } from '../../../components/DataAndFriends';

export const TableView = ({ ariaDescribedBy, columns, devices }) => {
  const [sort, setSort] = React.useState({
    property: 'properties.serial_number',
    direction: 'asc',
  });
  const [page, setPage] = React.useState(1);
  const [step, setStep] = React.useState(25);
  const numberItems = devices.features.length;

  return (
    <Box gap="xsmall" alignSelf="start">
      <Box flex={false} overflow={{ horizontal: 'auto' }}>
        <DataTable
          aria-describedby={ariaDescribedBy}
          columns={columns}
          fill="vertical"
          sort={sort}
          onSort={setSort}
          pin
          sortable
          verticalAlign={{ body: 'top' }}
        />
      </Box>
      {numberItems > step && <Pagination step={step} setStep={setStep} />}
    </Box>
  );
};
