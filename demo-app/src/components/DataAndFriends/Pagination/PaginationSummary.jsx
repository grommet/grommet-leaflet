import React from 'react';
import { Text } from 'grommet';

export const PaginationSummary = ({ numberItems, page, step }) => {
  const pageResultStart = (page - 1) * step + 1;
  const pageResultEnd = Math.min(page * step, numberItems);

  return (
    <Text>
      Showing {pageResultStart}-{pageResultEnd} of {numberItems}
    </Text>
  );
};
