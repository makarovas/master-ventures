import { useEffect, useState } from "react";
import { useFetchBallots } from "hooks/useFetchBallots";
import { useRevelation } from "hooks/useRevelation";
import { NomineeType } from "hooks/useFetchBallots/types";

export type SelectedNomineeType = {
  categoryId: string;
  categoryTitle: string;
  nominee: NomineeType;
};

const useMain = () => {
  const [selectedNomineeData, setSelectedNomineeData] = useState<
    SelectedNomineeType[]
  >([]);

  const { ballots, isLoadingBallot, ballotsError, hasBallots, getBallots } =
    useFetchBallots();

  const {
    isOpen: isModalOpen,
    onClose: onCloseModal,
    onOpen: onOpenModal,
  } = useRevelation({});

  const onSelectNomineeCategory =
    (categoryId: string, categoryTitle: string) => (nominee: NomineeType) => {
      const nomineeData: SelectedNomineeType = {
        categoryId,
        categoryTitle,
        nominee,
      };

      const filteredSelections = selectedNomineeData.filter(
        (item) => item.categoryId !== categoryId
      );

      setSelectedNomineeData([...filteredSelections, nomineeData]);
    };

  const onSubmitVote = () => {
    onOpenModal();
  };

  const hasSelectedNominees = selectedNomineeData.length !== 0;

  useEffect(() => {
    getBallots();
  }, [getBallots]);

  return {
    ballots,
    isLoadingBallot,
    ballotsError,
    hasBallots,
    onSelectNomineeCategory,
    hasSelectedNominees,
    selectedNomineeData,
    isModalOpen,
    onCloseModal,
    onSubmitVote,
  };
};
export { useMain };
