import React from 'react';
import styles from "./Project.module.scss"
import {Button} from "../../common/components/button/Button";

export const Project = (props) => {
    return (
        <div className={styles.project}>
            <div style={props.style} className={styles.projectPic}>
                <Button buttonTitle={'Watch'}/>
            </div>
            <div className={styles.projectContent}>
                <h4 className={styles.projectTitle}>{props.projectTitle}</h4>
                <span className={styles.projectDesc}>{props.projectDescription}</span>
            </div>
        </div>
    );
};

