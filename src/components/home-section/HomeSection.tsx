import React, { FC } from "react";
import styles from "./HomeSection.module.css";
import { useActions } from "@/hooks/useActions";
import HTMLSVG from "./assets/svgs/HTMLSVG";
import CSSSVG from "./assets/svgs/CSSSVG";
import JSSVG from "./assets/svgs/JSSVG";
import ReactSVG from "./assets/svgs/ReactSVG";
import NodeJSSVG from "./assets/svgs/NodeJSSVG";
import TailwindSVG from "./assets/svgs/TailwindSVG";
import SCSSSVG from "./assets/svgs/SCSSSVG";

const HomeSection: FC = ({}) => {
  const { setActiveTab } = useActions();
  const cbRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab("home");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    if (cbRef.current) {
      observer.observe(cbRef.current);
    }
    return () => {
      if (cbRef.current) {
        observer.unobserve(cbRef.current);
      }
    };
  }, [cbRef]);
  return (
    <section className={styles.home} id={styles.home} ref={cbRef}>
      <div className={styles.home_content}>
        <h1 className={styles.header1}>
          Hi, I am <span>Kyrylo Marchenko</span>
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
        Tech stack | <HTMLSVG className={styles.icon} />{" "}
        <CSSSVG className={styles.icon} /> <JSSVG className={styles.icon} />{" "}
        <ReactSVG className={styles.icon} />{" "}
        <NodeJSSVG className={styles.icon} />
        <TailwindSVG className={styles.icon} />{" "}
        <SCSSSVG className={styles.icon} />
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
