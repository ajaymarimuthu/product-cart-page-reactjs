import React from 'react'
import img from '../../images/image-avatar.png'

import cartImg from '../../images/icon-cart.svg'

import './Navbar.css'


function Navbar() {
  return (
    <div className='container'>
      {/* <img src="../../images/image-avatar.png" alt="" /> */}

      <ul className='nav-items'>
        <li className='nav-item main-item'>Sneakers</li>
        <li className='nav-item'>Collections</li>
        <li className='nav-item'>Men</li>
        <li className='nav-item'>Women</li>
        <li className='nav-item '>About</li>
        <li className='nav-item'>Contact</li>
 
          <li className='nav-item left'><img className='nav-image cart  ' src={cartImg} alt=""/></li>
          <li className='nav-item left'><img className='nav-image ' src={img} alt="" /></li>
        



      </ul>


    </div>
  )
}

export default Navbar