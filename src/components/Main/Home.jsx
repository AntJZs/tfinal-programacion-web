import Header from './Header';

function Home() {
  return (
    <div className="home">
      <div className='page'>
        <Header text='Usted pone la plata, nosotros el control.' />
        <div className='subtitle'>
          <a href='/login'>
            <button className='form-shape button'>Entra ya</button>
          </a>
          <div className='small-text'>
            <p>
              ¿No eres un cliente? <a href='/register'>¡Registrate!</a>
            </p>
          </div>
        </div>
        <div className='side-image'>
          {/* Esta va a ser una imágen de la interfaz del banco, que salga
          del lado derecho, mostrando una vista previa de la app. */}
        </div>
      </div>
    </div>
  );
}
export default Home;
