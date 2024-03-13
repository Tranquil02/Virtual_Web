import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
        <ul className="navigation">
            <div className="right_nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Collection</a></li>
                <li><a href="#">Event</a></li>
                <li><a href="#">About Us</a></li>
            </div>
            <li class="logo"><a href="#">Artversnght</a></li>
            <div className="left_nav">
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
            </div>
        </ul>
    )
}

export default Navbar
