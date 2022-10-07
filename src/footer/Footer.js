import React from 'react';
import styles from './Footer.module.scss'
import {Icon} from '../icon/Icon';
import instIc from '../assets/icons/instagram.png'
import githubIc from '../assets/icons/github.png'
import fbIc from '../assets/icons/facebook.png'
import lnIc from '../assets/icons/linkedin.png'

const Footer = () => {
    const instIcon = {
        backgroundImage: `url(${instIc})`
    }
    const gitIcon = {
        backgroundImage: `url(${githubIc})`
    }
    const fbIcon = {
        backgroundImage: `url(${fbIc})`
    }
    const lnIcon = {
        backgroundImage: `url(${lnIc})`
    }

    return (
        <div className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <h4 className={styles.footerTitle}>Alexander Zaytsev</h4>
                <div className={styles.iconsBlock}>
                    <Icon style={instIcon}/>
                    <Icon style={gitIcon}/>
                    <Icon style={fbIcon}/>
                    <Icon style={lnIcon}/>
                </div>
                <h5> &copy; 2022 All rights reserved</h5>
            </div>
        </div>
    );
};

export default Footer;