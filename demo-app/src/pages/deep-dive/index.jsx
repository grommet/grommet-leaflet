/* eslint-disable grommet/datatable-aria-describedby */
import React, { useEffect, useState } from 'react';
import {
  Data,
  DataTable,
  DataSearch,
  DataFilters,
  DataSort,
  Toolbar,
  DataTableColumns,
  DataSummary,
  DataView,
  Pagination,
} from 'grommet';
import { PageWrapper } from './PageWrapper';
import { columns, fetchLaunches, formatData, options } from './utils';
import { CardView } from './CardView';
import { ChartView } from './ChartView';

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
        properties={{
          name: { filter: false },
          rocket: { label: 'Rocket' },
          cores: { label: 'Cores' },
          date_utc: { label: 'Date' },
          success: { label: 'Success' },
          failureAltitude: { label: 'Failure altitude' },
        }}
        views={[
          {
            name: 'My rockets',
            properties: {
              rocket: ['Falcon 9'],
            },
          },
        ]}
        // toolbar
      >
        <Toolbar>
          <DataSearch />
          <DataSort drop />
          <DataFilters layer />
          <DataTableColumns drop options={options} />
          <DataView />
        </Toolbar>
        <DataSummary />
        <DataTable columns={columns} />
        <Pagination summary stepOptions border="top" pad="xsmall" />
      </Data>
    </PageWrapper>
  );
};

export default Default;
