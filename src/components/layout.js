import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { container, topBar, title, titleLink } from '../utils/styles';

import 'prismjs/themes/prism-okaidia.css';
import '../styles/article.css';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={container}>
        <div className={topBar}>
          <Link to={`/`} className={titleLink}>
            <h3 className={title}>
              >{data.site.siteMetadata.title}
            </h3>
          </Link>
          <Link to={`/about/`}>
            About
          </Link>
        </div>
        {children}
      </div>
    )}
  />
);
