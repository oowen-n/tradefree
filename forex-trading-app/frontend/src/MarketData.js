import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

function MarketData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api.example.com/forex-data');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Market Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}: {item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default MarketData;
