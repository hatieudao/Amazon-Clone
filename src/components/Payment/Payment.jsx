import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Payment.css';
import ItemCart from '../ItemCart/ItemCart';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../../axios';
import { emptyCart } from '../../redux/Actions/Product';
function Payment() {

    const user = useSelector(state => state.user);
    const basket = useSelector(state => state.basket.products);
    const total = basket.reduce((sum, item) => sum += item.price * item.quantity, 0);
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);
    const handleSubmit = async e => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch(emptyCart());

            history.replace('/orders');
        });
    }
    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${total * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket])
    console.log("secret : ", clientSecret);
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                    <Link to="/checkout">{basket?.length} {`item${basket?.length > 1 ? 's' : ''}`} </Link>
                    )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 Q1 HCM City</p>
                        <p>Viet Nam</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.length ?
                                basket.map(item => <ItemCart
                                    key={item.id}
                                    product={item}
                                    updateProductQuantity={null}
                                    deleteProductFromBasket={null}
                                    setNewQuatity={null}
                                />) : "Nothing"
                        }
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit} >
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={value => (
                                        <h3>Order total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={total}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded} >
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
