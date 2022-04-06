import React, { FC } from "react";
import Image from "next/image";
import { NomineeType } from "hooks/useFetchBallots/types";

import styles from "../../../styles/Main.module.css";

type NomineeCardProps = {
  nominee: NomineeType;
  onSelectNominee?: () => void;
  isSelected?: boolean;
};

const NomineeCard: FC<NomineeCardProps> = ({
  isSelected,
  nominee,
  onSelectNominee,
}) => (
  <div
    className={`${styles.nomineeCard} ${
      isSelected ? styles.nomineeCardSelected : ""
    }`}
  >
    <h4 className={styles.nomineeCardTitle}>{nominee.title}</h4>
    <div className={styles.nomineeCardImageContainer}>
      <Image
        alt="Nominee"
        src={nominee.photoUrL}
        height="100px"
        width="100px"
        className={styles.nomineeCardImage}
      />
    </div>
    {!!onSelectNominee && (
      <div className={styles.nomineeCardButtonContainer}>
        <button
          type="button"
          className={styles.nomineeCardButton}
          onClick={onSelectNominee}
        >
          Select
        </button>
      </div>
    )}
  </div>
);

export { NomineeCard };
