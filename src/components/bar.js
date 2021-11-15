import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitExpense } from '../actions';
import styles from '../css/bar.module.css';
import consultExpense from '../service/service';

const Bar = () => {
  const [valor, setValor] = useState();
  const [descricao, setDescricao] = useState('');
  const [moeda, setMoeda] = useState();
  const [metodo, setMetodo] = useState();
  const [tag, setTag] = useState();
  const dispatch = useDispatch();
  const [expense, setExpense] = useState([]);
  const [cot, setCot] = useState([]);

  const handleExpensesAdd = () => {
    dispatch(submitExpense(20));
  };

  useEffect(() => {
    consultExpense().then((res) => setCot(res));
  }, []);

  return (

    <div className={ styles.container }>

      Valor:
      {' '}
      <input />
      Moeda:
      {' '}

      <select name="moeda">
        {
          Object.values(cot).map((val) => <option key={ val.code } value={ val.code }>{val.code}</option>)
        }
      </select>
      Método de
      {' '}
      <br />
      {' '}
      pagamento:
      {' '}
      <select name="mPagamento">
        <option value="dinheiro">Dinheiro</option>
        <option value="cart_credito">Cartão de Crédito</option>
        <option value="cart_debito">Cartão de Débito</option>
      </select>
      Tag:
      <select name="tag">
        <option value="lazer">Lazer</option>
        <option value="alimentacao">Alimentação</option>
        <option value="trabalho">Trabalho</option>
        <option value="transporte">Transporte</option>
        <option value="saude">Saúde</option>
      </select>
      Descrição:
      {' '}
      <input />
      <button type="button" className={ styles.button } onClick={ () => handleExpensesAdd() }>Adicionar despesa</button>
    </div>
  );
};
export default Bar;
