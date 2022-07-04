import React, { useState } from 'react'
import PropTypes from 'prop-types'

function InputText({ sendMessage }) {
  const [textArea, setTextArea] = useState('');

  function handlerInput({ target }) {
    setTextArea(target.value);
  }

  function handlerSend() {
    if (textArea === '') return
    sendMessage(textArea);
    setTextArea('');
  }

  return (
    <div className='input-form'>
      <label>New Note</label>
      <textarea className='input-field' name="text" cols="8" rows="5" id="" value={textArea} onChange={handlerInput}></textarea>
      <button className='btn-send material-icons' onClick={handlerSend}>
          send
      </button>
    </div>
  )
}

InputText.propTypes = {
  text: PropTypes.string,
  handlerInput: PropTypes.func,
  handlerSend: PropTypes.func
}

export default InputText
