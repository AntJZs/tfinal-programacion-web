// import { useNavigate } from 'react-router';
import { ArrangeVertical, ArrangeVerticalSquare, Bank, Home, Home2, Logout, StatusUp } from 'iconsax-reactjs';
import './Sidebar.css';

function Sidebar() {
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
          <a href='/user/dashboard' className='menuitem'>
            <div className='menuitem'>
              <Home variant='Bulk' />
              <p>Inicio</p>
            </div>
          </a>
          <a href='/user/history' className='menuitem'>
            <div className='menuitem'>
              <ArrangeVerticalSquare variant='Bulk' />
              <p>Transacciones</p>
            </div>
          </a>
          <a href='/user/loans' className='menuitem'>
            <div className='menuitem'>
              <Bank variant='Bulk' />
              <p>Préstamos</p>
            </div>
          </a>
          <a href='/user/stats' className='menuitem'>
            <div className='menuitem'>
              <StatusUp variant='Bulk' />
              <p>Estadísticas</p>
            </div>
          </a>
        </div>
        <a href='/' className='menuitem'>
          <div className='menulist'>
            <div className='menuitem'>
              <Logout variant='Bulk' />
              <p>Salir</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
