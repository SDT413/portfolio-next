import React from 'react';
import Link from "next/link";
import styles from "./Navbar.module.css";
import {useVisual} from "@/hooks/useVisual";
import {useActions} from "@/hooks/useActions";

const Navbar = () => {
    const visual = useVisual();
    const {setActiveTab} = useActions();
    return (
        <nav className={styles.navbar}>
            <Link href="#home" className={visual.activeTab === 'home' ? styles.navbar_link_active : styles.navbar_link}
                  onClick={() => setActiveTab('home')}>
                Home</Link>
            <Link href="#about" className={visual.activeTab === 'about' ? styles.navbar_link_active : styles.navbar_link}
                    onClick={() => setActiveTab('about')}>
                    About</Link>
            <Link href="#education" className={visual.activeTab === 'education' ? styles.navbar_link_active : styles.navbar_link}
                    onClick={() => setActiveTab('education')}>
                Education</Link>
            <Link href="#projects" className={visual.activeTab === 'projects' ? styles.navbar_link_active : styles.navbar_link}
                    onClick={() => setActiveTab('projects')}>
                    Projects</Link>
            <Link href="#contact" className={visual.activeTab === 'contact' ? styles.navbar_link_active : styles.navbar_link}
                    onClick={() => setActiveTab('contact')}>
                    Contact</Link>
        </nav>
    );
};

export default Navbar;