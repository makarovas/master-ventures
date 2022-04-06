import React, { FC } from "react";

import { Category } from "components/Category";
import { SubmitButton } from "components/Buttons";
import { BaseModal, ModalBody, ModalHeader } from "components/Modals";
import { NomineeCard } from "components/NomineeCard";
import { Head } from "components/Head";

import { useMain } from "hooks/useMain";
import { SELECTION_STATUS } from "utils/constants/statuses";

import styles from "../../styles/Main.module.css";

const MainView: FC = () => {
  const controller = useMain();

  return (
    <>
      <Head />
      <main>
        <h2 className={styles.pageTitle}>AWARDS 2021</h2>
        <div className={styles.categoriesContainer}>
          {controller.isLoadingBallot ? (
            <div className={styles.textCenter}>Loading Ballots...</div>
          ) : controller.ballotsError ? (
            <div className={styles.textCenter}>
              An Error: {JSON.stringify(controller.ballotsError)}
            </div>
          ) : controller.hasBallots ? (
            controller.ballots.map((ballot) => (
              <Category
                key={ballot.id}
                ballot={ballot}
                onSelectNominee={controller.onSelectNomineeCategory(
                  ballot.id,
                  ballot.title
                )}
                selectedNomineeCategory={controller.selectedNomineeData.find(
                  (item) => item.categoryId === ballot.id
                )}
              />
            ))
          ) : (
            <div className={styles.textCenter}>No ballots found</div>
          )}
        </div>
        <SubmitButton
          disabled={!controller.hasSelectedNominees}
          title={
            controller.hasSelectedNominees
              ? "Click to submit your vote"
              : "Please select at least one nominee"
          }
          onClick={controller.onSubmitVote}
        >
          {controller.hasSelectedNominees
            ? SELECTION_STATUS.SUBMIT_BALLOT
            : SELECTION_STATUS.NO_SELECTION}
        </SubmitButton>
        <BaseModal
          isOpen={controller.isModalOpen}
          onDismiss={controller.onCloseModal}
        >
          <ModalHeader modalTitle="Voting Successful!" />
          <ModalBody>
            <div>
              <h3 className={styles.yourVoteTitle}>Your Votes</h3>
              {controller.selectedNomineeData.map((item) => (
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
    </>
  );
};

export { MainView };
