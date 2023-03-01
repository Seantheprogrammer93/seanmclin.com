import React from 'react'
import Intro from './components/Intro'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'

function App() {

  return (
    <div className='max-w-5xl w-11/12 mx-auto'>
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App