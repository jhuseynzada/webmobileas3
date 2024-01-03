import React from 'react';
import '../styles/Navbar.css'; // Import the CSS file
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Jamil Huseynzade</div>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/flashs">FlashCards</NavLink>
                <NavLink to="/addcard">Add card</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
