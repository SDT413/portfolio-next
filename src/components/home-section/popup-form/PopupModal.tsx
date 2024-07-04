import React, {FC} from 'react';
import styles from "./PopupModal.module.css";

interface PopupModalProps {
    children: React.ReactNode;
}

const PopupModal: FC<PopupModalProps> = ({children}) => {
    return (
        <div className={styles.popupModal}>
            {children}
        </div>
    );
};

export default PopupModal;