import NewLoanForm from './actions/NewLoanForm';
import NewTransferForm from './actions/NewTransferForm';
import Preferences from './actions/Preferences';
import Fabs from './global/Fabs';

function ActionInterface(page) {
  return (
    <div className='column'>
      <div className='content'>
        <Fabs items={['back']} />
        <div>{Switcher(page.page)}</div>
      </div>
    </div>
  );
}

function Switcher(page) {
  switch (page) {
    case 'newtransfer':
      return <NewTransferForm />;
    case 'newloan':
      return <NewLoanForm />;
    case 'preferences':
      return <Preferences />;
    default:
      return <h1>Error inesperado</h1>;
  }
}

export default ActionInterface;
