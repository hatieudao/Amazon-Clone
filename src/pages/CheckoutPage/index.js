import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Subtotal from '../../components/Subtotal'

import ItemCart from '../../components/ItemCart'
import NotifyPopup from '../../components/NotifyPopup'
import './Checkout.scss'

function CheckoutPage() {
  const basket = useSelector((state) => state.basket.products)
  console.log(basket)
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  let timer = null
  const openPopup = () => {
    if (timer) clearTimeout(timer)
    setIsOpenPopup(true)
    timer = setTimeout(() => setIsOpenPopup(false), 4000)
  }

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
        </div>

        {basket.length ? (
          basket.map((item) => (
            <ItemCart
              key={item.id}
              product={item}
              setNewQuantity={openPopup}
              hidenButton
            />
          ))
        ) : (
          <div className="nothing">Nothing on your Cart</div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal basket={basket} />
      </div>
      {isOpenPopup && (
        <div className="addSuccessfulPopup">
          <NotifyPopup content="Update Successfully" />
        </div>
      )}
    </div>
  )
}

export default CheckoutPage
