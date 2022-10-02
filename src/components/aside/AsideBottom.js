import * as React from "react";
import styled from "styled-components";
import AsideControls from "../controls/AsideControls";
import { AsideConfig } from "../context/AsideConfigProvider";

const InnerDivHover = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  &:hover {
    &:before {
      position: absolute;
      top: -25px;
      left: 50%;
      transform: rotate(90deg);
      content: "";
      background: url("/assets/icons/handle.svg") no-repeat;
      padding: 2px;
      height: 48px;
      width: 10px;
    }
  }
`;

const AsideBottom = (props) => {
  const { getRef, x, y, angle, width, height } = props;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        bottom: 0,
        width: width,
        height: height,
        minHeight: "25%",
        maxHeight: "75%",
        transform: `rotate(${angle}deg)`,
        borderTop: "3px solid #99c9e9",
        backgroundColor: "#efefef",
        boxSizing: "border-box",
      }}
      ref={getRef}
    >
      <InnerDivHover>
        <AsideControls title="Aside Bottom" />
        <ul>
          <li>left: {x}</li>
          <li>top: {y}</li>
          <li>width: {width}</li>
          <li>height: {height}</li>
        </ul>
      </InnerDivHover>
    </div>
  );
};

AsideBottom.defaultProps = {
  x: 0,
  y: 0,
  width: "33vw",
  height: "100%",
  angle: 0,
};

export default AsideBottom;
