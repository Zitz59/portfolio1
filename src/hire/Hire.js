import React from 'react';
import styles from "./Hire.module.scss"
import stylesContainer from '../common/styles/Container.module.css'
import {Button} from "../common/components/button/Button";
import {Button1} from '../common/components/button/Button1';

export const Hire = () => {
    return (
        <div className={styles.hireBlock}>
            <div className={`${stylesContainer.container} ${styles.hireContainer}`}>
                <h3 className={styles.hireTitle}>Looking into remote work options or relocate</h3>
                {/*<Button buttonTitle={'Hire me'}/>*/}
                <Button1 buttonTitle={'HIRE ME'}/>
            </div>
        </div>
    );
};

