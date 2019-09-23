import React from "react"
import Layout from "../components/Layout"
import Container from "../components/Responsive/Container"
import { graphql, Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Helmet from "react-helmet"

const ds = ({ data }) => {
  const lists = data.allDataStructuresYaml.nodes
  return (
    <Layout>
      <Helmet>
        <title>Data Structures | Worksha</title>
      </Helmet>
      <Container>
        <h1>Data Structures</h1>
        {lists.map(({ elements, title }) => {
          return (
            <ul>
              <h2>{title}</h2>
              {elements.map(({ title }) => (
                <Link to={kebabCase(title)}>
                  {title}
                </Link>
              ))}
            </ul>
          )
        })}
      </Container>
    </Layout>
  )
}

export default ds

export const pageQuery = graphql`
  {
    allDataStructuresYaml {
      nodes {
        title
        elements {
          title
        }
      }
    }
  }
`
