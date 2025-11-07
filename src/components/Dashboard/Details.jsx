import './Dashboard.css';
import LastSeen from './global/LastSeen';

function Details(meta) {
  console.log(meta.id);
  fetch('http://localhost:3000/users/details', {
    method: 'get',
    headers: {
      Acceptdata: 'application/json',
      hash: meta.id.hash,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div className='details'>
      <h2>¡Hola! {meta.name}</h2>
      <div className='balance'>
        <p>Su número de cuenta: </p>
        <span className='value'>{meta.accid}</span>
      </div>
      <div className='account-card'>
        <p>Balance total: </p>
        <span className='value-small'>{meta.bal}</span>
      </div>
      <div className='account-card'>
        <p>Gastado este mes: </p>
        <span className='value-small'>{meta.outs}</span>
      </div>
      <div className='account-card'>
        <p>Deudas pendientes: </p>
        <span className='value-small'>{meta.debt}</span>
      </div>
    </div>
  );
}

export default Details;
