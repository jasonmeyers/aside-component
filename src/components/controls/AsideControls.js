import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AsideConfig } from "../context/AsideConfigProvider";
const ControlContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const AsideControlButton = styled.button`
  border: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  margin: 0;

  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
  img {
    width: 36px;
  }
`;

const AsideControlContainer = styled.div`
  display: flex;
`;

const AsideControls = ({ title }) => {
  const { asideConfig, setAsideConfig } = useContext(AsideConfig);

  const [asideOpen, setAsideOpen] = useState(true);
  const [asideLocation, setAsideLocation] = useState(false);
  const [asidePinned, setAsidePinned] = useState(false);

  const pinAside = () => {
    let tempValue = asideConfig.asidePinned;
    setAsideConfig({ ...asideConfig, asidePinned: !tempValue });
    setAsidePinned(!asidePinned);
  };

  const closePanel = () => {
    console.log("close panel");
    setAsideConfig({ ...asideConfig, asideOpen: !asideConfig.asideOpen });
  };

  const updateAsideOrientation = () => {
    setAsideConfig({
      ...asideConfig,
      asideOrientation: !asideConfig.asideOrientation,
    });
  };

  return (
    <ControlContainer>
      <div>{title}</div>
      {/* asideOpen:{JSON.stringify(asideConfig.asideOpen)}
      <br />
      asideOrientation:{JSON.stringify(asideConfig.asideOrientation)}
      <br />
      asidePinned:{JSON.stringify(asideConfig.asidePinned)} */}
      <AsideControlContainer>
        <AsideControlButton tabIndex="1" onClick={updateAsideOrientation}>
          {asideLocation && (
            <img src="/assets/icons/right.svg" alt="Move to Right Side" />
          )}
          {!asideLocation && <img src="/assets/icons/bottom.svg" />}
        </AsideControlButton>

        <AsideControlButton tabIndex="2" onClick={pinAside}>
          {asidePinned && (
            <img src="/assets/icons/pinned.svg" alt="Click to UnPin" />
          )}
          {!asidePinned && (
            <img src="/assets/icons/unpinned.svg" alt="Click to Pin" />
          )}
        </AsideControlButton>

        <AsideControlButton
          onClick={() => {
            let currentUrl = window.location.href;
            window.open(currentUrl, "_blank");
          }}
          tabIndex="3"
        >
          <img src="/assets/icons/new-tab.svg" alt="Close Aside Panel" />
        </AsideControlButton>

        <AsideControlButton tabIndex="4" onClick={closePanel}>
          <img src="/assets/icons/close.svg" alt="Close Aside Panel" />
        </AsideControlButton>
      </AsideControlContainer>
    </ControlContainer>
  );
};

export default AsideControls;
