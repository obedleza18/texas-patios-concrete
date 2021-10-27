import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"

const Services = () => {
    return(
        <div id="services" className="services">
	<div className="container">
			<h3>Outdoor kitchen appliances</h3>
				<div className="col-md-3 ser-w3l s1">
						<span><StaticImage src="../images/grill.png" alt="about-image" /></span>
					<h5>Outdoor Grills</h5>
					<p>Bull Outdoor Products is known for its superior award-winning outdoor barbecue islands.</p>
				</div>
				<div className="col-md-3 ser-w3l s2">
						<span><StaticImage src="../images/bar-center.png" alt="about-image"/></span>
					<h5>Entertainer's Bar</h5>
					<p>The Entertainer's Bar is the best choice for those looking to have guests over for cocktails in the backyard or patio.</p>
				</div>
				<div className="col-md-3 ser-w3l s3">
						<span><StaticImage src="../images/double-doors.png" alt="about-image" /></span>
					<h5>Stain Steal Doors</h5>
					<p>These Double Doors have 304 Grade 16 Gauge Stainless Steel and double lined doors for easy storage of accessories.</p>
				</div>
				<div className="col-md-3 ser-w3l s4">
						<span><StaticImage src="../images/fridge.png" alt="about-image"/></span>
					<h5>Refrigerators</h5>
					<p>Stainless Steel exterior door panel, Space Saving Flush back design, Reversable Door-left or right swing.</p>
				</div>
				<div className="clearfix"> </div>
				<div className="right-agile">
					<span>we proudly use Bull Products</span>
				</div>
	</div>
</div>
    )
}

export default Services