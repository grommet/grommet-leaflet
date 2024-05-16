import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'grommet';

export const PaginationSummary = ({ numberItems, page, step }) => {
  const pageResultStart = (page - 1) * step + 1;
  const pageResultEnd = Math.min(page * step, numberItems);

  return numberItems ? (
    <Text>
      Showing {pageResultStart}-{pageResultEnd} of {numberItems}
    </Text>
  ) : undefined;
};

PaginationSummary.propTypes = {
  numberItems: PropTypes.number,
  page: PropTypes.number,
  step: PropTypes.number,
};
