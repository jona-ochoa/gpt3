import React from 'react'
import { Brand, CTA, Navbar } from './components'
import { Blog, Features, Footer, Possibility, Whatgpt3 } from './containers'
import Header from './containers/header/Header'

import './App.css'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
