import React from 'react';
import Bar from '../components/bar';
import Top from '../components/top';
import styles from '../css/wallet.module.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <Top />
        <Bar />
      </div>
    );
  }
}

export default Wallet;
