import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../css/table.module.css'
const Table = () => {
  const [date, setDate] = useState([]);
  const result = useSelector((state) => state.Wallet);

  useEffect(() => {
    console.log(result.table);
    setDate(result.table);
  }, [result]);

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de Pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor Convertido</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
    </table>

  );
};

export default Table;
