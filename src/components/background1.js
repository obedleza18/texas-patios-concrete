import React, {useState} from "react"
import { mapPagesSlides } from "./data"

const Background1 = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Render the slides
  const renderSlide = (slide) => {
    return (
      <li>
        {slide.image}
        {slide.text}
      </li>
    )
  }

  const handleSelectorClick = (index) => {
    setActiveIndex(index)
  }

  // Renders the pager
  const renderSlectors = (selectors) => {
    return selectors && selectors.map((selector, index) => {
      return (
        <li key={index}><button onClick={() => handleSelectorClick(index)}>{selector.mini}</button></li>
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
        {renderSlide(mapPagesSlides[path][activeIndex])}
      </ul>
      <ul id="slider3-pager" className="rslides_tabs rslides1_tabs">
        {renderSlectors(mapPagesSlides[path])}
      </ul>
    </div>
  )
}

export default Background1