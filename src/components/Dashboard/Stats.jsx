import { useEffect, useState } from 'react';
import './Dashboard.css';
import CurrFormatter from './global/CurrFormatter';

function Stats() {
  const hash = localStorage.getItem('hash');
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      fetch('http://localhost:3000/users/stats', {
        method: 'get',
        headers: {
          Accept: 'application/json',
          hash: hash,
        },
      })
        .then((res) => res.json())
        .then((d) => {
          setData(d.stats[0]);
        });
    } catch (err) {
      console.log(err);
    }
  }, [hash]);

  console.log(data);
  return (
    <>
      <h2>Estadísticas</h2>
      <div className='stats details'>
        <div className='stats-item'>
          <h2>Ingresos</h2>
          <div className='account-card'>
            <p className='value'>{CurrFormatter.format(data.hist_ingresos)}</p>
          </div>
        </div>
        <div className='stats-item'>
          <h2>Egresos</h2>
          <div className='account-card'>
            <p className='value'>{CurrFormatter.format(data.hist_egresos)}</p>
          </div>
        </div>
        <div className='stats-item'>
          <h2>Deudas pendientes</h2>
          <div className='account-card'>
            <p className='value'>{CurrFormatter.format(data.deudas)}</p>
          </div>
        </div>
        <div className='stats-item'></div>
      </div>
    </>
  );
}

export default Stats;
