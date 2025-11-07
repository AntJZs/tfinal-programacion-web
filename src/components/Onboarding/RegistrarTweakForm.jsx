import Header from '../Main/Header';
function RegistrarTweakForm() {
  return (
    <div className='home'>
      <div className='contents'>
        <Header text='Usted pone la plata, nosotros el control.' />
        <div className='form'>
          <h2 className='heading'>Personalización</h2>
          <p className='heading'>Elija el tipo de cuenta que desee crear</p>
          <select id='' className='form-shape'>
            <option value='corriente'>Corriente</option>
            <option value='ahorros'>Ahorros</option>
          </select>
          <div className='small-text'>
            <p>
              ¿Desististe de crear tu cuenta? <a href='/'>Eliminala inmediatamente</a>
            </p>
            {/* Esto hay que hacerlo una solicitud a la página */}
          </div>
          <a href='/user/dashboard' className='form-shape'>
            <button className='button' type='submit'>
              Iniciar sesión
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegistrarTweakForm;
