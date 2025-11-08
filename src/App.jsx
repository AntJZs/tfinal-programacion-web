import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Main/Home';
import LoginForm from './components/Login/LoginForm';
import RegistrarForm from './components/Onboarding/RegistrarForm';
import PassEnroll from './components/Onboarding/PassEnroll';
import OTPEnroll from './components/Onboarding/OTPEnroll';
import RegistrarTweakForm from './components/Onboarding/RegistrarTweakForm';
import Dashboard from './components/Dashboard/Dashboard';
import ActionInterface from './components/Dashboard/ActionInterface';
import Details from './components/Dashboard/Details';
import BalanceHistory from './components/Dashboard/BalanceHistory';
import LoanHistory from './components/Dashboard/LoanHistory';
import Stats from './components/Dashboard/Stats';

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
        <Route path='/user' element={<Dashboard />}>
          <Route path='dashboard' element={<Details />} />
          <Route path='history' element={<BalanceHistory />} />
          <Route path='loans' element={<LoanHistory />} />
          <Route path='stats' element={<Stats />} />
          <Route path='account' element={<ActionInterface page='preferences' />} />
          <Route path='newtransfer' element={<ActionInterface page='newtransfer' />} />
          <Route path='newloan' element={<ActionInterface page='newloan' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
