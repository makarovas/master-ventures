import React, { FC } from "react";
import { useMain } from "hooks/useMain";

import { MainView } from "view/MainView";

const Main: FC = () => {
  const controller = useMain();
  return <MainView {...controller} />;
};

export { Main };
