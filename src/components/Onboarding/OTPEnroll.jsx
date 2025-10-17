import Header from '../Main/Header';

function OTPEnroll() {
  return (
    <div className="home">
      <div className='contents page'>

        <Header text='Usted pone la plata, nosotros el control.' />
          <div className="form">
          <h2>Autenticación</h2>

          <div className="row">
              <div className="square"><img src="/src/assets/barcode.png" alt="" /></div>
              <p>Escanea el siguiente código QR con tu aplicación de autenticación y escribe el código generado en el siguiente campo.</p>
          </div>
          <input className='form-shape'  type='password' id='in-auth' placeholder='Código de autenticación'/>

          <button className="form-shape button"  type='submit'>Verificar</button>
          </div>
      </div>
    </div>
  );
}

export default OTPEnroll;