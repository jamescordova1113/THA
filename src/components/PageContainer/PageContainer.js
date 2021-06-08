import React, { useState } from "react";
import LaunchButton from "../LaunchButton";
import InputsAndDisplay from "../InputsAndDisplay";
import { ContainerStyle, RocketContainer } from "../../styles";

const PageContainer = () => {
  const [velocity, setVelocity] = useState(100);
  const [travelDistance, setTravelDistance] = useState(0);
  const [handleBtnClick, setHandleBtnClick] = useState(false);

  const handleLaunchClicked = () => {
    const rocket = document.querySelector(".rocket");
    let id = null;
    let pos = 320;
    setHandleBtnClick(true);
    clearInterval(id);

    const frame = () => {
      const distance = ((320 - pos) / 3.2).toFixed(2);

      setTravelDistance(distance);

      if (pos === 0) {
        clearInterval(id);
      } else {
        pos--;
        rocket.style.marginTop = pos + "px";
      }

      if (Math.floor(distance) === 100) {
        setHandleBtnClick(false);
        alert("You reached out Space!!!");
      }
    };

    id = setInterval(frame, 1000 / velocity);
  };

  return (
    <>
      <ContainerStyle>
        <RocketContainer className="rocket"></RocketContainer>
      </ContainerStyle>
      <InputsAndDisplay
        velocity={velocity}
        setVelocity={setVelocity}
        travelDistance={travelDistance}
      />
      <LaunchButton handleBtnClick={handleBtnClick} handleLaunchClicked={handleLaunchClicked} />
    </>
  );
};

export default PageContainer;
