import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import GrillAppliance from "../components/GrillAppliance"
import TeamPage2 from "../components/TeamPage2"

const SecondPage = () => (
  <Layout>
    <GrillAppliance />
    <TeamPage2 />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
