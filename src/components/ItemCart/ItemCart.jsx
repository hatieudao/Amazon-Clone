import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ItemCart.css'
import { updateQuantity, deleteProduct } from '../../redux/Actions/Product';
const ItemCart = ({ product, setNewQuantity }) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const addQuantity = () => setQuantity(quantity + 1);
    const subQuantity = () => setQuantity(quantity === 1 ? quantity : quantity - 1);
    const dispatch = useDispatch();

    const updateProductQuantity = (product, newQuantity) => {
        if (product.quantity === newQuantity) return;
        dispatch(updateQuantity(product, newQuantity));
    }

    const deleteProductFromBasket = (removedProduct) => {
        dispatch(deleteProduct(removedProduct));
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
                        <button onClick={addQuantity}> + </button>
                        <input type="text" value={quantity} readOnly />
                        <button onClick={subQuantity}> - </button>
                        <button type="submit" onClick={() => {
                            updateProductQuantity(product, quantity);
                            if (setNewQuantity) setNewQuantity();
                        }}>Set</button>
                    </div>
                    <button type="submit" onClick={() => deleteProductFromBasket(product)}>Remove from basket</button>
                </div>
            </div>
        </div>
    )
};


export default ItemCart;
