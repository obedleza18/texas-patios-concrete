import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'


const Background1 = () =>{
    return(
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
    )
}

export default Background1