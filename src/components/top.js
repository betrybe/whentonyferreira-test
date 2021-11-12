import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../img/logo.png';
import styles from '../css/top.module.css';

const Top = () => {
  const result = useSelector((state) => state.user);
  console.log(result.email);
  return (
    <header>
      <div className={ styles.containerTop }>
        <div className={ styles.boxLogo }>
          <img src={ Logo } className={ styles.logo } alt="Logo Trybe" />
        </div>
        <div className={ styles.box }>
          <div data-testid="email-field">
            {result.email}
          </div>
          <div data-testid="total-field">
            Despesa Total: R$ 0,00
            {' '}
            <span data-testid="header-currency-field"> BRL </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Top;
