import { useState } from 'react';
import Header from '../Main/Header';
import { useNavigate } from 'react-router';

function RegistrarForm() {
  const submit = () => {
    valid
      ? navg('/enroll', { state: { name, lastname, email, phone, address } })
      : alert('Hay campos inválidos, revisa la información.');
  };
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [message, setMessage] = useState('Llena los campos requeridos');
  const [valid, setValid] = useState(false);
  const validate = () => {
    if (name != '' && lastname != '') {
      if (phone.match(/^3\d{10}\b/)) {
        setValid(true);
        setMessage('');
      } else {
        setMessage('El número de teléfono no es válido.');
        setValid(false);
      }
      if (
        email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        setValid(true);
        setMessage('');
      } else {
        setValid(false);
        setMessage('El correo ingresado es inválido');
      }
    }
  };
  const navg = useNavigate();
  return (
    <div className='home'>
      <div className='contents page'>
        <Header text='Usted pone la plata, nosotros el control.' />
        <div className='form'>
          <h2>Registro</h2>
          <input
            className='form-shape'
            required
            type='text'
            id='in-name'
            placeholder='Nombres'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className='form-shape'
            required
            type='text'
            id='in-last-name'
            placeholder='Apellidos'
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
          <input
            className='form-shape'
            type='email'
            id='in-email'
            placeholder='Correo electronico'
            onMouseLeave={validate}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className='form-shape'
            required
            type='number'
            id='in-phone'
            placeholder='Teléfono'
            onMouseLeave={validate}
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <input
            className='form-shape'
            type='text'
            id='in-address'
            placeholder='Dirección de residencia'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <div className='small-text'>
            <p>
              Al registrarte, estás almacenando información dentro de nuestra base de datos, la cual no garantizamos su
              confidencialidad.
            </p>
          </div>
          <p>{message}</p>
          <button className='form-shape button' type='submit' onClick={submit}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrarForm;
