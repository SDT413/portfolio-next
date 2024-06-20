import React, { useState } from "react";
import styles from "./About.module.css";
import classNames from "classnames";
import {useVisual} from "@/hooks/useVisual";
import {useActions} from "@/hooks/useActions";
import { setTimeout } from "timers";

const About = () => {
    const {setActiveTab} = useActions();
    const cbRef = React.useRef<HTMLDivElement>(null);
    const [isBlinking, setIsBlinking] = useState<boolean>(false);
    const [isAnimated, setIsAnimated] = useState<boolean>(false);

    const toggleBlink = () => {
      if(isAnimated){
        return;
      }
      setIsAnimated(true);
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
       
      }, 1000);
      setTimeout(() => {
        setIsAnimated(false);
      }, 2000);
    };
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
      <div className={classNames(styles.about_img, isBlinking ? styles.blink : "")} onClick={toggleBlink}>
        <div className={classNames(styles.eyelid, styles.top)}></div>
        <div className={styles.pupil}></div>
        <div className={classNames(styles.eyelid, styles.bottom)}></div>
        <span className={styles.circle_spin}></span>
      </div>

      <div className={styles.about_content}>
        <h3 className={styles.header3}>Backend Developer</h3>
        <p className={styles.paragraph}>
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
