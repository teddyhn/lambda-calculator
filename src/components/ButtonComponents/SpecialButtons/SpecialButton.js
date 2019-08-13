import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="specialButton">
      {props.buttonValue}
    </button>
  );
};

export default SpecialButton;
