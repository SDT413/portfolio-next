import React, { FC } from "react";
import styles from "./Contacts.module.css";
import EnvelopeSVG from "./assets/EnvelopeSVG";
import MapSVG from "./assets/MapSVG";

const Contacts: FC = ({}) => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts_content}>
        <div>
          <h2 className={styles.header}>Contact</h2>
          <h3 className={styles.sub_header}>
            If you want to contact me, use this information
          </h3>
        </div>
        <span className={styles.contact_info}>
          <div className={styles.contact_info_wrapper}>
            <span className={styles.contact_icon_wrapper}>
              <MapSVG className={styles.contact_icon} />
            </span>
            <h3 className={styles.contact_header}>Location</h3>
            <p className={styles.contact_paragraph}>Prague, Czech Republic</p>
          </div>
          <div className={styles.contact_info_wrapper}>
            <span className={styles.contact_icon_wrapper}>
              <EnvelopeSVG className={styles.contact_icon} />
            </span>
            <h3 className={styles.contact_header}>Mail</h3>
            <p className={styles.contact_paragraph}>kiril309274@gmail.com</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Contacts;
