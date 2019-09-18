import React from "react"
import Layout from "../components/Layout"
import Container from "../components/Responsive/Container"
import Helmet from "react-helmet"
import { Link } from "gatsby"

const ThankYouPage = () => (
  <Layout>
    <Helmet>
      <title>Thank You</title>
    </Helmet>
    <Container>
      <h1>Thank You</h1>
      <p>Your form submission has been recieved!</p>
      <Link to="/">Back to Home</Link>
    </Container>
  </Layout>
)

export default ThankYouPage
