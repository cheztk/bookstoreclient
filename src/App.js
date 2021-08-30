import {useEffect} from 'react';
import axios from "axios";
import baseUrl from './config';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect( () => {
    async function getBooks(){
      const books = await axios(`{$baseUrl}/api/v1/books`);
      return books;
    }
    console.log(getBooks());

  },[]);
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
      </header>
    </div>
  );
}

export default App;
