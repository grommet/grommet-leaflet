import React from 'react';
import { Anchor, Page, PageContent, PageHeader, Footer } from 'grommet';
import POCMap from './POCMap';

const BasicMap = () => {
  return (
    <Page fill>
      <PageContent flex>
        <PageHeader title="Map" />
        <POCMap />
        <Footer pad="small">
          <Anchor href="">grommet-leaflet GitHub repository</Anchor>
        </Footer>
      </PageContent>
    </Page>
  );
};

export default BasicMap;
