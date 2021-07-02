import React from 'react';
import { NavLink } from "react-router-dom";

import Logo from './img/logo.png';

import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar-main">
            <header className="header_area">
                <div className="h_row1">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <nav className="nav_area1">
                        <ul className="list1">
                            <li>
                                <div className="nav_search">
                                    <i className="fas fa-search"></i> <span>Search</span>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </li>
                            <li><a href="/">HOW IT WORKS</a></li>
                        </ul>

                        <ul className="list1">
                            <li className="login"><NavLink to="Login"><span className="link">LOGIN</span></NavLink></li>
                            <li><NavLink to="/"><span className="link">SIGNUP</span></NavLink></li>
                            <li><NavLink to="/projects"><span className="link">SERVICES</span></NavLink></li>
                        </ul>

                    </nav>
                </div>
                <div className="h_row2">
                    <nav className="nav_area2">
                        <ul className="h_row2_content">

                            <li><a href="/">Technology & Programming</a></li>
                            <li><a href="/">Writing & Translation</a></li>
                            <li><a href="/">Design</a></li>
                            <li><a href="/">Digital Marketing</a></li>
                            <li><a href="/">Video, Photo & Image</a></li>
                            <li><a href="/">Business</a></li>
                            <li><a href="/">Music & Audio</a></li>
                            <li><a href="/">Marketing, Branding & Sales</a></li>
                            <li><a href="/">Social Media</a></li>

                        </ul>
                    </nav>
                </div>
            </header>
        </div>

    )
}

export default Navbar;