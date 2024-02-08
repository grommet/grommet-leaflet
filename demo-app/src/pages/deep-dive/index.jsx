/* eslint-disable grommet/datatable-aria-describedby */
import React, { useEffect, useState } from 'react';
import {
  Box,
  DataTable,
  Data,
  DataSearch,
  DataFilters,
  DataSort,
  Toolbar,
  Menu,
  DataTableColumns,
  DataSummary,
} from 'grommet';
import { columns, fetchLaunches, formatData, options } from './utils';
// import { ListView } from './ListView';
// import { CardView } from './CardView';
import { Pagination } from './Pagination';
import { PageWrapper } from './PageWrapper';

const Default = () => {
  const [result, setResult] = useState({ data: [] });

  // fetch launch data
  useEffect(() => {
    fetchLaunches('https://api.spacexdata.com/v4/launches/query').then(
      response => {
        setResult({
          data: formatData(response.docs),
        });
      },
    );
  }, []);

  return (
    <PageWrapper>
      <Data
        data={result.data}
        toolbar
        properties={{
          name: { filter: false },
          rocket: { label: 'Rocket' },
          success: { label: 'Success' },
        }}
      >
        <DataTable columns={columns} verticalAlign="top" sortable />
        {/* <ListView /> */}
        {/* <CardView /> */}
        <Pagination />
      </Data>
    </PageWrapper>
  );
};

export default Default;
