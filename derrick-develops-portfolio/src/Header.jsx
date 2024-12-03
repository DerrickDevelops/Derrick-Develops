import { useState } from 'react'
import './Header.css'
import './Layout.css'

function Header() {
  

  return (
    <>
      <div className='hero-section'>
        <h1>Good<br />Morning</h1>
        <div className='cards'>
          <div className='info-card'><p>I'm Derrick, my passion is to develop & design website's.</p></div>
          <div className='id-card'><img src='' alt='Personal Photo' /></div>
          <div className='time-card'><p>My Time + Date: </p><div id='time-stamp'>12:00 pm</div></div>
        </div>
      </div>
    </>
  )
}

export default Header
