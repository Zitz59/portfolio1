import React from 'react';
import styles from "./Contacts.module.css"
import stylesContainer from '../common/styles/Container.module.css'
import {Button} from "../common/components/button/Button";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <h3 className={styles.contactsTitle}>Contacts</h3>

                <form action="" className={styles.contactsForm}>
                    <label htmlFor={"name"}>Name</label>
                    <input type="text" id={"name"}/>
                    <label htmlFor={"e-mail"}>E-Mail</label>
                    <input type="text" id={"e-mail"}/>
                    <label htmlFor={"message"}></label>
                    <textarea className={styles.textArea} name="message" id={"message"}>Message</textarea>
                </form>
                <Button type={"submit"} buttonTitle={'Send'}/>
            </div>

        </div>
    );
};

