import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../../redux/Actions/Product'
import './Product.css'

function Product({ product, openPopup }) {
  const dispatch = useDispatch()
  const addBasket = (addedProduct) => {
    dispatch(addProduct(addedProduct))
  }

  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 100,
    })
  }, [])

  return (
    <div data-aos="fade-up" data-aos-once className="product">
      <div className="product__info">
        <p>{product.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img src={product.image} alt="product" />
      <button
        type="button"
        onClick={() => {
          try {
            addBasket(product)
            openPopup()
          } catch (error) {
            alert(error.message)
          }
        }}
      >
        Add to Basket
      </button>
    </div>
  )
}

export default Product
