import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { mapPagesSlides } from "./data"

const Background = () => {

  // Render the slides
  const renderSlides = (slides) => {
    return slides && slides.map((slide, index) => {
      return (
        <li key={index}>
          {slide.image}
          {slide.text}
        </li>
      )
    })
  }

  // Renders the pager
  const renderSlectors = (selectors) => {
    return selectors && selectors.map((selector, index) => {
      return (
        <li key={index}><a href="#">{selector.mini}</a></li>
      )
    })
  }

  // Gets the path for the front end rendering
  let path = '/'
  if (typeof window !== "undefined") {
    path = window.location.pathname
  }

  return (
    <div className="slider">
      <ul className="rslides" id="slider">
        {renderSlides(mapPagesSlides[path])}
      </ul>
      <ul id="slider3-pager" className="rslides_tabs rslides1_tabs">
        {renderSlectors(mapPagesSlides[path])}
      </ul>
    </div>
  )
}

export default Background