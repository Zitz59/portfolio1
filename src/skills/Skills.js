import React from 'react';
import styles from './Skills.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import csSIc from '../assets/icons/Css.svg'
import htmlIc from '../assets/icons/htmlIcon.svg'
import reactIc from '../assets/icons/react.svg'
import jsIc from '../assets/icons/jsIcon.svg'

export const Skills = () => {

    const csSIcon = {
        backgroundImage: `url(${csSIc})`
    }
    const htmlIcon = {
        backgroundImage: `url(${htmlIc})`
    }
    const reactIcon = {
        backgroundImage: `url(${reactIc})`
    }
    const jsIcon = {
        backgroundImage: `url(${jsIc})`
    }

    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'HTML'}
                           description={'Lorem ipsum dolor sit amet, deleniti est et harum consectetur adipisicing elit.'}
                           style={htmlIcon}/>
                    <Skill title={'JS'}
                           description={'Ad consectetur cumque cupiditate  id magni placeat suscipit tempora, voluptatum.'}
                           style={csSIcon}/>
                    <Skill title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta esse ipsa magni nostrum possimus voluptatum?'}
                           style={jsIcon}/>
                    <Skill title={'REACT'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                           style={reactIcon}/>
                </div>

            </div>

        </div>
    )
}