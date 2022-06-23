import React from 'react';
import PropTypes from 'prop-types';

function Toolbar({ filters, selected, onSelectFilter }) {
  if (filters.length === 0) {
    return null;
  }
  return (
    <div className='toolbar'>
      {filters.map((e, index) => {
        return (
          <button key={index} className={e === selected ? 'filter-button-selected' : ''} onClick={onSelectFilter}>{e}</button>
        )
      })}
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func
}

export default Toolbar