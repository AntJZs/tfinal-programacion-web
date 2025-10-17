import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Main/Home';
import LoginForm from './components/Login/LoginForm';
import RegistrarForm from './components/Onboarding/RegistrarForm';
import PassEnroll from './components/Onboarding/PassEnroll';
import OTPEnroll from './components/Onboarding/OTPEnroll';
import RegistrarTweakForm from './components/Onboarding/RegistrarTweakForm';
import Sidebar from './components/Dashboard/global/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegistrarForm />} />
        <Route path='/enroll' element={<PassEnroll />} />
        <Route path='/test' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
