import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/header.css'

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <div className="logo">
            <h1 className='logoText'>VOGUE</h1>
        </div>
        <div className="links">
            <NavLink className='linkTopages' to={'/'}>Home</NavLink>
            <NavLink className='linkTopages' to={'/stories'}>Stories</NavLink>
            <NavLink className='linkTopages' to={'/credits'}>Credits</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
