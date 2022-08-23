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

                    </div>
                </div>
                <div className={styles.mapColumn}>
                    <div className={styles.animatedFadeUpFast}>
                        {/*<Map/>*/}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25083.336724970333!2d22.383794103622293!3d40.07785855883377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135813ec20ecc251%3A0xe579def37a813f8c!2zzozOu8-FzrzPgM6_z4I!5e1!3m2!1sen!2sru!4v1661247409703!5m2!1sen!2sru"
                            width="100%" height="884"
                            frameBorder={'0'}
                        />
                    </div>
                </div>

            </div>
        </div>)
}


