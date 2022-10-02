import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AsideConfig } from "./context/AsideConfigProvider";

const NavBarDiv = styled.nav`
  background-color: #2a3d53;
  color: #fff;
  width: 8rem;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`;

const NavBar = (props) => {
  const { asideConfig, setAsideConfig } = useContext(AsideConfig);
  return (
    <NavBarDiv>
      <button
        onClick={() => {
          setAsideConfig({ ...asideConfig, asideOpen: !asideConfig.asideOpen });
        }}
      >
        toggle panel
      </button>
    </NavBarDiv>
  );
};

export default NavBar;
