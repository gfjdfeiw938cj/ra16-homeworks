import React from 'react'

function DropdownItem({ item, handler, selected }) {
  const active = selected === item.id ? {color: '#5380F7'} : {color: ''};
  return <li onClick={handler} style={active}><a href="#/" data-id={item.id}>{item.value}</a></li>
}

export default DropdownItem