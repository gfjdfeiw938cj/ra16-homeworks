import React from 'react';
import { ShopCard } from './ShopProduct';
import PropTypes from 'prop-types';

function CardsView({ cards }) {
  if (cards.length === 0) {
    return null
  }
  return (
    <div className="gallery">
      <div className="card-view">
        {cards.map((e, index) => <ShopCard item={e} key={index.toString()}/>)}
      </div>
    </div>  
  )
}

CardsView.propTypes = {
  cards: PropTypes.array
}

export default CardsView