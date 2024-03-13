import { useState } from 'react'
import './App.css'
import Navbar from './components/nav/Navbar'
import Home from './components/home/home'
import Artworks from './pages/art-work/Artwork'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Artworks/>
    </>
  )
}

export default App
