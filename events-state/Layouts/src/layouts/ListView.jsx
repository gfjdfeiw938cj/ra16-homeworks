import React from 'react'
import { ShopItem } from './ShopProduct'
import PropTypes from 'prop-types';

function ListView({ items }) {
  if (items.length === 0) {
    return null
  }
  return (
    <div className="gallery">
      {items.map((e, index) => <ShopItem item={e} key={index.toString()}/>)}
    </div>   
  )  
}

ListView.propTypes = {
  items: PropTypes.array
}

export default ListView