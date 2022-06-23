import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import shortid from 'shortid';

function Stars({ count }) {
  if (count < 1 || count > 5 || !Number.isInteger(count)) {
    return null;
  }

  const stars = [];
  for (let i = 0; i < count; i += 1) {
    stars.push(<Star key={shortid.generate()} />);
  }

  return (
    <ul className='card-body-stars'>
      { stars }
    </ul>    
  )
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number
}

export default Stars
