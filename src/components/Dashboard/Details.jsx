import './Dashboard.css';
import LastSeen from './global/LastSeen';
import Dashboard from './Dashboard';
import CurrFormatter from './global/CurrFormatter';
import { useEffect, useState } from 'react';

function Details() {
  const hash = localStorage.getItem('hash');
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      fetch('http://localhost:3000/users/details', {
        method: 'get',
        headers: {
          Accept: 'application/json',
          hash: hash,
        },
      })
        .then((res) => res.json())
        .then((d) => {
          setData(d.user[0]);
        });
    } catch (err) {
      console.log(err);
    }
  }, [hash]);
  return (
    <div className='details'>
      <h2>¡Hola! {data.nombres}</h2>
      <div className='balance'>
        <p>Su número de cuenta: </p>
        <span className='value'>{data.Codigo_cuenta}</span>
      </div>
      <div className='account-card'>
        <p>Balance total: </p>
        <span className='value-small'>{CurrFormatter.format(data.balance)}</span>
      </div>
      <div className='group'>
        <div className='account-card'>
          <p>Gastado este mes: </p>
          <span className='value-small'>{CurrFormatter.format(data.bal_mes)}</span>
        </div>
        <div className='account-card'>
          <p>Deudas pendientes: </p>
          <span className='value-small'>{CurrFormatter.format(data.deudas)}</span>
        </div>
      </div>
    </div>
  );
}

export default Details;
