import { Additem, Back, Home, Home2, Setting2 } from 'iconsax-reactjs';
function Fabs(btns) {
  // TODO: transladar los botones a la interfaz de fabs

  const buttons = {
    preferences: [<Setting2 variant='Bulk' />, 'Configuración', '/user/account'],
    new_transfer: [<Additem variant='Bulk' />, 'Nueva Transferencia', '/user/newtransfer'],
    new_loan: [<Additem variant='Bulk' />, 'Nuevo Préstamo', '/user/newloan'],
    back: [<Back variant='Bulk' />, 'Regresar', '/user/dashboard'],
  };

  return btns.items.map((e) => (
    <a href={buttons[e][2]}>
      <button className='button-fab'>
        {buttons[e][0]}
        <span>{buttons[e][1]}</span>
      </button>
    </a>
  ));
}

export default Fabs;
