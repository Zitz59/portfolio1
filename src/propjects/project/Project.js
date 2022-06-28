import React from 'react';
import styles from "./Project.module.css"

export const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.projectPic}>
                <button className={styles.projectButton}>Watch</button>
            </div>
            <h4 className={styles.projectTitle}>{props.projectTitle}</h4>
            <span className={styles.projectDesc}>{props.projectDescription}</span>
        </div>
    );
};

