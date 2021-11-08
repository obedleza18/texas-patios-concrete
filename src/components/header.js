import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <div className="header">
      <div className="agile-top-header">
        <div className="logo">
        </div>
        <div className="top-left">
          <div className="top-icons">
            <ul>
              <li><a href="https://www.facebook.com/Texas-Patios-Concrete-1642632669364250/" target="_blank"
                     className="fa fa-facebook"> </a></li>
              <li><a href="https://www.instagram.com/texas_patios_and_concrete/" target="_blank"
                     className="fa fa-instagram"> </a></li>
            </ul>
          </div>
          <div className="top-nav">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <nav className="linkEffects linkHoverEffect_12">
                  <ul>
                    <li><a href="/" className="scroll"><span>Home</span></a></li>
                    <li><a href="#about" className="scroll"><span>About Us</span></a></li>
                    <li><a href="#products" className="scroll"><span>Our Product</span></a></li>
                    <li><a href="#gallery" className="scroll"><span>Services</span></a></li>
                    <li><a href="#team" className="scroll"><span>Design</span></a></li>
                    <li><a href="page-2"><span>Grills and Appliances</span></a></li>
                    <li><a href="page/contact.html"><span>Contact Us</span></a></li>
                  </ul>
                </nav>
              </div>
              <div className="clearfix"></div>
            </nav>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      <div className="slider">
        <ul className="rslides" id="slider">
          <li>
            <StaticImage src="../images/bg1.jpg" alt="" />
            <div className="slider-info">
              <h4>Outdoor <span>Living Dreams</span></h4>
              <h6><span>Your Neighbor</span> won't belive it</h6>
            </div>
          </li>
          <li>
            <StaticImage src="../images/bg2.jpg" alt="" />
            <div className="slider-info">
              <h4>Outdoor <span>Living Dreams</span></h4>
              <h6><span>Your Neighbor</span> won't belive it</h6>
            </div>
          </li>
          <li>
            <StaticImage src="../images/bg3.jpg" alt="" />
            <div className="slider-info">
              <h4>Outdoor <span>Living Dreams</span></h4>
              <h6><span>Your Neighbor</span> won't belive it</h6>
            </div>
          </li>
          <li>
            <StaticImage src="../images/bg4.jpg" alt="" />
            <div className="slider-info">
              <h4>Outdoor <span>Living Dreams</span></h4>
              <h6><span>Your Neighbor</span> won't belive it</h6>
            </div>
          </li>
        </ul>
        <ul id="slider3-pager" className="rslides_tabs rslides1_tabs">
          <li><a href="#"><StaticImage src="../images/bg1_s.jpg" alt="" /></a></li>
          <li><a href="#"><StaticImage src="../images/bg2_s.jpg" alt="" /></a></li>
          <li><a href="#"><StaticImage src="../images/bg3_s.jpg" alt="" /></a></li>
          <li><a href="#"><StaticImage src="../images/bg4_s.jpg" alt="" /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header