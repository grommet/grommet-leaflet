import React from 'react';
import { Link } from 'react-router-dom';
import { Page, PageContent, PageHeader } from 'grommet';
import { ContentContainer, ReverseAnchor } from '../../components';

export const PageWrapper = ({ ...rest }) => (
  <Page pad={{ bottom: 'xlarge' }}>
    <PageContent>
      <PageHeader
        parent={<ReverseAnchor as={Link} to="/" label="Home" />}
        title="Data + friends"
        subtitle={`Providing turn-key components for implementation of 
  presentation and management of data collections.`}
      />
      <ContentContainer {...rest} />
    </PageContent>
  </Page>
);