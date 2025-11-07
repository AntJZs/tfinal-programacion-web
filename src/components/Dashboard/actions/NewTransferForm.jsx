import './NewTransferForm.css';

function NewTransferForm() {
  return (
    <div className='main-content'>
      <h1>Nueva Transferencia</h1>
      <form action='' method='post' className='form modal'>
        <h1>¿Qué movimiento desea hacer?</h1>
        <div className='row-btns'>
          <label className='option option-left' value='-1'>
            <input type='radio' name='mov' id='' />
            Recarga
          </label>
          <label className='option option-center' value='0'>
            <input className='option' type='radio' name='mov' id='' />
            Transferencia
          </label>
          <label className='option option-right' value='1'>
            <input type='radio' name='mov' id='' />
            Retiro
          </label>
        </div>
        <div className='transfer-details'>
          <h2>Número de cuenta</h2>
          <input type='text' className='form-input value-small' required='true' />
          <div className='group'>
            <p>Tipo de cuenta</p>
            <select>
              <option value='A'>Ahorros</option>
              <option value='C'>Corriente</option>
            </select>
          </div>
          <h2>Cantidad</h2>
          <input type='number' className='value-small' />
          <p className='form-text'>
            Revisa el número de cuenta al que le estés enviando el dinero a la persona correcta, ya que puede o puede
            que no podamos recuperarlo después
          </p>
          <button className='button'>Enviar</button>
        </div>
      </form>
    </div>
  );
}
export default NewTransferForm;
