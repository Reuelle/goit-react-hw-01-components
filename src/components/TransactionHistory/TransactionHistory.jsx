import React from 'react';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>Invoice</td>
              <td>125</td>
              <td>USD</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };