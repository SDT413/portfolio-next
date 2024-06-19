import React from 'react';
import styles from './Experience.module.css';
import ExperienceHeading from "@/components/experience/experience-heading/ExperienceHeading";
import TableColumn from "@/components/experience/table_column/TableColumn";

const Experience = () => {
    const educationData = [
        {
            date: "2022 - Present",
            heading: "Computer & Science - Prague City University",
            description: "Ongoing Bachelor's degree in Computer Science"
        },
        {
            date: "2022 - Present",
            heading: "Computer & Science - Prague City University",
            description: "Ongoing Bachelor's degree in Computer Science"
        }
    ]
    const experienceData = [
        {
            date: "2023 - Present",
            heading: "Full-Stack - Wraith.co",
            description: "Ongoing Full-Stack Developer"
        },
        {
            date: "2023 - Present",
            heading: "Full-Stack - Wraith.co",
            description: "Ongoing Full-Stack Developer"
        }
    ]
    return (
        <div>
            <ExperienceHeading/>
            <div className={styles.table_of_columns}>
            <TableColumn data={educationData} heading={"Education"}/>
                <TableColumn data={experienceData} heading={"Experience"}/>
            </div>
        </div>
    );
};

export default Experience;