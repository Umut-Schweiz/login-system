import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { MainContext } from './context'

import Home from './pages/Home.js';
import Login from './pages/Login';
import Register from './pages/Register.js';

/*
import {useState, useEffect } from 'react'
*/

function App() {

  /*
  const [state, setstate] = useState('initialState');

  useEffect(() => {
    document.body.className = state  
  }, [state])

  const data = {
    state,
    setstate
  }
  */

  return (
    <MainContext.Provider /** value={data} */>
      <Router>

        <Routes>

          

            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

         

        </Routes>

      </Router>
    </MainContext.Provider>
  );
}

export default App;
