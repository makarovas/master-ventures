import React, { ReactNode } from "react";
import { SelectedNomineeType, useMain } from "hooks/useMain";
import { BallotsItemType, NomineeType } from "hooks/useFetchBallots/types";

export type getFCProps<P> = (
  ...args: Parameters<React.FC<P>>
) => ReturnType<React.FC<P>> | ReturnType<React.FC<P>>[];

export type MainViewProps = {
  ballots: BallotsItemType[];
  ballotsError: null;
  selectedNomineeData: SelectedNomineeType[];
  isLoadingBallot: boolean;
  hasBallots: boolean;
  hasSelectedNominees: boolean;
  isModalOpen: boolean;
  onSelectNomineeCategory: (
    categoryId: string,
    categoryTitle: string
  ) => (nominee: NomineeType) => void;
  onSubmitVote: () => void;
  onCloseModal: () => void;
  children?: ReactNode;
};
