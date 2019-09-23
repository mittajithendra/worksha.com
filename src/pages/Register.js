import React from "react"
import Query from "../components/Misc/Intern"
import Footer from "../components/Misc/Footer"
import Helmet from "react-helmet"
import Layout from "../components/Layout"

export default function index() {
    return (
      <Layout>
        <Helmet>
          <title>Home | Worksha</title>
        </Helmet>
        <Query />
        <Footer />
      </Layout>
    )
  }
  