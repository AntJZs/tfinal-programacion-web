import { useState } from 'react';
import { useNavigate } from 'react-router';

function NewLoanForm() {
  const navg = useNavigate();

  const hash = localStorage.getItem('hash');

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [maxdate, setMaxdate] = useState(new Date(Date.now));

  const [valid, setValid] = useState(false);

  const validateData = () => {
    if (Date.now() < maxdate.valueOf() && maxdate.valueOf() < Date.now() + 15778800000) {
      // Si está entre hoy y seis meses en adelante
      setValid(true);
    } else {
      setValid(false);
    }
    /* El problema con las fechas, es que las va a tomar en formato UTC...
    Así que una deuda se vencerá 5 horas antes de lo previsto... */
  };
  const createTransaction = () => {
    validateData();
    if (valid) {
      maxdate.setMonth(maxdate.getMonth() + 1); // Añadimos un mes para hacerlo al final del mes elegido
      const date = `${maxdate.getFullYear()}-${maxdate.getMonth()}-${maxdate.getDay()}`;
      console.log(date);
      fetch('http://localhost:3000/loans/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          nombre: name,
          cantidad_total: amount,
          plazo: date,
          hash,
        }),
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
    } else alert('Un préstamo no puede tener más de 6 meses, coloque otra fecha.');
  };
  return (
    <>
      <h1>Nuevo préstamo</h1>
      <form method='post' className='form modal'>
        <h1>¿Cuánto deseas recibir?</h1>
        <input
          name='amount'
          required
          min='10000'
          max='1000000'
          type='number'
          className='value'
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <div className='transfer-details'>
          <h2 className='heading'>Nombre del préstamo</h2>
          <p>Este nombre va a ser usado para identificar este préstamo.</p>
          <input
            name='name'
            required
            type='text'
            className='form-text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2>Fecha máxima de préstamo</h2>
          <input name='max-date' required type='month' onChange={(e) => setMaxdate(e.target.valueAsDate)} />
        </div>
        <button type='button' className='button' onClick={createTransaction}>
          Confirmar
        </button>
      </form>
    </>
  );
}

export default NewLoanForm;
