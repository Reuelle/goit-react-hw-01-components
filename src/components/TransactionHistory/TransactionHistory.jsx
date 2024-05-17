import React from 'react';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
      <table className={styles.transactionHistory}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.slice (0, 5).map((item, index) => (
            <tr className={styles.tableRow} key={index}>
              <td className={styles.tableData}>Invoice</td>
              <td className={styles.tableData}>125</td>
              <td className={styles.tableData}>USD</td>
            </tr>
            <tr>
              <td className={styles.tableData}>Withdrawal</td>
              <td className={styles.tableData}>85</td>
              <td className={styles.tableData}>USD</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };