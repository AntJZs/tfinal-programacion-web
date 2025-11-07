import Sidebar from './global/Sidebar';
import LastSeen from './global/LastSeen';
import BalanceHistory from './BalanceHistory';
import LoanHistory from './LoanHistory';
import './Dashboard.css';
import Details from './Details';
import Fabs from './global/Fabs';
import Stats from './Stats';
import { useLocation } from 'react-router';
import { useState } from 'react';

function Dashboard(page) {
  const loc = useLocation();
  const [ID] = useState(loc.state);

  var buttons = [];
  switch (page.num) {
    case '0':
      buttons.push('preferences');
      break;
    case '1':
      buttons.push('new_transfer');
      break;
    case '2':
      buttons.push('new_loan');
      break;
    default:
      console.log('No buttons defined.');
      break;
  }

  return (
    <div className='dashboard column'>
      <Sidebar className='navbar' />
      <div className='content'>
        <div className='buttonbar'>
          <Fabs items={buttons} />
        </div>
        <div className='main-content'>
          {/* Cambia dependiendo a la interfaz a la que se vaya */}
          {/* Deuda técnica */}
          {Switcher(page.num, ID)}
        </div>
        <LastSeen />
      </div>
    </div>
  );
}

function Switcher(page, identifier) {
  switch (page) {
    case '1':
      return <BalanceHistory id={identifier} />;
    case '2':
      return <LoanHistory />;
    case '3':
      return <Stats />;
    default:
      return <Details id={identifier} />;
  }
}

export default Dashboard;
