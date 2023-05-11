import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState([]);

  function generateAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAdvice(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  useEffect(() => {
    generateAdvice();
  }, []);

  return (
    <div className="App">
      <div class='c-advice'>
        <div class='c-advice__container'>
          <div class='c-advice__text-container'>
            <p class='c-advice__number'>advice #{advice.slip?.id}</p>
            <p class='c-advice__text'>“{advice.slip?.advice}”</p>
          </div>
          <div class='c-advice__divider'>
              <img src='/pattern-divider-desktop.svg' class='desktop' alt='divider line'></img>
              <img src='/pattern-divider-mobile.svg' class='mobile' alt='divider line'></img>
            </div>
            <button class='c-advice__btn' onClick={generateAdvice}>
              <img src='/icon-dice.svg'></img>
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
