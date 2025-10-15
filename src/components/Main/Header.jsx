function Header(data) {
  return (
    <>
      <img src='/src/assets/Logo.svg' alt='Logotipo de BancaSuya' />
      <p className='subtitle'>{data.text}</p>
    </>
  );
}

export default Header;
