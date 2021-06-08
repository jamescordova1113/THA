import React from "react";
import { LaunchButtonStyle } from "../../styles";

const LaunchButton = ({ handleBtnClick, handleLaunchClicked }) => {
  return (
    <LaunchButtonStyle handleBtnClick={handleBtnClick} onClick={handleLaunchClicked}>
      Launch
    </LaunchButtonStyle>
  );
};

export default LaunchButton;
