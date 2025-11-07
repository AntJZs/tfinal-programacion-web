import './Dashboard.css';

function BalanceHistory() {
  return (
    <>
      <h2>Transferencias</h2>
      <div className='details'>
        <div className='account-card'>
          <p>Transferencia a Name</p>
          <div className='account-card-details'>
            <p>1 de octubre de 2025 - 9:24 AM</p>
            <span className='value-small'>- $ 20.000,00</span>
          </div>
        </div>

        <div className='account-card'>
          <p>Retiro de dinero</p>
          <div className='account-card-details'>
            <p>1 de octubre de 2025 - 10:20 AM</p>
            <span className='value-small'>- $ 4.000,00</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BalanceHistory;
