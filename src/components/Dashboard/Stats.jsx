import './Dashboard.css';

function Stats() {
  return (
    <>
      <h2>Estadísticas</h2>
      <div className='stats'>
        <div className='stats-item'>
          <h2>Ingresos</h2>
        </div>
        <div className='stats-item'>
          <h2>Egresos</h2>
        </div>
        <div className='stats-item'>
          <h2>Deudas pendientes</h2>
        </div>
        <div className='stats-item'></div>
      </div>
    </>
  );
}

export default Stats;
