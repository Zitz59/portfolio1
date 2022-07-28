import React from 'react';
import styles from './Projects.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import snetImg from '../assets/images/socialNtwrk.png'
import countImg from '../assets/images/counter.png'

const Projects = (props) => {
    const socialNet = {
        backgroundImage:`url(${snetImg})`
    };

    const counter = {
        backgroundImage:`url(${countImg})`
    };

    return (
        <div className={styles.projectBlock}>
            <div className={`${stylesContainer.container} ${styles.projectContainer}`}>
                <Title text={'Projects'}/>
                <div className={styles.projects}>
                    <Project style = {socialNet} projectTitle={"Social Network"}
                             projectDescription={"Architecto cupiditate debitis dignissimos ea."}/>
                    <Project style={counter} projectTitle={"Counter"}
                             projectDescription={"Lorem ipsum dolor sit amet."}/>
                </div>
            </div>

        </div>
    );
};

export default Projects;