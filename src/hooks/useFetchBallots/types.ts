export type NomineeType = {
  id: string;
  title: string;
  photoUrL: string;
};

export type BallotsItemType = {
  id: string;
  title: string;
  items?: NomineeType[];
};

export type BallotsType = {
  items?: BallotsItemType[];
};
