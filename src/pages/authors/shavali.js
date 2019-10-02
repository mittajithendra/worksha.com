import React from "react"
import Layout from "../../components/Layout"
import Container from "../../components/Responsive/Container"

export default function Problems() {
    return (
      <Layout>
        <Container>
      <div>
  <center><h1>Shavali's Profile</h1></center>
  <h3>Still Pending</h3>
  <ul>
        <li>Heap Sort</li>
		<li>What is stability in sorting algorithms</li>
	</ul>
  <br />
  <br />
      <h2>Problems Posted</h2>
      <ul>
        <li><a href="https://worksha.com/next-permutation">Next Permutation</a></li>
        <li><a href="https://worksha.com/counting-sort">Counting Sort</a></li>
        <li><a href="https://worksha.com/height-of-a-binary-tree">Height of a binary tree</a></li>
      </ul>
        
      </div>
      </Container>
      </Layout>
    )
  }
  