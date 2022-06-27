import React from 'react';
import styles from "./Contacts.module.css"
import stylesContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <h3 className={styles.contactsTitle}>Contacts</h3>

                    <form action="" className={styles.contactsForm}>
                        <ul className={styles.formOuter}>
                            <li>
                                <label htmlFor={"name"}>Name</label>
                                <input type="text" id={"name"}/>
                            </li>
                            <li>
                                <label htmlFor={"e-mail"}>E-Mail</label>
                                <input type="text" id={"e-mail"}/>
                            </li>
                            <li><label htmlFor={"message"}></label>
                                <textarea className={styles.textArea} name="message" id={"message"} ></textarea>
                            </li>
                        </ul>


                    </form>
                <button className={styles.contactsButton}>Send</button>
            </div>

        </div>
    );
};

