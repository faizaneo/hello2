import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="MY FIRST APP">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          THIS <code>IS MY</code> FIRST APP!!!
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
