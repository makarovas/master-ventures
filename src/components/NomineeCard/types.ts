import { NomineeType } from "hooks/useFetchBallots/types";

export type NomineeCardProps = {
  nominee: NomineeType;
  onSelectNominee?: () => void;
  isSelected?: boolean;
};
