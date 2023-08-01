import React from 'react';
import { Link } from 'react-router-dom';
import { Page, PageContent, PageHeader } from 'grommet';
import PinKindsMap from '../PinKindsMap';
import { ContentContainer, ReverseAnchor } from '../components';

const GenericKinds = () => {
  return (
    <Page fill pad={{ bottom: 'xlarge' }}>
      <PageContent flex>
        <PageHeader
          title="Default pins and cluster"
          subtitle="A demo of various pin kinds that can be defined by the Map `theme`."
          parent={<ReverseAnchor as={Link} label="Home" to="/" />}
        />
        <ContentContainer fill>
          <PinKindsMap />
        </ContentContainer>
      </PageContent>
    </Page>
  );
};

export default GenericKinds;
