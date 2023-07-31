import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styles from "../contact/Contact.module.css"
import Footer from "../footer/Footer";
import Dropdown from "../dropdown_menu/Dropdown";

const Contact = () => {

    const options = [
        { id: 1, name: 'Χρήστης' },
        { id: 2, name: 'Επιχείρηση' },
        { id: 3, name: 'Άλλο' },
    ];


    return(
        <div className={styles.contactPage}>
            <h3>Επικοινωνήστε μαζί μας!</h3>
            <p className={styles.paraContact}>Σε περίπτωση που θέλετε να επικοινωνήσετε μαζί μας 
                για οποιαδήποτε πληροφορία σχετικά με την εφαρμογή
                το μόνο που έχετε να κάνετε είναι να συμπληρώσετε τη φόρμα.
            </p>
            <form className={styles.contactForm}>
                <div className={styles.contactInputs}>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Κινητό" />
                </div>
                <div className={styles.contactInputs}>
                    <input type="text" placeholder="Όνομα" />
                    <input type="text" placeholder="Επώνυμο" />
                </div>
                <div className={styles.contactInputs}>
                    <label className={styles.labelContact}>Τύπος χρήστη:</label>
                    <Dropdown options={options} prompt="Επιλέξτε" label="name" />
                </div>
                <div className={styles.contactInputs}>
                    <textarea className={styles.textArea} placeholder="Σχόλια"/>
                </div>
                <button className={styles.sendButton}>
                    Αποστολή Μηνύματος
                    <FontAwesomeIcon className={styles.iconSend} icon={faPaperPlane} />
                </button>
            </form>
            <Footer />
        </div>
        
    )
}

export default Contact;