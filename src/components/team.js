import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"

const Team = () => {
    return(
        <div className="team-page" id="team">
	<div className="container">
		<h3 className="title"> Design</h3>
		<div className="col-md-4 about-poleft t1">
            <div className="about_img"><StaticImage src="../images/design1.jpg" alt=""/>
              <h5>We are ready to start</h5>
              <div className="about_opa">
              </div>
            </div>
        </div>
		<div className="col-md-4 about-poleft t2">
            <div className="about_img"><StaticImage src="../images/design2.jpg" alt="" />
              <h5>Sketch Drawing</h5>
              <div className="about_opa">
              </div>
            </div>
        </div>
		<div className="col-md-4 about-poleft t3">
            <div className="about_img"><StaticImage src="../images/design3.jpg" alt=""/>
              <h5>3 D Drawing</h5>
              <div className="about_opa">
              </div>
            </div>
        </div>
		<div className="clearfix"></div>
	</div>
</div>
    )
}

export default Team