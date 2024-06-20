import React, { FC } from "react";
import Image from "next/image";
import styles from "./ProjectElement.module.css";
import { ProjectData } from "@/components/interfaces/ProjectData";
import ArrowInSquareSVG from "../assets/ArrowInSquareSVG";
import GitHubSVG from "../assets/GitHubSVG";

type Props = {
    project: ProjectData;
}
const ProjectElement: FC<Props> = ({project}) => {
  return (
    <span className={styles.project_container}>
      <a href="#">
        <Image
          className={styles.project_img}
          src={project.image}
          alt="Project placeholder"
        />
      </a>
      <div className={styles.project_info}>
        <h3 className={styles.project_title}>Project Title</h3>
        <p className={styles.project_description}>
          Project description Project descriptionProject descriptionProject
          descriptionProject descriptionProject descriptionProject
          descriptionProject descriptionProject descriptionProject description
        </p>
        <span className={styles.project_technologies}>
          <h3>React</h3>
          <h3>CSS</h3>
        </span>
        <span className={styles.project_links}>
          <div className={styles.project_link}>
            <a className={styles.project_link_address}>Code</a>
            <span className={styles.project_link_icon}>
              <GitHubSVG className={styles.project_link_icon_svg} />
            </span>
          </div>
          <div className={styles.project_link}>
            <a className={styles.project_link_address}>Live Demo</a>
            <span className={styles.project_link_icon}>
              <ArrowInSquareSVG className={styles.project_link_icon_svg} />
            </span>
          </div>
        </span>
      </div>
    </span>
  );
};

export default ProjectElement;
