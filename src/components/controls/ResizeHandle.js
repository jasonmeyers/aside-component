import React from "react";
import styled from "styled-components";

const ResizeHandler = styled.div`
  position: absolute;
  top: 50%;
  left: -6px;
  width: 10px;
  height: 50px;
  background-color: #99c9e9;
  cursor: col-resize;
`;

function ResizeHandle({ id }) {
  return <ResizeHandler id={id} />;
}

export default ResizeHandle;
