import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <h3>About us</h3>
        <div className="about-info">
          <StaticImage src="../images/aboutus.jpg" alt="about-image" />
          <div className="about-info2">
            <h4>About Texas Patios And Concrete</h4>
            <p>Texas Patios And Concrete is a family owned and operated business.. We have been proudly serving the
              metroplex for over 10 years. Our honesty and quality of work make us one of a kind! Not to mention, no
              one can beat our prices! Our mission is to create a comfortable and affordable atmosphere for you and
              your family. And to treat every home as if it were our own.</p>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  )
}

export default About