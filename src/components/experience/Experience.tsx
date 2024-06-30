import React from 'react';
import styles from './Experience.module.css';
import ExperienceHeading from "@/components/experience/experience-heading/ExperienceHeading";
import TableColumn from "@/components/experience/table_column/TableColumn";
import {Observer} from "@/utils/observer";

const Experience = () => {
    const cbRef = Observer("experience");
    const educationData = [
        {
            date: "September 2022 - Present",
            heading: "Computer & Science - Prague City University",
            description: "Third year student at the University of Prague. Studying computer science and software engineering."
        }
    ]
    const experienceData = [
        {
            date: "December 2022 - June 2023",
            heading: " Freelance Application Developer - Ukraine",
            description: "Developed various applications for clients. Worked on projects ranging from small websites to large-scale applications."
        },
        {
            date: "September 2023 - June 2024",
            heading: "Full-Stack Developer at Daily Distro LLC - USA",
            description: "Developed and maintained the company's website and mobile application. Implemented new features and fixed bugs. Worked with a team of developers to create a new version of the website and mobile application."
        }

    ]

    return (
        <div className={styles.container} id = "experience" ref={cbRef}>
            <ExperienceHeading/>
            <div className={styles.table_of_columns}>
                <TableColumn data={educationData} heading={"Education"}/>
                <TableColumn data={experienceData} heading={"Experience"}/>
            </div>
        </div>
    );
};

export default Experience;