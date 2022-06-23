import React from 'react'

function IconSwitch({icons, onSwitch}) {
  return (
    <div className="toolbar">
      <button className='material-icons' onClick={onSwitch}>{icons}</button>
    </div>    
  )
}

export default IconSwitch