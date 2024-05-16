import React, { useContext, useMemo } from 'react';
import { Box, Text, DataContext, DataChart } from 'grommet';

const formatDate = date => {
  let month = new Date(date).getMonth() + 1;
  if (`${month}`.length < 2) month = `0${month}`;
  const year = new Date(date).getFullYear();
  return `${year}-${month}-02T00:00:00.000Z`;
};
export const ChartView = () => {
  const { data, unfilteredData } = useContext(DataContext);

  const result = useMemo(() => {
    const res = {};
    unfilteredData.forEach(datum => {
      const key = formatDate(datum.date_utc);
      res[key] = 0;
    });
    data.forEach(datum => {
      const key = formatDate(datum.date_utc);
      if (!res[key]) res[key] = 1;
      else res[key] += 1;
    });

    return Object.keys(res)
      .map(k => ({ date: k, count: res[k] }))
      .sort((a, b) => (a.date < b.date ? -1 : 1));
  }, [data, unfilteredData]);

  return (
    <Box height="medium">
      <DataChart
        // data={result.slice(result.length - 13, result.length - 2)}
        data={result}
        series={[
          {
            property: 'date',
            label: 'Date',
            render: date => (
              <Text margin={{ horizontal: 'xsmall' }}>
                {Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  year: 'numeric',
                }).format(new Date(date))}
              </Text>
            ),
          },
          {
            property: 'count',
            label: 'Launches',
          },
        ]}
        // chart={[
        //   {
        //     property: [{ property: 'count', color: 'graph-1' }],
        //     type: 'bars',
        //     thickness: 'large',
        //   },
        // ]}
        // axis={{ x: { property: 'date', granularity: 'fine' }, y: true }}
        chart={[
          {
            property: [{ property: 'count', color: 'graph-1' }],
            type: 'bars',
            thickness: 'xsmall',
          },
        ]}
        axis={{ x: { property: 'date', granularity: 'medium' }, y: true }}
        guide={{ y: { granularity: 'fine' } }}
        detail
        legend
        size="fill"
      />
    </Box>
  );
};
