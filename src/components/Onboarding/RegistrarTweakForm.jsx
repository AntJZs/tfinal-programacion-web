import Header from '../Main/Header';
function RegistrarTweakForm() {
  return (
    <div className="home">
      <div className='contents'>

        <Header text='Usted pone la plata, nosotros el control.' />
        <div className="form">
            <h2>Personalización</h2>
            <p>Elija el tipo de cuenta que desee crear</p>
            <select id="" className='form-shape'>
              <option value="corriente">Corriente</option>
              <option value="ahorros">Ahorros</option>
            </select>
          <div className='small-text'>
            <p>¿Desististe de crear tu cuenta? <a href='/'>Eliminala inmediatamente</a></p>
            {/* Esto hay que hacerlo una solicitud a la página */}
          </div>
            <button className="form-shape button"  type='submit'>Iniciar sesión</button>
        </div>
      </div>
    </div>
  );
}

export default RegistrarTweakForm;