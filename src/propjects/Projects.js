import React from 'react';
import styles from './Projects.module.css'
import stylesContainer from "../common/styles/Container.module.css"
import {Project} from "./project/Project";

const Projects = () => {
    return (
        <div className={styles.projectBlock}>
            <div className={`${stylesContainer.container} ${styles.projectContainer}`}>
                <h2 className={styles.projectsTitle}>Projects</h2>
                <div className={styles.projects}>
                    <Project projectTitle={"Social Network"}
                             projectDescription={"Architecto cupiditate debitis dignissimos ea, exercitationem expedita iusto odio quaerat sequi voluptates? Exercitationem, possimus."}/>
                    <Project projectTitle={"Todolist"}
                             projectDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi excepturi facere nostrum quam quisquam vel."}/>
                </div>
            </div>

        </div>
    );
};

export default Projects;