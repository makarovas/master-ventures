import React, { FC } from "react";

import styles from "../../../styles/Modals.module.css";
import { useModal } from "hooks/useModal";

type BaseModalProps = {
  isOpen: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
};

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
