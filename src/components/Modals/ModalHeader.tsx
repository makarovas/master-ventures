import React, { FC } from "react";
import { BaseModalHeaderProps } from "./types";

import styles from "../../../styles/Modals.module.css";

const ModalHeader: FC<BaseModalHeaderProps> = ({ modalTitle, children }) => {
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
