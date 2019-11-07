import React from "react"
import Container from "../Responsive/Container"
import ImageWrapper from "../Responsive/ImageWrapper"
import Navbar from "../Layout/Navbar"
import Icon from "../../../assets/code.svg"
import { Header, Title, SubTitle } from "../Styled/Components"

const HomeHeader = () => {
  return (
    <Header>
      <Container>
        <Navbar />
        <section>
          <span>
            <Title>
              Make it <span>hard man...</span>
            </Title>
            <SubTitle>
              Worksha is a place to learn code in Python, Data Structures and Algorithms.
            </SubTitle>
          </span>
          <ImageWrapper>
            <Icon />
          </ImageWrapper>
        </section>
      </Container>
    </Header>
  )
}

export default HomeHeader
