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
      {classList
        .filter(
          (c) =>
            c.name === 'Death Knight' ||
            c.name === 'Demon Hunter' ||
            c.name === 'Druid'
        )
        .map((c) => (
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
  const [watchlistItem, setWatchlistItem] = useState(null)
  useEffect(() => {
    if (watchlistItem !== null) {
      console.log('classes add n: ' + watchlistItem.name)
      console.log('classes add c: ' + watchlistItem.class)
      props.onChange(watchlistItem)
      setWatchlistItem(null)
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
