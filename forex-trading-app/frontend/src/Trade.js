import React, { useState } from 'react';
import './styles.css';

function Trade() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const executeTrade = () => {
    alert(`Executing trade: ${amount} of ${currency}`);
  };

  return (
    <div className="container">
      <h1>Demo Trading</h1>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <button onClick={executeTrade}>Trade</button>
    </div>
  );
}

export default Trade;
