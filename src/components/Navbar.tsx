import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo3.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <a href="#home">
        <img src={logo} alt="Logo" className="logo-image" />
      </a>

      <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/memories">Memories</Link>
        <Link to="/about">About Us</Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
