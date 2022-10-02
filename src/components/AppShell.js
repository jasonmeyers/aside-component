import React from "react";
import styled from "styled-components";
import MainContent from "./MainContent";
import AsideContainer from "./aside/AsideContainer";
import { createContext, useState, useEffect } from "react";
import AsideConfigProvider from "./context/AsideConfigProvider";

const AppShellContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  overflow: auto;
`;

export const AsideConfig = createContext();

export const AppShell = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log(
        "the current browser window height :",
        window.innerHeight,
        ", and the width is: ",
        window.innerWidth
      );
    };
    window.addEventListener("resize", handleResize);
  });
  return (
    <AsideConfigProvider>
      <AppShellContainer>
        <MainContent />
        <AsideContainer />
      </AppShellContainer>
    </AsideConfigProvider>
  );
};
