import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  // API Key and ID for authentication - Using Edamam API
  const APP_ID = '34dbba8e';
  const APP_KEY = 'b0aa05f1aae9243e6eef83c2f1c4374a';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
