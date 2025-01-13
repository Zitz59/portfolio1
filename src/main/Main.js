import React from "react";
import styles from "./Main.module.scss"
import profileImg from '../assets/images/profilePhoto.jpg'

export const Main = () => {

    const profilePhoto = {
        backgroundImage: `url(${profileImg})`,
    }

    return (
        <section id="home">
            <div className={styles.mainBlock}>
                <div className={styles.container}>
                    <div className={styles.mainDesc}>
                        <span>Hello</span>
                        <h1>I'm Aleksandr Zaitsev</h1>
                        <p>A Frontend Developer</p>
                    </div>
                    <div style={profilePhoto} className={styles.mainPhoto}>
                    </div>
                </div>
            </div>
        </section>
    )
}