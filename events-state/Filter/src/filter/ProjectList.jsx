import React from 'react'
import PropTypes from 'prop-types';

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return null;
  }
  return (
    <div className='gallery'>
      {projects.map((e, index) => <div  key={index} className='galery-img'> <img src={e.img} alt={e.category} /> </div>)}      
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array
}

export default ProjectList