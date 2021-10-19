import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Products = () => {
  return (
    <div className="agile-prod" id="products">
	<div className="container">
		<h3>Our Product and experience</h3>
		<div className="agile-prod1">
			<div className="agile-sub">
				<h4>Our Product:</h4>
				<p>We pick and choose the best quality of materials we will be using at your residence. Most companies buy in bulk and use damaged/discounted materials. Instead we order exactly what we need at local stores and we return bad items if necessary. This reflects on the final product and quality of our work.</p>
				<p></p>
			</div>
			<div className="agile-img">
				<StaticImage src="../images/products2.jpg" alt="image"/>
			</div>
		</div>
		<div className="agile-prod2">
			<StaticImage src="../images/products1.jpg" alt="image"/> 
			<div className="agile-info">
				<h4>Our experience:</h4>
				<p>Over 10 Years of experience shows in our quality of work. Always caring for our customers & providing the best ideas & design for your project, as is the house was our own!</p>
			</div>
			<div className="agile-info-img">
				<StaticImage src="../images/products3.jpg" alt="image"/>
			</div>
			<div className="clearfix"> </div>
		</div>
		<div className="clearfix"> </div>
	</div>
</div>
  )
}

export default Products