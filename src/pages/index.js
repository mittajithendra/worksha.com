import React from "react"
import Layout from "../components/Layout"
import HomeHeader from "../components/Misc/HomeHeader"
import Explore from "../components/Misc/Explore"
import Footer from "../components/Misc/Footer"
import Query from "../components/Misc/Query"
import LatestPosts from "../components/Misc/LatestPosts"
import Helmet from "react-helmet"

export default function index() {
  return (
    <Layout>
      <Helmet>
        <title>Home | Worksha</title>
      </Helmet>
      <HomeHeader />
      <Explore />
      <LatestPosts />
      <Query />
      <Footer />
    </Layout>
  )
}
