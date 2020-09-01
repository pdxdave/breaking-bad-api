import React from 'react'
import nav_logo from '../images/logo.png'

const Navbar = () => {
    return (
    <nav style={{background: 'lightblue'}} className="center">
        <div className="nav-wrapper">
            <a href="!#" className="brand-logo">
                <img src={nav_logo} alt="log" style={{height: '65px'}}/>
            </a>
        </div>
    </nav>
    )
}

export default Navbar
