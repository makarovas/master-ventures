import { NomineeType } from "hooks/useFetchBallots/types";

export type SelectedNomineeType = {
  categoryId: string;
  categoryTitle: string;
  nominee: NomineeType;
};
