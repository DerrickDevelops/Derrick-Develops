import { useState } from 'react'
import './Header.css'

function Header() {
  

  return (
    <>
      <div className='main'>
        <h1>Good Morning</h1>
        <div className='cards'>
          <div className='info-card'></div>
          <div className='id-card'></div>
          <div className='time-card'></div>
        </div>
      </div>
    </>
  )
}

export default Header