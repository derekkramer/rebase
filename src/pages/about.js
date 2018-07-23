import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <Layout>
    <div>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        Rebase blog.
      </p>
    </div>
  </Layout>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;