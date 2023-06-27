import React, { useState } from "react";
import LowerCase from "./LowerCase";
import UpperCase from "./UpperCase";
import Numbers from "./Numbers";
import SpecialCharacters from "./SpecialCharacters";
import Length from "./Length";
import Result from "./Result";

const Main = () => {
  const [passwordLength, setPasswordLength] = useState(8);

  const handleLengthChange = (event) => {
    const length = parseInt(event.target.value);
    setPasswordLength(length);
  };

  const handleLowerCaseInput = () => {};

  return (
    <div>
      <h1>PassGen</h1>
      {/* component for length */}
      <Length handleLengthChange={handleLengthChange} />
      {/* component for lowercase */}
      <LowerCase />
      {/* component for uppercase */}
      <UpperCase />
      {/* component for numbers */}
      <Numbers />
      {/* component for special characters */}
      <SpecialCharacters />
      {/* component for final result */}
      <Result />
    </div>
  );
};

export default Main;
