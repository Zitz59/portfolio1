import React from "react";
import styles from "./Skills.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.skillsTitle}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title = {"JS"} description={ "Ad consectetur cumque cupiditate deleniti est et harum id magni placeat suscipit tempora, voluptatum."}/>
                    <Skill title = {"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta esse ipsa magni nostrum possimus voluptatum?"}/>
                    <Skill title = {"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                </div>

            </div>

        </div>
    )
}