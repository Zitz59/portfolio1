import React from 'react';
import styles from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a className={styles.navLink} href="">Home</a>
            <a className={styles.navLink} href="">Skills</a>
            <a className={styles.navLink} href="">Projects</a>
            <a className={styles.navLink} href="">Contacts</a>
        </div>
    )
}