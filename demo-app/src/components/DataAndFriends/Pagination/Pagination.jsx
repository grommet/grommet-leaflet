import React, { useContext, useState } from 'react';
import { Box, Pagination as GrommetPagination, DataContext } from 'grommet';
import { PaginationSummary } from './PaginationSummary';
import { StepSelector } from './StepSelector';

export const Pagination = () => {
  const { filteredTotal, view } = useContext(DataContext);
  const [step, setStep] = useState(10);
  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      border="top"
      fill
      gap="small"
      pad={{ vertical: 'xsmall' }}
      wrap
    >
      <PaginationSummary
        numberItems={filteredTotal}
        page={view?.page}
        step={step}
      />
      <Box flex="grow" />
      <StepSelector step={step} setStep={setStep} />
      <GrommetPagination step={step} />
    </Box>
  );
};
