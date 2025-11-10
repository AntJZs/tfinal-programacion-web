import { useState } from 'react';
import './NewTransferForm.css';
import { useNavigate } from 'react-router';

function NewTransferForm() {
  const navg = useNavigate();
  const [transfertype, setTransfertype] = useState(0);

  const hash = localStorage.getItem('hash');

  const [value, setValue] = useState(0);

  const [code, setCode] = useState('');
  const [valid, setValid] = useState(false);

  const [acctype, setAcctype] = useState('A');

  const validateCode = () => {
    code.match(/([A-Z]){3}[0-9]{3}/) ? setValid(true) : setValid(false);
  };

  const createTransaction = () => {
    if (transfertype == 0) {
      const data = {
        tipo: transfertype,
        t_cuenta: acctype,
        cantidad: value,
        codigo: code,
        hash,
      };
      validateCode();
      if (valid) {
        fetch('http://localhost:3000/transactions/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((d) => {
            console.log(d);
            if (d.error != undefined) {
              alert('Ha ocurrido un error en la solicitud: ' + d.error);
            } else if (d.message != undefined) {
              alert(d.message);
              navg('/user/dashboard');
            }
          });
      } else alert('El código de usuario no es válido.');
    } else {
      fetch('http://localhost:3000/transactions/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          tipo: transfertype,
          t_cuenta: null,
          cantidad: value,
          codigo: null,
          hash,
        }),
      })
        .then((res) => res.json())
        .then((d) => {
          if (d.message != '') {
            alert(d.message);
            navg('/user/dashboard');
          } else if (d.error != '') {
            'Ha ocurrido un error en la solicitud: ' + d.error;
          }
        });
    }
  };

  return (
    <div className='main-content'>
      <h1>Nueva Transferencia</h1>
      <div className='form modal'>
        <h1>¿Qué movimiento desea hacer?</h1>
        <div className='row-btns'>
          <label
            className={'option option-left ' + (transfertype == '-1' ? 'checked' : '')}
            value='-1'
            onClick={(e) => setTransfertype(e.target.value)}
          >
            <input type='radio' name='mov' value='-1' />
            Recarga
          </label>
          <label
            className={'option option-center ' + (transfertype == '0' ? 'checked' : '')}
            value='0'
            onClick={(e) => setTransfertype(e.target.value)}
          >
            <input className='option' type='radio' name='mov' value='0' />
            Transferencia
          </label>
          <label
            className={'option option-right ' + (transfertype == '1' ? 'checked' : '')}
            value='1'
            onClick={(e) => setTransfertype(e.target.value)}
          >
            <input type='radio' name='mov' value='1' />
            Retiro
          </label>
        </div>

        <div className='transfer-details' style={transfertype == 0 ? { display: 'flex' } : { display: 'none' }}>
          <h2>Número de cuenta</h2>
          <input
            type='text'
            maxLength={6}
            onChange={(e) => {
              setCode(e.target.value.toUpperCase());
            }}
            className='form-input value-small'
            value={code}
          />
          <div className='group'>
            <p>Tipo de cuenta</p>
            <select
              onChange={(e) => {
                setAcctype(e.target.value);
              }}
            >
              <option value='A'>Ahorros</option>
              <option value='C'>Corriente</option>
            </select>
          </div>
        </div>
        <h2>Cantidad</h2>
        <input type='number' className='value-small' onChange={(e) => setValue(e.target.value)} value={value} />
        <p className='form-text'>
          Revisa el número de cuenta al que le estés enviando el dinero a la persona correcta, ya que puede o puede que
          no podamos recuperarlo después
        </p>
        <button className='button' onClick={createTransaction}>
          Enviar
        </button>
      </div>
    </div>
  );
}
export default NewTransferForm;
