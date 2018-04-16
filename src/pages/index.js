import React from "react";
import styled, {injectGlobal} from "styled-components";
import Link from "gatsby-link";
import "../fonts/fonts.css";
import Heading from "../components/Heading";

injectGlobal`
  * {
    font-family: Times New Roman;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Romana BT Bold';
  }
`

const KeepReading = styled(Link)`
  font-family: Times New Roman;
  font-size: 12px;
  color: black;
  border-radius: 0px;
  padding: 5px 10px;
  border: solid 1px black;
`;

const Title = styled.div`
  background-color: blue;
  padding: 20px;
  font-family: Times New Roman;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  text-align: center;
`

const TitleLink = styled(Link)`
  font-family: 'Romana BT Bold';
  font-size: 2em;
  color: white;

  &:hover {
    background-color: blue;
    color: white;
  }
`

const PostContainer = styled.div`
  width: 50%;

  @media(max-width: 700px) {
    width: 100%; 
  }

  border: solid 1px black;
`

const PostFooter = styled.div`
  padding: 20px;
`

const Paragraph = styled.p`
  font-family: Times New Roman;
`

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    console.log(posts)

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <Heading>Newest</Heading>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === "blog-post")
            .map(({ node: post }) => (
              <PostContainer
                key={post.id}
              >
                <Title>
                  <TitleLink to={post.fields.slug}>
                    {post.frontmatter.title}
                  </TitleLink>
                </Title>
                <PostFooter>
                  {post.excerpt}
                  <br />
                  <br />
                  <KeepReading to={post.fields.slug}>
                    Keep Reading →
                  </KeepReading>
                </PostFooter>
              </PostContainer>
            ))}
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
