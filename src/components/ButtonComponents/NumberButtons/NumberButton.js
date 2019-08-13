import React from "react";

const NumberButton = (props) => {
  console.log(props);

  return (
    <button className={`${props.buttonValue === "0" ? 'numberZeroButton' : 'numberButton'}`}>
      {props.buttonValue}
    </button>
  );
};

export default NumberButton;