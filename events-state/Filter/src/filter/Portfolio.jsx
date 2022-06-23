import React from 'react';
import { useState } from 'react';
import { arrProjects } from './data';
import ProjectList from './ProjectList'
import Toolbar from './Toolbar'

export default function Portfolio() {
  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const [selected, setSelected] = useState('All');

  let projects = [];
  if (selected === 'All') {
    projects = [...arrProjects]
  } else {
    for (let i = 0; i < arrProjects.length; i++) {
      if (arrProjects[i].category === selected) {
        projects.push(arrProjects[i])
      }
    }
  }

  function onSelectFilter(props) {
    setSelected(props.target.textContent);
  }

  return (
    <>
      <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter} />
      <ProjectList projects={projects} />
    </>
  )
}
