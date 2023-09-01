import React from 'react';
import { Box, DataTable } from 'grommet';
import { PaginationControls } from '../../../components/DataAndFriends';

export const TableView = ({ ariaDescribedBy, columns, devices }) => {
  const [sort, setSort] = React.useState({
    property: 'properties.serial_number',
    direction: 'asc',
  });
  const [page, setPage] = React.useState(1);
  const [step, setStep] = React.useState(25);
  const numberItems = devices.features.length;

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
      {numberItems > step && (
        <PaginationControls
          numberItems={numberItems}
          page={page}
          setPage={setPage}
          step={step}
          setStep={setStep}
        />
      )}
    </Box>
  );
};
