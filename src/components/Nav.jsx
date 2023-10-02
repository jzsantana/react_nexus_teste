import React from 'react'
import NexusLogo from '../assets/NEXUSlogo.svg'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <img src={NexusLogo} alt="" />

      <div className='nav-list'>
        
        <a href="">CARTÕES</a>
        <a href="">APLICATIVO</a>
        <a href="">BLOG</a>
        <a href="">SOBRE NÓS</a>

        <button className='btn-sign-up'>SIGN UP</button>
      </div>

    </nav>
  )
}

export default Nav