import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

function languageLabel(html) {
  const regex = /<pre class="language-(.*?)">/g;
  return html.replace(regex, '<div class="languageLabel">$1</div><pre class="language-$1">');
}

export default ({ data }) => {
  const postData = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1 css={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }}>{postData.frontmatter.title}</h1>
        <div className='articleBody' dangerouslySetInnerHTML={{ __html: languageLabel(postData.html) }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;