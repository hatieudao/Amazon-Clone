import React from 'react';
import SlideShow from '../SildeShow/SlideShow';
import Categories from '../Categories/Categories';
import './Home.css';

function Home() {
    return (
        <div className="Home" >
            <SlideShow />
            <Categories />
        </div>
    )
}

export default Home;