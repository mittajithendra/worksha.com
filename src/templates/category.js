import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Article from "../components/Misc/Article"
import Subline from "../components/Misc/Subline"
import Footer from "../components/Misc/Footer"

const Content = styled.div`
  grid-column: 2;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
`
const Header = styled.div`
  background: linear-gradient(180deg, #009797 0%, #4cb6b6 100%);
  left: 0px;
  top: 0px;
  padding: 20px;

  h2 {
    color: #fff;
  }
`

const Category = ({
  pageContext: { category },
  data: { allMarkdownRemark },
}) => {
  const { nodes, totalCount } = allMarkdownRemark
  const subline = `${totalCount} problem${
    totalCount === 1 ? "" : "s"
  } tagged with "${category}"`

  return (
    <Layout>
      <Helmet title={`Category: ${category}`} />
      <Header>
        <h2>Category &ndash; {category}</h2>
        <Subline>{subline}</Subline>
      </Header>
      <Content>
        {nodes.map(post => (
          <Article
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            timeToRead={post.timeToRead}
            slug={post.fields.slug}
            categories={post.frontmatter.categories}
            key={post.fields.slug}
          />
        ))}
      </Content>
      <Footer />
    </Layout>
  )
}

export default Category

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
}

export const postQuery = graphql`
  query CategoryPage($category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
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
`
