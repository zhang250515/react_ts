import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./user";

const App: React.FC = () => {
  let arr = ['jack', 'kent', 'frank'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>
          {
            arr.map((item: string, index: number) => {
                return <li key={index}> {item} </li>
              }
            )
          }
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <User name={'kent'} age={18}/>
      </header>
    </div>
  );
};

export default App;
