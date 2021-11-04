import React from 'react'

import './Category.css'

function Category({ title, photo, link }) {
  return (
    <div className="category">
      <h2 className="category__headline">{title}</h2>

      <a className="category__link" href={link}>
        <div className="photo">
          <img src={photo} alt="computer" />
        </div>
        <p>Shop now</p>
      </a>
    </div>
  )
}

export default Category
