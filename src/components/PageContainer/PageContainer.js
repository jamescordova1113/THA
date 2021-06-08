import React, { useState } from "react";
import LaunchButton from "../LaunchButton";
import InputsAndDisplay from "../InputsAndDisplay";
import { ContainerStyle, RocketContainer } from "../../styles";

const PageContainer = () => {
  const [velocity, setVelocity] = useState(1);
  const [travelDistance, setTravelDistance] = useState(0);

  const handleLaunchClicked = () => {
    const rocket = document.querySelector(".rocket");
    let id = null;
    let pos = 320;

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
    };

    id = setInterval(frame, velocity);
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
      <LaunchButton handleLaunchClicked={handleLaunchClicked} />
    </>
  );
};

export default PageContainer;
