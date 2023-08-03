import React from 'react';
import { Page, PageContent, PageHeader } from 'grommet';
import { NetworkMap } from './NetworkMap';

const Index = () => {
  return (
    <Page kind="full" fill>
      <PageContent flex>
        <PageHeader title="Networks" />
        <NetworkMap />
      </PageContent>
    </Page>
  );
};

export default Index;
