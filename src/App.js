import React from 'react'
import Customers from './section/Customers'
import HomePage from './section/HomePage'
import Navbar from './section/Navbar'
import OurApproach from './section/OurApproach'

const App = () => {
  return (
    <div className='bg-theme-black '>
      <Navbar />
      <HomePage />
      <Customers/>
      <OurApproach/>
    </div>
  )
}

export default App