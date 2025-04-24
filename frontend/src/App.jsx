import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-pink'>gola</div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </>
  )
}

export default App
