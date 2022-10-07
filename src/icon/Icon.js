import React from 'react';
import styles from "./Icon.module.scss"


export const Icon = (props) => {
    return (
        <div style={props.style} className={styles.icon}></div>
    );
};

