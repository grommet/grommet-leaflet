import React from 'react';
import { Anchor, Page, PageContent, PageHeader, Footer, Grid } from 'grommet';
import POCMap from '../POCMap';

const Index = () => {
  return (
    <Page fill>
      <PageContent flex>
        <PageHeader title="Acme, Inc." />
        <POCMap />
        <Grid></Grid>
      </PageContent>
    </Page>
  );
};

export default Index;
