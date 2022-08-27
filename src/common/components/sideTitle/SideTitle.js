import React from 'react';
import styles from './SideTitle.module.scss'


export const SideTitle = (props) => {
    return (

        <div className={styles.sideColumn}>
            <h2>
                <span className={styles.baffleText}>
                    <span className={styles.baffleSpan}>{props.title}</span>
                </span>
            </h2>
        </div>
    )

}