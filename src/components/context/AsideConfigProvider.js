import React, { useState, useContext, createContext } from "react";

export const AsideConfig = createContext();

const AsideConfigProvider = (props) => {
  const [asideConfig, setAsideConfig] = useState({
    asideOpen: false,
    asideOrientation: true,
    asidePinned: false,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  return (
    <AsideConfig.Provider value={{ asideConfig, setAsideConfig }}>
      {props.children}
    </AsideConfig.Provider>
  );
};

export default AsideConfigProvider;
