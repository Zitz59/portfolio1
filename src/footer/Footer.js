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

    //TODO: 1 --- добавить анимацию при наведении мышки на логотипы
    //TODO: 2 --- добавить рабочие ссылки при клике на которые будет перекидывать на linkedin и github

    return (
        <div className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <h4 className={styles.footerTitle}>Alexandr Zaitsev</h4>
                <div className={styles.iconsBlock}>
                    <Icon style={instIcon}/>
                    <Icon style={gitIcon}/>
                    <Icon style={fbIcon}/>
                    <Icon style={lnIcon}/>
                </div>
                <h5> &copy; 2025 All rights reserved</h5>
            </div>
        </div>
    );
};

export default Footer;