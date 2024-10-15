import { useState } from 'react'
import './Header.css'
import './Layout.css'

function Header() {
  

  return (
    <>
      <div className='main'>
        <h1>Good Morning</h1>
        <div className='cards'>
          <div className='info-card'><p>I'm Derrick, I develop & design website's.</p></div>
          <div className='id-card'><img src='' alt='Personal Photo' /></div>
          <div className='time-card'><p>My Time + Date:</p></div>
        </div>
      </div>
    </>
  )
}

export default Header
