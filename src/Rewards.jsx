import React, { useState } from 'react';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [monthlyRewards, setMonthlyRewards] = useState([]);

  const handleAddTransaction = (event) => {
    event.preventDefault();
    const transaction = {
      amount: event.target.amount.value,
      month: parseInt(event.target.month.value),
      customerId: event.target.customerId.value,
    };
    setTransactions([...transactions, transaction]);
  };

  const calculatePoints = (amount) => {
    let points = 0;
    if (amount > 100) {
      points += 2 * (amount - 100);
      amount = 100;
    }
    if (amount > 50) {
      points += 1 * (amount - 50);
    }
    return points;
  };

  const calculateRewards = () => {
    const rewardsByCustomer = {};
    transactions.forEach((transaction) => {
      const points = calculatePoints(transaction.amount);
      const customer = transaction.customerId;
      if (rewardsByCustomer[customer]) {
        rewardsByCustomer[customer] += points;
      } else {
        rewardsByCustomer[customer] = points;
      }
    });
    const monthlyRewards = Object.keys(rewardsByCustomer).map((customer) => {
      return { customer: customer, rewards: rewardsByCustomer[customer] };
    });
    setMonthlyRewards(monthlyRewards);
  };

  return (
    <div className="App">
      <h1>Rewards Program</h1>
      <form onSubmit={handleAddTransaction}>
        <label>
          Amount:
          <input type="number" name="amount" min="0" step="0.01" required />
        </label>
        <label>
          Month:
          <select name="month" required>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </label>
        <label>
          Customer ID:
          <input type="text" name="customerId" required />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
      <button onClick={calculateRewards}>Calculate Rewards</button>
      {monthlyRewards.map((monthlyReward) => (
        <div key={monthlyReward.customer}>
          <h2>{`Rewards for Customer ${monthlyReward.customer}`}</h2>
          <p>{`Total Rewards: ${monthlyReward.rewards}`}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
