import * as React from "react";
import styled from "styled-components";
import AsideControls from "../controls/AsideControls";

const InnerDivHover = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  &:hover {
    &:before {
      position: absolute;
      top: 50%;
      left: -5px;
      content: "";
      background: url("/assets/icons/handle.svg") no-repeat;
      padding: 5px;
      height: 48px;
      width: 10px;
    }
  }
`;

const AsideRight = ({ getRef, x, y, angle, width, height }) => {
  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        top: y,
        width: width,
        height: height,
        minWidth: "25%",
        maxWidth: "75%",
        transform: `rotate(${angle}deg)`,
        borderLeft: "3px solid #99c9e9",
        backgroundColor: "#efefef",
        boxSizing: "border-box",
      }}
      ref={getRef}
    >
      <InnerDivHover>
        <AsideControls title="Aside Right" />
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

AsideRight.defaultProps = {
  x: 0,
  y: 0,
  width: "33vw",
  height: "100%",
  angle: 0,
};

export default AsideRight;
