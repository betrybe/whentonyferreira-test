import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitExpense, submitTable } from '../actions';
import styles from '../css/bar.module.css';
import consultExpense from '../service/service';

const Bar = () => {
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [moeda, setMoeda] = useState('USD');
  const [metodo, setMetodo] = useState('dinheiro');
  const [tag, setTag] = useState('lazer');
  const dispatch = useDispatch();
  const [expense, setExpense] = useState([]);
  const [cot, setCot] = useState([]);

  const handleExpensesAdd = (e) => {
    e.preventDefault();
    dispatch(submitExpense(Number(valor)));
    dispatch(submitTable([valor, moeda, metodo, tag, descricao]));
  };

  useEffect(() => {
    consultExpense().then((res) => setCot(res));
  }, []);

  return (

    <div className={ styles.container }>
      <form onSubmit={ (e) => handleExpensesAdd(e) }>
        Valor:
        {' '}
        <input value={ valor } onChange={ (e) => setValor(e.target.value) } required />
        Moeda:
        {' '}

        <select name="moeda" onChange={ (e) => setMoeda(e.target.value) }>
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
        <select name="mPagamento" onChange={ (e) => setMetodo(e.target.value) }>
          <option value="dinheiro">Dinheiro</option>
          <option value="cart_credito">Cartão de Crédito</option>
          <option value="cart_debito">Cartão de Débito</option>
        </select>
        Tag:
        <select name="tag" onChange={ (e) => setTag(e.target.value) }>
          <option value="lazer">Lazer</option>
          <option value="alimentacao">Alimentação</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
        Descrição:
        {' '}
        <input
          value={ descricao }
          onChange={
            (e) => setDescricao(e.target.value)
          }
          required
        />
        <button type="submit" className={ styles.button }>Adicionar despesa</button>
      </form>
    </div>
  );
};
export default Bar;
