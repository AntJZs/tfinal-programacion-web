import Header from './Header';

function Home() {
  return (
    <>
      <Header text='Usted pone la plata, nosotros el control.' />
      <a href='/login'>
        <button className='form-shape button'>Entrar</button>
      </a>
    </>
  );
}
export default Home;
