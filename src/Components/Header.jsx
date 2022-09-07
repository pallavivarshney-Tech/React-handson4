import React from 'react'
import { Link } from 'react-router-dom'

const Header= () => {
  return (
    <div className='header'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Students">Students</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
    </div>
  )
}

export default Header
