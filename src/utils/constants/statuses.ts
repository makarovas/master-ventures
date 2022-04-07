export enum FETCH_DATA_STATUSES {
  Success = "Success",
  IsLoading = "IsLoading",
  Error = "Error",
}

export enum ERRORS_STATUS {
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500,
  Forbidden = 403,
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
