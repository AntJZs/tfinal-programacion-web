import Header from '../Main/Header';

function RegistrarForm() {
  return (
    <div className="home">
      <div className='contents page'>

        <Header text='Usted pone la plata, nosotros el control.' />
        <div className="form">
            <h2>Registro</h2>
            <input className='form-shape' type='text' id='in-name' placeholder='Nombres'/>
            <input className='form-shape'  type='text' id='in-last-name' placeholder='Apellidos'/>
            <input className='form-shape'  type='email' id='in-email' placeholder='Correo electronico'/>
            <input className='form-shape'  type='number' id='in-phone' placeholder='Teléfono'/>
            <input className='form-shape'  type='text' id='in-address' placeholder='Dirección de residencia'/>
          <div className='small-text'>
            <p>Al registrarte, estás almacenando información dentro de nuestra base de datos, la cual no garantizamos su confidencialidad.</p>
          </div>
          <a href="/enroll" className='form-shape'>
            <button className="form-shape button"  type='submit'>Continuar</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegistrarForm;
