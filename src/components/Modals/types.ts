export type BaseModalProps = {
  isOpened: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
};

export type BaseModalHeaderProps = {
  modalTitle?: string;
};
