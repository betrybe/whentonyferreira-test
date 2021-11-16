import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../css/table.module.css';
import Delete from '../img/delete.svg';
import Edit from '../img/edit.svg';
import { updateTable, updateExpense } from '../actions';

const Table = () => {
  const [date, setDate] = useState([]);
  const result = useSelector((state) => state.Wallet);
  console.log(result);
  const dispatch = useDispatch();
  const handleDelete = (id, vc) => {
    console.log(vc);
    const { table } = result;
    table.splice(table.indexOf(id), 1);
    dispatch(updateExpense(vc));
    dispatch(updateTable(table));
    console.log(table);
  };

  useEffect(() => {
    setDate(result.table);
  }, [result]);

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {date.map((value, key) => (

          <tr key={ key }>
            <th>{value.descricao}</th>
            <td>{value.tag}</td>
            <td>{value.metodo}</td>
            <td>
              {Number(value.value).toFixed(2)}
            </td>
            <td>{value.name}</td>
            <td>{value.m}</td>
            <td>
              R$
              {' '}
              {value.vc}
            </td>
            <td>Real Brasileiro</td>
            <td>
              <input
                type="image"
                src={ Edit }
                alt="Botão Editar"
                width="20"
                data-testid="edit-btn"
                className={ styles.marginRight }
              />
              <input
                type="image"
                src={ Delete }
                alt="Botão Deletar"
                width="20"
                onClick={ () => handleDelete(key, value.vc) }
                data-testid="delete-btn"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
