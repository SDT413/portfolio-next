import React from "react";
import Image from "next/image";
import styles from "./ProjectsSection.module.css";
import placeholder from "./assets/placeholder.jpg";
import GitHubSVG from "./assets/GitHubSVG";
import ArrowInSquareSVG from "./assets/ArrowInSquareSVG";

function ProjectsSection() {
  return (
    <div className={styles.projects}>
      <div className={styles.heading}>
        <h2 className={styles.header}>Projects</h2>
        <p className={styles.paragraph}>
          Each project is a unique piece of development
        </p>
      </div>
      <div className={styles.projects_container}>
        <span className={styles.project_container}>
          <Image
            className={styles.project_img}
            src={placeholder}
            alt="Project placeholder"
          />
          <div className={styles.project_info}>
            <h3 className={styles.project_title}>Project Title</h3>
            <p className={styles.project_description}>
              Project description Project descriptionProject descriptionProject
              descriptionProject descriptionProject descriptionProject
              descriptionProject descriptionProject descriptionProject
              description
            </p>
            <span className={styles.project_technologies}>
              <h3>React</h3>
              <h3>CSS</h3>
            </span>
            <span className={styles.project_links}>
              <div className={styles.project_link}>
                <a className={styles.project_link_address}>GitHub</a>
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
        <span className={styles.project_container}>
          <Image
            className={styles.project_img}
            src={placeholder}
            alt="Project placeholder"
          />
          <div className={styles.project_info}>
            <h3 className={styles.project_title}>Project Title</h3>
            <p className={styles.project_description}>
              Project description Project descriptionProject descriptionProject
              descriptionProject descriptionProject descriptionProject
              descriptionProject descriptionProject descriptionProject
              description
            </p>
            <span className={styles.project_technologies}>
              <h3>React</h3>
              <h3>CSS</h3>
            </span>
            <span className={styles.project_links}>
              <div className={styles.project_link}>
                <a className={styles.project_link_address}>GitHub</a>
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
        <span className={styles.project_container}>
          <Image
            className={styles.project_img}
            src={placeholder}
            alt="Project placeholder"
          />
          <div className={styles.project_info}>
            <h3 className={styles.project_title}>Project Title</h3>
            <p className={styles.project_description}>
              Project description Project descriptionProject descriptionProject
              descriptionProject descriptionProject descriptionProject
              descriptionProject descriptionProject descriptionProject
              description
            </p>
            <span className={styles.project_technologies}>
              <h3>React</h3>
              <h3>CSS</h3>
            </span>
            <span className={styles.project_links}>
              <div className={styles.project_link}>
                <a className={styles.project_link_address}>GitHub</a>
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
        <span className={styles.project_container}>
          <Image
            className={styles.project_img}
            src={placeholder}
            alt="Project placeholder"
          />
          <div className={styles.project_info}>
            <h3 className={styles.project_title}>Project Title</h3>
            <p className={styles.project_description}>
              Project description Project descriptionProject descriptionProject
              descriptionProject descriptionProject descriptionProject
              descriptionProject descriptionProject descriptionProject
              description
            </p>
            <span className={styles.project_technologies}>
              <h3>React</h3>
              <h3>CSS</h3>
            </span>
            <span className={styles.project_links}>
              <div className={styles.project_link}>
                <a className={styles.project_link_address}>GitHub</a>
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
      </div>
    </div>
  );
}

export default ProjectsSection;
