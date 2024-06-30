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
