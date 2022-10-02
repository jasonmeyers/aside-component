import React, { createContext } from "react";
// https://medium.com/@guptagaruda/react-hooks-understanding-component-re-renders-9708ddee9928
const defaultContext = {
  asideOpen: true,
  asideOrientation: true, // true = right side, false = bottom side
  asidePinned: false,
  setContext: () => {},
};

export const AsideContext = createContext(defaultContext);

const AsideContextProvider = (props) => {
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};
