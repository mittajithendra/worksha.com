import React from "react"
import Layout from "../components/Layout"
import Container from "../components/Responsive/Container"
import { graphql, Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Helmet from "react-helmet"

const ds = ({ data }) => {
  const lists = data.allPythonYaml.nodes
  return (
    <Layout>
      <Helmet>
        <title>Python | Worksha</title>
      </Helmet>
      <Container>
        <h1>Python</h1>
        {lists.map(({ elements, title }) => {
          return (
            <ul>
              <h2>{title}</h2>
              {elements.map(({ title }) => (
                <Link to={kebabCase(title)}>
                  {title}
                  <br />
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
    allPythonYaml {
      nodes {
        title
        elements {
          title
        }
      }
    }
  }
`
