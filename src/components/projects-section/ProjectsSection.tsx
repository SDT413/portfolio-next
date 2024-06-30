import React from "react";
import styles from "./ProjectsSection.module.css";

import geography_minigames from "../../../public/assets/images/geography_minigames.png";
import kitchen_chaos from "../../../public/assets/images/kitchen_chaos.png";
import placeholder from "/public/assets/images/placeholder.jpg";

import kids_cookies from "/public/assets/images/kids-cookies.png";
import the_fba_machine from "/public/assets/images/thefbamachine.png";
import coffee_shop from "/public/assets/images/coffee_shop.png";
import spotify_clone from "/public/assets/images/spotify-clone.png";

import { Observer } from "@/utils/observer";
import { ProjectData } from "@/components/interfaces/ProjectData";
import ProjectElement from "./project-element/ProjectElement";

function ProjectsSection() {
  const cbRef = Observer("projects");
  const projects: ProjectData[] = [
    {
      title: "The FBA machine",
      description: "",
      technologies: ["React", "CSS", "Node"],
      githubLink: "#projects",
      liveDemoLink: "https://thefbamachine.co/",
      image: the_fba_machine,
    },
    {
      title: "Kids cookies",
      description: "",
      technologies: ["React js", "CSS", "Node js"],
      githubLink: "#",
      liveDemoLink: "#",
      image: kids_cookies,
    },
    {
      title: "Coffee shop",
      description: "",
      technologies: ["React", "CSS"],
      githubLink: "#",
      liveDemoLink: "#",
      image: coffee_shop,
    },
    {
      title: "Spotify clone",
      description:
        "This project demonstrates the design and implementation of a music streaming application's user interface, inspired by popular platforms like Spotify. The focus was on creating a clean, intuitive and visually appealing interface.",
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
      technologies: [],
      githubLink: "#",
      liveDemoLink: "#",
      image: coffee_shop,
    },
    {
      title: "Geography Minigames",
      description:
        "Is a game about solving problems on the map with limited\n" +
        "time, offering the player the opportunity to try four game modes that provide\n" +
        "different interactions with the map. The essence in all modes is the same: answer the\n" +
        "question/search goal by selecting the corresponding object on the map. In the\n" +
        "player’s search, they will be assisted by the helper function, which allows the player\n" +
        "to narrow the scope of the search on the map to a certain circle while sacrificing part\n" +
        "of the time to solve the problem.\n",
      technologies: [],
      githubLink: "#",
      liveDemoLink: "#",
      image: geography_minigames,
    },
    {
      title: "Kitchen Chaos",
      description:
          "Kitchen Chaos is a chaotic couch co-op cooking game for one to four players. " +
          "Working as a team, you and your fellow chefs must prepare, cook and serve up a variety of tasty orders before the baying customers storm out in a huff." +
          "Sharpen your knives and dust off your chef’s whites, there isn’t mushroom for error and the steaks are high in these crazy kitchens!" +
          "The Burger Kingdom is in danger and only the finest cooking can save it! " +
          "In Kitchen Chaos players must journey through a variety of cruel and unusual kitchens on their quest to become master chefs capable of conquering an ancient edible evil which plagues the land." +
          "Play solo or engage in classic, chaotic couch co-op for up to four players in both co-operative and competitive challenge modes. " +
          "You’ll have to cook a range of different dishes and work together in order to become the most effective and ultimate team!" +
          "The game uses netcode for game objects for multiplayer, Lobby and Relay services, and Unity Server. \n",
      technologies: [

      ],
      githubLink: "#",
      liveDemoLink: "#",
      image: kitchen_chaos,
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
