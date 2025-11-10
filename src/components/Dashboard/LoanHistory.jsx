import { useEffect, useState } from 'react';
import './Dashboard.css';
import CurrFormatter from './global/CurrFormatter';
import DateFormatter from './global/DateFormatter';
import ShortDateFormatter from './global/ShortDateFormatter';

function LoanHistory() {
  const hash = localStorage.getItem('hash');
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      fetch('http://localhost:3000/users/loanhist', {
        method: 'get',
        headers: {
          Accept: 'application/json',
          hash: hash,
        },
      })
        .then((res) => res.json())
        .then((d) => setData(d.user));
    } catch (err) {
      console.log(err);
    }
  }, [hash]);
  return (
    <>
      <h2>Préstamos</h2>
      <div className='details'>
        {Object.hasOwn(data, length) ? (
          data
            .slice()
            .reverse()
            .map((el) => (
              <div className={'account-card ' + (el.estado == 1 ? ' paid' : '')}>
                <div className='card-row'>
                  <p className='subtitle'>{el.nombre}</p>
                  <span className='value-small'>{CurrFormatter.format(el.cantidad_total)}</span>
                </div>
                <div className='account-card-details'>
                  <p>
                    {el.estado == 0 ? `Plazo máximo: ` + ShortDateFormatter.format(Date.parse(el.plazo)) : 'Pagado'}
                  </p>
                </div>
              </div>
            ))
        ) : (
          <p> No se han hecho préstamos hasta el momento</p>
        )}

        {/* <div className='account-card paid'>
          <div className='card-row'>
            <p className='subtitle'>Viaje a Islandia</p>
            <span className='value-small'>$ 9.500.000,00</span>
          </div>
          <div className='account-card-details'>
            <p>Pagado</p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default LoanHistory;
