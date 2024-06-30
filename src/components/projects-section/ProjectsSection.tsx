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
    {
      title: "Coffee Shop",
      description:
          "Responsive coffee shop for training of commercial development with\n" +
          "React typescript, Redux Toolkit and Next.js. With Routes, React and custom hooks.\n" +
          "Shop follows the classic single application structure. Has implemented backend part\n" +
          "on Spring with postgreSql database. Custom written Rest API, services and\n" +
          "repositories.\n",
      technologies: [

      ],
      githubLink: "#",
      liveDemoLink: "#",
      image: placeholder,
    },
    {
      title: "GeographyMinigames",
      description:
          "Is a game about solving problems on the map with limited\n" +
          "time, offering the player the opportunity to try four game modes that provide\n" +
          "different interactions with the map. The essence in all modes is the same: answer the\n" +
          "question/search goal by selecting the corresponding object on the map. In the\n" +
          "player’s search, they will be assisted by the helper function, which allows the player\n" +
          "to narrow the scope of the search on the map to a certain circle while sacrificing part\n" +
          "of the time to solve the problem.\n",
      technologies: [

      ],
      githubLink: "#",
      liveDemoLink: "#",
      image: placeholder,
    },
    {
      title: "Kitchen_Chaos",
      description:
          "" +
          "",
      technologies: [

      ],
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
