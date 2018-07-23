import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import {
  sectionTitle,
  sectionSubtitle,
  card,
  cardTitle,
  cardDate,
  cardBlurb
} from '../utils/styles';

export default ({ data }) => (
  <Layout>
    <div>
      <h3 className={sectionTitle}>
        Recent Articles
      </h3>
      <h4 className={sectionSubtitle}>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id} className={card}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <h3 className={cardTitle}>
              {node.frontmatter.title}{' '}
              <span className={cardDate}>— {node.frontmatter.date}</span>
            </h3>
            <p className={cardBlurb}>
              {node.excerpt}
            </p>
          </Link>
        </div>
      )}
    </div>
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;