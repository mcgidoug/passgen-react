import React, { useState, useCallback } from "react";
import Length from "./Length";
import Result from "./Result";
import Toggle from "./Toggle";

const Main = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSpecialCharacters, setIsSpecialCharacters] = useState(false);

  const handleLengthChange = (event) => {
    const length = parseInt(event.target.value);
    setPasswordLength(length);
  };

  const generatePassword = useCallback(() => {
    const lowerCase = isLowerCase ? "abcdefghijklmnopqrstuvwxyz" : "";
    const upperCase = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const numbers = isNumbers ? "0123456789" : "";
    const specialCharacters = isSpecialCharacters
      ? "!#$%&*@~^`()-_+[]{}|;:.<>?"
      : "";
    const characterList = lowerCase + upperCase + numbers + specialCharacters;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      password += characterList.charAt(
        Math.floor(Math.random() * characterList.length)
      );
    }
    console.log(password);

    setPassword(password);
  }, [
    passwordLength,
    isLowerCase,
    isUpperCase,
    isNumbers,
    isSpecialCharacters,
  ]);

  return (
    <div>
      <h1>PassGen</h1>
      <Length handleLengthChange={handleLengthChange} />
      <Toggle title="lowercase" setState={setIsLowerCase} />
      <Toggle title="upercase" setState={setIsUpperCase} />
      <Toggle title="numbers" setState={setIsNumbers} />
      <Toggle title="special characters" setState={setIsSpecialCharacters} />
      <div>---</div>
      <button onClick={generatePassword}>Generate</button>
      <Result />

      <div>{password}</div>
    </div>
  );
};

export default Main;
