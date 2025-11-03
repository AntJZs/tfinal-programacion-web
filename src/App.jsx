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
import { SliderHorizontal1 } from 'iconsax-reactjs';
import ActionInterface from './components/Dashboard/ActionInterface';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegistrarForm />} />
        <Route path='/enroll' element={<PassEnroll />} />
        <Route path='/enroll-2' element={<OTPEnroll />} />
        <Route path='/register/details' element={<RegistrarTweakForm />} />
        <Route path='/user/dashboard' element={<Dashboard num='0' />} />
        <Route path='/user/history' element={<Dashboard num='1' />} />
        <Route path='/user/loans' element={<Dashboard num='2' />} />
        <Route path='/user/stats' element={<Dashboard num='3' />} />
        <Route path='/user/account' element={<ActionInterface page='preferences' />} />
        <Route path='/user/newtransfer' element={<ActionInterface page='newtransfer' />} />
        <Route path='/user/newloan' element={<ActionInterface page='newloan' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
