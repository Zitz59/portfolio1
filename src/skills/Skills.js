import React from 'react';
import styles from './Skills.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import csSIc from '../assets/images/cssIcon.png'
import htmlIc from '../assets/images/htmlIcon.png'
import reactIc from '../assets/images/react.png'
import jsIc from '../assets/images/jsIcon.png'
import tsIc from '../assets/icons/typescript-logo-svgrepo-com.svg'

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
    const tsIcon = {
        backgroundImage: `url(${tsIc}`
    }

    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={styles.skills}>
                    <Skill style={htmlIcon}
                           title={'HTML'}
                           description={'Lorem ipsum dolor sit amet, deleniti est et harum consectetur adipisicing elit.'}
                    />
                    <Skill style={jsIcon}
                           title={'JS'}
                           description={'Ad consectetur cumque cupiditate  id magni placeat suscipit tempora, voluptatum.'}
                    />
                    <Skill style={csSIcon}
                           title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta esse ipsa magni nostrum possimus voluptatum?'}
                    />
                    <Skill style={reactIcon}
                           title={'REACT'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />
                    <Skill style={tsIcon}
                           title={'TYPESCRIPT'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />
                </div>

            </div>

        </div>
    )
}