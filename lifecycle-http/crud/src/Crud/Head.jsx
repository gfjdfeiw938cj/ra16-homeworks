import React from 'react'
import PropTypes from 'prop-types'

function Head({handlerUpdate}) {
  return (
    <div className='head'>
      <div className='crud-title'>Notes</div>
      <button className='btn-update material-icons' onClick={handlerUpdate}>
          autorenew
      </button>
    </div>
  )
}

Head.propTypes = {
  handlerUpdate: PropTypes.func
}

export default Head
