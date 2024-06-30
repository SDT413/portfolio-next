import React, {FC} from 'react';
import styles from "./ContactForm.module.css";

interface ContactFormProps {
    setShowHireForm: (value: boolean) => void;
}
const ContactForm:FC<ContactFormProps> = ({setShowHireForm}) => {
    const email = "kirillmarchenko413@gmail.com";
    const phone = "+420 792 448 178";
    const additionalPhone = "+380 98 364 55 64";
    return (
        <form className={styles.form}>
            <div className={styles.form_header}>Contact me</div>
            <div className={styles.form_body}>
                <div className={styles.form_block}>
                    <span className={styles.form_label}>Email:</span>
                    <span className={styles.form_value}>
                        {email}
                    </span>
                </div>
                <div className={styles.form_block}>
                    <span className={styles.form_label}>Phone Number:</span>
                    <span className={styles.form_value}>
                        {phone}
                    </span>
                </div>
                <div className={styles.form_block}>
                    <span className={styles.form_label}>Additional Phone Number:</span>
                    <span className={styles.form_value}>
                        {additionalPhone}
                    </span>
                </div>
                </div>
            <div className={styles.form_footer}>
                <div className={styles.form_buttons}>
                    <button className={styles.form_button} onClick={(event) => {
                        event.preventDefault();
                        setShowHireForm(false)
                    }}>Close
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;