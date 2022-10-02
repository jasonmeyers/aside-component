import React from "react";
import { useState, useContext } from "react";
import AsideRight from "./AsideRight";
import AsideBottom from "./AsideBottom";
import reactable from "reactablejs";
import { AsideConfig } from "../context/AsideConfigProvider";
const ResizableFromRight = reactable(AsideRight);
const ResizableFromBottom = reactable(AsideBottom);

const AsideContainer = () => {
  const { asideConfig, setAsideConfig } = useContext(AsideConfig);

  const [rightCoordinate, setRightCoordinate] = useState({
    x: 0,
    y: 0,
    width: "33%",
    height: "100vh",
  });
  const [bottomCoordinate, setBottomCoordinate] = useState({
    x: 0,
    y: 0,
    height: "33%",
    width: "100%",
  });

  return (
    <>
      {/* asideOpen:{JSON.stringify(asideConfig.asideOpen)}
      <br />
      asideOrientation:{JSON.stringify(asideConfig.asideOrientation)}
      <br />
      asidePinned:{JSON.stringify(asideConfig.asidePinned)} */}
      {asideConfig.asideOpen && asideConfig.asideOrientation && (
        <ResizableFromRight
          resizable={{
            edges: { left: true, right: false, bottom: false, top: false },
          }}
          onResizeMove={(e) => {
            const { width, height } = e.rect;
            const { left, top } = e.deltaRect;
            setRightCoordinate((prev) => {
              return {
                x: left,
                y: prev.y + top,
                width,
                height,
              };
            });
          }}
          {...rightCoordinate}
        />
      )}
      {asideConfig.asideOpen && !asideConfig.asideOrientation && (
        <ResizableFromBottom
          resizable={{
            edges: { left: false, right: false, bottom: false, top: true },
          }}
          onResizeMove={(e) => {
            const { width, height } = e.rect;
            const { left, top } = e.deltaRect;
            setBottomCoordinate((prev) => {
              return {
                x: left + prev.x,
                y: prev.y + top,
                width,
                height,
              };
            });
          }}
          {...bottomCoordinate}
        />
      )}
    </>
  );
};

export default AsideContainer;
