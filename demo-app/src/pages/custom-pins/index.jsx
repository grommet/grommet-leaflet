import React from 'react';
import { Link } from 'react-router-dom';
import { Page, PageContent, PageHeader } from 'grommet';
import { ContentContainer, ReverseAnchor } from '../../components';
import PinKindsMap from './PinKindsMap';

const GenericKinds = () => {
  return (
    <Page fill pad={{ bottom: 'xlarge' }}>
      <PageContent flex>
        <PageHeader
          title="Default pins and cluster"
          // eslint-disable-next-line max-len
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
