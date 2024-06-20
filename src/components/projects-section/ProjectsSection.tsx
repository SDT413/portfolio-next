import React from "react";
import Image from "next/image";
import styles from "./ProjectsSection.module.css";
import placeholder from "./assets/placeholder.jpg";
import GitHubSVG from "./assets/GitHubSVG";
import ArrowInSquareSVG from "./assets/ArrowInSquareSVG";
import {Observer} from "@/utils/observer";
import Link from "next/link";
import {ProjectData} from "@/components/interfaces/ProjectData";

function ProjectsSection() {
  const cbRef = Observer("projects");
  const projects: ProjectData[] = [
    {
      title: "Project Title",
      description: "Project description Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description",
      technologies: ["React", "CSS"],
      githubLink: "#",
      liveDemoLink: "#",
    },
    {
      title: "Project Title",
      description: "Project description Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description",
      technologies: ["React", "CSS"],
      githubLink: "#",
      liveDemoLink: "#",
    },
    {
      title: "Project Title",
      description: "Project description Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description",
      technologies: ["React", "CSS"],
      githubLink: "#",
      liveDemoLink: "#",
    },
    {
      title: "Project Title",
      description: "Project description Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description",
      technologies: ["React", "CSS"],
      githubLink: "#",
      liveDemoLink: "#",
    },
    ];
  return (
    <div className={styles.projects} id="projects" ref={cbRef}>
      <div className={styles.projects_container}>
        <div className={styles.heading}>
          <h2 className={styles.header}>Projects</h2>
          <p className={styles.paragraph}>
            Each project is a unique piece of development
          </p>
        </div>
        <span className={styles.project_container}>
          <a href="#">
            <Image
              className={styles.project_img}
              src={placeholder}
              alt="Project placeholder"
            />
          </a>
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
        <span className={styles.project_container}>
          <a href="#">
            <Image
              className={styles.project_img}
              src={placeholder}
              alt="Project placeholder"
            />
          </a>
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
        <span className={styles.project_container}>
          <a href="#">
            <Image
              className={styles.project_img}
              src={placeholder}
              alt="Project placeholder"
            />
          </a>
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
        <span className={styles.project_container}>
          <a href="#">
            <Image
              className={styles.project_img}
              src={placeholder}
              alt="Project placeholder"
            />
          </a>
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
      </div>
    </div>
  );
}

export default ProjectsSection;
