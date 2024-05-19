import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './assets/component/Nav'
import Head from './assets/component/Head'
import About from './assets/component/About'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Nav />
 <Head />
 <About/>
 
 </>
  )
}

export default App
