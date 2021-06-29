import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import logo from './../../img/logo.bmp';
import { auth } from '../../fisebase'
function Header() {
    const basket = useSelector(state => state.basket.products);
    const quantityOfBasket = basket.reduce((quantity, item) => quantity += item.quantity, 0);
    const user = useSelector(state => state?.user)
    const userEmail = user?.email;
    const history = useHistory();
    const handleAuthentication = () => {
        console.log(user);
        console.log(auth.signOut);
        if (user) {
            auth.signOut()
                .then(() => {
                    history.push('/login');
                })
                .catch(e => {
                    alert(e.message)
                })
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="logo" className="header__logo" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!userEmail ? "/login" : "/"} className="route__link">
                    <div className="header__option"

                    >
                        <span className="header__lineOne">Hello, {userEmail ? userEmail : "Sign in"}</span>
                        {!userEmail && <span className="header__lineTwo">Account & List</span>}
                        {userEmail && <span className="header__lineTwo" onClick={handleAuthentication}>Sign Out</span>}
                    </div>
                </Link>
                <Link to="/orders" className="route__link">
                    <div className="header__option">
                        <span className="header__lineOne">Returns</span>
                        <span className="header__lineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/checkout" className="route__link" >
                    <div className="header__option heade__cart">
                        <span className="cartCounting">{quantityOfBasket}</span>
                        <div><ShoppingCartIcon />
                            <span className="header__lineTwo">Cart</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div >
    );
}

export default Header;