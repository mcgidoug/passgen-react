import React from "react";

const Length = ({ handleLengthChange }) => {
  return (
    <div>
      <h3>Length</h3>
      <p>8-32</p>
      <input type="text" onChange={handleLengthChange} />
    </div>
  );
};

export default Length;
