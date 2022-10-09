import React from 'react';
import styles from './Projects.module.scss'
import stylesContainer from '../common/styles/Container.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import snetImg from '../assets/images/socialNtwrk.png'
import countImg from '../assets/images/counter.png'

const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${snetImg})`
    };

    const counter = {
        backgroundImage: `url(${countImg})`
    };

    return (
        <div className={styles.projectBlock}>
            <div className={styles.row}>
                <div className={styles.sideColumn}>
                    <h2>
                        <span className={styles.baffleText}>
                            <span className={styles.baffleSpan}>Projects</span>
                        </span>
                    </h2>
                </div>
                <div className={`${stylesContainer.container} ${styles.projectContainer}`}>
                    <Title text={'Projects'}/>
                    <div className={styles.projects}>
                        <Project style={socialNetwork} projectTitle={"Social Network"}
                                 projectDescription={"Architecto cupiditate debitis dignissimos ea."}/>
                        <Project style={counter} projectTitle={"Counter"}
                                 projectDescription={"Lorem ipsum dolor sit amet."}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;