import React, { FC, ReactNode } from "react";

import { getFC, MainViewProps } from "containers/types";
import { Category } from "components/Category";
import { SubmitButton } from "components/Buttons";
import { BaseModal, ModalBody, ModalHeader } from "components/Modals";
import { NomineeCard } from "components/NomineeCard";
import { Head } from "components/Head";
import { SELECTION_STATUS } from "utils/constants/statuses";

import styles from "../../styles/Main.module.css";

const MainView: getFC<MainViewProps> = ({
  ballots,
  ballotsError,
  selectedNomineeData,
  isLoadingBallot,
  hasBallots,
  hasSelectedNominees,
  isModalOpen,
  onSelectNomineeCategory,
  onSubmitVote,
  onCloseModal,
  children,
}) => {
  return (
    <div>
      <Head />
      <main>
        <h2 className={styles.pageTitle}>AWARDS 2021</h2>
        <div className={styles.categoriesContainer}>
          {isLoadingBallot ? (
            <div className={styles.textCenter}>Loading Ballots...</div>
          ) : ballotsError ? (
            <div className={styles.textCenter}>
              An Error: {JSON.stringify(ballotsError)}
            </div>
          ) : hasBallots ? (
            ballots.map((ballot) => (
              <Category
                key={ballot.id}
                ballot={ballot}
                onSelectNominee={onSelectNomineeCategory(
                  ballot.id,
                  ballot.title
                )}
                selectedNomineeCategory={selectedNomineeData.find(
                  (item) => item.categoryId === ballot.id
                )}
              />
            ))
          ) : (
            <div className={styles.textCenter}>No ballots found</div>
          )}
        </div>
        <SubmitButton
          disabled={!hasSelectedNominees}
          title={
            hasSelectedNominees
              ? "Click to submit your vote"
              : "Please select at least one nominee"
          }
          onClick={onSubmitVote}
        >
          {hasSelectedNominees
            ? SELECTION_STATUS.SUBMIT_BALLOT
            : SELECTION_STATUS.NO_SELECTION}
        </SubmitButton>
        <BaseModal isOpen={isModalOpen} onDismiss={onCloseModal}>
          <ModalHeader modalTitle="Voting Successful!" />
          <ModalBody>
            <div>
              <h3 className={styles.yourVoteTitle}>Your Votes</h3>
              {selectedNomineeData.map((item) => (
                <div key={item.categoryId}>
                  <h4 className={styles.categoryTitle}>
                    In {item.categoryTitle}
                  </h4>
                  <NomineeCard nominee={item.nominee} />
                </div>
              ))}
            </div>
          </ModalBody>
        </BaseModal>
      </main>
    </div>
  );
};

export { MainView };
