import { useState, useEffect } from 'react';
import './Dashboard.css';
import CurrFormatter from './global/CurrFormatter';
import DateFormatter from './global/DateFormatter';

function BalanceHistory() {
  const hash = localStorage.getItem('hash');
  const ID = localStorage.getItem('userID');
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      fetch('http://localhost:3000/users/balhist', {
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
      <h2>Transferencias</h2>
      <div className='details'>
        {/* Necesitaba una solución de mostrar algo mientras carga, o si existe. */}
        {Object.hasOwn(data, length) ? (
          data
            .slice()
            .reverse()
            .map((el) => (
              <div className='account-card'>
                <p className='bigger'>
                  {el.tipo == 0 && el.ID_emisor == ID
                    ? `Transferencia a ${el.n_receptor} ${el.ap_receptor}`
                    : el.tipo == 0
                    ? `Transferencia de ${el.n_emisor} ${el.ap_emisor}`
                    : el.tipo == 1
                    ? 'Ingresos'
                    : 'Retiro'}
                </p>
                <div className='account-card-details'>
                  <p>{DateFormatter.format(Date.parse(el.timestamp))}</p>
                  <span className='value-small'>
                    {CurrFormatter.format(el.tipo > 0 || el.ID_emisor != ID ? el.cantidad : -el.cantidad)}
                  </span>
                </div>
              </div>
            ))
        ) : (
          <p>No hay ninguna transacción hecha por el momento</p>
        )}
      </div>
    </>
  );
}

export default BalanceHistory;
