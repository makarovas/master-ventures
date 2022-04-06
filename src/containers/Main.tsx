import React, { FC } from "react";
import { useMain } from "hooks/useMain";

import { MainView } from "view/MainView";
import { BallotsItemType, NomineeType } from "hooks/useFetchBallots/types";

type MainProps = {
  ballots: BallotsItemType[];
  isLoadingBallot: boolean;
  ballotsError: null;
  hasBallots: boolean;
  onSelectNomineeCategory: (
    categoryId: string,
    categoryTitle: string
  ) => (nominee: NomineeType) => void;
  onSubmitVote: () => void;
};
const Main: FC = () => {
  const controller = useMain();
  return <MainView {...controller} />;
};

export { Main };
