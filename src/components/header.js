import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import Background1 from "./background1"
import { Link } from "gatsby"


function Header(props){
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
                    <li><Link to="/" className="scroll"><span>Home</span></Link></li>
                    <li><Link to="/ServicePage" className="scroll"><span>Services</span></Link></li>
                    <li><Link to="/page-2"><span>Grills and Appliances</span></Link></li>
                    <li><Link to="/ContactPage"><span>Contact Us</span></Link></li>
                  </ul>
                </nav>
              </div>
              <div className="clearfix"></div>
            </nav>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      <Background1 />
    </div>
  )
}

export default Header