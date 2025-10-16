import './Header.css';
function Header(data) {
  return (
    <div>
      <img className='logo' src='/src/assets/Logo.svg' alt='Logotipo de BancaSuya' />
      <p className='subtitle'>{data.text}</p>
    </div>
  );
}

export default Header;
