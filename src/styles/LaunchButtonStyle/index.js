import styled from "styled-components";

export const LaunchButtonStyle = styled.button`
  margin-top: 30px;
  width: 100px;
  height: 50px;
  background-color: ${(props) => (props.handleBtnClick ? "grey" : "green")};
  color: white;
  margin-left: 900px;
  border-style: outset;
  border-color: ${(props) => (props.handleBtnClick ? "grey" : "green")};
  pointer-events: ${(props) => (props.handleBtnClick ? "none" : "auto")};
  border-width: 7px;
`;
