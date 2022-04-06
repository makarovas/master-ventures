import React, { FC } from "react";

import styles from "../../../styles/Buttons.module.css";
import { SubmitButtonProps } from "./types";

const SubmitButton: FC<SubmitButtonProps> = (props) => (
  <div className={styles.submitButtonContainer}>
    <button type="button" className={styles.submitButton} {...props}>
      {props.children}
    </button>
  </div>
);

export { SubmitButton };
