import './Dashboard.css'

function LoanHistory() {
    return (
<>
<h2>Préstamos</h2>
<div className='details'>
    
    <div className="account-card">
        <div className="card-row">
        <p className='subtitle'>Preparativos</p>
            <span className='value-small'>$ 500.000,00</span>
    </div>
    <p>Este préstamo lo hice para comprar artículos y preparar
cosas para mi cumpleaños</p>
        <div className="account-card-details">
            <p>Próximo pago: 31 de octubre de 2025</p>

        </div>
    </div>
        
    <div className="account-card paid">
        <div className="card-row">
        <p className='subtitle'>Viaje a Islandia</p>
            <span className='value-small'>$ 9.500.000,00</span>
    </div>
    <p>Un viaje que quería hacer para ver si de verdad hacía frío
por allá</p>Este préstamo lo hice para comprar artículos y preparar
cosas para mi cumpleaños
        <div className="account-card-details">
            <p>Pagado</p>

        </div>
    </div>
    </div>
</>
    );
}

export default LoanHistory;