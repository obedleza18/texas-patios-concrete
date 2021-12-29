import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const ConcreteTypes = () => {
    return(
        <div>
        <div className="team-page" id="team">
	        <div className="container">
		        <h3 className="title">Concrete Types</h3>
                <div className="col-md-4 about-poleft t1">
                    <div className="about_img"><StaticImage src="../images/concrete_type1.jpg" alt="" />
                    <h5>Salt Crete Concrete</h5>
                        <div className="about_opa">
                        </div>
                    </div>
                </div>
                <div className="col-md-4 about-poleft t2">
                    <div className="about_img"><StaticImage src="../images/concrete_type2.jpg" alt="" />
                        <h5>Aggregate Concrete</h5>
                        <div className="about_opa">
                        </div>
                    </div>
                </div>
                <div className="col-md-4 about-poleft t3">
                    <div className="about_img"><StaticImage src="../images/concrete_type3.jpg" alt="" />
                        <h5>Textured Concrete</h5>
                        <div className="about_opa">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="team-page" id="team">
            <div className="container">
		        <div className="col-md-4 about-poleft t1">
                    <div className="about_img"><StaticImage src="../images/concrete_type4.jpg" alt="" />
                        <h5>Broom Finish Concrete</h5>
                        <div className="about_opa">
                        </div>
                    </div>
                </div>
		    <div className="col-md-4 about-poleft t2">
                <div className="about_img"><StaticImage src="../images/concrete_type5.jpg" alt="" />
                    <h5>Acid Stain Concrete</h5>
                    <div className="about_opa">        
                    </div>
                </div>
            </div>
		    <div className="col-md-4 about-poleft t3">
                <div className="about_img"><StaticImage src="../images/concrete_type6.jpg" alt="" />
                    <h5>Stamped Concrete</h5>
                    <div className="about_opa">        
                    </div>
                </div>
            </div>
	        </div>
		    <div className="clearfix"></div>
        </div>
        </div>
    )
}

export default ConcreteTypes