import React, { FC } from "react";

import { useModal } from "hooks/useModal";
import { BaseModalProps } from "./types";

import styles from "../../../styles/Modals.module.css";

const BaseModal: FC<BaseModalProps> = ({ isOpened, onDismiss, children }) => {
  useModal({ isOpened });

  return isOpened ? (
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
