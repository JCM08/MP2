import React from 'react'
import logo from './../images/disney-logo.jpg

function Header() {
  return (
    <div>
        <img src={logo} className='w-[80px]' />
    </div>
  )
}

export default Header