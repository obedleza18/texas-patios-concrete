import * as React from "react"

import Layout from "../components/layout"
import About from "../components/about"
import Products from "../components/products"
import Gallery from "../components/gallery"
import Services from "../components/services"
import Team from "../components/team"

const IndexPage = () => {
  return (
    <Layout>
      <About />
      <Products />
      <Gallery />
      <Services />
      <Team />
    </Layout>
  )
}

export default IndexPage
