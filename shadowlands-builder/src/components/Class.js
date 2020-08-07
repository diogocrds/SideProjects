import React, { useState, useEffect } from 'react'
import leggosData from './data/legendaries.json'

function Class(props) {
  const leggos = leggosData.filter((c) => c.class === props.class)

  function handleInputChange(event) {
    props.onChange(event.target.value)
  }

  return (
    <div className='single-class'>
      <h3>{props.class}</h3>
      {leggos[0].specs
        .filter((c) => c.name === 'general')
        .map((spec) =>
          spec.items.map((i) => (
            <div key={i.id} className='single-class__leggo'>
              <div className='name'>{i.name}</div>
              <button value={i.name} onClick={handleInputChange}>
                Add to list
              </button>
            </div>
          ))
        )}
    </div>
  )
}

export default Class
