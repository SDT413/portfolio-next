import React from 'react';
import Link from "next/link";

const Navbar = () => {

    return (
        <nav className="navbar">
            <Link href="#home" className="active">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#education">Education</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#contact">Contact</Link>
        </nav>
    );
};

export default Navbar;