import React from 'react';
import styles from "./Footer.module.css"
import {Icon} from "../icon/Icon";


const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <h4 className={styles.footerTitle}>Alexander Zaytsev</h4>
                <div className={styles.iconsBlock}>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                </div>
                <h5> &copy; 2022 All rights reserved</h5>
            </div>

        </div>
    );
};

export default Footer;