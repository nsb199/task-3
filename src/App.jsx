import React, { useState } from 'react';
import './App.css';

function App() {
  const [salePrice, setSalePrice] = useState('');
  const [soldPriceList, setSoldPriceList] = useState([]);
  const originalPrice = 100;
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const price = parseInt(salePrice);

    // Validation: Price must be between 100 and 300
    if (price < 100) {
      setError('The Sale Price field must be greater than or equal to 100');
      return;
    }

    if (price > 300) {
      setError('The Sale Price field must be less than or equal to 300');
      return;
    }

    setError('');
    setSoldPriceList([...soldPriceList, price]);
    setSalePrice('');
  };

  // Calculate total sold price
  const totalSoldPrice = soldPriceList.reduce((acc, price) => acc + price, 0);

  // Calculate total profit as sum of (each sale price - original price)
  const totalProfit = soldPriceList.reduce((acc, price) => acc + (price - originalPrice), 0);

  return (
    <div className="container">
      <h1>Task Three</h1>
      <p>Storing input textbox value into an array, displaying that array list, then calculating total sale price & total profit using Javascript</p>
      <p>Product Original Price: {originalPrice}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Sale Price *
          <input
            type="number"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>

      <div className="output">
        <h2>Output Result:</h2>
        <p>Sold Price List</p>
        <ul>
          {soldPriceList.map((price, index) => (
            <li key={index}>{price}</li>
          ))}
        </ul>
        <p>Total Sold Price: {totalSoldPrice}</p>
        <p>Total Profit: {totalProfit}</p>
      </div>
    </div>
  );
}

export default App;
