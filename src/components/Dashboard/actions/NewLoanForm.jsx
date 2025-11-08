function NewLoanForm() {
  return (
    <>
      <h1>Nuevo préstamo</h1>
      <form method='post' className='form modal'>
        <h1>¿Cuánto deseas recibir?</h1>
        <input name='amount' required min='10000' max='1000000' type='number' className='value' />
        <div className='transfer-details'>
          <h2 className='heading'>Nombre del préstamo</h2>
          <p>Este nombre va a ser usado para identificar este préstamo.</p>
          <input name='name' required type='text' className='form-text' />
          <h2>Fecha máxima de préstamo</h2>
          <input name='max-date' required type='month' />
        </div>
        <button type='button' className='button'>
          Confirmar
        </button>
      </form>
    </>
  );
}
export default NewLoanForm;
