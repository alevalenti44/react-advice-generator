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
        <main className='c-advice__container' role='main'>
          <div className='c-advice__text-container'>
            <h1 className='c-advice__number'>advice #{advice.slip?.id}</h1>
            <figure>
              <blockquote className='c-advice__text'>“{advice.slip?.advice}”</blockquote>
            </figure>
          </div>
          <div className='c-advice__divider'>
              <img src='/pattern-divider-desktop.svg' className='desktop' alt='divider line'></img>
              <img src='/pattern-divider-mobile.svg' className='mobile' alt='divider line'></img>
            </div>
            <button className='c-advice__btn' onClick={generateAdvice} aria-label='Generate new quote'>
              <img aria-hidden="true" focusable="false" src='/icon-dice.svg' alt='dice icon'></img>
            </button>
        </main>
      </div>
    </div>
  );
}

export default App;
