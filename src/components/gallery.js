import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Gallery = () => {
    return (
        <div className="gallery" id="gallery">
	<div className="container">
		 <h3>Choose from our Services</h3>
			    <div className="gallery-grids">
					<div className="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div className="grid">
							<figure className="effect-apollo">
								<a href="Services\Concrete\ConcretePage">
								<StaticImage src="../images/concrete16.jpg" alt="" />
									<figcaption>
										
										<h3>Concrete</h3>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div className="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div className="grid">
							<figure className="effect-apollo">
								<a href="page/flagstone.html">
									<StaticImage src="../images/flagstone2.jpg" alt="" />
									<figcaption>
										<h3>Flagstone</h3>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div className="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div className="grid">
							<figure className="effect-apollo">
								<a href="page/patiocovers-arbors.html">
									<StaticImage src="../images/patio_cover9.jpg" alt="" />
									<figcaption>
										<h3>Patio Covers And Arbors</h3>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div className="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div className="grid">
							<figure className="effect-apollo">
								<a href="page/firepits.html">
									<StaticImage src="../images/firepit1.jpg" alt="" />
									<figcaption>
										<h3>Fire Pits</h3>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div className="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div className="grid">
							<figure className="effect-apollo">
								<a href="page/fireplaces.html">
									<StaticImage src="../images/fireplace1.jpg" alt="" />
									<figcaption>
										<h3>Fire Places</h3>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div className="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div className="grid">
							<figure className="effect-apollo">
								<a href="page/outdoorkitchens.html">
									<StaticImage src="../images/outdoor_kitchen1.jpg" alt="" />
									<figcaption>
										<h3>Outdoor Kitchens</h3>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div className="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div className="grid">
							<figure className="effect-apollo">
								<a href="page/retainingwalls.html">
									<StaticImage src="../images/retainingwall1.jpg" alt="" />
									<figcaption>
										<h3>Retaining Walls</h3>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div className="col-md-4 gallery-grid wow fadeInUp animated" data-wow-delay=".5s">
						<div className="grid">
							<figure className="effect-apollo">
								<a href="">
									<StaticImage src="../images/morecomingsoon.jpg" alt="" />
									<figcaption>
										<h3>More Coming Soon</h3>
									</figcaption>	
								</a>
							</figure>
						</div>
					</div>
					<div className="clearfix"> </div>
				

				</div>

	    </div>
	</div>
    )
}
export default Gallery