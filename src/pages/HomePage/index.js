import React from 'react'
import SlideShow from './components/SildeShow'
import Categories from './components/Categories'
import './HomePage.scss'

function HomePage() {
  return (
    <div className="homePage">
      <SlideShow />
      <Categories />
    </div>
  )
}

export default HomePage
