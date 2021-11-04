import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './ItemCart.scss'
import { updateQuantity, deleteProduct } from '../../redux/Actions/Product'

const ItemCart = ({ product, setNewQuantity, hidenButton }) => {
  const [quantity, setQuantity] = useState(product.quantity)

  const addQuantity = () => setQuantity(quantity + 1)
  const subQuantity = () =>
    setQuantity(quantity === 1 ? quantity : quantity - 1)
  const dispatch = useDispatch()

  const updateProductQuantity = (addedProduct, newQuantity) => {
    if (addedProduct.quantity === newQuantity) return
    dispatch(updateQuantity(addedProduct, newQuantity))
  }

  const deleteProductFromBasket = (removedProduct) => {
    dispatch(deleteProduct(removedProduct))
  }

  return (
    <div className="ItemCart">
      <div className="ItemCart__image">
        <img src={product.image} alt="product" />
      </div>
      <div className="ItemCart__info">
        <p className="ItemCart__title">{product.title}</p>
        <p className="ItemCart__description">{product.description}</p>
        <p className="ItemCart__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div className="ItemCart__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
        <div className="ItermCart__selection">
          <div className="ItemCart__setQuantity">
            {hidenButton && (
              <button type="button" onClick={addQuantity}>
                {' '}
                +{' '}
              </button>
            )}
            <input type="text" value={quantity} readOnly />
            {hidenButton && (
              <button type="button" onClick={subQuantity}>
                {' '}
                -{' '}
              </button>
            )}
            {hidenButton && (
              <button
                type="submit"
                onClick={() => {
                  updateProductQuantity(product, quantity)
                  if (setNewQuantity) setNewQuantity()
                }}
              >
                Set
              </button>
            )}
          </div>
          {hidenButton && (
            <button
              type="submit"
              onClick={() => deleteProductFromBasket(product)}
            >
              Remove from basket
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemCart
