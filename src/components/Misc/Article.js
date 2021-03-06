import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Subline from "../Misc/Subline"

const Post = styled.article`
  display: flex;
  background-color: #3d3d3d;
  padding: 1rem;
  flex-direction: column;
  margin-top: ${props => props.top || "3.5rem"};
  margin-bottom: ${props => props.bottom || "3.5rem"};
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Article = ({
  title,
  date,
  excerpt,
  slug,
  timeToRead,
  categories,
  top,
  bottom,
}) => {
  return (
    <Post top={top} bottom={bottom}>
      <Title>
        <Link to={slug}>{title}</Link>
      </Title>
      <Subline>
        {date} &mdash; {timeToRead} Min Read &mdash; In{" "}
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && ", "}
            <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
          </React.Fragment>
        ))}
      </Subline>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  )
}

export default Article

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
}
