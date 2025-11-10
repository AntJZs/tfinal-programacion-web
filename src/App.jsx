import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Main/Home';
import LoginForm from './components/Login/LoginForm';
import RegistrarForm from './components/Onboarding/RegistrarForm';
import PassEnroll from './components/Onboarding/PassEnroll';
import RegistrarTweakForm from './components/Onboarding/RegistrarTweakForm';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Dashboard/Details';
import BalanceHistory from './components/Dashboard/BalanceHistory';
import LoanHistory from './components/Dashboard/LoanHistory';
import Stats from './components/Dashboard/Stats';
import Preferences from './components/Dashboard/actions/Preferences';
import NewTransferForm from './components/Dashboard/actions/NewTransferForm';
import NewLoanForm from './components/Dashboard/actions/NewLoanForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegistrarForm />} />
        <Route path='/enroll' element={<PassEnroll />} />
        {/* <Route path='/enroll-2' element={<OTPEnroll />} /> */}
        <Route path='/register/details' element={<RegistrarTweakForm />} />
        <Route path='/user' element={<Dashboard />}>
          <Route path='dashboard' element={<Details />} />
          <Route path='history' element={<BalanceHistory />} />
          <Route path='loans' element={<LoanHistory />} />
          <Route path='stats' element={<Stats />} />
          <Route path='account' element={<Preferences />} />
          <Route path='newtransfer' element={<NewTransferForm />} />
          <Route path='newloan' element={<NewLoanForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
