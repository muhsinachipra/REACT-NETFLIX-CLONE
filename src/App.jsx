import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { originals, actions } from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title="Action" url={actions} isSmall />
    </div>
  )
}

export default App
