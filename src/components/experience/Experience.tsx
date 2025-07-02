import React from 'react';
import styles from './Experience.module.css';
import ExperienceHeading from "@/components/experience/experience-heading/ExperienceHeading";
import TableColumn from "@/components/experience/table_column/TableColumn";
import {Observer} from "@/utils/observer";

const Experience = () => {
    const cbRef = Observer("experience");
    const educationData = [
        {
            date: "September 2022 - June 2025",
            heading: "Computer & Science - Prague City University",
            description: "Finished the University of Prague. Studying computer science and software engineering."
        }
    ]
    const experienceData = [
        {
            date: "December 2022 - June 2023",
            heading: " Freelance Application Developer",
            description: "Developed various applications for clients. Worked on projects ranging from small websites to large-scale applications."
        },
        {
            date: "September 2023 - June 2024",
            heading: "Full-Stack Developer at Daily Distro LLC",
            description: "Developed and maintained the company's website and mobile application. Implemented new features and fixed bugs. Worked with a team of developers to create a new version of the website and mobile application."
        },
        {
            date: "June 2024 - Present",
            heading: "Full-Stack Developer at Odyssey",
            description: "Developed and maintained mobile applications alongside a web CMS. Implemented new features and fixed bugs."
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