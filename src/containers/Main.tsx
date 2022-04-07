import React, { FC } from "react";
import { useMain } from "hooks/useMain";
import { MainView } from "view/MainView";

const Main: FC = () => {
  const props = useMain();
  return <MainView {...props} />;
};

export { Main };
