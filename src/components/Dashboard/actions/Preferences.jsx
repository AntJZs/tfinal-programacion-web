function Preferences() {
  return (
    <div className='main-content'>
      <h1>Información de la cuenta</h1>
      <form className='form modal' method='post'>
        <h1 className='heading'>Datos personales</h1>
        <div className='details'>
          <div className='group'>
            <div className='pair'>
              <p className='form-text'>Nombres</p>
              <input type='text' className='form-shape' />
            </div>
            <div className='pair'>
              <p className='form-text'>Apellidos</p>
              <input type='text' className='form-shape full' />
            </div>
          </div>
          <div className='pair'>
            <p className='form-text'>Correo electrónico</p>
            <input type='text' className='form-shape full' />
          </div>
          <div className='pair'>
            <p className='form-text'>Número de teléfono</p>
            <input type='text' className='form-shape full' />
          </div>
          <div className='pair'>
            <p className='form-text'>Dirección</p>
            <input type='text' className='form-shape full' />
          </div>
          <p className='form-text'>
            Recuerda: El ID que se genera al principio no puede ser cambiado después, sin inportar que tu número de
            teléfono cambie.
          </p>
        </div>
        <button className='button'>¿Modificar datos?</button>
      </form>
    </div>
  );
}
export default Preferences;
