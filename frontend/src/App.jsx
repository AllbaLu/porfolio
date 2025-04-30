import { useState } from 'react'


import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''></div>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
