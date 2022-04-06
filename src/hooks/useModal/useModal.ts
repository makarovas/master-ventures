import { useEffect, useRef } from "react";
import { SHOWN_CONDITION_STATUS } from "utils/constants/statuses";
import { UseModalProps } from "./types";

const useModal = ({ isOpened }: UseModalProps) => {
  const documentRef = useRef<HTMLBodyElement>();
  if (documentRef.current) {
    let overflow = documentRef.current.style.overflow;
    if (isOpened) {
      overflow = SHOWN_CONDITION_STATUS.HIDDEN;
    } else {
      overflow = SHOWN_CONDITION_STATUS.AUTO;
    }
  }

  useEffect(() => {
    const bodyElement = document.querySelector("body");

    if (bodyElement) {
      documentRef.current = bodyElement;
    }
  }, []);

  return {
    documentRef,
  };
};

export { useModal };
