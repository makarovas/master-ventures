import React, { ButtonHTMLAttributes, FC } from "react";

import styles from "../../../styles/Buttons.module.css";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton: FC<SubmitButtonProps> = (props) => (
  <div className={styles.submitButtonContainer}>
    <button type="button" className={styles.submitButton} {...props}>
      {props.children}
    </button>
  </div>
);

export { SubmitButton };
