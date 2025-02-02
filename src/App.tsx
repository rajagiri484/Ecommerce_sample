import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import MainNavigation from "./navigation/MainNavigation";

import { store } from "./store";

export function App(): ReactElement {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
