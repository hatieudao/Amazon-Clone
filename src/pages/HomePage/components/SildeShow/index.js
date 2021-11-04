import React, { useState, useEffect } from 'react'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

import Aos from 'aos'
import 'aos/dist/aos.css'
import slide1 from '../../../../img/home_slide_1.jpg'
import slide2 from '../../../../img/home_slide_2.jpg'
import slide3 from '../../../../img/home_slide_3.jpg'
import slide4 from '../../../../img/home_slide_4.jpg'
import slide5 from '../../../../img/home_slide_5.jpg'

import './SlideShow.scss'

function SlideShow() {
  const slide = [slide1, slide2, slide3, slide4, slide5]
  const [slideShow, setSlideShow] = useState(0)

  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 100,
    })
  }, [])

  const nextRight = () => {
    const newSlide = slideShow + 1 > 4 ? 0 : slideShow + 1
    setSlideShow(newSlide)
  }
  const nextLeft = () => {
    const newSlide = slideShow - 1 < 0 ? 4 : slideShow - 1
    setSlideShow(newSlide)
  }
  return (
    <div className="slideShow">
      <img
        data-aos="slide-left"
        src={slide[slideShow]}
        alt={`slide-${slideShow}`}
      />
      <KeyboardArrowLeftIcon className="btn btn_left" onClick={nextLeft} />
      <KeyboardArrowRightIcon className="btn btn_right" onClick={nextRight} />
    </div>
  )
}

export default SlideShow
