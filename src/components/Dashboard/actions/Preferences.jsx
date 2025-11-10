import { useEffect, useState } from 'react';

function Preferences() {
  const hash = localStorage.getItem('hash');

  // Definición de todos los campos...
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [mail, setMail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  // const [name, getName] = useState('');
  // const [name, getName] = useState('');

  useEffect(() => {
    try {
      fetch('http://localhost:3000/users/details', {
        method: 'get',
        headers: {
          Accept: 'application/json',
          hash: hash,
        },
      })
        .then((res) => res.json())
        .then((d) => {
          setName(d.user[0].nombres);
          setLastname(d.user[0].apellidos);
          setMail(d.user[0].correo);
          setNumber(d.user[0].telefono);
          setAddress(d.user[0].direccion);
        });
    } catch (err) {
      console.log(err);
    }
  }, [hash]);

  return (
    <>
      <h1>Información de la cuenta</h1>
      <form className='form modal' method='post'>
        <h1 className='heading'>Datos personales</h1>
        <div className='details'>
          <div className='group'>
            <div className='pair'>
              <p className='form-text'>Nombres</p>
              <input type='text' className='form-shape' value={name} readOnly />
            </div>
            <div className='pair'>
              <p className='form-text'>Apellidos</p>
              <input type='text' className='form-shape full' value={lastname} readOnly />
            </div>
          </div>
          <div className='pair'>
            <p className='form-text'>Correo electrónico</p>
            <input type='text' className='form-shape full' value={mail} readOnly />
          </div>
          <div className='pair'>
            <p className='form-text'>Número de teléfono</p>
            <input type='text' className='form-shape full' value={number} readOnly />
          </div>
          <div className='pair'>
            <p className='form-text'>Dirección</p>
            <input type='text' className='form-shape full' value={address} readOnly />
            <p>Estos son los datos ingresados, si quiere cambiarlos, contactese con el administrador.</p>
          </div>
        </div>
      </form>
    </>
  );
}
export default Preferences;
