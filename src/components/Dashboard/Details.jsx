import './Dashboard.css';
import LastSeen from './global/LastSeen';

function Details(details) {
  return (
    <div className='details'>
      <h2>¡Hola! {details.name}</h2>
      <div className='balance'>
        <p>Su número de cuenta: </p>
        <span className='value'>{details.accid}</span>
      </div>
      <div className='account-card'>
        <p>Balance total: </p>
        <span className='value-small'>{details.bal}</span>
      </div>
      <div className='account-card'>
        <p>Gastado este mes: </p>
        <span className='value-small'>{details.outs}</span>
      </div>
      <div className='account-card'>
        <p>Deudas pendientes: </p>
        <span className='value-small'>{details.debt}</span>
      </div>
    </div>
  );
}

export default Details;
