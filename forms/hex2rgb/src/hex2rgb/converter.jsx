import React, { useState } from 'react'

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
     ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`     
     : null;
}

function Converter() {
  const [color, setColor] = useState('#34495e');
  const [value, setValue] = useState(color);
  const [rbgContext, setRgbContext] = useState(hexToRgb(color));

  function handlerChange(e) {
    setValue(e.target.value);
    const rgb = hexToRgb(e.target.value);
    if (rgb !== null) {
      setRgbContext(rgb)
      setColor(e.target.value);
    } else if (e.target.value.length >= 7) {
      setColor('#ff0000');
      setRgbContext('Ошибка')
    }
  }

  return (
    <div className="converter" style={{ backgroundColor: color }}>
      <form className='converter-form'>
        <input className='converter-input' value={value} onChange={handlerChange} />
        <label className='converter-label' htmlFor="rgb">{rbgContext}</label>
      </form>
    </div>
  )
}

export default Converter