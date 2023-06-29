import React from 'react';
import { Anchor, Page, PageContent, PageHeader, Footer } from 'grommet';
import ArubaMap from '../components/aruba/ArubaMap';

const Index = () => {
  return (
    <Page kind="full" fill>
      <PageContent flex>
        <PageHeader title="Map" />
        <ArubaMap />
        <Footer pad="small">
          <Anchor href="">grommet-leaflet GitHub repository</Anchor>
        </Footer>
      </PageContent>
    </Page>
  );
};

export default Index;