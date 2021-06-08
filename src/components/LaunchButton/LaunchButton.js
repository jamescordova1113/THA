import React from "react";
import { LaunchButtonStyle } from "../../styles";

const LaunchButton = ({ handleLaunchClicked }) => {
  return <LaunchButtonStyle onClick={handleLaunchClicked}>Launch</LaunchButtonStyle>;
};

export default LaunchButton;
