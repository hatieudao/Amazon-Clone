import React, { useEffect } from 'react';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import ListProduct from './components/ListProduct/ListProduct';
import Payment from './components/Payment/Payment';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/404/NotFound';
import { auth } from './fisebase';
import './App.css';
import { useDispatch } from 'react-redux';
import { userLogin, userLogout } from './redux/Actions/User';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51J71OdBRL40EH09Ql1KHc1Q6CNJfp9Ebcql9D6tQFJxWqQ7WTKkFfDUvvcMdDHflD4iMGr0uLSUZmmhy2lFegfVE000yVJOlJk');

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(userLogin(authUser));
      } else {
        dispatch(userLogout());
      }
    })
  }, [])
  return (
    <Router>
      <div className="App" >
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/products">
            <Header />
            <ListProduct />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="*" >
            <Header />
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;