import React from 'react';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Qubit from './components/Qubit';

function App() {

  return (
    <Routes>
      <Route path='/qubit'  element={<Qubit />} />
      <Route path='/' element={<Main />} />
    </Routes>
  );
}

export default App;
