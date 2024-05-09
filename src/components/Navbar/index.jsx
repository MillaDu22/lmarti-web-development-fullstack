import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return(
        <div className = "container-navbar">
            <div className="container-login-icons">
                <Link className="loginbutton" to="/log"><i className="fa-solid fa-right-to-bracket login"></i></Link>
                <p className= "logoutled"><i className="fa-solid fa-circle red"></i></p>
            </div>
            <div className="container-logout-icons">
                <Link className="logoutbutton" to="/"><i className="fa-solid fa-right-to-bracket logout"></i></Link>
                <p className="loginled"><i className="fa-solid fa-circle green"></i></p>
            </div>
            <nav className="nav-header">
                <Link className="nav_item1" to="/">
                    <p className="nav_item_text1">Home</p>
                </Link>
                <Link className="nav_item2" to="/about">
                    <p className="nav_item_text2">About</p>
                </Link>
                <Link className="nav_item3" to="/cv">
                    <p className="nav_item_text3">Cv</p>
                </Link>
            </nav>
        </div>
    )
}
export default Navbar;