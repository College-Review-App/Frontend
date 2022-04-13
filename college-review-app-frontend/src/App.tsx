import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {



  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(async response => {
        const data = await response.json();
        console.log(data)
      })
      .catch(error => {
          console.log('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
