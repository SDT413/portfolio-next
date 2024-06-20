import React from "react";
import styles from "./Logo.module.css";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={styles.container}>
      <Link href="#home" className={styles.logo}>
        Kirill.
      </Link>
      <div className="bx bx-menu" id={styles.menu_icon}></div>
    </div>
  );
};

export default Logo;
