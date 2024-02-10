/* eslint-disable grommet/datatable-aria-describedby */
import React, { useEffect, useState } from 'react';
import { columns, fetchLaunches, formatData, options } from './utils';
// import { Pagination } from './Pagination';
import { PageWrapper } from './PageWrapper';
// import { ListView } from './ListView';
// import { ChartView } from './ChartView';
// import { CardView } from './CardView';
// import { Pagination } from '../../components/DataAndFriends';

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

  return <PageWrapper>{/* content goes here */}</PageWrapper>;
};

export default Default;
