import React, { FC } from "react";
import styles from "./HomeSection.module.css";
import HTMLSVG from "./assets/svgs/HTMLSVG";
import CSSSVG from "./assets/svgs/CSSSVG";
import JSSVG from "./assets/svgs/JSSVG";
import ReactSVG from "./assets/svgs/ReactSVG";
import NodeJSSVG from "./assets/svgs/NodeJSSVG";
import TailwindSVG from "./assets/svgs/TailwindSVG";
import SCSSSVG from "./assets/svgs/SCSSSVG";

const HomeSection: FC = ({}) => {
  return (
    <section className={styles.home} id={styles.home}>
      <div className={styles.home_content}>
        <h1>
          Hi, I am <span>Kyrylo Marchenko</span>
        </h1>
        <div className={styles.text_animate}>
          <h3>Backend Developer</h3>
        </div>
        <p>
          I am a student at the University of Prague(PCU). I have 1 year
          experience with react, wordpress and node.js.
        </p>
        <div className={styles.btn_box}>
          <a href="#" className={styles.btn}>
            Hire Me
          </a>
          <a href="#" className={styles.btn}>
            Contact Me
          </a>
        </div>
      </div>
      <div className={styles.home_img}></div>

      <div className={styles.tech_stack}>
        Tech stack | <HTMLSVG /> <CSSSVG /> <JSSVG /> <ReactSVG /> <NodeJSSVG />
        <TailwindSVG /> <SCSSSVG />
      </div>
      <div className={styles.home_sci}>
        <a href="#">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
