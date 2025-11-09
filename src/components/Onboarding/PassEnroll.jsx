import { useState } from 'react';
import Header from '../Main/Header';
import { useLocation, useNavigate } from 'react-router';
import { MD5 } from 'crypto-js';

function PassEnroll() {
  const loc = useLocation();
  const navg = useNavigate();
  const collected = loc.state;
  const [pass_a, setPass_a] = useState('');
  const [pass_b, setPass_b] = useState('');

  const [valid, setValid] = useState(false);

  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);

  const verifyConstraints = () => {
    pass_a.match(/.{8}/) ? setC1(true) : setC1(false);
    pass_a.match(/(?=.*[A-z])/) ? setC2(true) : setC1(false);
    pass_a.match(/(?=.*[0-9])/) ? setC3(true) : setC1(false);

    if (c1 && c2 && c3) setValid(true);
  };

  const verify = () => {
    if (pass_a === pass_b && valid) {
      const hash = MD5(pass_a).toString();
      navg('/register/details', { state: { ...collected, hash } });
    } else {
      alert('Las contraseñas no coinciden o no cumple con los requisitos mínimos.');
    }
  };
  return (
    <div className='home'>
      <div className='contents page'>
        <Header text='Usted pone la plata, nosotros el control.' />
        <div className='form'>
          <h2>Registro</h2>
          <input
            className='form-shape'
            type='password'
            onChange={(e) => {
              setPass_a(e.target.value);
              verifyConstraints();
            }}
            id='in-password'
            placeholder='Contraseña'
          />
          <div className='small-text'>
            <p>Recuerda utilizar una contraseña con las siguientes condiciones:</p>
            <ul>
              <li style={c1 ? { color: 'green' } : { color: 'red' }}>Mínimo 8 caracteres</li>
              <li style={c2 ? { color: 'green' } : { color: 'red' }}>Mínimo 1 letra mayúscula</li>
              <li style={c3 ? { color: 'green' } : { color: 'red' }}>Mínimo 1 número</li>
            </ul>
          </div>
          <input
            className='form-shape'
            onChange={(e) => setPass_b(e.target.value)}
            type='password'
            id='in-password-bis'
            placeholder='Repetir contraseña'
          />
          <button className='button' type='submit' onClick={verify}>
            Verificar
          </button>
        </div>
      </div>
    </div>
  );
}

export default PassEnroll;
