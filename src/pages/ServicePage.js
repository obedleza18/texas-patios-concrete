
import * as React from "React"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import Services from "../components/services"
import Team from "../components/team"

const ServicePage = () => {
    return (
        <Layout>
            <Gallery />
            <Services />
            <Team />
        </Layout>
    )

}

export default ServicePage
