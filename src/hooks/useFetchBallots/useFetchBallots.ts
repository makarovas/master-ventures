import { useCallback, useState } from "react";
import { ERRORS_STATUS, BALLOTS_URL } from "utils/constants";
import { FETCH_DATA_STATUSES } from "utils/constants/statuses";
import { BallotsType, BallotsItemType } from "./types";

const useFetchBallots = () => {
  const [ballots, setBallots] = useState<BallotsItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBallots = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(BALLOTS_URL);
      if (Object.values(ERRORS_STATUS).includes(response.status))
        throw response;
      const data = (await response.json()) as BallotsType;
      setBallots(data?.items || []);

      return {
        message: FETCH_DATA_STATUSES.Success,
        data,
      };
    } catch (error) {
      setError(error as any);

      return {
        message: FETCH_DATA_STATUSES.Error,
        error,
      };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const hasBallots = ballots.length !== 0;

  return {
    ballots,
    hasBallots,
    getBallots,
    ballotsError: error,
    isLoadingBallot: isLoading,
  };
};

export { useFetchBallots };
