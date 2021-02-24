import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './Components/HomePage/Homepage';

import React, { useState } from "react";
import { UserContext } from './Components/UserContext';
import { ResaContext } from './Components/ResaContext';
import { ResaProvider } from './Components/ResaContext';
//import ContextProvider from "context";

//const defaultDepartureCity = 'Lyon';
//const FirstDepartureCity = React.createContext(defaultDepartureCity);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*
            <FirstDepartureCity.Provider value={defaultDepartureCity}>
        */}
        <ResaContext.Provider >
           <Homepage/>
        </ResaContext.Provider>
           {/*
               </FirstDepartureCity.Provider>
           */}
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
