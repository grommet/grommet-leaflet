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
import { fetchLaunches, fetchRockets } from './utils';
import { columns, options, formatData } from '../utils';
// import { ListView } from '../ListView';
// import { CardView } from '../CardView';
import { Pagination } from '../Pagination';
import { PageWrapper } from '../PageWrapper';

const defaultView = {
  search: '',
  sort: { property: 'name', direction: 'asc' },
  step: 10,
};

const Default = () => {
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState({ data: [] });
  const [rockets, setRockets] = useState([]);
  const [view, setView] = useState(defaultView);

  useEffect(() => {
    fetchRockets('https://api.spacexdata.com/v4/rockets/query').then(response =>
      setRockets(
        response.docs.map(({ name, id }) => ({ value: id, label: name })),
      ),
    );
  }, []);

  useEffect(() => {
    fetchLaunches('https://api.spacexdata.com/v4/launches/query', view).then(
      response => {
        setResult({
          data: formatData(response.docs),
          filteredTotal: response.totalDocs,
          page: response.page,
        });
        // The REST API doesn't return the unfiltered total in responses.
        // Since the first request likely has no filtering, we'll likely use
        // response.totalDocs the first time and prevTotal thereafter.
        setTotal(prevTotal => Math.max(prevTotal, response.totalDocs));
      },
    );
  }, [view]);

  return (
    <PageWrapper>
      <Data
        data={result.data}
        // toolbar
        properties={{
          name: { filter: false },
          rocket: { label: 'Rocket', options: rockets },
          success: { label: 'Success' },
        }}
        // When in a fully "controlled" mode, need to supply these properties
        total={total}
        filteredTotal={result.filteredTotal}
        defaultView={defaultView}
        view={view}
        onView={setView}
      >
        <Toolbar gap="medium">
          <Toolbar>
            <DataSearch />
            <DataSort drop />
            <DataFilters layer />
          </Toolbar>
          <DataTableColumns options={options} drop />
          <Box flex align="end">
            <Menu
              label="Actions"
              kind="toolbar"
              items={[
                {
                  label: 'Export to CSV',
                },
                {
                  label: 'Add launch',
                },
              ]}
            />
          </Box>
        </Toolbar>
        <DataSummary />
        <DataTable columns={columns} verticalAlign="top" sortable />
        {/* <ListView /> */}
        {/* <CardView /> */}
        <Pagination />
      </Data>
    </PageWrapper>
  );
};

export default Default;
