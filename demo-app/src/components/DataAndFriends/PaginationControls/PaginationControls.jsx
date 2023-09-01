import React from 'react';
import { Box, Pagination } from 'grommet';
import { PaginationSummary } from './PaginationSummary';
import { StepSelector } from './StepSelector';

export const PaginationControls = ({
  numberItems,
  page,
  setPage,
  step,
  setStep,
}) => {
  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      border="top"
      fill="horizontal"
      gap="small"
      pad={{ vertical: 'xsmall' }}
      wrap
    >
      <PaginationSummary numberItems={numberItems} page={page} step={step} />
      <Box flex="grow" />
      <StepSelector step={step} setStep={setStep} />
      <Pagination
        step={step}
        numberItems={numberItems}
        page={page}
        onChange={({ page }) => setPage(page)}
      />
    </Box>
  );
};
