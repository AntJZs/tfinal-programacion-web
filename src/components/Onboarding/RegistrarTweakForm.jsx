import { useLocation, useNavigate } from 'react-router';
import Header from '../Main/Header';
import { useState } from 'react';
function RegistrarTweakForm() {
  const loc = useLocation();
  const navg = useNavigate();
  const collected = loc.state;
  const [type, setType] = useState('');
  const register = () => {
    const final = {
      tipo: type,
      nombres: loc.state.name,
      apellidos: loc.state.lastname,
      address: loc.state.address,
      correo: loc.state.email,
      telefono: loc.state.phone,
      direccion: loc.state.address,
      hash: loc.state.hash,
    };
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(final),
    })
      .then((res) => res.json())
      .then((meta) => {
        localStorage.setItem('userID', meta.ID[0].ID_Cliente);
        localStorage.setItem('hash', meta.hash);
        navg('/user/dashboard');
      });
  };

  return (
    <div className='home'>
      <div className='contents'>
        <Header text='Usted pone la plata, nosotros el control.' />
        <div className='form'>
          <h2 className='heading'>Personalización</h2>
          <p className='heading'>Elija el tipo de cuenta que desee crear</p>
          <select className='form-shape' onChange={(o) => setType(o.target.value)}>
            <option value='C'>Corriente</option>
            <option value='A'>Ahorros</option>
          </select>
          <div className='small-text'>
            <p>
              ¿Desististe de crear tu cuenta? <a href='/'>Eliminala inmediatamente</a>
            </p>
            {/* Esto hay que hacerlo una solicitud a la página */}
          </div>
          <button className='button' type='submit' onClick={register}>
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrarTweakForm;
