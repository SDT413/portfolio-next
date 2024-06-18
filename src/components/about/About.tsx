import React from "react";
import styles from "./About.module.css";
import classNames from "classnames";
import {useVisual} from "@/hooks/useVisual";
import {useActions} from "@/hooks/useActions";

const About = () => {
    const {setActiveTab} = useActions();
    const cbRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab('about');
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
        <div className={classNames(styles.btn_box, styles.btns)}  ref={cbRef}>
          <a href="#" className={styles.btn} >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
