import React from "react"
import Layout from "../components/Layout"
import Container from "../components/Responsive/Container"
import Helmet from "react-helmet"

const ThankYouPage = () => (
  <Layout>
    <Helmet>
      <title>Thank You</title>
    </Helmet>
    <Container>
      <h1>Thank You</h1>
      <p>Your form submission has been recieved!</p>
    </Container>
  </Layout>
)

export default ThankYouPage
