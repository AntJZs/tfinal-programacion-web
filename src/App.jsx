import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Main/Home';
import LoginForm from './components/Login/LoginForm';
import RegistrarForm from './components/Onboarding/RegistrarForm';
import PassEnroll from './components/Onboarding/PassEnroll';
import OTPEnroll from './components/Onboarding/OTPEnroll';
import RegistrarTweakForm from './components/Onboarding/RegistrarTweakForm';

function App() {
  return (
    <BrowserRouter>
      <Routes><div className='small-text'>
          <p>¿Desististe de crear tu cuenta? <a href='/'>Eliminala inmediatamente</a></p>
          {/* Esto hay que hacerlo una solicitud a la página */}
        </div>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegistrarForm />} />
        <Route path='/enroll' element={<PassEnroll />} />
        <Route path='/test' element={<RegistrarTweakForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
