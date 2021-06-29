import React, { useState, useEffect } from 'react';
import slide_1 from './../../img/home_slide_1.jpg';
import slide_2 from './../../img/home_slide_2.jpg';
import slide_3 from './../../img/home_slide_3.jpg';
import slide_4 from './../../img/home_slide_4.jpg';
import slide_5 from './../../img/home_slide_5.jpg';

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import './SlideShow.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function SlideShow() {
    const slide = [slide_1, slide_2, slide_3, slide_4, slide_5];
    const [slideShow, setSlideShow] = useState(0);

    useEffect(() => {
        Aos.init({
            duration: 2000,
            delay: 100
        })
    }, [])

    const nextRight = () => {
        const newSlide = slideShow + 1 > 4 ? 0 : slideShow + 1;
        setSlideShow(newSlide);
    }
    const nextLeft = () => {
        const newSlide = slideShow - 1 < 0 ? 4 : slideShow - 1;
        setSlideShow(newSlide);
    }
    return (
        <div className="slideShow">
            <img data-aos="slide-left" src={slide[slideShow]} alt={`slide-${slideShow}`} />
            <KeyboardArrowLeftIcon className="btn btn_left" onClick={nextLeft} />
            <KeyboardArrowRightIcon className="btn btn_right" onClick={nextRight} />
        </div>
    )
}

export default SlideShow
