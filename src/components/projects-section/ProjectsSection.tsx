import React from "react";
import Image from "next/image";
import styles from "./ProjectsSection.module.css";
import placeholder from "./assets/placeholder.jpg";

import kids_cookies from "./assets/kids-cookies.png";
import the_fba_machine from "./assets/thefbamachine.png";
import coffee_shop from "./assets/coffee_shop.png";
import spotify_clone from "./assets/spotify-clone.png";

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
      title: "The FBA machine",
      description:
        "",
      technologies: ["React", "CSS"],
      githubLink: "#",
      liveDemoLink: "#",
      image: the_fba_machine,
    },
    {
      title: "Kids cookies",
      description:
        "",
      technologies: ["React", "CSS"],
      githubLink: "#",
      liveDemoLink: "#",
      image: kids_cookies,
    },
    {
      title: "Coffee shop",
      description:
        "",
      technologies: ["React", "CSS"],
      githubLink: "#",
      liveDemoLink: "#",
      image: coffee_shop,
    },
    {
      title: "Spotify clone",
      description:
        "Clone of spotify create in order to show my ability to work with next js, tailwind CSS and supabase",
      technologies: ["Next js", " Tailwind CSS", "Supabase"],
      githubLink: "#",
      liveDemoLink: "#",
      image: spotify_clone,
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
