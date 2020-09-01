import React from 'react'
import nav_logo from '../images/logo.png'

const Navbar = () => {
    return (
    <nav style={{background: 'lightblue'}} className="center">
        <div class="nav-wrapper">
            <a href="!#" class="brand-logo">
                <img src={nav_logo} alt="log" style={{height: '65px'}}/>
            </a>
        </div>
    </nav>
    )
}

export default Navbar
