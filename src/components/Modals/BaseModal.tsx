import React, { FC } from "react";

import { useModal } from "hooks/useModal";
import { BaseModalProps } from "./types";

import styles from "../../../styles/Modals.module.css";

const BaseModal: FC<BaseModalProps> = ({ isOpen, onDismiss, children }) => {
  useModal({ isOpen });

  return isOpen ? (
    <div className={styles.baseModalWrapper}>
      <div className={styles.baseModalContainer}>
        {!!onDismiss && (
          <div className={styles.dismissModalButtonContainer}>
            <button
              type="button"
              onClick={onDismiss}
              className={styles.dismissModalButton}
            >
              Close
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  ) : null;
};

export { BaseModal };
