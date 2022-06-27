import React from "react";
import styles from "./Main.module.css"
import stylesContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.mainDesc}>
                    <span>Hello</span>
                    <h1>I'm Alexander Zaytsev</h1>
                    <span>Frontend Developer</span>
                </div>
                <div className={styles.mainPhoto}></div>
            </div>
        </div>
    )
}