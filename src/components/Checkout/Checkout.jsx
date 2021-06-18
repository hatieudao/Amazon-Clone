import React from 'react';
import Subtotal from "../Subtotal/Subtotal";
import './Checkout.css';
import { useSelector } from 'react-redux';
import ItemCart from '../ItemCart/ItemCart';

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
