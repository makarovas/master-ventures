import { useState } from "react";
import { UseRevelationProps } from "./types";

const useRevelation = (props: UseRevelationProps) => {
  const [isOpen, setIsOpen] = useState(props.isOpened || false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  const onToggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

export { useRevelation };
