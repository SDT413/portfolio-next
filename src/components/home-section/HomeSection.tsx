import {FC, useEffect, useRef} from "react";
import styles from "./HomeSection.module.css";
import { useActions } from "@/hooks/useActions";
import HTMLSVG from "./assets/svgs/HTMLSVG";
import CSSSVG from "./assets/svgs/CSSSVG";
import JSSVG from "./assets/svgs/JSSVG";
import ReactSVG from "./assets/svgs/ReactSVG";
import NodeJSSVG from "./assets/svgs/NodeJSSVG";
import TailwindSVG from "./assets/svgs/TailwindSVG";
import SCSSSVG from "./assets/svgs/SCSSSVG";
import NextJSSVG from "./assets/svgs/NextJSSVG";
import TSSVG from "./assets/svgs/TSSVG";
import {Observer} from "@/utils/observer";

const HomeSection: FC = ({}) => {
  const cbRef = Observer("home");
  return (
    <section className={styles.home} id={styles.home} ref={cbRef}>
      <div className={styles.home_content}>
        <h1 className={styles.header1}>
          Hi, I am <span>Kirill Marchenko</span>
        </h1>
        <div className={styles.text_animate}>
          <h3 className={styles.header3}>Backend Developer</h3>
        </div>
        <p className={styles.paragraph}>
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
        Tech stack |
        <span className={styles.tech_stack_item}>
          <HTMLSVG className={styles.icon} /> <CSSSVG className={styles.icon} />
        </span>
        <span className={styles.tech_stack_item}>
          <JSSVG className={styles.icon} />
          <TSSVG className={styles.icon} style={{ transform: "scale(0.9)" }} />
        </span>
        <span className={styles.tech_stack_item}>
          <ReactSVG className={styles.icon} />
          <NextJSSVG className={styles.icon} />
          <NodeJSSVG className={styles.icon} />
        </span>
        <span className={styles.tech_stack_item}>
          <TailwindSVG className={styles.icon} />
          <SCSSSVG className={styles.icon} />
        </span>
      </div>
      <div className={styles.home_sci}>
        <a href="#" className={styles.sci_link}>
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#" className={styles.sci_link}>
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#" className={styles.sci_link}>
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
