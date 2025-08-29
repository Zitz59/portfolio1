import {ReactComponent as instagram} from '../assets/icons/instagram.svg';
import {ReactComponent as github} from '../assets/icons/github.svg';
import {ReactComponent as linkedin} from '../assets/icons/linkedin.svg';

/**
 * @typedef {Object} SocialLink
 * @property {'instagram'|'linkedin'|'github'} key
 * @property {string} label
 * @property {string} href
 * @property {string} icon
 */

/** @type {SocialLink[]} */
export const SOCIAL_LINKS = [
    { key: 'instagram', label: 'Instagram', href: 'https://instagram.com/zitz59', Icon: instagram },
    { key: 'linkedin',  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/aleksandr-zaitsev-322354235/', Icon: linkedin },
    { key: 'github',    label: 'GitHub',    href: 'https://github.com/Zitz59', Icon: github },
];