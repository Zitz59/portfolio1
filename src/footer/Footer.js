import React from 'react';
import styles from './Footer.module.scss';
import { SOCIAL_LINKS } from '../constants/socials';

const Footer = () => {
    return (
        <footer className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <h4 className={styles.footerTitle}>Alexandr Zaitsev</h4>
                <ul className={styles.iconsBlock}>
                    {SOCIAL_LINKS.map(({ key, href, label, Icon }) => (
                        <li key={key}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                title={label}
                                className={styles.iconLink}
                            >
                                <Icon className={styles.icon} />
                            </a>
                        </li>
                    ))}
                </ul>

                <h5>© 2025 All rights reserved</h5>
            </div>
        </footer>
    );
};

export default Footer;