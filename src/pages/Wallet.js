import React from 'react';
import Bar from '../components/bar';
import Table from '../components/table';
import Top from '../components/top';
import styles from '../css/wallet.module.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <Top />
        <Bar />
        <Table />
      </div>
    );
  }
}

export default Wallet;
