import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import axios from 'axios';

function languageLabel(html) {
  const regex = /<pre class="language-(.*?)">/g;
  return html.replace(regex, '<div class="languageLabel">$1</div><pre class="language-$1">');
}

class Author extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
  }

  componentDidMount() {
    console.log(process.env.APIURL);
    axios.post(process.env.APIURL, {
      method: 'getAuthor',
      id: '12345'
    })
    .then((res) => {
      const name = Object.values(res.data.Item.lastName);
      
      // console.log(res);
      this.setState((prevState, props) => {
        return { content: name[0] };
      });
    })
    .catch(err => {
      throw err;
    });
  }

  render() {
    return <>Hello, {this.state.content}</>;
  }
}

export default ({ data }) => {
  const postData = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1 css={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }}>{postData.frontmatter.title}</h1>
        <h2 css={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }}><Author name="sampleName"/></h2>
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