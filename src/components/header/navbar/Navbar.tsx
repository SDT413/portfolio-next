import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </nav>
    );
};

export default Navbar;