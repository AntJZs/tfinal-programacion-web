import NewTransferForm from './actions/NewTransferForm';
import Fabs from './global/Fabs';

function ActionInterface(page) {
  return (
    <div className='dashboard column'>
      <div className='content'>
        <Fabs items={['back']} />
        <div className='main-content'>{Switcher(page.page)}</div>
      </div>
    </div>
  );
}

function Switcher(page) {
  switch (page) {
    case 'newtransfer':
      return <NewTransferForm />;
    case 'newloan':
      return <p>Stinks</p>;
    case 'preferences':
      return <p>Configure sth</p>;
    default:
      return <h1>Error inesperado</h1>;
  }
}

export default ActionInterface;
