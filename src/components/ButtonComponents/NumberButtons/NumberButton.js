import React from "react";

const NumberButton = (props) => {

  return (
    <button onClick={() => props.addNumber(props.buttonValue)} className={`${props.buttonValue === "0" ? 'numberZeroButton' : 'numberButton'}`}>
      {props.buttonValue}
    </button>
  );
};

export default NumberButton;