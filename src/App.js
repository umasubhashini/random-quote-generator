import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file for styling

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('http://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
      });
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setQuote(data.data[0].quoteText);
    } catch (error) {
      console.error(error);
    }
  };
  const handleRefreshClick = () => {
    window.location.reload(); // Reload the page
  };
  

  return (
    <div className="quote-container">
      <h1 className="title">Hey ! This is the quote from uma </h1>
      <div className="quote-box">
        <p className="quote-text">{quote}</p>
        <button className="generate-button" onClick={handleRefreshClick}>
         Click to get another quote 
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;

