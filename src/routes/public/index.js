import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import HomePage from '../../pages/HomePage'
import PageNotFound from '../../pages/PageNotFound'
import Header from '../../components/Header'
import Login from '../../pages/Auth/Login'
import Register from '../../pages/Auth/Register'
import ProductPage from '../../pages/ProductPage'
import CheckoutPage from '../../pages/CheckoutPage'
import OrderPage from '../../pages/OrderPage'
import PaymentPage from '../../pages/PaymentPage'
const promise = loadStripe(
  'pk_test_51J71OdBRL40EH09Ql1KHc1Q6CNJfp9Ebcql9D6tQFJxWqQ7WTKkFfDUvvcMdDHflD4iMGr0uLSUZmmhy2lFegfVE000yVJOlJk',
)

function PublicRouter() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/products">
          <ProductPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <PaymentPage />
          </Elements>
        </Route>

        <Route path="/orders">
          <OrderPage />
        </Route>
        <Route path="/" exact component={HomePage} />
        <Route path="/404" component={PageNotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </>
  )
}

export default PublicRouter
