import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { updateQuantity, deleteProduct } from '../../redux/Actions/Product';

import Aos from 'aos';
import "aos/dist/aos.css";
import './ItemCart.css';

function ItemCart({ product }) {
    const [quantity, setQuantity] = useState(product.quantity);

    const addQuantity = () => setQuantity(quantity + 1);
    const subQuantity = () => setQuantity(quantity === 1 ? quantity : quantity - 1);
    const dispatch = useDispatch();

    useEffect(() => {
        Aos.init({
            duration: 2000,
            delay: 100
        })
    }, [])

    const updateProductQuantity = (newQuantity) => {
        if (product.quantity === newQuantity) return;
        dispatch(updateQuantity(product, newQuantity));
    }

    const deleteProductFromBasket = (removedProduct) => {
        dispatch(deleteProduct(removedProduct));
    }

    return (
        <div aos-data className="ItemCart">
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
                        <button onClick={addQuantity}> + </button>
                        <input type="text" className="ItemCard__selection__quantity"
                            value={quantity}
                        />
                    </div>
                    <button onClick={subQuantity}> - </button>
                    <button type="submit" onClick={() => updateProductQuantity(quantity)}>Set</button>
                    <button type="submit" onClick={() => deleteProductFromBasket(product)}>Remove from basket</button>
                </div>
            </div>
        </div>
    )
}


export default ItemCart;
