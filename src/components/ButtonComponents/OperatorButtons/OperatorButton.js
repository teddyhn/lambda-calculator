import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operatorButton">
      {props.buttonValue}
    </button>
  );
};

export default OperatorButton;