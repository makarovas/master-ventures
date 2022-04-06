import React, { FC } from "react";

import styles from "../../../styles/Modals.module.css";

type BaseModalProps = {
  modalTitle?: string;
};

const ModalHeader: FC<BaseModalProps> = ({ modalTitle, children }) => {
  return (
    <div className={styles.modalHeader}>
      {modalTitle && (
        <div className={styles.modalHeaderTitle}>{modalTitle}</div>
      )}
      {children}
    </div>
  );
};

export { ModalHeader };
