import React, { useState } from 'react'
import DropdownList from './DropdownList'

function Dropdown() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="container">
      <div data-id="wrapper" className={`dropdown-wrapper open`}>
        <button data-id="toggle" className="btn" onClick={() => setOpen(!open)}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        { open ? <DropdownList /> : null }
      </div>
    </div>
  )
}

export default Dropdown