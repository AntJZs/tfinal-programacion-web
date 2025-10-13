import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Dashboard/Home';
import LoginForm from './components/Login/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
