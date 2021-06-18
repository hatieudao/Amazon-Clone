import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../fisebase';

import Logo from '../../img/logo.png';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(e => alert(e.message));

    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(e => alert(e.message));
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
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="login__signinButton" onClick={signIn}>
                        Sign-in
                    </button>
                </form>
                <p>By continuing, you agree to Amazon Fake Clone's Conditions of Use and Privacy Notice.</p>
                <button className="login__registerButton" onClick={register}>
                    Create your Amazon Fake Clone Account
                </button>
            </div>
        </div>

    )
}

export default Login
