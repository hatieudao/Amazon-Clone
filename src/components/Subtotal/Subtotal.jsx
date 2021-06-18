import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';

function Subtotal({ basket }) {

    const total = basket.reduce((sum, item) => sum += item.price * item.quantity, 0);
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={() => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{total}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
