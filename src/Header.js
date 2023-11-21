import React from 'react'
import './Header/Header.css'
import Nav from './Header/Nav.js'
function Header() {
  return (
    <div className='Header'>
        <h1 className='Headerh1'>Project CRUD</h1>
        <Nav/>
    </div>
  )
}

export default Header