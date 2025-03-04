/* eslint-disable grommet/datatable-aria-describedby */
import React, { useEffect, useState } from 'react';
import { Data, DataTable, Pagination } from 'grommet';
import { PageWrapper } from './PageWrapper';
import { columns, fetchLaunches, formatData, options } from './utils';
import { CardView } from './CardView';
import { ChartView } from './ChartView';
// import { ListView } from './ListView';

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
      <Data data={result.data}>
        <DataTable columns={columns} />
        <Pagination summary stepOptions border="top" pad="xsmall" />
      </Data>
    </PageWrapper>
  );
};

export default Default;
