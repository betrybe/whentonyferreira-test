import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getEmailLogin } from '../actions';
import styles from '../css/login.module.css';
import Logo from '../img/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stateButton, setStateButton] = useState(true);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
    const resultEmail = pattern.test(email);

    // Min caracter number of password
    const minNumberPassword = 6;

    // Validate Button Status
    if (resultEmail && password.length >= minNumberPassword) {
      setStateButton(false);
    } else {
      setStateButton(true);
    }
  }, [email, password]);

  function goWallet() {
    dispatch(getEmailLogin(email));
    history.push('/carteira');
  }
  return (

    <div className={ styles.container }>

      <div className={ styles.box }>
        <img src={ Logo } alt="Logo Trybe" className={ styles.logo } />

        <input
          type="email"
          data-testid="email-input"
          placeholder="E-mail"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          className={ styles.input }
        />
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          className={ styles.input }
        />
        <button
          type="button"
          className={ styles.button }
          disabled={ stateButton }
          onClick={ () => goWallet() }
        >
          Entrar

        </button>

      </div>

    </div>
  );
};

export default Login;
