import React from "react"
import Layout from "../components/Layout"
import HomeHeader from "../components/Misc/HomeHeader"
import Explore from "../components/Misc/Explore"
import Footer from "../components/Misc/Footer"
import LatestPosts from "../components/Misc/LatestPosts"

export default function index() {
  return (
    <Layout>
      <HomeHeader />
      <Explore />
      <LatestPosts />
      <Footer />
    </Layout>
  )
}
