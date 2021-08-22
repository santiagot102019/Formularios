import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [textareaText, setTextareaText] = useState('');
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

  const handleTextarea = e => {
    const valor = e.target.value;
    setTextareaText(valor);
  };

  return (
    <section>
      <h2>Formulario</h2>
      <form>
        <h4>Input</h4>
        <label>
          <input type="text" value={inputText} onChange={handleInput} />
        </label>
        <hr />
        <h4>Select</h4>
        <select value={selectNum} onChange={handleSelect}>
          <option value="">Seleccionar</option>
          <option value="1">Uno</option>
          <option value="2">Dos</option>
          <option value="3">Tres</option>
          <option value="4">Cuatro</option>
          <option value="5">Cinco</option>
          <option value="6">Seis</option>
        </select>
        <hr />
        <h4>Select Multiple</h4>
        <select multiple={true} value={[1, 2]}>
          <option value="">Seleccionar</option>
          <option value="1">Uno</option>
          <option value="2">Dos</option>
          <option value="3">Tres</option>
          <option value="4">Cuatro</option>
          <option value="5">Cinco</option>
          <option value="6">Seis</option>
        </select>
        <hr />
        <h4>Textarea</h4>
        <label>
          <textarea
            cols="30"
            rows="10"
            value={textareaText}
            onChange={handleTextarea}
          />
        </label>
      </form>
      <hr />
      <h3>Resultado Input: <span>{valorMostrar}</span></h3>
    </section>
  );
}
