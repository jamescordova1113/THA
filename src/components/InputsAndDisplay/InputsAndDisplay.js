import React from "react";
import { InputsStyle, TextViewStyle, InputContainer } from "../../styles";

const InputsAndDisplay = ({ velocity, setVelocity, travelDistance }) => {
  const handleChange = (e) => {
    setVelocity(e.target.value);
  };

  return (
    <InputContainer value={velocity} onChange={handleChange}>
      Velocity Input:
      <InputsStyle defaultValue={100} />
      Travel Distance:
      <TextViewStyle>{travelDistance} KM</TextViewStyle>
    </InputContainer>
  );
};

export default InputsAndDisplay;
