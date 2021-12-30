import React, {useState} from "react"
import { mapPagesSlides } from "./data"

<<<<<<< HEAD:src/components/background.js
const Background = () => {
=======
const Background1 = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Gets the path for the front end rendering
  let path = '/'
  if (typeof window !== "undefined") {
    path = window.location.pathname
  }

  const handleSelectorClick = (index) => {
    setActiveIndex(index)
  }
>>>>>>> f168afce56191ef07def5ce2bcefc0f383fbae3b:src/components/background1.js

  // Render the slides
  const renderSlide = () => {
    let slide
    if (typeof mapPagesSlides[path] !== 'undefined' &&
        typeof mapPagesSlides[path][activeIndex] !== 'undefined') {
      slide = mapPagesSlides[path][activeIndex]
    }
    else {
      slide = mapPagesSlides['/'][activeIndex]
    }

    return (
      <li>
        {slide.image}
        {slide.text}
      </li>
    )
  }

  // Renders the pager
  const renderSelectors = () => {
    let selectors
    if (typeof mapPagesSlides[path] !== 'undefined') {
      selectors = mapPagesSlides[path]
    }
    else {
      selectors = mapPagesSlides['/']
    }

    return selectors.map((selector, index) => {
      return (
        <li key={index} className={activeIndex === index ? 'rslides_here' : ''}>
          <button onClick={() => handleSelectorClick(index)}>{selector.mini}</button>
        </li>
      )
    })
  }

  return (
    <div className="slider">
      <ul className="rslides" id="slider">
        {renderSlide()}
      </ul>
      <ul id="slider3-pager" className="rslides_tabs rslides1_tabs">
        {renderSelectors()}
      </ul>
    </div>
  )
}

export default Background