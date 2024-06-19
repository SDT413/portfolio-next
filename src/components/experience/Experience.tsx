import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
    return (
        <div>
            <div className={styles.heading}>
                My Journey
            </div>
            <div className={styles.table_of_sections}>
                <div className={styles.section_heading}>
                    Education
                </div>
                <div className={styles.section}>
                    <div className={styles.section_heading}>
                        Bachelor of Technology
                    </div>
                    <div className={styles.section_content}>
                        I am currently pursuing my B.Tech in Computer Science and Engineering from the Indian Institute of Information Technology, Una.
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Experience;