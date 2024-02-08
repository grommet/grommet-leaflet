import React, { useContext, useMemo } from 'react';
import {
  Box,
  Pagination as GrommetPagination,
  DataContext,
  Select,
  Text,
} from 'grommet';

const step = 10;

// TO DO include step selector
const Pagination = () => {
  const { filteredTotal, view } = useContext(DataContext);

  const pageBounds = useMemo(() => {
    if (view?.page)
      return [
        (view.page - 1) * step + 1,
        Math.min(view.page * step, filteredTotal),
      ];
    return [];
  }, [view, filteredTotal]);

  return (
    <Box
      align="center"
      border="top"
      direction="row"
      gap="small"
      justify="between"
      pad={{ vertical: 'xsmall', horizontal: 'small' }}
      wrap
    >
      <Box flex="grow">
        <Text>
          Showing {pageBounds[0]}-{pageBounds[1]} of {filteredTotal}
        </Text>
      </Box>
      <StepSelector />
      <GrommetPagination alignSelf="end" />
    </Box>
  );
};

const StepSelector = () => (
  <Box direction="row" gap="xsmall" align="center">
    <Text>Items per page</Text>
    <Box width="xsmall">
      <Select options={[10, 25, 50]} defaultValue={10} />
    </Box>
  </Box>
);
export { Pagination };
