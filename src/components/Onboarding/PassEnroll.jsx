import Header from '../Main/Header';

function PassEnroll() {
  return (
    <div className='contents'>

      <Header text='Usted pone la plata, nosotros el control.' />
        <div className="form">
        <h2>Registro</h2>
        <input className='form-shape' type='password' id='in-password' placeholder='Contraseña'/>
        <div className='small-text'>
            <p>Recuerda utilizar una contraseña con las siguientes condiciones:</p>
        <ul>
        <li>Mínimo 8 caracteres</li>
        <li>Mínimo 1 letra mayúscula</li>
        <li>Mínimo 1 letra minúscula</li>
        </ul></div>
        <input className='form-shape'  type='password' id='in-password-bis' placeholder='Repetir contraseña'/>

        <button className="form-shape button"  type='submit'>Verificar</button>
        </div>
    </div>
  );
}

export default PassEnroll;