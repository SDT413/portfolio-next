import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <a href="#" className={styles.logo}>
        Kirill.
      </a>
      <div className="bx bx-menu" id={styles.menu_icon}></div>
    </div>
  );
};

export default Logo;
