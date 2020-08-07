import React, { useState, useEffect } from 'react'
import Class from './Class'
import classesData from './data/classes.json'

function Classes(props) {
  const [singleClass, setSingleClass] = useState('')
  const [classList, setClassList] = useState([])

  useEffect(() => {
    if (classList.length === 0) {
      setClassList(
        classesData.map((doc) => ({
          id: doc.id,
          name: doc.name,
          specs: doc.specs,
        }))
      )
    }
  }, [classList])

  const classTable = (
    <div className='classes'>
      <h3>Classes</h3>
      {classList.map((c) => (
        <div key={c.id} className='classes__item'>
          <div className='name'>{c.name}</div>
          <div className='specs'>
            {c.specs.map((spec) => (
              <div
                className='spec__name'
                key={c.id + spec}
                onClick={() => setSingleClass({ class: c.name, spec: spec })}
              >
                {spec}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
  const [watchlistItem, setWatchlistItem] = useState('')
  useEffect(() => {
    if (watchlistItem !== '') {
      props.onChange(watchlistItem)
      setWatchlistItem('')
    }
  }, [watchlistItem, props])

  return (
    <div className='class__content'>
      {singleClass ? (
        <>
          <Class
            class={singleClass.class}
            spec={singleClass.spec}
            onChange={(event) => setWatchlistItem(event)}
          />
          <button onClick={() => setSingleClass(null)} className='btn__back'>
            Back
          </button>
        </>
      ) : (
        classTable
      )}
    </div>
  )
}

export default Classes
