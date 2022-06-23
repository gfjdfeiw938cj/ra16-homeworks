import React from 'react'
import PropTypes from 'prop-types'

function codeToString(code, price) {
  let str = '';
  switch (code) {
    case 'USD':
        str = `$${price}`;
      break;
    case 'EUR':
      str = `€${price}`;
    break;
    default:
      str = `${price} GBR`;
      break;
  }
  return str;
}

function balance(count) {
  let countClass = '';
  if (count <= 10) {
    countClass = 'level-low'
  } else if (count <= 20) {
    countClass = 'level-medium'
  } else if (count > 20) {
    countClass = 'level-high'
  }

  return `item-quantity ${countClass}`
}

function Item({ item }) {
  if (item.state === 'removed') {
    return null
  }

  return (
      <div className="item">
        <div className="item-image">
          <a href={ item.url }> 
            <img src={ item.MainImage.url_570xN } alt=''/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{ item.title }</p>
          <p className="item-price">{ codeToString(item.currency_code, item.price) }</p>
          <p className={balance(item.quantity)}>{ `${item.quantity} left` }</p>
        </div>
      </div>
  )
}

Item.propTypes = { item: PropTypes.object };

export default Item
