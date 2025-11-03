function NewTransferForm() {
  return (
    <>
      <h1>Nueva Transferecia</h1>
      <form className='form modal'>
        <div className='container'>
          <h2>Código de cuenta</h2>
          <input type='text' className='form-shape value' maxLength={6} />
          <span className='subtitle'>Tipo de cuenta</span>
          <select className='form-shape'>
            <option value=''>Ahorros</option>
            <option value=''>Corriente</option>
          </select>
          <span className='subtitle'>Cantidad a enviar</span>
          <input type='text' className='form-shape value' />
          <p>¡Verifica que el número de cuenta sea el correcto antes de enviar!</p>
        </div>
        <button className='button'>Enviar</button>
      </form>
    </>
  );
}
export default NewTransferForm;
