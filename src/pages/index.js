import * as React from "react"

import Layout from "../components/layout"
import About from "../components/about"
import Products from "../components/products"

const IndexPage = () => {
  return (
    <Layout>
      <About />
      <Products />
    </Layout>
  )
}

export default IndexPage
