import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [selectNum, setSelectNum] = useState(3);
  const [valorMostrar, setValorMostrar] = useState('');

  const handleInput = e => {
    const valor = e.target.value;
    setInputText(valor);
    setValorMostrar(valor);
  };

  const handleSelect = e => {
    const valor = e.target.value;
    setSelectNum(valor);
  };

  return (
    <section>
      <h2>Formulario</h2>
      <form>
        <label>
          <input type="text" value={inputText} onChange={handleInput} />
        </label>
        <select value={selectNum} onChange={handleSelect}>
          <option value="">Seleccionar</option>
          <option value="1">Uno</option>
          <option value="2">Dos</option>
          <option value="3">Tres</option>
          <option value="4">Cuatro</option>
          <option value="5">Cinco</option>
          <option value="6">Seis</option>
        </select>

        <select multiple={true} value={[1, 2]}>
          <option value="">Seleccionar</option>
          <option value="1">Uno</option>
          <option value="2">Dos</option>
          <option value="3">Tres</option>
          <option value="4">Cuatro</option>
          <option value="5">Cinco</option>
          <option value="6">Seis</option>
        </select>
      </form>
      <br />
      Resultado: <span>{valorMostrar}</span>
    </section>
  );
}
