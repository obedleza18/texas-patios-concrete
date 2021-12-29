import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const mainHeaderText = (
  <>
    <div className="slider-info">
      <h4>Outdoor <span>Living Dreams</span></h4>
      <h6><span>Your Neighbor</span> won't belive it</h6>
    </div>
  </>
)

export const mapPagesSlides = {
  '/':
  [
    {
      'image': <StaticImage src="../images/bg1.jpg" alt="Slide 1" />,
      'mini': <StaticImage src="../images/bg1_s.jpg" alt="Selector 1" />,
      'text': mainHeaderText
    },
    {
      'image': <StaticImage src="../images/bg2.jpg" alt="Slide 2" />,
      'mini': <StaticImage src="../images/bg2_s.jpg" alt="Selector 2" />,
      'text': mainHeaderText
    },
    {
      'image': <StaticImage src="../images/bg3.jpg" alt="Slide 3" />,
      'mini': <StaticImage src="../images/bg3_s.jpg" alt="Selector 3" />,
      'text': mainHeaderText
    },
    {
      'image': <StaticImage src="../images/bg4.jpg" alt="Slide 4" />,
      'mini': <StaticImage src="../images/bg4_s.jpg" alt="Selector 4" />,
      'text': mainHeaderText
    },
  ],
  '/page-2': [
    {
      'image': <StaticImage src="../images/sliderbull1.jpg" alt="Slide 1" />,
      'mini': <StaticImage src="../images/slider_bull_thump1.jpg" alt="Selector 1" />,
      'text': (
        <>
          <div className="slider-info">
            <h4>Outdoor <span> Kitchens</span></h4>
            <h6><span>And stainless steel</span> appliances</h6>
          </div>
        </>
      )
    },
    {
      'image': <StaticImage src="../images/sliderbull2.jpg" alt="Slide 2" />,
      'mini': <StaticImage src="../images/slider_bull_thump2.jpg" alt="Selector 2" />,
      'text': (
        <>
          <div className="slider-info">
            <h4>Outdoor <span> Grills</span></h4>
            <h6><span>Features stainless steel</span> gas grill</h6>
          </div>
        </>
      )
    }
  ]
}