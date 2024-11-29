import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
     <header>
      <Nav setActiveTab={setActiveTab} />
    </header>
    <main id="content">
       <Home activeTab={activeTab} />
       <About activeTab={activeTab} />
       <Contact activeTab={activeTab} />
    </main>
    </>
  )
}

export default App
