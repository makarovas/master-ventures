import React, { FC } from "react";

import styles from "../../../styles/Modals.module.css";

const ModalBody: FC = ({ children }) => {
  return <div className={styles.modalBody}>{children}</div>;
};

export { ModalBody };
