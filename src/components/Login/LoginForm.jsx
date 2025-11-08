import { useNavigate } from 'react-router';
import Header from '../Main/Header';
import { useState } from 'react';
import { MD5 } from 'crypto-js';

function LoginForm() {
  const nav = useNavigate();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const validateUser = () => {
    const hash = MD5(pass).toString();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user,
        pass: hash,
      }),
    })
      .then((res) => res.json())
      .then((meta) => {
        // const ID = meta[0];
        // console.log(ID);
        if (meta[0] != undefined) {
          localStorage.setItem('userID', meta[0].ID_Cliente);
          localStorage.setItem('hash', meta[0].hash);
          nav('/user/dashboard', {});
        } else {
          alert('Datos incorrectos, intentalo de nuevo');
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className='home'>
      <div className='contents page'>
        <Header text='Usted pone la plata, nosotros el control.' />
        <div className='form'>
          <h2>Inicio de sesión</h2>
          <input
            className='form-shape'
            type='text'
            id='in-username'
            placeholder='Usuario'
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            className='form-shape'
            type='password'
            id='in-pass'
            placeholder='Contraseña'
            onMouseLeave={(e) => setPass(e.target.value)}
          />
          <button className='button' type='submit' onClick={validateUser} to='/user/dashboard'>
            Iniciar sesión
          </button>
          <div className='small-text'>
            <p>
              ¿No eres un cliente? <a href='/register'>¡Registrate!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
