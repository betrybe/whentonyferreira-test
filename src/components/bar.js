import React, { useState } from 'react';
import styles from '../css/bar.module.css';

const Bar = () => {
  const [valor, setValor] = useState();
  const [descricao, setDescricao] = useState('');
  const [moeda, setMoeda] = useState();
  const [metodo, setMetodo] = useState();
  const [tag, setTag] = useState();

  return (
    <div className={ styles.container }>
      Valor:
      {' '}
      <input />
      Moeda:
      {' '}
      <select name="select">
        <option value="valor1" selected>USD</option>
        <option value="valor2">CAD</option>
        <option value="valor3">EUR</option>
        <option value="valor3">GBP</option>
        <option value="valor3">ARS</option>
        <option value="valor3">BTC</option>
        <option value="valor3">LTC</option>
        <option value="valor3">JPY</option>
        <option value="valor3">CHF</option>
        <option value="valor3">AUD</option>
        <option value="valor3">CNY</option>
        <option value="valor3">ILS</option>
        <option value="valor3">ETH</option>
        <option value="valor3">XRP</option>
      </select>
      Método de
      {' '}
      <br />
      {' '}
      pagamento:
      {' '}
      <select name="select">
        <option value="valor1" selected>Dinheiro</option>
        <option value="valor2">Cartão de Crédito</option>
        <option value="valor3">Cartão de Débito</option>
      </select>
      Tag:
      <select name="select">
        <option value="valor1" selected>Lazer</option>
        <option value="valor2">Alimentação</option>
        <option value="valor3">Trabalho</option>
        <option value="valor3">Transporte</option>
        <option value="valor3">Saúde</option>
      </select>
      Descrição:
      {' '}
      <input />
      <button type="button" className={ styles.button }>Adicionar despesa</button>
    </div>
  );
};
export default Bar;
