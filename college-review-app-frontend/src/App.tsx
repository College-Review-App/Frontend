import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const addCollege = () => {
    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ college_name : 'University of Utah', GPA: 2.89 })
    };
    fetch('http://localhost:8080/add-college', requestOptions)
      .then(async response => {
        const data = await response.json();
        console.log(data)
      })
      .catch(error => {
          console.log('There was an error!', error);
      });
  }

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
        <button onClick={() => addCollege()}>Add College</button>
      </header>
    </div>
  );
}

export default App;
