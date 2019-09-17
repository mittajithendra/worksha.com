import styled from "styled-components"

const Header = styled.div`
  background: linear-gradient(180deg, #009797 0%, #4cb6b6 100%);
  width: 100%;
  left: 0px;
  top: 0px;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
`
const Heading = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  text-transform: uppercase;
`

const Title = styled.h1`
  font-style: normal;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 48px;
  line-height: 59px;
  color: #ffffff;

  span {
    font-weight: 300;
  }
`

const SubTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 29px;
  color: #e0e0e0;
`

export { Header, Heading, Title, SubTitle }
