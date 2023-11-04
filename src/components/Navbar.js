import React from 'react'
import { Link } from 'gatsby'
import {FiAlignJustify} from 'react-icons/fi'
import logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <div className='nav-header'>
                {/* This is the pace where the image and the icon will be present. */}
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <button className='nav-btn'>
                    <FiAlignJustify/>
                </button>
            </div> 
            <div className='nav-links show-links'>
                {/* This is the place which will toggle with the small screen. */}
                <Link to='/' className='nav-link' activeClassName='active-link'>home</Link>
                <Link to='/recipes' className='nav-link' activeClassName='active-link'>recipes</Link>
                <Link to='/tags' className='nav-link' activeClassName='active-link'>tags</Link>
                <Link to='/about' className='nav-link' activeClassName='active-link'>about</Link>

                <div className='nav-link contact-link'>
                    <Link to="/contact" className='btn'>
                        Contact
                    </Link>
                </div>
            </div> 
        </div>
    </nav>
  )
}

export default Navbar