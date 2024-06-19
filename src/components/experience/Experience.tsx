import React from 'react';
import styles from './Experience.module.css';
import ExperienceHeading from "@/components/experience/experience-heading/ExperienceHeading";
import TableColumn from "@/components/experience/table_column/TableColumn";
import {useActions} from "@/hooks/useActions";

const Experience = () => {
    const {setActiveTab} = useActions();
    const cbRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab('experience');
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );
        if (cbRef.current) {
            observer.observe(cbRef.current);
        }
        return () => {
            if (cbRef.current) {
                observer.unobserve(cbRef.current);
            }
        };
    }, [cbRef]);
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
        <div id = "experience" ref={cbRef}>
            <ExperienceHeading/>
            <div className={styles.table_of_columns}>
                <TableColumn data={educationData} heading={"Education"}/>
                <TableColumn data={experienceData} heading={"Experience"}/>
            </div>
        </div>
    );
};

export default Experience;