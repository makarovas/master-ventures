export type BaseModalProps = {
  isOpen: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
};

export type BaseModalHeaderProps = {
  modalTitle?: string;
};
