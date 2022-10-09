import React from "react";
import styles from "./Main.module.scss"

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.mainDesc}>
                    <span>Hello</span>
                    <h1>I'm Alexander Zaytsev</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={styles.mainPhoto}></div>
            </div>
        </div>
    )
}