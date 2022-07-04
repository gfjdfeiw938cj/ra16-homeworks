import React from 'react'
import PropTypes from 'prop-types'

function ShowCards({ cards, onDelete }) {
  const cardList = cards.map((e) => {
    return (
      <div className='cards' key={e.id}>
        <div className='cards-content'>
          <span>{e.content}</span>
        </div>
        <button className='btn-del material-icons' onClick={() => onDelete(e.id)}>
            close
        </button>
      </div>
    )
  })
  return (
    <div className='cards-list'>
      {cardList}
    </div>
  )
}

ShowCards.propTypes = {
  cards: PropTypes.array,
  onDelete: PropTypes.func
}

export default ShowCards
