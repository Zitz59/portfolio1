import React from 'react';
import styles from './Contacts.module.scss'
import {Button1} from '../common/components/button/Button1';

export const Contacts = () => {
    return (
        <div className={styles.contactFormWrapper}>
            <div className={styles.row}>
                <div className={styles.sideColumn}>
                    <h2>
                        <span className={styles.baffleText}>
                            <span className={styles.baffleSpan}>Contact</span>
                        </span>
                    </h2>
                </div>
                <div className={styles.formColumn}>
                    <div className={styles.animatedFadeInUp} style={{opacity: '1', height: 'auto'}}>
                        <div className={styles.formContainer}>
                            <div className={styles.lineText}>
                                <h4>Get in Touch</h4>
                                <div className={styles.animatedFadeUpFast} style={{opacity: '1', height: 'auto'}}>
                                    <div className={styles.formGroup}>
                                        <input className={styles.input} placeholder={'Name'} type="text"/>
                                    </div>
                                </div>
                                <div className={styles.animatedFadeUpFast} style={{opacity: '1', height: 'auto'}}>
                                    <div className={styles.formGroup}>
                                        <input className={styles.input} placeholder={'Email'} type="text"/>
                                    </div>
                                </div>
                                <div className={styles.animatedFadeUpFast} style={{opacity: '1', height: 'auto'}}>
                                    <div className={styles.formGroup}>
                                        <input className={styles.input} placeholder={'Phone'} type="text"/>
                                    </div>
                                </div>
                                <div className={styles.animatedFadeUpFast} style={{opacity: '1', height: 'auto'}}>
                                    <div className={styles.formGroup}>
                                        <textarea style={{width:'100%',height:'150px'}} className={styles.message} placeholder="Message"></textarea>
                                        <div/>
                                    </div>
                                </div>
                                <div className={styles.animatedFadeUpFast} style={{opacity: '1', height: 'auto'}}>
                                    {/*<Button buttonTitle={'Send Message'}/>*/}
                                    {/*<FormButton message={'Send Message'}/>*/}
                                    <Button1 buttonTitle={'SEND MESSAGE'}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mapColumn}>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}


