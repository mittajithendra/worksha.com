import React from "react"
import styled from "styled-components"
import Container from "../Responsive/Container"
import PageGrid from "../Responsive/PageGrid"
import { Link, useStaticQuery, graphql } from "gatsby"

const Explore = () => {
  const data = useStaticQuery(
    graphql`
      {
        allExploreYaml {
          edges {
            node {
              title
              description
              slug
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      <h4>Explore</h4>
      <PageGrid columns="repeat(2, 1fr)">
        <div className="grid-container">
          {data.allExploreYaml.edges.map(({ node }) => {
            return (
              <div className="grid-item">
                <ListItem>
                  <h2>{node.title}</h2>
                  <p>{node.description}</p>
                  <br />
                  <NavLink to={node.slug}>Get Started</NavLink>

                  <br />
                </ListItem>
              </div>
            )
          })}
        </div>
      </PageGrid>
    </Container>
  )
}

const ListItem = styled.div`
  padding: 25px;
  background: #3d3d3d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  h2 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }
`

const NavLink = styled(Link)`
  font-size: 16px;
  background-color: #009797;
  color: #e0e0e0;
  padding: 8px;
  border-radius: 5px;
`

export default Explore
