import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router'
import './Subtotal.scss'

function Subtotal({ basket }) {
  const history = useHistory()
  const total = basket.reduce((sum, item) => {
    const newSum = sum + item.price * item.quantity
    return newSum
  }, 0)
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType="text"
        thousandSeparator
        prefix="$"
      />
      <button type="button" onClick={() => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal
