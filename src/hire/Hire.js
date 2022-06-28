import React from 'react';
import styles from "./Hire.module.css"
import stylesContainer from '../common/styles/Container.module.css'

export const Hire = () => {
    return (
        <div className={styles.hireBlock}>
            <div className={`${stylesContainer.container} ${styles.hireContainer}`}>
                <h3 className={styles.hireTitle}>Looking into remote work options or relocate</h3>
                <button className={styles.hireButton}>Hire me</button>
            </div>
        </div>
    );
};

