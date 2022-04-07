export enum FETCH_DATA_STATUSES {
  SUCCESS = "Success",
  IS_LOADING = "IsLoading",
  ERROR = "Error",
}

export enum ERRORS_STATUS {
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  FORBIDDEN = 403,
}

export enum SELECTION_STATUS {
  SUBMIT_BALLOT = "Submit Ballot",
  NO_SELECTION = "No Selection",
}

export enum SHOWN_CONDITION_STATUS {
  HIDDEN = "hidden",
  AUTO = "auto",
}

export enum SHOW_EVENT_MESSAGE {
  CLICK = "Click to submit your vote",
  SELECT = "Please select at least one nominee",
}
