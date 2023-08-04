import React from 'react';
import { Link } from 'react-router-dom';
import { Page, PageContent, PageHeader } from 'grommet';
import { NetworkMap } from './NetworkMap';
import { ContentContainer, ReverseAnchor } from '../../components';

const Index = () => {
  return (
    <Page fill pad={{ bottom: 'xlarge' }}>
      <PageContent flex>
        <PageHeader
          parent={<ReverseAnchor as={Link} to="/" label="Home" />}
          title="Networks"
        />
        <ContentContainer fill>
          <NetworkMap />
        </ContentContainer>
      </PageContent>
    </Page>
  );
};

export default Index;
