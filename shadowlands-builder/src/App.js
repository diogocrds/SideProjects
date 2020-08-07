import React from 'react'
import './App.css'
import Classes from './components/Classes'
import Watchlist from './components/Watchlist'

function App() {
  return (
    <div className='App'>
      <header className='app__header'>
        <h1>Shadowlands Builder</h1>
      </header>
      <div className='app__content'>
        <Classes />
        <Watchlist />
      </div>
    </div>
  )
}

export default App
