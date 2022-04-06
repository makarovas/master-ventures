import React, { FC } from "react";
import { NomineeCard } from "components/NomineeCard";

import styles from "../../../styles/Main.module.css";
import { CategoryProps } from "./types";

const Category: FC<CategoryProps> = ({
  ballot,
  onSelectNominee,
  selectedNomineeCategory,
}) => (
  <section className={styles.categoryContainer}>
    <div className={styles.categoryTitleContainer}>
      <h3 className={styles.categoryTitle}>{ballot.title}</h3>
    </div>

    <div className={styles.categoryContent}>
      {ballot.items?.map((nominee) => (
        <div className={styles.nomineeCardContainer} key={nominee.id}>
          <NomineeCard
            nominee={nominee}
            onSelectNominee={() => onSelectNominee(nominee)}
            isSelected={selectedNomineeCategory?.nominee.id === nominee.id}
          />
        </div>
      ))}
    </div>
  </section>
);

export { Category };
