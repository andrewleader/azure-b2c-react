import React from 'react';
import logo from './logo.svg';
import './App.css';
import { authProvider } from './authProvider';

function App() {

  var showAccessToken = async () => {
    var token = await authProvider.getAccessToken();
    alert('Token: ' + token.accessToken);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={showAccessToken}>Show access token</button>
      </header>
    </div>
  );
}

export default App;
