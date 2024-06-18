import React from "react";
import styles from "./About.module.css";
import classNames from "classnames";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>
        About <span>Me</span>
      </h2>
      <div className={styles.about_img}>
        <span className={styles.circle_spin}></span>
      </div>

      <div className={styles.about_content}>
        <h3>Backend Developer</h3>
        <p>
          I am a student at the University of Prague(PCU). I have 1 year
          experience with react, wordpress and node.js.
        </p>
        <div className={classNames(styles.btn_box, styles.btns)}>
          <a href="#" className={styles.btn}>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
