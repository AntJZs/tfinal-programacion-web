import Header from '../Main/Header';



function LoginForm() {
  return (
    <div className="home">
      <div className='contents page'>
        <Header text='Usted pone la plata, nosotros el control.' />
        <div className="form">
            <h2>Inicio de sesión</h2>
            <input className='form-shape' type='text' id='in-username' placeholder='Usuario'/>
            <input className='form-shape'  type='password' id='in-pass' 
            placeholder='Contraseña o OTP'/>
            <a href="/user/dashboard" className='form-shape'>
            <button className="button" type='submit'>Iniciar sesión</button>
            </a>
          <div className='small-text'>
            <p>¿No eres un cliente? <a href='/register'>¡Registrate!</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;