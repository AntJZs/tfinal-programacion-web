import Header from '../Dashboard/Header';

function LoginForm() {
  return (
    <>
      <Header text='Usted pone la plata, nosotros el control.' />
      <div className='form-field'>
        <input type='text' id='in-username' />
        <input type='password' id='in-pass' />
      </div>
      <button type='submit'>Iniciar sesión</button>
      <div className='small-text'>
        <p>
          ¿No eres un cliente? <a href='/register'>¡Registrate!</a>
        </p>
      </div>
    </>
  );
}

export default LoginForm;
