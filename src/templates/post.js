import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/Layout"
import PrevNext from "../components/Misc/PrevNext"
import Helmet from "react-helmet"
//added disqus 
import { DiscussionEmbed } from 'disqus-react'

const Content = styled.article`
  grid-column: 2;
  max-width: 1000px;
  padding: 2rem 4.5rem;
  background-color: ${props => props.theme.colors.bg};
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  p {
    font-size: 1.1rem;
    letter-spacing: -0.003em;
    line-height: 1.58;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem;
    }
  }
  .prism-code {
    padding: 0.75rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 16px;
  }
`

const Title = styled.h1`
  margin-bottom: 1rem;
`

const PostContent = styled.div`
  margin-top: 4rem;
`

const Post = ({
  pageContext: { slug, prev, next },
  data: { markdownRemark: postNode },
}) => {
  const post = postNode.frontmatter
  
  const disqusConfig = {
    shortname: "worksha-com-1",//your site shortname here
    config: { identifier: post.slug, title: post.title },
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <Content>
        <Link to="/">Go to Home</Link>
        <Title>{post.title}</Title>
        <>
          By <a href={"https://github.com/" + post.author}>{post.author}</a>{" "}
          &mdash; {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{" "}
          {post.categories.map((cat, i) => (
            <React.Fragment key={cat}>
              {!!i && ", "}
              <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
            </React.Fragment>
          ))}
        </>
        <PostContent>
          <div
            dangerouslySetInnerHTML={{
              __html: postNode.html,
            }}
          />
        </PostContent>
        <PrevNext prev={prev} next={next} />
        <br/>
        <br/>
        {/* comments go here */}
        <DiscussionEmbed {...disqusConfig} /> 
      </Content>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
        categories
        author
      }
      timeToRead
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
    }
  }
`
