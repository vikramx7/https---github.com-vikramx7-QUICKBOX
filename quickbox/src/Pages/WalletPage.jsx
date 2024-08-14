import React, { useState } from 'react';
import styles from '../Styles/WalletPage.module.css';
// import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const WalletPage = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const addMoney = () => {
    const newAmount = parseFloat(amount);
    if (newAmount > 0) {
      setBalance(balance + newAmount);
      setTransactions([...transactions, { type: 'Credit', amount: newAmount }]);
    }
    setAmount('');
  };

  const debitMoney = () => {
    const newAmount = parseFloat(amount);
    if (newAmount > 0 && newAmount <= balance) {
      setBalance(balance - newAmount);
      setTransactions([...transactions, { type: 'Debit', amount: newAmount }]);
    }
    setAmount('');
  };

  return (
    <div><Navbar/>
    <div className={styles.walletPageWrapper}>
      <div className={styles.walletContainer}>
        <h2 className={styles.walletHeader}>Wallet</h2>
        <div className={styles.balanceContainer}>
          <h3>Current Balance: ₹{balance.toFixed(2)}</h3>
        </div>
        <div className={styles.actionContainer}>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            className={styles.amountInput}
          />
          <button onClick={addMoney} className={styles.button}>
            Add Money
          </button>
          <button onClick={debitMoney} className={styles.button}>
            Debit Money
          </button>
        </div>
        <div className={styles.transactionsContainer}>
          <h3>Transaction History</h3>
          <ul className={styles.transactionsList}>
            {transactions.map((transaction, index) => (
              <li key={index} className={styles.transactionItem}>
                {transaction.type}: ₹ {transaction.amount.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WalletPage;
