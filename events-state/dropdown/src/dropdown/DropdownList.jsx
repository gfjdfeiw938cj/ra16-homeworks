import React, { useState } from 'react'
import DropdownItem from './DropdownItem';

function DropdownList() {
  const downList = [
    { id: '1', value: 'Profile Information' },
    { id: '2', value: 'Change Password' },
    { id: '3', value: 'Become PRO' },
    { id: '4', value: 'Help' },
    { id: '5', value: 'Log Out' }
  ]

  const [selected, setSelected] = useState('1');

  function onSelect(event) {
    setSelected(event.target.dataset.id);
  }

  return (
    <ul data-id="dropdown" className="dropdown">
      {downList.map((item) => <DropdownItem key={item.id} item={item} handler={onSelect} selected={selected}/>)} 
    </ul>
  )
}

export default DropdownList