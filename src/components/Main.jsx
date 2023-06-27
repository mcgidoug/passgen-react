import React from "react";
import LowerCase from "./LowerCase";
import UpperCase from "./UpperCase";
import Numbers from "./Numbers";
import SpecialCharacters from "./SpecialCharacters";
import Length from "./Length";
import Result from "./Result";

const Main = () => {
  return (
    <div>
      <h1>PassGen</h1>
      {/* component for length */}
      <Length />
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
