import { Link } from 'react-router';
import { ArrangeVertical, ArrangeVerticalSquare, Bank, Home, Home2, Logout, StatusUp } from 'iconsax-reactjs';
import './Sidebar.css';

function Sidebar() {
  const exit = () => {
    localStorage.clear;
  };

  return (
    <div className='side-bar'>
      {/* Primero se va a realizar con texto, si queda tiempo
            se realizará con íconos */}

      <div className='logo'>
        <img src='/src/assets/icon.svg' className='logo' />
        {/* <p>BancaSuya</p> */}
      </div>
      <div className='menu'>
        <div className='menulist'>
          <Link to='dashboard' className='menuitem'>
            <div className='menuitem'>
              <Home variant='Bulk' />
              <p>Inicio</p>
            </div>
          </Link>
          <Link to='history' className='menuitem'>
            <div className='menuitem'>
              <ArrangeVerticalSquare variant='Bulk' />
              <p>Transacciones</p>
            </div>
          </Link>
          <Link to='loans' className='menuitem'>
            <div className='menuitem'>
              <Bank variant='Bulk' />
              <p>Préstamos</p>
            </div>
          </Link>
          <Link to='stats' className='menuitem'>
            <div className='menuitem'>
              <StatusUp variant='Bulk' />
              <p>Estadísticas</p>
            </div>
          </Link>
        </div>
        <Link to='/' className='menuitem' onClick={exit}>
          <div className='menulist'>
            <div className='menuitem'>
              <Logout variant='Bulk' />
              <p>Salir</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
