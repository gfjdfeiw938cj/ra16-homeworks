import React, { useState } from 'react'
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import { arrProducts } from './products';

function Store() {
  const [icons, setIcons] = useState('view_list');
  const products = arrProducts;

  function onSwitch() {
    setIcons(icons === 'view_module' ? 'view_list' : 'view_module')
  }

  return (
    <div className="main">
      <IconSwitch icons={icons} onSwitch={onSwitch} />
      {icons === 'view_list' ? <CardsView cards={products} /> : <ListView items={products} />}
    </div>
  )
}

export default Store