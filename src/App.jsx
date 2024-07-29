import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Loader from './components/LoadingScreen.jsx'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Loader />
      </BrowserRouter>
    </div>
  )
}

export default App