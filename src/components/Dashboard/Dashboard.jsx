import Sidebar from './global/Sidebar';
import LastSeen from './global/LastSeen';
import './Dashboard.css';
import Fabs from './global/Fabs';
import { useLocation, Outlet } from 'react-router';

function Dashboard() {
  const loc = useLocation();
  var buttons = [];
  switch (loc.pathname) {
    case '/user/dashboard':
      buttons.push('preferences');
      break;
    case '/user/history':
      buttons.push('new_transfer');
      break;
    case '/user/loans':
      buttons.push('new_loan');
      break;
    case '/user/account':
      buttons.push('back');
      break;
    case '/user/newtransfer':
      buttons.push('back');
      break;
    case '/user/newloan':
      buttons.push('back');
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
          <Outlet />
        </div>
        <LastSeen />
      </div>
    </div>
  );
}

export default Dashboard;
