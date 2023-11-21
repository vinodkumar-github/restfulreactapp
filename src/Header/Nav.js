import React from 'react'
import './Nav.css'
function Nav() {
  return (
   
    <nav>
        <ul className='Nav'>
            <li className='Homeli'><a className='Homelia' href=".">Home</a></li>
            <li className='Aboutli'><a className='Aboutlia'href=".">About</a></li>
            <li className='Contactli'><a className='Contactlia'href=".">Contact</a></li>
        </ul>
    </nav>
    
  )
}

export default Nav