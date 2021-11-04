import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../../fisebase'

import Logo from '../../../img/logo.png'
import './Register.scss'

function Register() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')

  const toLoginPage = (e) => {
    e.preventDefault()
    history.push('/login')
  }

  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/')
      })
      .catch((e) => alert(e.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img src={Logo} alt="logo" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Create a new account</h1>
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
          <h5>Retype Password</h5>
          <input
            type="password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
          {password !== retypePassword && (
            <p className="error">Password doesn't match</p>
          )}
          <button
            className="login__signinButton"
            onClick={register}
            disabled={password !== retypePassword}
          >
            Register
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon Fake Clone's Conditions of Use and
          Privacy Notice.
        </p>
        <button className="login__registerButton" onClick={toLoginPage}>
          Login To Amazon Fake Clone By Your Account
        </button>
      </div>
    </div>
  )
}

export default Register
