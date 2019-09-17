import styled from "styled-components"

const ResponsiveImage = styled.div`
  svg {
    width : 500px;
    height: 300px;
    margin-bottom: 50px;
  }
  @media (max-width: 600px) {
    svg {
      display: none;
    }
  }
`

export default ResponsiveImage
