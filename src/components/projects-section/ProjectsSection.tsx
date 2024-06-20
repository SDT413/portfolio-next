import React from "react";
import Image from "next/image";
import styles from "./ProjectsSection.module.css";
import placeholder from "./assets/placeholder.jpg";
import GitHubSVG from "./assets/GitHubSVG";
import ArrowInSquareSVG from "./assets/ArrowInSquareSVG";
import { Observer } from "@/utils/observer";
import Link from "next/link";
import { ProjectData } from "@/components/interfaces/ProjectData";
import ProjectElement from "./project-element/ProjectElement";

function ProjectsSection() {
  const cbRef = Observer("projects");
  const projects: ProjectData[] = [
    {
      title: "Project Title",
      description:
        "Project description Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description",
      technologies: ["React", "CSS"],
      githubLink: "#",
      liveDemoLink: "#",
      image: placeholder,
    },
    {
      title: "Project Title",
      description:
        "Project description Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description",
      technologies: ["React", "CSS"],
      githubLink: "#",
      liveDemoLink: "#",
      image: placeholder,
    },
    {
      title: "Project Title",
      description:
        "Project description Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description",
      technologies: ["React", "CSS"],
      githubLink: "#",
      liveDemoLink: "#",
      image: placeholder,
    },
    {
      title: "Project Title",
      description:
        "Project description Project descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject descriptionProject description",
      technologies: ["React", "CSS"],
      githubLink: "#",
      liveDemoLink: "#",
      image: placeholder,
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
        {projects.map((project: ProjectData, index: number) => (
          <ProjectElement project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
