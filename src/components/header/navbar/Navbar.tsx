import React from 'react';
import Link from "next/link";
import styles from "./Navbar.module.css";
import {useVisual} from "@/hooks/useVisual";

const Navbar = () => {
    const visual = useVisual();
    return (
        <nav className={styles.navbar}>
            <Link href="#home" className="active">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
        </nav>
    );
};

export default Navbar;