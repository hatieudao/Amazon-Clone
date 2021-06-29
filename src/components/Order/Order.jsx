import React from 'react'
import './Order.css'
import moment from 'moment'
import ItemCart from '../ItemCart/ItemCart'
import CurrencyFormat from 'react-currency-format';
function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => <ItemCart
                product={item}
            />)}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            <h3 className="order__total">Order total: {value}</h3>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order
