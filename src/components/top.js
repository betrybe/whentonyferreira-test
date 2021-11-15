import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../img/logo.png';
import styles from '../css/top.module.css';

const Top = () => {
  const result = useSelector((state) => state.user);
  const expense = useSelector((state) => state.Wallet);
  console.log(expense);
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
          <div>
            Despesa Total: R$
            {' '}
            <span data-testid="total-field">
              {expense.expenses.length === 0 ? '0,00' : expense.expenses.reduce((total, currentElement) => total + currentElement)}
              {' '}
            </span>
            {' '}
            <span data-testid="header-currency-field"> BRL </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Top;
