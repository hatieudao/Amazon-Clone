import React, { useEffect } from 'react';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import ListProduct from './components/ListProduct/ListProduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/404/NotFound';
import { auth } from './fisebase';
import './App.css';
import { useDispatch } from 'react-redux';
import { userLogin, userLogout } from './redux/Actions/User';
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