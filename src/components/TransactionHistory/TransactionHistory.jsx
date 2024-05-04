import React from 'react';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
      <table className={styles.transactionHistory}>
        <thead className={styles.tableHeader}>
          <tr>
            <th className={styles.tableHeader}>Type</th>
            <th className={styles.tableHeader}>Amount</th>
            <th className={styles.tableHead}>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map((item, index) => (
            <tr className={styles.tableRow} key={index}>
              <td className={styles.tableData}>Invoice</td>
              <td className={styles.tableData}>125</td>
              <td className={styles.tableData}>USD</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };