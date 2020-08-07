import React, { useState, useEffect } from 'react'
import './App.css'
import Classes from './components/Classes'
import Watchlist from './components/Watchlist'

function App() {
  const [watchlist, setWatchlist] = useState([])
  const [watchlistItem, setWatchlistItem] = useState('')
  const [resetWatchlist, setResetWatchlist] = useState(false)

  useEffect(() => {
    if (resetWatchlist) {
      console.log('reset')
      setWatchlist([])
      setWatchlistItem('')
      console.log(watchlist)
      setResetWatchlist(false)
    }
  }, [resetWatchlist, watchlist, watchlistItem])

  useEffect(() => {
    if (watchlistItem !== '') {
      console.log(watchlistItem)
      setWatchlist(
        watchlist.concat({ id: watchlist.length, name: watchlistItem })
      )
      setWatchlistItem('')
    }
  }, [watchlistItem, watchlist])

  return (
    <div className='App'>
      <header className='app__header'>
        <h1>Shadowlands Builder</h1>
      </header>
      <div className='app__content'>
        <Classes onChange={(event) => setWatchlistItem(event)} />
        <Watchlist
          list={watchlist}
          onChange={(event) => setResetWatchlist(event)}
        />
      </div>
    </div>
  )
}

export default App
