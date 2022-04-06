import { ButtonHTMLAttributes, FC } from "react";

import { BallotsItemType, NomineeType } from "hooks/useFetchBallots/types";
import { SelectedNomineeType } from "hooks/useMain/useMain";

export type CategoryProps = {
  ballot: BallotsItemType;
  onSelectNominee: (nominee: NomineeType) => void;
  selectedNomineeCategory?: SelectedNomineeType;
};
