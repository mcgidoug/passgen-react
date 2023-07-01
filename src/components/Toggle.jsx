import React, { useState, useEffect } from "react";

const Toggle = ({ title, setState }) => {
  const [isActive, setIsActive] = useState();

  useEffect(() => {
    setState(isActive);
  }, [setState, isActive]);

  return (
    <div>
      <h3>{title}</h3>
      <button
        style={
          isActive ? { backgroundColor: "red" } : { backgroundColor: "blue" }
        }
        onClick={() => setIsActive(true)}
      >
        yes
      </button>
      <button onClick={() => setIsActive(false)}>no</button>
    </div>
  );
};

export default Toggle;
