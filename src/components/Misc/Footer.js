import React from "react"
import styled from "styled-components"

import Container from "../Responsive/Container"

const FooterLink = styled.a`
  color: #282828;
`

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <p>Copyright © 2019. Worksha. All Rights Reserved.</p>
        <p>
          {" "}
          Built with{" "}
          <FooterLink href="https://www.gatsbyjs.org">
            GatsbyJs
          </FooterLink> by{" "}
          <FooterLink href="https://www.github.com/mohanmonu777">
            Mohan Talupula
          </FooterLink>
        </p>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: linear-gradient(180deg, #009797 0%, #4cb6b6 100%);
  padding: 10px;
  color: #fff;
  text-align: center;
`

export default Footer
