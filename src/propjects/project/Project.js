import React from 'react';
import styles from "./Project.module.css"

export const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.projectPic}>
                <button className={styles.projectButton}>смотреть</button>
            </div>
            <span>{props.projectTitle}</span>
            <p className={styles.projectDesc}>{props.projectDescription}</p>
        </div>
    );
};

