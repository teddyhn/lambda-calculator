import React from "react";

const SpecialButton = (props) => {
  return (
    <button onClick={() => props.specialFunction(props.buttonValue)} className="specialButton">
      {props.buttonValue}
    </button>
  );
};

export default SpecialButton;
