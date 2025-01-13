import React from 'react';
import styles from './Nav.module.css'

//TODO 2---добавить свертывание меню в "гармошку" при уменьшении страницы в ширину (scss)

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a className={styles.navLink} href="#home">Home</a>
            <a className={styles.navLink} href="#skills">Skills</a>
            <a className={styles.navLink} href="#projects">Projects</a>
            <a className={styles.navLink} href="#contacts">Contacts</a>
        </div>
    )
}