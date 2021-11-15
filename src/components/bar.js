import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitExpense, submitTable } from '../actions';
import styles from '../css/bar.module.css';
import consultExpense from '../service/service';

const Bar = () => {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [moeda, setMoeda] = useState('USD');
  const [metodo, setMetodo] = useState('Dinheiro');
  const [tag, setTag] = useState('Lazer');
  const [cot, setCot] = useState([]);

  const dispatch = useDispatch();

  const handleExpensesAdd = (e) => {
    e.preventDefault();
    const m = cot[moeda];
    const resultTotal = m.ask * valor;
    dispatch(submitExpense(Number(resultTotal)));

    dispatch(submitTable({ value: valor,
      name: m.name.replace('/Real Brasileiro', ''),
      metodo,
      tag,
      descricao,
      m: m.ask,
      vc: resultTotal,
    }));
  };

  useEffect(() => {
    consultExpense().then((res) => {
      setCot(res);
    });
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
            Object.values(cot).map((val) => (
              <option
                key={ val.code }
                value={ val.code }
              >
                {val.code}
              </option>))
          }
        </select>
        Método de
        {' '}
        <br />
        {' '}
        pagamento:
        {' '}
        <select name="mPagamento" onChange={ (e) => setMetodo(e.target.value) }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de Crédito</option>
          <option value="Cartão de débito">Cartão de Débito</option>
        </select>
        Tag:
        <select name="tag" onChange={ (e) => setTag(e.target.value) }>
          <option value="Lazer">Lazer</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
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
