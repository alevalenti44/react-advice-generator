import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState([]);

  function generateAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
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
      <div className='c-advice'>
        <div className='c-advice__container'>
          <div className='c-advice__text-container'>
            <p className='c-advice__number'>advice #{advice.slip?.id}</p>
            <p className='c-advice__text'>“{advice.slip?.advice}”</p>
          </div>
          <div className='c-advice__divider'>
              <img src='/pattern-divider-desktop.svg' className='desktop' alt='divider line'></img>
              <img src='/pattern-divider-mobile.svg' className='mobile' alt='divider line'></img>
            </div>
            <button className='c-advice__btn' onClick={generateAdvice}>
              <img src='/icon-dice.svg'></img>
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
