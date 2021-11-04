import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../../fisebase'

import Logo from '../../../img/logo.png'
import './Login.scss'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/')
      })
      .catch((error) => alert(error.message))
  }

  const register = (e) => {
    e.preventDefault()
    history.push('/register')
  }

  return (
    <div className="login">
      <Link to="/">
        <img src={Logo} alt="logo" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signinButton"
            type="submit"
            onClick={signIn}
          >
            Sign-in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon Fake Clone&apos;s Conditions of Use
          and Privacy Notice.
        </p>
        <button
          className="login__registerButton"
          type="button"
          onClick={register}
        >
          Create your Amazon Fake Clone Account
        </button>
      </div>
    </div>
  )
}

export default Login
