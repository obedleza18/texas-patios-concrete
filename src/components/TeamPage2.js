import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const TeamPage2 = () => {
    return(
      <div className="team-page" id="team">
      <div className="container">
	      <h3 className="title">Some Others Stone Work Types</h3>
		      <div className="col-md-4 about-poleft t1">
            <div className="about_img"><StaticImage src="../images/flagstone_type1.jpg" alt="" />
              <h5>Stone Walls</h5>
                <div className="about_opa">
         
                </div>
            </div>
          </div>
		    <div className="col-md-4 about-poleft t2">
          <div className="about_img"><StaticImage src="../images/flagstone_type2.jpg" alt="" />
            <h5>Stone Pillars</h5>
              <div className="about_opa">
         
              </div>
          </div>
        </div>
		    <div className="col-md-4 about-poleft t3">
            <div className="about_img"><StaticImage src="../images/flagstone_type3.jpg" alt="" />
              <h5>Flower beds</h5>
                <div className="about_opa">
         
                </div>
            </div>
        </div>
	    </div>
		  <div className="clearfix"></div>
      </div>
    )
}

export default TeamPage2