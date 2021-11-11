import React, { useEffect, useState } from 'react';
import styles from '../css/login.module.css';
import Logo from '../img/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stateButton, setStateButton] = useState(true);

  useEffect(() => {
    const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
    const resultEmail = pattern.test(email);

    // Min caracter number of password
    const maxNumberPassword = 6;

    if (resultEmail && password.length >= maxNumberPassword) {
      setStateButton(false);
    } else {
      setStateButton(true);
    }
  }, [email, password]);

  const validateEmail = (value) => {
    setEmail(value.target.value);
  };
  const validatePassword = (value) => {
    setPassword(value.target.value);
  };

  return (
    <div className={ styles.container }>
      <div className={ styles.box }>
        <img src={ Logo } alt="Logo Trybe" className={ styles.logo } />

        <input
          type="email"
          data-testid="email-input"
          placeholder="E-mail"
          value={ email }
          onChange={ validateEmail }
          className={ styles.input }
        />
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ validatePassword }
          className={ styles.input }
        />
        <button
          type="button"
          className={ styles.button }
          disabled={ stateButton }
        >
          Entrar

        </button>

      </div>

    </div>
  );
};

export default Login;
