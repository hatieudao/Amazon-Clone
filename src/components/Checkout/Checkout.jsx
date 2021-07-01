import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Subtotal from "../Subtotal/Subtotal";

import ItemCart from '../ItemCart/ItemCart';
import NotifyPopup from '../Popup/NotifyPopup';
import './Checkout.css';

function Checkout() {
    const basket = useSelector(state => state.basket.products);
    console.log(basket);
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    let timer = null;
    const openPopup = () => {
        if (timer) clearTimeout(timer);
        setIsOpenPopup(true);
        timer = setTimeout(() => setIsOpenPopup(false), 4000);
    }

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
                        setNewQuantity={openPopup}
                        hidenButton={true}
                    />)

                    : <div className="nothing">Nothing on your Cart</div>
                }

            </div>
            <div className="checkout__right">
                <Subtotal basket={basket} />
            </div>
            {
                isOpenPopup &&
                <div className="addSuccessfulPopup">
                    <NotifyPopup content="Update Successfully" />
                </div>
            }
        </div>
    )
}

export default Checkout;
