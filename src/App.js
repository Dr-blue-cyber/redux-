import React from "react";

import './App.css';
import CreateUser from './CreateUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path={'/'} element={<Home />} />
          <Route path={'/createUser'} element={<CreateUser />} />
          <Route path={'/updateUser/'} element={<UpdateUser />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
