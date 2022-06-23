import React from 'react';
import PropTypes from 'prop-types';

export function ShopCard({ item }) {
  if (item === {}) {
    return null
  }
  return (
    <div className="shop-card">
      <div className="item-img"><img src={item.img} alt="item.name" /></div>
      <div className="content">
        <div className="name">{item.name}</div>
        <div className="color">{item.color}</div>
      </div>
      <div className="footer">
        <div className="price">${item.price}</div>
        <button className="add-btn">add to card</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  item: PropTypes.object
}

export function ShopItem({ item }) {
  if (item === {}) {
    return null
  }
  return (
    <div className="shop-item">
      <div className="item-img"><img src={item.img} alt="item.name" /></div>
      <div className="name">{item.name}</div>
      <div className="color">{item.color}</div>
      <div className="price">${item.price}</div>
      <button className="add-btn">add to card</button>
    </div>
  )
}

ShopItem.propTypes = {
  item: PropTypes.object
}

