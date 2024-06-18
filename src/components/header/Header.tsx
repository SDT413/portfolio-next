import React from 'react';
import Logo from "@/components/header/logo/Logo";
import Navbar from "@/components/header/navbar/Navbar";

const Header = () => {
    return (
        <div className="header">
            <Logo/>
            <Navbar/>
        </div>
    );
};

export default Header;