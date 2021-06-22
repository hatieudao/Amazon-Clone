import React, { forwardRef } from 'react';

import FlipMove from 'react-flip-move';

import Subtotal from "../Subtotal/Subtotal";
import { useSelector } from 'react-redux';
import ItemCart from '../ItemCart/ItemCart';
import './Checkout.css';

function Checkout() {
    const basket = useSelector(state => state.basket.products);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__title">
                    <h2>Your Shopping Basket</h2>
                </div>

                {basket.length ?

                    basket.map(item => <ItemCart
                        key={item.id}
                        product={item}
                    />)

                    : <div className="nothing">Nothing on your Cart</div>
                }

            </div>
            <div className="checkout__right">
                <Subtotal basket={basket} />
            </div>
        </div>
    )
}

export default Checkout;
