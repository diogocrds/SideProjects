import React, { useState, useEffect } from 'react'

function Watchlist(props) {
  const [watchlist, setWatchlist] = useState(props.list)
  useEffect(() => {
    if (props.list.length > watchlist.length || props.list.length === 0)
      setWatchlist(props.list)
  }, [props.list, watchlist])

  function handleResetWatchlist(event) {
    props.onChange(event)
    setWatchlist([])
  }
  return (
    <div>
      <div className='watchlist'>
        <h3>Watchlist</h3>
        {watchlist.length > 0 ? (
          watchlist.map((item) => (
            <div key={item.id} className='watchlist__item'>
              <div className='name'>{item.name}</div>
              <div className='class'>{item.class}</div>
              <div className='icon'>
                <button>x</button>
              </div>
            </div>
          ))
        ) : (
          <>Empty list</>
        )}
        <div className='watchlist__btn'>
          <button>Generate</button>
          <button value={true} onClick={handleResetWatchlist}>
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default Watchlist
