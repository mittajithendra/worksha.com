import React from "react"
import Container from "../Responsive/Container"
import Article from "./Article"
import PageGrid from "../Responsive/PageGrid"
import { useStaticQuery, graphql } from "gatsby"

const LatestPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 4
      ) {
        totalCount
        nodes {
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  `)
  const { nodes } = data.allMarkdownRemark
  return (
    <Container>
      <h4>Latest Problems</h4>
      <PageGrid columns="repeat(2, 1fr)">
        <div className="grid-container">
          {nodes.map(post => (
            <Article
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              excerpt={post.excerpt}
              timeToRead={post.timeToRead}
              slug={post.fields.slug}
              categories={post.frontmatter.categories}
              key={post.fields.slug}
              top = "0"
              bottom = "1rem"
            />
          ))}
        </div>
      </PageGrid>
    </Container>
  )
}


export default LatestPosts
